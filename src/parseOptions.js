const areOptionsValid = function(count, path){
  const initialLimit = 0;
  return count > initialLimit && Number.isInteger(count) && path !== undefined;
};

const getNumOfLines = function(option, num, idx){
  if(option === '-n'){
    return +num;
  }
  return +option[option.length - idx];
};

const parsedOptions = function (args) {
  const options = {num: 10};
  const one = 1;
  for(let idx = 0; idx < args.length; idx++){
    if(args[idx].startsWith('-')){
      options.num = getNumOfLines(args[idx], args[idx + one], one);
      idx = idx + one;
    }
    options.path = args[idx];
    if(!areOptionsValid(options.num, options.path)){
      return {options, areOptionsValid: false};
    }
  }
  return {options, areOptionsValid: true};
};

module.exports = parsedOptions;
