const parseUsrOptions = function(args) {
  return { fileName: args[0], start: 0, end: 10 };
};

const loadContent = function(fileSystemLib, options) {
  if (!fileSystemLib.doesExists(options.fileName)) {
    return { Error: `head: ${options.fileName}: No such file or directory` };
  }
  return fileSystemLib.reader(options.fileName, fileSystemLib.encoder);
};

const head = function(args, fileSystemLib) {
  const options = parseUsrOptions(args);
  const content = loadContent(fileSystemLib, options);

  if (content.Error) return content;

  const lines = content.split("\n");
  const upperLines = lines.slice(options.start, options.end).join("\n");

  return { content: upperLines };
};

module.exports = { head, parseUsrOptions };
