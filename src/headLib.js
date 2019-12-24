const getStreamType = function(content, streamType) {
  return {
    content,
    streamType
  };
};

const parseUsrOptions = function(args) {
  return { fileName: args[0], range: { start: 0, end: 10 } };
};

const head = function(args, fileSystemLib) {
  const parsedOptions = parseUsrOptions(args);

  if (!fileSystemLib.doesExists(parsedOptions.fileName)) {
    const errMessage = `head: ${parsedOptions.fileName}: No such file or directory`;
    return getStreamType(errMessage, "errType");
  }

  const content = fileSystemLib.reader(
    parsedOptions.fileName,
    fileSystemLib.encoder
  );

  const storedData = content.split("\n");

  if (storedData.length < parsedOptions.range.end) {
    parsedOptions.range.end = storedData.length;
  }

  const extractedUpperLines = storedData
    .slice(parsedOptions.range.start, parsedOptions.range.end)
    .join("\n");
  return getStreamType(extractedUpperLines, "outputType");
};

module.exports = {
  head,
  parseUsrOptions
};
