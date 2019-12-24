const fs = require("fs");
const { joinLines, head } = require("./src/headLib");

const main = function() {
  const args = process.argv.slice(2);

  const fileSystemLib = {
    doesExists: fs.existsSync,
    reader: fs.readFileSync,
    encoder: "utf-8"
  };

  const extractedTopLines = head(args, fileSystemLib);
  const topLines = joinLines(extractedTopLines);

  console.log(topLines);
};

main();
