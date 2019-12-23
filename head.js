const fs = require("fs");
const { joinLines, performHead } = require("./src/headLib");

const main = function() {
  const args = process.argv.slice(2);

  const fileSystemFunctions = {
    doesExists: fs.existsSync,
    reader: fs.readFileSync,
    encoder: "utf-8"
  };

  const content = performHead(args, fileSystemFunctions);
  const head = joinLines(content);

  console.log(head);
};

main();
