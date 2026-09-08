/**
 * Bakes the rendered page into dist/index.html so the HTML carries the content
 * instead of an empty <div id="root">. The browser hydrates it in place.
 *
 * Deliberately non-fatal: if this ever breaks, the build still produces a
 * working client-rendered site rather than failing the deploy.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = resolve(root, 'dist/index.html');
const MOUNT = '<div id="root"></div>';

try {
  const { render } = await import(resolve(root, 'dist-ssr/entry-server.js'));
  const html = await readFile(htmlPath, 'utf8');

  if (!html.includes(MOUNT)) {
    throw new Error(`could not find ${MOUNT} in dist/index.html`);
  }

  const body = render();

  // The client build and the SSR build hash assets from content, so the same
  // file lands on the same URL in both. If that ever stops holding, every image
  // would 404 in the prerendered HTML, so fail loudly rather than ship it.
  for (const url of body.match(/\/assets\/[\w.-]+/g) ?? []) {
    if (!html.includes(url) && !url.endsWith('.js') && !url.endsWith('.css')) {
      const stillThere = await readFile(resolve(root, 'dist' + url)).then(() => true, () => false);
      if (!stillThere) throw new Error(`prerendered markup references a missing asset: ${url}`);
    }
  }

  await writeFile(htmlPath, html.replace(MOUNT, `<div id="root">${body}</div>`));
  console.log(`prerender: baked ${(body.length / 1024).toFixed(1)} kB of markup into dist/index.html`);
} catch (err) {
  console.warn(`prerender: skipped (${err.message})`);
  console.warn('prerender: dist/ is still a working client-rendered site.');
}
