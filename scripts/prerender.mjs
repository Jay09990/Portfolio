import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';

const server = await createServer({
  configFile: 'vite.config.js',
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const [{ default: App }, { siteContent }] = await Promise.all([
    server.ssrLoadModule('/src/App.jsx'),
    server.ssrLoadModule('/src/content.ts'),
  ]);
  const markup = renderToString(createElement(App));
  const indexPath = new URL('../dist/index.html', import.meta.url);
  let html = await readFile(indexPath, 'utf8');
  const { identity } = siteContent;

  const escapeHtml = (value) =>
    value
      .replaceAll('&', '&amp;')
      .replaceAll('"', '&quot;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;');

  html = html
    .replace('<title></title>', `<title>${escapeHtml(identity.title)}</title>`)
    .replace(
      '<meta name="description" content="" />',
      `<meta name="description" content="${escapeHtml(identity.description)}" />`,
    )
    .replace('<meta property="og:title" content="" />', `<meta property="og:title" content="${escapeHtml(identity.title)}" />`)
    .replace('<meta property="og:description" content="" />', `<meta property="og:description" content="${escapeHtml(identity.description)}" />`)
    .replace('<meta property="og:url" content="" />', `<meta property="og:url" content="${escapeHtml(identity.url)}" />`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: identity.name,
    jobTitle: identity.jobTitle,
    url: identity.url,
    sameAs: [identity.github],
  };
  const structuredData = JSON.stringify(person).replaceAll('<', '\\u003c');
  html = html.replace(
    '</head>',
    `<script type="application/ld+json">${structuredData}</script></head>`,
  );
  await writeFile(indexPath, html);

  const origin = new URL(identity.url).origin;
  await writeFile(
    new URL('../dist/robots.txt', import.meta.url),
    `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
  );
  await writeFile(
    new URL('../dist/sitemap.xml', import.meta.url),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${identity.url}</loc></url></urlset>\n`,
  );
} finally {
  await server.close();
}
