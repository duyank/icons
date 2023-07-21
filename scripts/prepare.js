import fs from 'fs';

const mainPkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url)));
const pkg = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url)));
pkg.version = mainPkg.version;

fs.writeFileSync(
    new URL('../build/package.json', import.meta.url),
    `${JSON.stringify(pkg, null, 2)}\n`,
);
