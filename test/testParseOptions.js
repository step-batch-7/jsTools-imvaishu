const assert = require('chai').assert;
const parseOption = require('../src/parseOptions');

describe('parseOption', function(){ 
  it('should validate args if args include -n option', function(){
    const args = ['-n', '5', 'path'];
    const start = 0;
    const count = 5;
    const parsedOptions = {start, count, path: 'path', };

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });

  it('should validate args if args include -n(number) option', function(){
    const args = ['-n5', 'path'];
    const start = 0;
    const count = 5;
    const parsedOptions = {start, count, path: 'path', };

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });

  it('should validate args if args include only path', function(){
    const args = ['path'];
    const start = 0;
    const count = 10;
    const parsedOptions = {start, count, path: 'path', };

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });

  it('should validate args if args include -(number) option', function(){
    const args = ['-1', 'path'];
    const start = 0;
    const count = 1;
    const parsedOptions = {start, count, path: 'path', };

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });

  it('should return undefined if wrong option given', function(){
    const args = ['-m', '1', 'path'];
   
    assert.isUndefined(parseOption(args));
  });

  it('should return undefined if count is not given', function(){
    const args = ['-n', 'path'];
   
    assert.isUndefined(parseOption(args));
  });
});

