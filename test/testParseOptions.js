const assert = require('chai').assert;
const parseOption = require('../src/parseOptions');

describe('parseOption', function(){ 
  it('should validate args if args include -n option', function(){
    const args = ['-n', '5', 'path'];
    const num = 5;
    const options = {num, path: 'path'};
    const parsedOptions = {options, areOptionsValid: true};

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });

  it('should validate args if args include -n(number) option', function(){
    const args = ['-n5', 'path'];
    const num = 5;
    const options = {num, path: 'path'};
    const parsedOptions = {options, areOptionsValid: true};

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });

  it('should validate args if args include only path', function(){
    const args = ['path'];
    const num = 10;
    const options = {num, path: 'path'};
    const parsedOptions = {options, areOptionsValid: true};

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });

  it('should validate args if args include -(number) option', function(){
    const args = ['-1', 'path'];
    const num = 1;
    const options = {num, path: 'path'};
    const parsedOptions = {options, areOptionsValid: true};

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });

  it('should areOptionsValid is false if valid option is not given', function(){
    const args = ['-m', '1', 'path'];
    const options = {num: NaN, path: '1'};
       
    const parsedOptions = {options, areOptionsValid: false};

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });

  it('should areOptionsValid is false if count is not given', function(){
    const args = ['-n', 'path'];
    const options = {num: NaN, path: 'path'};

    const parsedOptions = {options, areOptionsValid: false};

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });
});

