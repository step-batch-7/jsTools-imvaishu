const fs = require("fs");
const { head, showResult } = require("./src/headLib");

const main = function() {
  const args = process.argv.slice(2);

  const fileSystemLib = {
    doesExists: fs.existsSync,
    reader: fs.readFileSync,
    encoder: "utf-8"
  };

  const result = head(args, fileSystemLib);

  const display = showResult(result);
  display(result.content);
};

main();
