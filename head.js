const fs = require("fs");
const { joinLines, head } = require("./src/headLib");

const main = function() {
  const args = process.argv.slice(2);

  const fileSystemFunctions = {
    doesExists: fs.existsSync,
    reader: fs.readFileSync,
    encoder: "utf-8"
  };

  const content = head(args, fileSystemFunctions);
  const lines = joinLines(content);

  console.log(lines);
};

main();
