const EMPTY_CONTENT = "";

const parseUserOptions = function(args) {
  const options = { fileName: args[0], start: 0, end: 10 };
  if (args.includes("-n")) {
    options.end = +args[args.indexOf("-n") + 1];
    options.fileName = args[2];
  }
  if (options.fileName.includes("-n")) {
    options.end = +options.fileName.slice(2, 3);
    options.fileName = args[1];
  }
  return options;
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
  const options = parseUserOptions(args);
  const content = loadContent(fs, options);

  if (content.error) return content;

  const lines = content.split("\n");
  const upperLines = lines.slice(options.start, options.end).join("\n");

  return { content: upperLines, error: EMPTY_CONTENT };
};

module.exports = { head };
