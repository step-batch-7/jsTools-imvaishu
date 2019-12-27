const isOptionGiven = function(args) {
  const option = "-n";
  return args.includes(option);
};

const isValidateCount = function(count) {
  return count > 0 && Number.isInteger(count);
};

const isSymbolContains = function(args) {
  if (args.length > 1) return args[args.length - 2].slice(0, 2).includes("-");
};

const parsedOptions = function(args) {
  const path = args[args.length - 1];
  const options = { path, count: 10 };

  if (isOptionGiven(args)) {
    options.count = +args[args.indexOf("-n") + 1];
  }
  if (isSymbolContains(args)) {
    const position = args[args.length - 2];
    options.count = +position[position.indexOf("-n") + 2];
  }
  if (!isValidateCount(options.count)) return undefined;
  return options;
};

module.exports = parsedOptions;
