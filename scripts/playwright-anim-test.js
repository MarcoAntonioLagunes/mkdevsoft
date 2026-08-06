const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
// Compare PNG buffers by delegating pixel comparison to the browser using a canvas.
async function compareBuffersInBrowser(page, bufA, bufB){
  const baseA = "data:image/png;base64," + bufA.toString('base64');
  const baseB = "data:image/png;base64," + bufB.toString('base64');
  const result = await page.evaluate(async (a,b) => {
    function loadImage(src){
      return new Promise((res, rej) => {
        const img = new Image();
        img.onload = () => res(img);
        img.onerror = rej;
        img.src = src;
      });
    }
    const imgA = await loadImage(a);
    const imgB = await loadImage(b);
    if(imgA.width !== imgB.width || imgA.height !== imgB.height){
      return { error: 'dimension-mismatch' };
    }
    const w = imgA.width, h = imgA.height;
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const ctx = c.getContext('2d');
    ctx.drawImage(imgA,0,0);
    const dataA = ctx.getImageData(0,0,w,h).data;
    ctx.clearRect(0,0,w,h);
    ctx.drawImage(imgB,0,0);
    const dataB = ctx.getImageData(0,0,w,h).data;
    let diff = 0;
    for(let i=0;i<dataA.length;i+=4){
      if(dataA[i] !== dataB[i] || dataA[i+1] !== dataB[i+1] || dataA[i+2] !== dataB[i+2] || dataA[i+3] !== dataB[i+3]) diff++;
    }
    const totalPixels = w*h;
    return {numDiff: diff, total: totalPixels, percent: (diff/totalPixels)*100};
  }, baseA, baseB);
  return result;
}

(async ()=>{
  const url = process.env.TEST_URL || 'http://localhost:3000';
  const browser = await chromium.launch({headless: true});
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('.templates-grid');

  const categories = ['E-commerce','Portafolio','Corporativo'];
  const results = [];

  for(const cat of categories){
    const card = page.locator('article.template-card').filter({ hasText: cat }).first();
    if(await card.count() === 0){
      console.log(`No card found for category ${cat}`);
      results.push({category: cat, error: 'not found'});
      continue;
    }
    // choose selector within card
    let target;
    if(cat === 'E-commerce') target = card.locator('.ecom-mockup-product').first();
    else if(cat === 'Portafolio') target = card.locator('.folio-mockup-tile').first();
    else target = card.locator('.hero-mockup-photo').first();

    await target.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200); // let layout settle
    const shot1 = await target.screenshot();
    await page.waitForTimeout(3000);
    const shot2 = await target.screenshot();

    const cmp = await compareBuffersInBrowser(page, shot1, shot2);
    const outPathA = path.resolve(__dirname, `anim-${cat.replace(/\s+/g,'_')}-t0.png`);
    const outPathB = path.resolve(__dirname, `anim-${cat.replace(/\s+/g,'_')}-t3.png`);
    fs.writeFileSync(outPathA, shot1);
    fs.writeFileSync(outPathB, shot2);
    results.push({category: cat, diff: cmp, screenshots: [outPathA, outPathB]});
  }

  console.log(JSON.stringify({results}, null, 2));
  await browser.close();
})();
