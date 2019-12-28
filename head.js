const fs = require('fs');
const { head } = require('./src/headLib');

const main = function () {
  const [, , ...args] = process.argv;
  const show = {
    writeToOutputStream: data => process.stdout.write(data),
    writeToErrorStream: data => process.stderr.write(data)
  };
  head(args, fs, show);
};

main();
