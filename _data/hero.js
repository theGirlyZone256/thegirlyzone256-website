const fs = require("fs");
const path = require("path");

const dir = path.resolve(process.cwd(), "assets/images/hero-section");
const allowed = /\.(webp|jpe?g|png|avif)$/i;

module.exports = fs.existsSync(dir)
  ? fs.readdirSync(dir).filter(f => allowed.test(f)).sort()
  : [];