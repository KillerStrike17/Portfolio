#!/usr/bin/env node
// scripts/sync-github-repos.mjs
//
// Fetches all public repos for GITHUB_USERNAME from the GitHub API.
// Any repos not already present in projects.config.ts are appended
// with  show: false  so you can review and flip them on manually.
//
// Run:  node scripts/sync-github-repos.mjs
// Env:  GITHUB_USERNAME  (required)
//       GITHUB_TOKEN     (optional – avoids rate-limit on CI)

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = join(__dirname, '..', 'src', 'data', 'projects.config.ts');

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
if (!GITHUB_USERNAME) {
  console.error('❌  GITHUB_USERNAME environment variable is required.');
  process.exit(1);
}

// ── Helpers ────────────────────────────────────────────────────────────────

/** Fetch every public, non-forked repo for the given user (all pages). */
async function fetchPublicRepos(username) {
  const headers = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'portfolio-sync-script',
  };
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const repos = [];
  let page = 1;

  while (true) {
    const url =
      `https://api.github.com/users/${username}/repos` +
      `?type=public&per_page=100&page=${page}&sort=pushed`;

    const res = await fetch(url, { headers });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`GitHub API error ${res.status}: ${body}`);
    }

    const batch = await res.json();
    if (batch.length === 0) break;

    // Skip forks — only show original work
    repos.push(...batch.filter((r) => !r.fork));
    page += 1;
  }

  return repos;
}

/** Pick a representative Unsplash image based on detected language. */
function imageForLanguage(lang) {
  const map = {
    Python: 'photo-1526374965328-7f61d4dc18c5',
    JavaScript: 'photo-1555066931-4365d14bab8c',
    TypeScript: 'photo-1499951360447-b19be8fe80f5',
    Java: 'photo-1551288049-bebda4e38f71',
    'C++': 'photo-1518770660439-4636190af475',
    Go: 'photo-1583339793403-3d9b001b6008',
    Rust: 'photo-1561883088-039e53143d73',
    Jupyter: 'photo-1488590528505-98d2b5aba04b',
  };
  const slug = map[lang] ?? 'photo-1461749280684-dccba630e2f6';
  return `https://images.unsplash.com/${slug}?w=500&h=300&fit=crop&auto=format`;
}

/** Derive a broad category from repo topics / language. */
function categoryFor(repo) {
  const topics = repo.topics ?? [];
  if (topics.some((t) => ['machine-learning', 'ai', 'nlp', 'deep-learning', 'llm'].includes(t)))
    return 'AI/ML';
  if (topics.some((t) => ['mlops', 'kubernetes', 'docker', 'devops'].includes(t)))
    return 'MLOps';
  if (topics.some((t) => ['computer-vision', 'opencv', 'image-processing'].includes(t)))
    return 'Computer Vision';
  if (topics.some((t) => ['analytics', 'dashboard', 'data-viz'].includes(t)))
    return 'Analytics';
  if (topics.some((t) => ['web', 'react', 'nextjs', 'frontend'].includes(t)))
    return 'Web';
  return 'Other';
}

/** Build the TypeScript source for a single new project entry. */
function buildEntry(repo) {
  const techs = [
    repo.language,
    ...(repo.topics ?? []).map((t) =>
      t
        .split('-')
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join('')
    ),
  ]
    .filter(Boolean)
    .slice(0, 5);

  const description =
    (repo.description || '').trim() ||
    `${repo.name} — a public GitHub project.`;

  return `  {
    title: ${JSON.stringify(repo.name)},
    description: ${JSON.stringify(description)},
    image: ${JSON.stringify(imageForLanguage(repo.language))},
    technologies: ${JSON.stringify(techs.length ? techs : ['GitHub'])},
    github: ${JSON.stringify(repo.html_url)},${repo.homepage ? `\n    demo: ${JSON.stringify(repo.homepage)},` : ''}
    category: ${JSON.stringify(categoryFor(repo))},
    show: false,  // ← flip to true to display on the Projects page
  },`;
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main() {
  console.log(`🔍  Fetching public repos for @${GITHUB_USERNAME}…`);
  const repos = await fetchPublicRepos(GITHUB_USERNAME);
  console.log(`    Found ${repos.length} public non-forked repo(s).`);

  const config = readFileSync(CONFIG_PATH, 'utf-8');

  // Collect every github URL already in the file
  const existingUrls = new Set(
    [...config.matchAll(/github:\s*["']([^"']+)["']/g)].map((m) => m[1])
  );

  const newRepos = repos.filter((r) => !existingUrls.has(r.html_url));

  if (newRepos.length === 0) {
    console.log('✅  Config is already up to date — no new repos found.');
    return;
  }

  console.log(`✨  Adding ${newRepos.length} new repo(s):`);
  newRepos.forEach((r) => console.log(`    • ${r.name}`));

  // Insert new entries just before the closing sentinel comment
  const SENTINEL = '  // ── Add more projects below.';
  const newEntries = newRepos.map(buildEntry).join('\n');
  const updated = config.replace(
    SENTINEL,
    `${newEntries}\n${SENTINEL}`
  );

  if (!updated.includes(SENTINEL)) {
    // Fallback: append before the closing ];
    console.warn('⚠️  Sentinel comment not found — appending before ];');
    const fallback = config.replace(/\];\s*$/, `${newEntries}\n];\n`);
    writeFileSync(CONFIG_PATH, fallback, 'utf-8');
  } else {
    writeFileSync(CONFIG_PATH, updated, 'utf-8');
  }

  console.log('💾  projects.config.ts updated successfully.');
}

main().catch((err) => {
  console.error('❌', err.message);
  process.exit(1);
});
