import * as implementations from "./homework";
import { createArrayWithFactory, personFactory } from "../lib/factories";
import { run } from "../lib/utils.test.js";
import faker from "faker";
import _ from "lodash";

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
          expect(result.sort()).toEqual(b.sort());
        }
      }
    ]
  },
  {
    functionName: "total",
    tests: [
      {
        createArgs: (n = 10) => [
          new Array(faker.random.number({ min: 10, max: 50 }))
            .fill(null)
            .map(() => faker.random.number({ min: 10, max: 10000 }))
        ],
        validate: (result, args) => {
          let sum = 0;
          args[0].forEach(n => {
            sum += n;
          });
          expect(result).toEqual(sum);
        }
      }
    ]
  },
  {
    functionName: "totalNotified",
    tests: [
      {
        createArgs: (n = 10) => [
          new Array(faker.random.number({ min: 10, max: 50 }))
            .fill(null)
            .map(() => ({
              name: faker.name.findName(),
              age: faker.random.number({ min: 18, max: 60 }),
              notified: faker.random.boolean()
            }))
        ],
        validate: (result, args) => {
          let notified = 0;
          args[0].forEach(n => {
            n.notified && notified++;
          });
          expect(result).toEqual(notified);
        }
      }
    ]
  },
  {
    functionName: "lengthSort",
    tests: [
      {
        createArgs: (n = 10) => [
          new Array(faker.random.number({ min: 10, max: 50 }))
            .fill(null)
            .map(() => faker.random.word())
        ],
        validate: (result, args) => {
          let sorted = _.sortBy(args[0], "length");
          expect(result).toEqual(sorted);
        }
      }
    ]
  },
  {
    functionName: "teens",
    tests: [
      {
        createArgs: (n = 10) => [createArrayWithFactory(n, personFactory)],
        validate: (result, args) => {
          let teens = [];
          args[0].forEach(p => p.profile.age < 18 && teens.push(p));
          const sortPredicate = t =>
            `${t.profile.firstName} ${t.profile.lastName}`;
          expect(result.sort(sortPredicate)).toEqual(teens.sort(sortPredicate));
        }
      }
    ]
  },
  {
    functionName: "practiceSearch",
    tests: [
      {
        createArgs: (n = 10) => [
          new Array(faker.random.number({ min: 10, max: 50 }))
            .fill(null)
            .map(() => faker.random.number({ min: 100, max: 9999999 }))
        ],
        validate: (result, args) => {
          const expected = {
            s1: null,
            s2: null,
            s3: null,
            s4: null,
            s5: null,
            s6: null
          };
          // TODO: finish

          expect(result).toEqual(expected);
        }
      }
    ]
  }
];

run("homework", tests, implementations, true);
