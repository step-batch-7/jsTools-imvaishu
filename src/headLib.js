const parsedOptions = function (args) {
  const lastIndex = 1;
  const path = args[args.length - lastIndex];
  const options = { path, start: 0, count: 10 };
  return options;
};

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
  const options = parsedOptions(args);
  fs.readFile(options.path, 'utf-8', onHeadCompletion.bind({ show, options }));
};

module.exports = { head };
