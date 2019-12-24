const getStreamType = function(content, isErr) {
  return { content, isErr };
};

const parseUsrOptions = function(args) {
  return { fileName: args[0], range: { start: 0, end: 10 } };
};

const head = function(args, fileSystemLib) {
  const options = parseUsrOptions(args);

  if (!fileSystemLib.doesExists(options.fileName)) {
    const errMessage = `head: ${options.fileName}: No such file or directory`;
    return getStreamType(new Error(errMessage).message, true);
  }

  const content = fileSystemLib.reader(options.fileName, fileSystemLib.encoder);
  const lines = content.split("\n");

  if (lines.length < options.range.end) {
    options.range.end = lines.length;
  }

  const upperLines = lines.slice(options.range.start, options.range.end);

  return getStreamType(upperLines.join("\n"), false);
};

module.exports = { head, parseUsrOptions };
