const fs = require("fs");
const { head } = require("./src/headLib");

const main = function() {
  const args = process.argv.slice(2);

  const result = head(args, fs);
  process.stdout.write(result.content);
  process.stderr.write(result.error);
};

main();
