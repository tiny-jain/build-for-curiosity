import { copyFile, mkdir, readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import { strict as assert } from 'node:assert';
import { execFileSync } from 'node:child_process';

// The repository-root skill remains canonical for existing installations.
// Generate the plugin copy from an explicit allowlist; never bundle the workspace.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const plugin = join(root, 'plugins/build-for-curiosity');
const files = ['SKILL.md', 'references/interaction-patterns.md', 'agents/openai.yaml'];
for (const file of files) {
  const target = join(plugin, 'skills/build-for-curiosity', file);
  await mkdir(dirname(target), { recursive: true });
  await copyFile(join(root, file), target);
  assert.deepEqual(await readFile(target), await readFile(join(root, file)));
}

const manifest = JSON.parse(await readFile(join(plugin, 'plugin.json'), 'utf8'));
assert.equal(manifest.name, 'build-for-curiosity');
assert.match(manifest.version, /^\d+\.\d+\.\d+$/);
const ui = manifest.extensions['com.openai'].interface;
for (const [key, limit] of Object.entries({displayName:30, shortDescription:30, longDescription:4000, developerName:80})) {
  assert.equal(typeof ui[key], 'string');
  assert.ok(ui[key].length > 0 && ui[key].length <= limit, `${key} exceeds listing limits`);
}
assert.ok(ui.defaultPrompt.length <= 3);
for (const prompt of ui.defaultPrompt) assert.ok(prompt.length <= 128);
assert.equal(manifest.mcpServers, undefined);
assert.equal(manifest.extensions['com.openai'].hooks, undefined);
for (const key of ['logo', 'composerIcon']) {
  assert.equal(ui[key], './assets/icon.svg');
  await readFile(join(plugin, ui[key]));
}
const catalog = JSON.parse(await readFile(join(root, '.agents/plugins/marketplace.json'), 'utf8'));
assert.equal(resolve(root, catalog.plugins[0].source.path), plugin);
assert.equal(catalog.plugins[0].name, manifest.name);

// Reject stale or unintended files rather than silently shipping them.
async function walk(dir, prefix = '') {
  const paths = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const relative = prefix + entry.name;
    assert.ok(!entry.isSymbolicLink(), `Unexpected symlink: ${relative}`);
    if (entry.isDirectory()) paths.push(...await walk(join(dir, entry.name), relative + '/'));
    else paths.push(relative);
  }
  return paths;
}
const allowlist = ['plugin.json', 'assets/icon.svg', ...files.map(f => `skills/build-for-curiosity/${f}`)].sort();
assert.deepEqual((await walk(plugin)).sort(), allowlist);
console.log('Validated plugin metadata, marketplace paths, and three byte-identical skill files.');

if (process.argv[2]) {
  const destination = resolve(process.argv[2]);
  assert.ok(!destination.startsWith(plugin + '/'), 'ZIP must be outside the plugin folder');
  await mkdir(dirname(destination), { recursive: true });
  // -MM fails for missing files; the explicit list prevents accidental secret uploads.
  execFileSync('zip', ['-X', '-MM', destination, ...allowlist], { cwd: plugin, stdio: 'inherit' });
  console.log(`Plugin ZIP: ${destination}`);
}
