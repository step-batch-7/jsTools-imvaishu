const parseUsrOptions = function(args) {
  let parsedUsrOptions = { fileName: args[0], range: { start: 0, end: 10 } };

  if (args.includes("-n")) {
    parsedUsrOptions.range.end = +args[args.indexOf("-n") + 1];
    parsedUsrOptions.fileName = args[2];
  }
  return parsedUsrOptions;
};

module.exports = parseUsrOptions;
