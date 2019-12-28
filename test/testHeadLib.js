const assert = require('chai').assert;
const { head } = require('../src/headLib');

describe('head', function () {
  it('should return error message if file is not present', function () {
    const args = ['path'];
    const expectedErr = 'head: path: No such file or directory';
    const readFile = function (path, encoder, callback) {
      assert.deepStrictEqual(path, 'path');
      assert.strictEqual(encoder, 'utf-8');
      callback('error');
    };

    const fs = { readFile };

    const show = {
      writeToOutputStream: data => assert.isUndefined(data),
      writeToErrorStream: data => assert.deepStrictEqual(data, expectedErr)
    };
    head(args, fs, show);
  });

  it('should return lines if file contains less lines', function () {
    const args = ['path'];

    const expectedData = '1\n2\n3';

    const readFile = function (path, encoder, callback) {
      assert.strictEqual(path, 'path');
      assert.strictEqual(encoder, 'utf-8');
      callback(null, '1\n2\n3');
    };

    const fs = { readFile };
    const show = {
      writeToOutputStream: data => assert.deepStrictEqual(data, expectedData),
      writeToErrorStream: data => assert.isUndefined(data)
    };
    head(args, fs, show);
  });

  it('should return 10 lines if file contain more lines', function () {
    const args = ['path'];

    const expectedData = '0\n1\n2\n3\n4\n5\n6\n7\n8\n9';

    const readFile = function (path, encoder, callback) {
      assert.strictEqual(path, 'path');
      assert.strictEqual(encoder, 'utf-8');
      callback(null, '0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11');
    };

    const fs = { readFile };

    const show = {
      writeToOutputStream: data => assert.deepStrictEqual(data, expectedData),
      writeToErrorStream: data => assert.isUndefined(data)
    };

    head(args, fs, show);
  });
});
