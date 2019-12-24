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

  result.isError && console.error(result.content);
  !result.isError && console.log(result.content);
};

main();
