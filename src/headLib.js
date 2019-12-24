const joinLines = function(contentOfFile) {
  return contentOfFile.join("\n");
};

const parseUsrOptions = function(args) {
  return { fileName: args[0], range: { start: 0, end: 10 } };
};

const head = function(args, fileSystemLib) {
  const parsedOptions = parseUsrOptions(args);

  if (!fileSystemLib.doesExists(parsedOptions.fileName)) {
    return [`head: ${parsedOptions.fileName}: No such file or directory`];
  }

  const content = fileSystemLib.reader(
    parsedOptions.fileName,
    fileSystemLib.encoder
  );

  const storedData = content.split("\n");

  if (storedData.length < parsedOptions.range.end) {
    parsedOptions.range.end = storedData.length;
  }

  return storedData.slice(parsedOptions.range.start, parsedOptions.range.end);
};

module.exports = {
  head,
  parseUsrOptions,
  joinLines
};
