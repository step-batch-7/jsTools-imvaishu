const parsedOptions = require('./parseOptions');

const extractUpperLines = function (content, options) {
  const lines = content.split('\n');
  const upperLines = lines.slice(options.start, options.count).join('\n');

  return upperLines;
};

const onHeadCompletion = function (err, data) {
  if (err) {
    this.show.writeToErrorStream(
      `head: ${this.options.path}: No such file or directory`
    );
    return;
  }
  const content = extractUpperLines(data, this.options);
  this.show.writeToOutputStream(content);
};

const head = function (args, fs, show) {
  const {options, areOptionsValid} = parsedOptions(args);
  if(!areOptionsValid){
    show.writeToErrorStream(`head: illegal line count -- ${options.path}`);
    return;
  }
  fs.readFile(options.path, 'utf-8', onHeadCompletion.bind({ show, options }));
};

module.exports = { head };
