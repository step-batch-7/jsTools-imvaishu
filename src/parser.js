const getOptions = function(optionChoices, option, optionNames){
  if(optionChoices.lastOption){
    optionChoices[optionChoices.lastOption] = +option; 
    optionChoices.lastOption = undefined;
    return optionChoices; 
  }
  if(option.startsWith('-n')){
    optionChoices.lastOption = optionNames[option];
    return optionChoices;
  }
  optionChoices.filePath.push(option);
  return optionChoices;
};

const parser = function(optionChoices, option){
  const optionNames = {'-n': 'numOfLines'};
  const parsedOptions = getOptions(optionChoices, option, optionNames);
  return parsedOptions;
};

const parse = function( args){
  const optionChoices = {numOfLines: 10, filePath: []};
  const parsedOptions = args.reduce(parser, optionChoices);
  return parsedOptions;
};

module.exports = parse;
