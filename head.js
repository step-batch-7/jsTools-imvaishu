const parseUsrOptions = require("./src/parseUsrOptions");

const main = function() {
  const args = process.argv.slice(2);
  const parsedUsrOptions = parseUsrOptions(args);
  console.log(parsedUsrOptions);
};

main();
