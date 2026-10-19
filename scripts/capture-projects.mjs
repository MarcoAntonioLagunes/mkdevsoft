// One-off/reusable utility: captures real screenshots of the live projects shown in
// the "Proyectos" homepage section and saves them optimized to /public/projects.
// Usage: node scripts/capture-projects.mjs
import { chromium } from 'playwright';
import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'public', 'projects');

const VIEWPORT = { width: 1440, height: 900 };
const WAIT_AFTER_LOAD_MS = 2000;
const TARGET_WIDTH = 1200;
const WEBP_QUALITY = 80;

const targets = [
  {
    id: 'rym-solar',
    url: 'https://rymsolarmx.netlify.app/',
    shots: [{ scrollY: 0 }, { scrollY: 900 }, { scrollY: 1900 }],
  },
  {
    id: 'asommmn',
    url: 'https://asommmn.org.mx/',
    shots: [{ scrollY: 0 }, { scrollY: 900 }, { scrollY: 1900 }],
  },
  {
    id: 'portafolio-marco-lagunes',
    url: 'https://portafoliomarcolagunes.netlify.app/es',
    shots: [{ scrollY: 0 }, { scrollY: 900 }, { scrollY: 1900 }],
  },
  {
    id: 'reclutamiento-asommmn',
    url: 'https://reclutamiento-asommmn.netlify.app/',
    shots: [{ scrollY: 0 }],
    note: 'Solo pantalla pública de login — sin credenciales, no se capturan páginas autenticadas.',
  },
];

async function captureProject(browser, target) {
  const results = [];
  const page = await browser.newPage({ viewport: VIEWPORT });
  try {
    await page.goto(target.url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(WAIT_AFTER_LOAD_MS);

    for (let i = 0; i < target.shots.length; i += 1) {
      const shot = target.shots[i];
      if (shot.scrollY > 0) {
        await page.evaluate((y) => window.scrollTo(0, y), shot.scrollY);
        await page.waitForTimeout(600);
      }
      const pngBuffer = await page.screenshot({ type: 'png' });
      const outPath = path.join(OUT_DIR, `${target.id}-${i + 1}.webp`);
      await sharp(pngBuffer).resize({ width: TARGET_WIDTH }).webp({ quality: WEBP_QUALITY }).toFile(outPath);
      const { size } = await stat(outPath);
      results.push({ file: outPath, ok: true });
      console.log(`  ✓ ${target.id}-${i + 1}.webp (${Math.round(size / 1024)} KB)`);
    }
  } catch (err) {
    results.push({ ok: false, error: err.message });
    console.error(`  ✗ ${target.id}: ${err.message}`);
  } finally {
    await page.close();
  }
  return results;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const report = [];

  for (const target of targets) {
    console.log(`\nCapturando ${target.id} (${target.url})${target.note ? ' — ' + target.note : ''}`);
    const results = await captureProject(browser, target);
    report.push({ id: target.id, results });
  }

  await browser.close();

  console.log('\n--- Resumen ---');
  for (const { id, results } of report) {
    const okCount = results.filter((r) => r.ok).length;
    console.log(`${id}: ${okCount}/${results.length} capturas OK`);
  }
}

main().catch((err) => {
  console.error('Fallo general:', err);
  process.exit(1);
});
