const getStreamType = function(content, isError) {
  return {
    content,
    isError
  };
};

const parseUsrOptions = function(args) {
  return { fileName: args[0], range: { start: 0, end: 10 } };
};

const head = function(args, fileSystemLib) {
  const parsedOptions = parseUsrOptions(args);

  if (!fileSystemLib.doesExists(parsedOptions.fileName)) {
    const errMessage = `head: ${parsedOptions.fileName}: No such file or directory`;
    return getStreamType(errMessage, true);
  }

  const content = fileSystemLib.reader(
    parsedOptions.fileName,
    fileSystemLib.encoder
  );

  const lines = content.split("\n");

  if (lines.length < parsedOptions.range.end) {
    parsedOptions.range.end = lines.length;
  }

  const extractedUpperLines = lines
    .slice(parsedOptions.range.start, parsedOptions.range.end)
    .join("\n");
  return getStreamType(extractedUpperLines, false);
};

module.exports = {
  head,
  parseUsrOptions
};
