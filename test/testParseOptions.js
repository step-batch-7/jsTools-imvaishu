const assert = require('chai').assert;
const parseOption = require('../src/parseOptions');

describe('parseOption', function(){ 
  it('should validate args if args include -n option', function(){
    const args = ['-n', '5', 'path'];
    const numOfLines = 5;
    const options = { numOfLines, path: 'path'};
    const parsedOptions = {options, areOptionsValid: true };

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });

  it('should validate args if args include -n(number) option', function(){
    const args = ['-n5', 'path'];
    const numOfLines = 5;
    const options = { numOfLines, path: 'path'};
    const parsedOptions = {options, areOptionsValid: true };

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });

  it('should validate args if args include only path', function(){
    const args = ['path'];
    const numOfLines = 10;
    const options = {numOfLines, path: 'path'};
    const parsedOptions = {options, areOptionsValid: true };

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });

  it('should validate args if args include -(number) option', function(){
    const args = ['-1', 'path'];
    const numOfLines = 1;
    const options =  { numOfLines, path: 'path'};
    const parsedOptions =  { options, areOptionsValid: true };

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });

  it('should return undefined if wrong option given', function(){
    const args = ['-m', '1', 'path'];
    const options = { numOfLines: NaN, path: '1'};
       
    const parsedOptions = {options, areOptionsValid: false};

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });

  it('should return undefined if count is not given', function(){
    const args = ['-n', 'path'];
    const options = {numOfLines: NaN, path: 'path'};

    const parsedOptions = {options, areOptionsValid: false};

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });
});

