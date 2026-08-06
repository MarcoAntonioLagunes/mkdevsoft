const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '../src/data/templates.ts');
const txt = fs.readFileSync(file, 'utf8');

function pexelsPhotoUrl(id){
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;
}

// parse SECTOR_PHOTOS mapping
const sectorBlock = txt.match(/const SECTOR_PHOTOS = \{([\s\S]*?)\} as const;/);
const sectorMap = {};
if(sectorBlock){
  const body = sectorBlock[1];
  const re = /([a-zA-Z0-9_]+):\s*pexelsPhoto\((\d+)\),?/g;
  let m;
  while((m=re.exec(body))!==null){
    sectorMap[m[1]] = pexelsPhotoUrl(m[2]);
  }
}

// find hero imageUrls
const heroRePexels = /imageUrl:\s*pexelsPhoto\((\d+)\)/g;
const heroReSector = /imageUrl:\s*SECTOR_PHOTOS\.([a-zA-Z0-9_]+)/g;
let m;
const heroUrls = [];
while((m=heroRePexels.exec(txt))!==null){
  heroUrls.push(pexelsPhotoUrl(m[1]));
}
while((m=heroReSector.exec(txt))!==null){
  const key = m[1];
  if(sectorMap[key]) heroUrls.push(sectorMap[key]);
}

// find all product/project imageUrls and detect missing ones
const productsRe = /products:\s*\[([\s\S]*?)\],/g;
const projectsRe = /projects:\s*\[([\s\S]*?)\],/g;

function scanArrayBlock(arrTxt){
  // Match individual object literals inside the array block
  const objRe = /\{([\s\S]*?)\}/g;
  const results = [];
  let m;
  while((m = objRe.exec(arrTxt)) !== null){
    const it = m[0];
    const hasImage = /imageUrl\s*:/g.test(it);
    const imgMatch = it.match(/imageUrl:\s*pexelsPhoto\((\d+)\)/);
    const imgUrl = imgMatch ? pexelsPhotoUrl(imgMatch[1]) : (it.match(/imageUrl:\s*['\"](https?:[^'\"]+)['\"]/)? it.match(/imageUrl:\s*['\"](https?:[^'\"]+)['\"]/)[1] : null);
    results.push({raw: it.trim(), hasImage, imgUrl});
  }
  return results;
}

let productResults = [];
while((m=productsRe.exec(txt))!==null){
  productResults = productResults.concat(scanArrayBlock(m[1]));
}
let projectResults = [];
while((m=projectsRe.exec(txt))!==null){
  projectResults = projectResults.concat(scanArrayBlock(m[1]));
}

// collect all image URLs (hero + products + projects + explicit pexelsPhoto used elsewhere)
const allPexelsIds = [];
const pexelsIdRe = /pexelsPhoto\((\d+)\)/g;
while((m=pexelsIdRe.exec(txt))!==null){
  allPexelsIds.push(m[1]);
}
const allUrls = allPexelsIds.map(id=>pexelsPhotoUrl(id));
// include explicit sector mapping values too
Object.values(sectorMap).forEach(v=> allUrls.push(v));

// duplicates detection
const dupMap = {};
allUrls.forEach(u=>{ dupMap[u] = (dupMap[u]||0)+1; });
const duplicates = Object.keys(dupMap).filter(k=>dupMap[k]>1);

// report
console.log('--- Verification Report ---');
console.log('Total hero image URLs found:', heroUrls.length);
console.log('Total images (heroes+products+projects):', allUrls.length);
console.log('Duplicate image URLs (appear more than once across templates):', duplicates.length);
if(duplicates.length>0){
  duplicates.forEach(d=> console.log('- ', d, 'count=', dupMap[d]));
}

// products/projects missing images
const productsMissing = productResults.filter(r=>!r.hasImage).length;
const projectsMissing = projectResults.filter(r=>!r.hasImage).length;
console.log('Products without imageUrl:', productsMissing);
console.log('Projects without imageUrl:', projectsMissing);

// list any product/project image urls found
const productImgs = productResults.map(r=>r.imgUrl).filter(Boolean);
const projectImgs = projectResults.map(r=>r.imgUrl).filter(Boolean);
console.log('Sample product images found:', productImgs.slice(0,10));
console.log('Sample project images found:', projectImgs.slice(0,10));

// output summary JSON for further inspection
const out = {
  totalImages: allUrls.length,
  duplicates: duplicates.map(d=>({url:d,count:dupMap[d]})),
  productsWithoutImage: productsMissing,
  projectsWithoutImage: projectsMissing,
  productImages: [...new Set(productImgs)],
  projectImages: [...new Set(projectImgs)],
};
fs.writeFileSync(path.resolve(__dirname,'verify-templates-report.json'), JSON.stringify(out, null, 2));
console.log('Wrote verify-templates-report.json');

if(duplicates.length===0 && productsMissing===0 && projectsMissing===0){
  console.log('VERIFICATION PASSED: No duplicate hero images and no missing product/project images detected.');
} else {
  console.log('VERIFICATION FAILED: see report for details.');
}
