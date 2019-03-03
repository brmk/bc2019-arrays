////////////////////////////////////////////////
//                    TYPES
////////////////////////////////////////////////

// Person
// {
//   emails: [
//     {
//       address: String,
//       verified: Boolean
//     }
//   ],
//   profile: {
//       firstName: String,
//       lastName: String,
//       jobTitle: String,
//       phoneNumber: String,
//       image: String,
//       age: Number,
//   },
//   lastLoggedInAt: Date,
//   registeredAt: Date,
// };

////////////////////////////////////////////////
//                    HOMEWORK
////////////////////////////////////////////////

// input: array of elements of type Person
// return a new array of "profile.firstName profile.lastName"
// example:
/* 
  input: [{
    ...,
    profile: {
        firstName: 'ihor',
        lastName: 'barmak'
    },
  }]
  output: ['ihor barmak']

  REQUIREMENTS: use map method
*/
export const nameify = input =>
  input.map(person => `${person.profile.firstName} ${person.profile.lastName}`);

// input: array of elements of type Person
// return a new array of emails that have verified true
// REQUIREMENTS: use at least two of the methods: map, filter, reduce
export const verifiedEmails = input => {};

// Turn an array of numbers into a sum of all the numbers
// input: [2, 4, 6];
// output: 12
//
// REQUIREMENTS: use reduce method
export function total(input) {
  // your code here
}

// Turn an array of users objects into a count of how many users are notified
/*
  const input = [
    { name: 'Yura', age: 30, notified: true },
    { name: 'Ihor', age: 32, notified: true },
    { name: 'Kate', age: 25, notified: false },
    { name: 'Jake', age: 20, notified: false },
    { name: 'Paul', age: 21, notified: true },
    { name: 'Eddie', age: 55, notified: true },
    { name: 'Tamir', age: 54, notified: true },
    { name: 'Maryna', age: 31, notified: false },
    { name: 'Belle', age: 43, notified: false },
    { name: 'Joe', age: 41, notified: true },
  ];
  output: 6
*/
// REQUIREMENTS: use reduce method

export function totalNotified(input) {
  // your code here
}

// Sort an array of strings by its length (in ascdending order)
// input: ["dog", "wolf", "by", "family", "eaten"];
// output: ["by", "dog", "wolf", "eaten", "family"]
export function lengthSort(input) {
  // your code here
}

// Filter array of Person to include only people of age under 18
export function teens(input) {}

// Practice arrays - "pop, push, shift, unshift"
export function practiceMutators() {
  // STEP 1: Create an array and assign it to a variable.
  const array = [];
  console.log("[Practice mutators] STEP 1:", array);
  // STEP 2: Use the `push` method to add 5 values into your Array
  console.log("[Practice mutators] STEP 2:", array);
  // STEP 3: Use the `unshift` method to add 5 values to the front of your Array.
  console.log("[Practice mutators] STEP 3:", array);
  // STEP 4: Use the `pop` method to remove 2 values from the back of your Array.
  console.log("[Practice mutators] STEP 4:", array);
  // STEP 5: Use the "shift" method to remove 2 values from the front of your Array.
  console.log("[Practice mutators] STEP 5:", array);
  // STEP 6: Return the resulting array from the function
}

// Practice search methods & extras - "find, includes, indexOf, lastIndexOf"
// example array: [364377, 579734, 959396, 625475, 657947, 290437, 268555, 542303, 252052, 672093, 503348, 734317, 950756, 660369, 630027, 738059, 663419, 767141, 418189, 271867];
export function practiceSearch(array, searchableNumber) {
  // STEP 1: find the first number that is multiple to 2
  const s1 = null; // implement
  console.log("[Practice search] STEP 1:", s1);

  // STEP 2: assign "YES" to s2 variable if the array includes a number searchableNumber. Otherwise "NO"
  const s2 = null; // implement
  console.log("[Practice search] STEP 2:", s2);

  // STEP 3: Find the index of the first number higher than a arithmetic mean number of the array
  const s3 = null; // implement
  console.log("[Practice search] STEP 3:", s3);

  // STEP 4: Find the index of the last number higher than a arithmetic mean number of the array
  const s4 = null; // implement
  console.log("[Practice search] STEP 4:", s4);

  // STEP 5: Assign true to s5 if any of the elements is higher than 100000000, else false.
  const s5 = null; // implement
  console.log("[Practice search] STEP 5:", s5);

  // STEP 6: Assign true to s6 if all elements are integers, else false.
  const s6 = null; // implement
  console.log("[Practice search] STEP 6:", s6);

  return {
    s1,
    s2,
    s3,
    s4,
    s5,
    s6
  };
}

// find the unique elements of two arrays
// input : [1, 2, 3], [100, 2, 1, 10]
// output: [1, 2, 3, 10, 100]
// BONUS: use Set
export function unique(left, right) {}

////////////////////////////////////////////////
//                    EXTRA
////////////////////////////////////////////////

// Using the iterator functions (values, keys, entries) iterate until you meet the number that is higher than threshold
// then return this number
// otherwise return null

// input: [1,2,3,4], 3
// output 4
export function iter(array, threshold) {}
