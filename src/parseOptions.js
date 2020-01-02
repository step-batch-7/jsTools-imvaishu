const areOptionsValid = function(count, path){
  const initialLimit = 0;
  return count > initialLimit && Number.isInteger(count) && path !== undefined;
};

const getCountValue = function(option, numOfLines){
  const maxLength = 2;
  if(option.startsWith('-n')){
    if(option.length > maxLength){
      return +option.split('-n').pop();
    }
    return +numOfLines;
  }
  return +option.split('-').pop();
};

const parsedOptions = function (args) {
  const options ={ numOfLines: 10};
  const nextIndex = 1;
  for(let index = 0; index < args.length; index++){
    if(args[index].startsWith('-')){
      options.numOfLines = getCountValue(args[index], args[index + nextIndex]);
      index = index + nextIndex;
    }
    options.path = args[index];
    if(!areOptionsValid(options.numOfLines, options.path)){
      return {options, areOptionsValid: false};
    }
  }

  return {options, areOptionsValid: true};
};

module.exports = parsedOptions;


