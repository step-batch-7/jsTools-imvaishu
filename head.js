const fs = require("fs");
const { joinLines, extractUpper10Lines } = require("./src/headLib");

const main = function() {
  const args = process.argv.slice(2);

  const fileSyncs = {
    doesExists: fs.existsSync,
    reader: fs.readFileSync,
    encoder: "utf-8"
  };

  const content = extractUpper10Lines(args, fileSyncs);
  const head = joinLines(content);

  console.log(head);
};

main();
