const fs = require('fs');
const { head } = require('./src/headLib');

const main = function () {
  const [, , ...args] = process.argv;
  const show = {
    writeToOutputStream: data => process.stdout.write(`${data}\n`),
    writeToErrorStream: error => process.stderr.write(`${error}\n`)
  };
  head(args, fs, show);
};

main();
