const assert = require("chai").assert;
const isValidate = require("../src/isValidate");

describe("isValidate", function() {
  it("should return options if all given options are valid and it contains '-n'", function() {
    const args = ["-n", "5", "path"];

    const options = { path: "path", count: 5 };

    assert.deepStrictEqual(isValidate(args), options);
  });

  it("should return options if all given options are valid and it contains '-n5'", function() {
    const args = ["-n5", "path"];

    const options = { path: "path", count: 5 };

    assert.deepStrictEqual(isValidate(args), options);
  });

  it("should return options if all given options are valid and it contains '-5'", function() {
    const args = ["-5", "path"];

    const options = { path: "path", count: 5 };

    assert.deepStrictEqual(isValidate(args), options);
  });

  it("should return undefined if count is NaN if path is not given", function() {
    const args = ["-n", "5"];

    assert.deepStrictEqual(isValidate(args), undefined);
  });

  it("should return undefined if count is NaN if count is not given", function() {
    const args = ["-n", "head.js"];

    assert.deepStrictEqual(isValidate(args), undefined);
  });
});
