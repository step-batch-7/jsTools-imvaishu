const parseUsrOptions = function(args) {
  return { fileName: args[0], range: { start: 0, end: 10 } };
};

const head = function(args, fileSystemLib) {
  const options = parseUsrOptions(args);

  if (!fileSystemLib.doesExists(options.fileName)) {
    return new Error(`head: ${options.fileName}: No such file or directory`)
      .message;
  }

  const content = fileSystemLib.reader(options.fileName, fileSystemLib.encoder);
  const lines = content.split("\n");

  if (lines.length < options.range.end) {
    options.range.end = lines.length;
  }

  const upperLines = lines.slice(options.range.start, options.range.end);
  return upperLines.join("\n");
};

module.exports = { head, parseUsrOptions };
