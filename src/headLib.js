const showResult = function(result) {
  if (result.isErr) return console.error;
  return console.log;
};

const getStreamType = function(content, isErr) {
  return { content, isErr };
};

const parseUsrOptions = function(args) {
  return { fileName: args[0], start: 0, end: 10 };
};

const head = function(args, fileSystemLib) {
  const options = parseUsrOptions(args);

  if (!fileSystemLib.doesExists(options.fileName)) {
    const errMessage = `head: ${options.fileName}: No such file or directory`;
    return getStreamType(new Error(errMessage).message, true);
  }
  const content = fileSystemLib.reader(options.fileName, fileSystemLib.encoder);
  const lines = content.split("\n");

  const upperLines = lines.slice(options.start, options.end).join("\n");

  return getStreamType(upperLines, false);
};

module.exports = { head, parseUsrOptions, showResult };
