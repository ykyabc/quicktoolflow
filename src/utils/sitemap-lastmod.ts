import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pagesDir = path.join(root, 'src/pages');
const postsDir = path.join(root, 'src/data/post');

type LastmodMap = Map<string, Date>;

let cachedLastmodMap: LastmodMap | undefined;

function isValidDate(date: Date): boolean {
  return !Number.isNaN(date.valueOf());
}

function normalizeRoute(route: string): string {
  if (!route.startsWith('/')) {
    route = `/${route}`;
  }

  return route.endsWith('/') ? route : `${route}/`;
}

function toDateOnly(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function cleanSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function readFrontmatter(source: string): string {
  return source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] || '';
}

function readFrontmatterValue(frontmatter: string, key: string): string | undefined {
  const line = frontmatter.split(/\r?\n/).find((item) => item.startsWith(`${key}:`));
  return line
    ?.slice(key.length + 1)
    .trim()
    .replace(/^['"]|['"]$/g, '');
}

function readFrontmatterDate(frontmatter: string, key: string): Date | undefined {
  const raw = readFrontmatterValue(frontmatter, key);
  if (!raw) return undefined;

  const date = new Date(raw);
  return isValidDate(date) ? date : undefined;
}

function collectFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(dir, entry.name);
    return entry.isDirectory() ? collectFiles(filePath) : [filePath];
  });
}

function pageFileToRoute(filePath: string): string | undefined {
  const relativePath = path.relative(pagesDir, filePath).replace(/\\/g, '/');

  if (
    relativePath.includes('[') ||
    relativePath.endsWith('.xml.ts') ||
    relativePath.endsWith('_header.txt') ||
    relativePath === '404.astro'
  ) {
    return undefined;
  }

  const route = relativePath
    .replace(/\.(astro|md|mdx|ts)$/, '')
    .replace(/\/index$/, '')
    .replace(/^index$/, '');

  return normalizeRoute(route);
}

function setNewest(map: LastmodMap, route: string, date: Date): void {
  const normalizedRoute = normalizeRoute(route);
  const current = map.get(normalizedRoute);

  if (!current || date > current) {
    map.set(normalizedRoute, date);
  }
}

function buildLastmodMap(): LastmodMap {
  const map: LastmodMap = new Map();

  for (const filePath of collectFiles(pagesDir)) {
    const route = pageFileToRoute(filePath);
    if (!route) continue;

    const modifiedAt = fs.statSync(filePath).mtime;
    if (isValidDate(modifiedAt)) {
      map.set(route, modifiedAt);
    }
  }

  const postDates: Date[] = [];

  for (const fileName of fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : []) {
    if (!/\.mdx?$/.test(fileName)) continue;

    const filePath = path.join(postsDir, fileName);
    const source = fs.readFileSync(filePath, 'utf8');
    const frontmatter = readFrontmatter(source);
    const publishDate = readFrontmatterDate(frontmatter, 'publishDate');
    const updateDate = readFrontmatterDate(frontmatter, 'updateDate');
    const fileDate = fs.statSync(filePath).mtime;
    const lastmod = updateDate || publishDate || fileDate;
    const slug = fileName.replace(/\.mdx?$/, '');
    const category = readFrontmatterValue(frontmatter, 'category');

    if (isValidDate(lastmod)) {
      postDates.push(lastmod);
      setNewest(map, `/blog/${slug}/`, lastmod);

      if (category) {
        setNewest(map, `/blog/category/${cleanSlug(category)}/`, lastmod);
      }
    }
  }

  const newestPostDate = postDates.sort((a, b) => b.valueOf() - a.valueOf())[0];
  if (newestPostDate) {
    setNewest(map, '/blog/', newestPostDate);
    setNewest(map, '/blog/category/', newestPostDate);
  }

  return map;
}

function getLastmodMap(): LastmodMap {
  cachedLastmodMap ??= buildLastmodMap();
  return cachedLastmodMap;
}

export function getSitemapLastmod(pathnameOrUrl: string): string | undefined {
  const pathname = pathnameOrUrl.startsWith('http') ? new URL(pathnameOrUrl).pathname : normalizeRoute(pathnameOrUrl);
  const date = getLastmodMap().get(normalizeRoute(pathname));

  return date ? toDateOnly(date) : undefined;
}

export function isLowValuePaginatedUrl(pathnameOrUrl: string): boolean {
  const pathname = pathnameOrUrl.startsWith('http') ? new URL(pathnameOrUrl).pathname : pathnameOrUrl;
  return /^\/blog\/category\/[^/]+\/\d+\/?$/.test(pathname);
}
