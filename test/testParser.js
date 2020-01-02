const assert = require('chai').assert;
const parse = require('../src/parser');

describe('parse', function(){
  it('should parse options if -n option given', function(){
    const args = ['-n', '5', 'path.txt'];
    const parsedOptions = parse( args);
    const ans = {numOfLines: 5, filePath: ['path.txt'], lastOption: undefined};

    assert.deepStrictEqual(parsedOptions, ans);
  });
});
