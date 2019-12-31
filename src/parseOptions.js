const areOptionsValid = function(count, path){
  const initialLimit = 0;
  return count > initialLimit && Number.isInteger(count) && path !== undefined;
};

const getCountValue = function(option, count){
  const maxLength = 2;
  if(option.startsWith('-n')){
    if(option.length > maxLength){
      return +option.split('-n').pop();
    }
    return +count;
  }
  return +option.split('-').pop();
};

const parsedOptions = function (args) {
  const options ={start: 0, count: 10};
  const nextIndex = 1;
  for(let index = 0; index < args.length; index++){
    if(args[index].startsWith('-')){
      options.count = getCountValue(args[index], args[index + nextIndex]);
      index = index + nextIndex;
    }
    options.path = args[index];
    if(!areOptionsValid(options.count, options.path)){
      return { areOptionsValid: false};
    }
  }
  return {options, areOptionsValid: true};
};


module.exports = parsedOptions;
