const getHeadOfFile = function(contentOfFile) {
  return contentOfFile.join("\n");
};

const parseUsrOptions = function(args) {
  let parsedUsrOptions = { fileName: args[0], range: { start: 0, end: 10 } };

  return parsedUsrOptions;
};

const getRequiredHead = function(parsedUsrOptions, loadContent, requiredHead) {
  for (let noOfLine = 0; noOfLine < parsedUsrOptions.range.end; noOfLine++) {
    requiredHead.push(loadContent[noOfLine]);
  }
  return requiredHead;
};

const filterRequiredHead = function(args, requiredDetails) {
  const parsedUsrOptions = parseUsrOptions(args);

  if (!requiredDetails.doesExists(parsedUsrOptions.fileName)) {
    return [`head: ${parsedUsrOptions.fileName}: No such file or directory`];
  }

  let loadContent = requiredDetails.reader(
    parsedUsrOptions.fileName,
    requiredDetails.encoder
  );

  loadContent = loadContent.split("\n");

  if (loadContent.length < parsedUsrOptions.range.end) {
    parsedUsrOptions.range.end = loadContent.length;
  }

  return getRequiredHead(parsedUsrOptions, loadContent, []);
};

module.exports = {
  filterRequiredHead,
  parseUsrOptions,
  getHeadOfFile,
  getRequiredHead
};
