const joinLines = function(contentOfFile) {
  return contentOfFile.join("\n");
};

const parseUsrOptions = function(args) {
  return { fileName: args[0], end: 10 };
};

const load10Lines = function(requireProperties, loadContent, requiredHead) {
  for (let noOfLine = 0; noOfLine < requireProperties.end; noOfLine++) {
    requiredHead.push(loadContent[noOfLine]);
  }
  return requiredHead;
};

const extractUpper10Lines = function(args, fileSyncs) {
  const requireProperties = parseUsrOptions(args);

  if (!fileSyncs.doesExists(requireProperties.fileName)) {
    return [`head: ${requireProperties.fileName}: No such file or directory`];
  }

  let content = fileSyncs.reader(requireProperties.fileName, fileSyncs.encoder);

  content = content.split("\n");

  if (content.length < requireProperties.end) {
    requireProperties.end = content.length;
  }

  return load10Lines(requireProperties, content, []);
};

module.exports = {
  extractUpper10Lines,
  parseUsrOptions,
  joinLines,
  load10Lines
};
