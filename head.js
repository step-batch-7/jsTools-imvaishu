const fs = require("fs");
const { getHeadOfFile, filterRequiredHead } = require("./src/lib");

const main = function() {
  const args = process.argv.slice(2);

  const requiredDetails = {
    doesExists: fs.existsSync,
    reader: fs.readFileSync,
    encoder: "utf-8"
  };

  const content = filterRequiredHead(args, requiredDetails);
  const head = getHeadOfFile(content);

  console.log(head);
};

main();
