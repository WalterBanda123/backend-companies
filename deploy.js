const fs = require("node:fs");
const path = require("node:path");

try {
const envPath = `..${path.sep}frontend${path.sep}src${path.sep}environment.ts`;

const regex = /(\s+serverUrl).+'(.*)'/g;

  const environment = fs.readFileSync(envPath, "utf8");
  
const subst = `$1:'https://localhost:3000'`;

const result = environment.replace(regex, subst);


} catch (err) {
  console.error(err);
}
