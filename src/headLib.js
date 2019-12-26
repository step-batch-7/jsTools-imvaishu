const EMPTY_CONTENT = "";

const parseUsrOptions = function(args) {
  return { fileName: args[0], start: 0, end: 10 };
};

const loadContent = function(fs, options) {
  const { readFileSync, existsSync } = fs;
  if (!existsSync(options.fileName)) {
    return {
      content: EMPTY_CONTENT,
      error: `head: ${options.fileName}: No such file or directory`
    };
  }
  return readFileSync(options.fileName, "utf-8");
};

const head = function(args, fs) {
  const options = parseUsrOptions(args);
  const content = loadContent(fs, options);

  if (content.error) return content;

  const lines = content.split("\n");
  const upperLines = lines.slice(options.start, options.end).join("\n");

  return { content: upperLines, error: EMPTY_CONTENT };
};

module.exports = { head };
