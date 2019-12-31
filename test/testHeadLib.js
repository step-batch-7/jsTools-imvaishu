const assert = require('chai').assert;
const { head } = require('../src/headLib');
/*eslint-disable no-magic-numbers*/
describe('head', function () {
  it('should return error message if file is not present', function (done) {
    const args = ['path'];
    const expectedErr = 'head: path: No such file or directory';
    const readFile = function (path, encoder, callback) {
      assert.deepStrictEqual(path, 'path');
      assert.strictEqual(encoder, 'utf-8');
      setTimeout(() => callback('error'), 0);
    };

    const fs = { readFile };

    const show = {
      writeToOutputStream: data => assert.isUndefined(data),
      writeToErrorStream: data => assert.deepStrictEqual(data, expectedErr)
    };
    done();
    head(args, fs, show);
  });

  it('should return lines if file contains less lines', function (done) {
    const args = ['path'];

    const expectedData = '1\n2\n3';

    const readFile = function (path, encoder, callback) {
      assert.strictEqual(path, 'path');
      assert.strictEqual(encoder, 'utf-8');
      setTimeout(() => callback(null, '1\n2\n3'), 0);
    };

    const fs = { readFile };

    const show = {
      writeToOutputStream: data => assert.deepStrictEqual(data, expectedData),
      writeToErrorStream: data => assert.isUndefined(data)
    };
    done();
    head(args, fs, show);
  });

  it('should return 10 lines if file contain more lines', function (done) {
    const args = ['path'];

    const expectedData = '0\n1\n2\n3\n4\n5\n6\n7\n8\n9';

    const readFile = function (path, encoder, callback) {
      assert.strictEqual(path, 'path');
      assert.strictEqual(encoder, 'utf-8');
      setTimeout(() => callback(null, '0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n1\n1'), 0);
    };

    const fs = { readFile };

    const show = {
      writeToOutputStream: data => assert.deepStrictEqual(data, expectedData),
      writeToErrorStream: data => assert.isUndefined(data)
    };
    done();
    head(args, fs, show);
  });

  it('should return 5 lines if line no. are mentioned', function (done) {
    const args = ['-n', '5', 'path'];

    const expectedData = '0\n1\n2\n3\n4';

    const readFile = function (path, encoder, callback) {
      assert.strictEqual(path, 'path');
      assert.strictEqual(encoder, 'utf-8');
      setTimeout(() => callback(null, '0\n1\n2\n3\n4\n5\n6\n7\n8\n9'), 0);
    };

    const fs = { readFile };

    const show = {
      writeToOutputStream: data => assert.deepStrictEqual(data, expectedData),
      writeToErrorStream: data => assert.isUndefined(data)
    };
    done();
    head(args, fs, show);
  });

  it('should return 5 lines if option(count) is given', function (done) {
    const args = ['-n5', 'path'];

    const expectedData = '0\n1\n2\n3\n4';

    const readFile = function (path, encoder, callback) {
      assert.strictEqual(path, 'path');
      assert.strictEqual(encoder, 'utf-8');
      setTimeout(() => callback(null, '0\n1\n2\n3\n4\n5\n6\n7\n8\n9'), 0);
    };

    const fs = { readFile };

    const show = {
      writeToOutputStream: data => assert.deepStrictEqual(data, expectedData),
      writeToErrorStream: data => assert.isUndefined(data)
    };
    done();
    head(args, fs, show);
  });

  it('should return 5 lines if only count is given', function (done) {
    const args = ['-5', 'path'];

    const expectedData = '0\n1\n2\n3\n4';

    const readFile = function (path, encoder, callback) {
      assert.strictEqual(path, 'path');
      assert.strictEqual(encoder, 'utf-8');
      setTimeout(() => callback(null, '0\n1\n2\n3\n4\n5\n6'), 0);
    };

    const fs = { readFile };

    const show = {
      writeToOutputStream: data => assert.deepStrictEqual(data, expectedData),
      writeToErrorStream: data => assert.isUndefined(data)
    };
    done();
    head(args, fs, show);
  });

  it('should return error message if given options are not valid', (done) => {
    const args = ['-n', 'path'];
    const expectedErr = 'head: illegal line count -- path';
    
    const show = {
      writeToOutputStream: data => assert.isUndefined(data),
      writeToErrorStream: data => assert.deepStrictEqual(data, expectedErr)
    };
    done();
    head(args, show);
    /*eslint-enable no-magic-numbers*/
  });
});
