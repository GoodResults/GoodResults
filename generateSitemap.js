const landingDataGenerator = require("./landingDataGenerator");

const fs = require("fs");

const sitemapname =
  "sitemap" + Math.round(Math.random() * 1000000000000000000000) + ".txt";

// Max Google limits: 50000 URLs per sitemap, max 50 Mb sitemap, 500 sitemap indexes submitted max per site
const LANDINGS_AMOUNT_TO_GENERATE = 100;
let data = "";
for (let i = 0; i < LANDINGS_AMOUNT_TO_GENERATE; ++i) {
  data +=
    "https://goodresults.github.io/GoodResults/?landingData=" +
    landingDataGenerator.generateLandingDataQRTipped() +
    "\n";
}
fs.writeFile(sitemapname, data, () => {
  console.log("Sitemap successfully created: " + sitemapname);
});
