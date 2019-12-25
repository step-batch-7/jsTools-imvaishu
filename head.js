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

  result.Error && console.error(result.Error);
  result.content && console.log(result.content);
};

main();
