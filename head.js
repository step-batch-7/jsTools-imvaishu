const fs = require("fs");
const { head } = require("./src/headLib");

const main = function() {
  const args = process.argv.slice(2);

  const fileSystemLib = {
    doesExists: fs.existsSync,
    reader: fs.readFileSync,
    encoder: "utf-8"
  };

  const streamTypes = {
    errType: console.error,
    outputType: console.log
  };

  const result = head(args, fileSystemLib);
  streamTypes[result.streamType](result.content);
};

main();
