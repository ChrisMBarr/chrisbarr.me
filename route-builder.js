const fs = require('fs');

//Hacky way to manually parse for the URL slugs to output them!
const designFile = fs.readFileSync('src/app/data/design.data.ts', 'utf-8');

const matches = [...designFile.matchAll(/urlSlug: '(.+)'/g)].map(a => a[1]);

let routesTxt = '';
for (const urlSlug of matches) {
  routesTxt += `/design/${urlSlug}\n`;
}

fs.writeFileSync('routes.txt', routesTxt);
