const fs = require("fs");

const pattern = /urlSlug: '(.+)'/g;
let routesTxt = "";

[
  { dataFilePath: "src/app/data/dev.data.ts", routePrefix: "dev" },
  { dataFilePath: "src/app/data/design.data.ts", routePrefix: "design" },
  { dataFilePath: "src/app/data/photo.data.ts", routePrefix: "photo" },
].forEach((dataType) => {
  //Hacky way to manually parse for the URL slugs to output them!
  const devFile = fs.readFileSync(dataType.dataFilePath, "utf-8");
  const devMatches = [...devFile.matchAll(pattern)].map((a) => a[1]);
  for (const urlSlug of devMatches) {
    routesTxt += `/${dataType.routePrefix}/${urlSlug}\n`;
  }
});

fs.writeFileSync("routes.txt", routesTxt);
