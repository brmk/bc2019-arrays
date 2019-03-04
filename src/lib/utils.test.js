export const run = (name, tests, implementations, strict) => {
  describe(name, () => {
    // it("runs", () => {});
    tests.forEach(test => {
      const func = implementations[test.functionName];

      if (typeof func === "function") {
        describe(test.functionName, () => {
          test.tests.forEach(testCase => {
            const args = testCase.createArgs();
            const result = func(...args);
            if (typeof result === "undefined" && !strict) {
              it("is not implemented", () => {
                expect(result).toBe(undefined);
              });
            } else {
              it("returns valid result", () => {
                testCase.validate(result, args);
              });
            }
          });
        });
      }
    });
  });
};
