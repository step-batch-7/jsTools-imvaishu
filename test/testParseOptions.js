const assert = require('chai').assert;
const parseOption = require('../src/parseOptions');

describe('parseOption', function(){ 
  it('should validate args if args include -n option', function(){
    const args = ['-n', '5', 'path'];
    const start = 0;
    const count = 5;
    const parsedOptions = {path: 'path', start, count};

    assert.deepStrictEqual(parseOption(args), parsedOptions);
  });
});

