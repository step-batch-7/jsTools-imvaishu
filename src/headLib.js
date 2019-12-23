const joinLines = function(contentOfFile) {
  return contentOfFile.join("\n");
};

const parseUsrOptions = function(args) {
  return { fileName: args[0], end: 10 };
};

const extractUpper10lines = function(parsedOptions, line) {
  let upperLines = [];
  for (let noOfLine = 0; noOfLine < parsedOptions.end; noOfLine++) {
    upperLines.push(line[noOfLine]);
  }
  return upperLines;
};

const head = function(args, fileSystemFunctions) {
  const parsedOptions = parseUsrOptions(args);

  if (!fileSystemFunctions.doesExists(parsedOptions.fileName)) {
    return [`head: ${parsedOptions.fileName}: No such file or directory`];
  }

  const content = fileSystemFunctions.reader(
    parsedOptions.fileName,
    fileSystemFunctions.encoder
  );

  const storedData = content.split("\n");

  if (storedData.length < parsedOptions.end) {
    parsedOptions.end = storedData.length;
  }

  return extractUpper10lines(parsedOptions, storedData);
};

module.exports = {
  head,
  parseUsrOptions,
  joinLines,
  extractUpper10lines
};
