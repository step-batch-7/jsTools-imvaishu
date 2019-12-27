const parsedOptions = require("./isValidate");

const EMPTY_CONTENT = "";

const extractUpperLines = function(content, options) {
  const lines = content.split("\n");
  const upperLines = lines.slice(0, options.count).join("\n");

  return { content: upperLines, error: EMPTY_CONTENT };
};

const loadContent = function(fs, options) {
  const { readFileSync, existsSync } = fs;
  if (!existsSync(options.path)) {
    return {
      content: EMPTY_CONTENT,
      error: `head: ${options.path}: No such file or directory`
    };
  }
  return readFileSync(options.path, "utf-8");
};

const head = function(args, fs) {
  const options = parsedOptions(args);
  if (options === undefined) {
    return {
      content: EMPTY_CONTENT,
      error: `head: illegal line count -- ${args[1]}`
    };
  }
  const content = loadContent(fs, options);

  if (content.error) return content;
  return extractUpperLines(content, options);
};

module.exports = { head };
