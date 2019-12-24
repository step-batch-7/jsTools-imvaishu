const fs = require("fs");
const { head } = require("./src/headLib");

const main = function() {
  const args = process.argv.slice(2);

  const fileSystemLib = {
    doesExists: fs.existsSync,
    reader: fs.readFileSync,
    encoder: "utf-8"
  };

  const result = head(args, fileSystemLib);

  result instanceof Error && console.error(result);
  !(result instanceof Error) && console.log(result);
};

main();
