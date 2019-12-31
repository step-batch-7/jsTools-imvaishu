const parsedOptions = require('./parseOptions');

const extractUpperLines = function (content, numOfLines) {
  const from = 0;
  const lines = content.split('\n');
  const upperLines = lines.slice(from, numOfLines).join('\n');

  return upperLines;
};

const head = function (args, fs, show) {
  const { writeToOutputStream, writeToErrorStream } = show;
  const { options, areOptionsValid } = parsedOptions(args);
  const { path, numOfLines } = options;

  if(!areOptionsValid){
    return writeToErrorStream(`head: illegal line count -- ${path}`);
  }
  const onHeadCompletion = function (error, data) {
    if (error) {
      writeToErrorStream(
        `head: ${path}: No such file or directory`
      );
      return;
    }
    const content = extractUpperLines(data, numOfLines );
    writeToOutputStream(content);
  };
  fs.readFile(path, 'utf-8', onHeadCompletion);
};

module.exports = { head };
