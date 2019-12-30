const isCountValid = function(count){
  const initialLimit = 0;
  return count > initialLimit && Number.isInteger(+count);
};

const isOptionValid = function(option, count){
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
      options.count = isOptionValid(args[index], args[index + nextIndex]);
      if(!isCountValid(options.count)){return undefined;}
      index = index + nextIndex;
    }
    options.path = args[index];
  }
  return options;
};

module.exports = parsedOptions;
