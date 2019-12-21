const chai = require("chai");
const assert = chai.assert;
const parseUsrOptions = require("../src/parseUsrOptions");

describe("parseUsrOptions", function() {
  it("should parse commandLine arguments if only filename is given", function() {
    const args = ["one.txt"];
    const actualValue = parseUsrOptions(args);
    const expectedValue = { fileName: "one.txt", range: { start: 0, end: 10 } };

    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("should parse commandLine arguments if no.of lines are specified", function() {
    const args = ["-n", "5", "one.txt"];
    const actualValue = parseUsrOptions(args);
    const expectedValue = { fileName: "one.txt", range: { start: 0, end: 5 } };

    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
