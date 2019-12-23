const joinLines = function(contentOfFile) {
  return contentOfFile.join("\n");
};

const parseUsrOptions = function(args) {
  return { fileName: args[0], end: 10 };
};

const extractUpper10lines = function(
  requireProperties,
  loadContent,
  requiredHead
) {
  for (let noOfLine = 0; noOfLine < requireProperties.end; noOfLine++) {
    requiredHead.push(loadContent[noOfLine]);
  }
  return requiredHead;
};

const performHead = function(args, fileSystemFunctions) {
  const requireProperties = parseUsrOptions(args);

  if (!fileSystemFunctions.doesExists(requireProperties.fileName)) {
    return [`head: ${requireProperties.fileName}: No such file or directory`];
  }

  let content = fileSystemFunctions.reader(
    requireProperties.fileName,
    fileSystemFunctions.encoder
  );

  content = content.split("\n");

  if (content.length < requireProperties.end) {
    requireProperties.end = content.length;
  }

  return extractUpper10lines(requireProperties, content, []);
};

module.exports = {
  performHead,
  parseUsrOptions,
  joinLines,
  extractUpper10lines
};
