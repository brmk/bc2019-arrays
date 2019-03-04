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
    functionName: "practiceMutators",
    tests: [
      {
        createArgs: (n = 10) => [],
        validate: (result, args) => {
          expect(result && result.length).toEqual(6);
        }
      }
    ]
  },
  {
    functionName: "practiceSearch",
    tests: [
      {
        repeat: 5,
        createArgs: () => {
          const hasFloat = faker.random.boolean();
          const numbers = new Array(
            faker.random.number({
              min: 10,
              max: 50
            })
          )
            .fill(null)
            .map(() =>
              faker.random.number({
                min: 100,
                max: 9999999,
                precision: hasFloat ? 10 : 0
              })
            );
          const bool = faker.random.boolean();
          return [
            numbers,
            bool ? numbers[9] : faker.random.number({ min: 100, max: 9999999 })
          ];
        },
        validate: (result, args) => {
          const expected = {
            s1: undefined,
            s2: "NO",
            s3: null,
            s4: false,
            s5: true
          };
          const array = args[0];
          const searchableNumber = args[1];

          for (let i = 0; i < array.length; i++) {
            if (
              (array[i] % 2 && expected.s1 === null) ||
              expected.s1 === undefined
            ) {
              expected.s1 === array[i];
            }
            if (array[i] === searchableNumber) {
              expected.s2 = "YES";
            }
            if (array[i] > 1000000) {
              expected.s4 = true;
            }
            if (!Number.isInteger(array[i])) {
              expected.s5 = false;
            }
          }

          expected.s3 = array.indexOf(searchableNumber);

          expect(result).toEqual(expected);
        }
      }
    ]
  },
  {
    functionName: "unique",
    tests: [
      {
        createArgs: (n = 10) => [
          new Array(faker.random.number({ min: 10, max: 50 }))
            .fill(null)
            .map(() => faker.random.number({ min: 100, max: 9999999 })),
          new Array(faker.random.number({ min: 10, max: 50 }))
            .fill(null)
            .map(() => faker.random.number({ min: 100, max: 9999999 }))
        ],
        validate: (result, args) => {
          const unique = _.uniq([...args[0], ...args[1]]);
          expect(result.sort()).toEqual(unique.sort());
        }
      }
    ]
  },
  {
    functionName: "iter",
    tests: [
      {
        createArgs: (n = 10) => [
          new Array(faker.random.number({ min: 10, max: 50 }))
            .fill(null)
            .map(() => faker.random.number({ min: 100, max: 9999999 })),
          faker.random.number({ min: 100, max: 9999999 })
        ],
        validate: (result, args) => {
          const array = args[0];
          const threshold = args[1];
          const el = array.find(n => n > threshold) || null;
          expect(result).toEqual(el);
        }
      }
    ]
  }
];

run("homework", tests, implementations, true);
