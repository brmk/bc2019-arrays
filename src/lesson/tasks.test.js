import * as implementations from "./tasks";
import { createArrayWithFactory, personFactory } from "../lib/factories";
import { run } from "../lib/utils.test.js";

const tests = [
  {
    functionName: "returnEmpty",
    tests: [
      {
        createArgs: (n = 100) => [createArrayWithFactory(n, personFactory)],
        validate: (result, args) => {
          expect(result).toEqual([]);
        }
      }
    ]
  },
  {
    functionName: "t1",
    tests: [
      {
        createArgs: () => [[]],
        validate: (result, args) => {
          expect(result).toEqual(true);
        }
      },
      {
        createArgs: () => [{}],
        validate: (result, args) => {
          expect(result).toEqual(false);
        }
      },
      {
        createArgs: () => [null],
        validate: (result, args) => {
          expect(result).toEqual(false);
        }
      },
      {
        createArgs: () => [""],
        validate: (result, args) => {
          expect(result).toEqual(false);
        }
      }
    ]
  },
  {
    functionName: "t2",
    tests: [
      {
        createArgs: () => [["a", "b"]],
        validate: (result, args) => {
          expect(result).not.toBe(args[0]);
          expect(result).toEqual(args[0]);
        }
      }
    ]
  },
  {
    functionName: "t3",
    tests: [
      {
        createArgs: () => [["a", "b", "c"]],
        validate: (result, args) => {
          expect(result).toEqual("a, b, c.");
        }
      },
      {
        createArgs: () => [[]],
        validate: (result, args) => {
          expect(result).toEqual("");
        }
      },
      {
        createArgs: () => [["hello"]],
        validate: (result, args) => {
          expect(result).toEqual("hello.");
        }
      }
    ]
  },
  {
    functionName: "t4",
    tests: [
      {
        createArgs: () => [["a", "a", "b"]],
        validate: (result, args) => {
          expect(result).toEqual("a - 2 times");
        }
      },
      {
        createArgs: () => [["a", "b"]],
        validate: (result, args) => {
          expect(result).toEqual("a - 1 time");
        }
      },
      {
        createArgs: () => [[]],
        validate: (result, args) => {
          expect(result).toEqual("");
        }
      }
    ]
  },
  {
    functionName: "t5",
    tests: [
      {
        createArgs: () => [["a", "a", "b"]],
        validate: (result, args) => {
          expect(result).toEqual(["a", "a", "b"]);
        }
      },
      {
        createArgs: () => [[[0, 1, 2], 3, 4, 5, [6, 7]]],
        validate: (result, args) => {
          expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
        }
      }
    ]
  },
  {
    functionName: "t6",
    tests: [
      {
        createArgs: () => [[10, 5, 3], 3],
        validate: (result, args) => {
          expect(result).toEqual(false);
        }
      },
      {
        createArgs: () => [[10, 5, 3], 11],
        validate: (result, args) => {
          expect(result).toEqual(true);
        }
      },
      {
        createArgs: () => [[10, 5, 3], 10],
        validate: (result, args) => {
          expect(result).toEqual(false);
        }
      }
    ]
  }
];

// run("array", tests, implementations);
