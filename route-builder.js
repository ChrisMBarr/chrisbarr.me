const fs = require("fs");

const pattern = /urlSlug: '(.+)'/g;
let routesTxt = "";

//Hacky way to manually parse for the URL slugs to output them!
const devFile = fs.readFileSync("src/app/data/dev.data.ts", "utf-8");
const devMatches = [...devFile.matchAll(pattern)].map((a) => a[1]);
for (const urlSlug of devMatches) {
  routesTxt += `/dev/${urlSlug}\n`;
}

const designFile = fs.readFileSync("src/app/data/design.data.ts", "utf-8");
const designMatches = [...designFile.matchAll(pattern)].map((a) => a[1]);
for (const urlSlug of designMatches) {
  routesTxt += `/design/${urlSlug}\n`;
}

fs.writeFileSync("routes.txt", routesTxt);
