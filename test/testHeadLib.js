const assert = require("chai").assert;
const { head } = require("../src/headLib");

describe("head", function() {
  it("should return error message if file is not present", function() {
    const args = ["somePath"];
    const existsSync = function(path) {
      assert.notEqual(path, "path");
      return false;
    };
    const readFileSync = function(path, encoder) {};

    const fs = { readFileSync, existsSync };
    const expectedAns = {
      content: "",
      error: `head: somePath: No such file or directory`
    };

    assert.deepStrictEqual(head(args, fs), expectedAns);
  });

  it("should return array of lines if file contains less no. of line than mentioned in range", function() {
    const args = ["path"];

    const existsSync = function(path) {
      assert.strictEqual(path, "path");
      return true;
    };

    const readFileSync = function(path, encoder) {
      assert.strictEqual(path, "path");
      assert.strictEqual(encoder, "utf-8");
      return `0\n1\n2\n3\n4\n5`;
    };

    const fs = { readFileSync, existsSync };
    const expectedAns = { content: `0\n1\n2\n3\n4\n5`, error: "" };

    assert.deepStrictEqual(head(args, fs), expectedAns);
  });

  it("should return array of given no. of lines if file contains more lines than mentioned lines", function() {
    const args = ["path"];

    const existsSync = function(path) {
      assert.strictEqual(path, "path");
      return true;
    };

    const readFileSync = function(path, encoder) {
      assert.strictEqual(path, "path");
      assert.strictEqual(encoder, "utf-8");
      return `0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11`;
    };

    const fs = { readFileSync, existsSync };
    const expectedAns = {
      content: `0\n1\n2\n3\n4\n5\n6\n7\n8\n9`,
      error: ""
    };

    assert.deepStrictEqual(head(args, fs), expectedAns);
  });
});
