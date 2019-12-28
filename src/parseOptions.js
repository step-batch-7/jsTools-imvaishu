const isCountValid = function(option, count){
  const initialLimit = 0;
  if(option === '-n'){
    return count > initialLimit && Number.isInteger(+count);
  }
  return false;
};

const parsedOptions = function (args) {
  const [option, count, path] = [...args];
  const defaultCount = 10;
  const options = { path, start: 0, count: defaultCount};
  
  if(isCountValid(option, count)){
    options.count = +count;
  }
  if(count === undefined){
    options.path = option;
  }
  return options;
};

module.exports = parsedOptions;
