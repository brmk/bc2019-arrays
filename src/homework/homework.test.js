import * as implementations from "./homework";
import { createArrayWithFactory, personFactory } from "../lib/factories";
import { run } from "../lib/utils.test.js";

const tests = [
  {
    functionName: "nameify",
    tests: [
      {
        createArgs: (n = 10) => [createArrayWithFactory(n, personFactory)],
        validate: (result, args) => {
          const b = [];
          args[0].forEach(person => {
            b.push(person.profile.firstName + " " + person.profile.lastName);
          });
          expect(result).toEqual(b);
        }
      }
    ]
  },
  {
    functionName: "verifiedEmails",
    tests: [
      {
        createArgs: (n = 10) => [createArrayWithFactory(n, personFactory)],
        validate: (result, args) => {
          const b = [];
          args[0].forEach(person => {
            person.emails.forEach(e => {
              if (e.verified) b.push(e.address);
            });
          });
          expect(result).toEqual(b);
        }
      }
    ]
  }
];

run("homework", tests, implementations);
