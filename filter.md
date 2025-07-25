# `filter()` method

Florin pop youtube filter tutorial link 

<https://www.youtube.com/watch?v=mJGv12UHqXc&list=PLgBH1CvjOA62PBFIDq55-S6Beivje30A2&index=3> 

The `filter()` method in JavaScript is a higher-order array method that creates a new array containing all elements from the original array that satisfy a provided test condition. It does not modify the original array.

Think of it like shifting through a collection of items and only keeping the ones that meet specific criteria.

**How it Works**

The `filter()` method takes a **callback function** as an argument. This callback function is executed once for each element in the array.

The callback function can take up to three arguments:

1. `element` **(required):** The current element being processed in the array.

2. `index` **(optional):** The index of the current element being processed.

3. `array` **(optional):** The array `filter()` was called upon.

The callback function **must return a boolean value:**

If the callback function returns `true`, the current `element` will be included in the new filtered array.

If the callback function returns `false`, the current `element` will be excluded from the new filtered array.


**Key Characteristics and Benefits of `filter()`** 
- **Non-mutating**: It never changes the original array. This is a crucial aspect of functional programming and helps prevent unintended side effects.
- **Returns a new array:** Always returns a brand new array, even if no elements match the condition (in which case it returns an empty array).
- **Concise and Readable:** Provides a clean and expressive way to select elements based on a condition, making your code easier to understand.
- **Chaining:** Since it returns a new array, you can often chain other array methods (like `map(), reduce(), sort()`) directly after `filter()` for more complex data transformations.

**When to Use `filter()`**

Use `filter()` whenever you need to:

- Create a subset of an array based on specific criteria.

- Remove unwanted elements from an array without modifying the original.

- Cleanse data by excluding invalid or irrelevant entries.

It's a fundamental method for data manipulation in modern JavaScript.


**Syntax** 
```js
const newArray = array.filter(callback(element, index, array) {
  // Return true to keep the element, false to discard it
});
```
**Example 1: Following are some of the examples how to use it.**
```js
// Florin pop example to filter even numbers.
const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(isEven);

function isEven(value) {
  return value % 2 === 0;
}

console.log(even);
// output
// [ 2, 4, 6 ]

// Gemini Example to  filter even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0; // Check if the number is even
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
console.log(numbers);     // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (original array unchanged)

```

**Example 2: Filtering Strings (Finding Words Longer Than 5 Characters)** 
```js
// Gemini example
const words = ["apple", "banana", "kiwi", "grapefruit", "orange", "dog"];

const longWords = words.filter(word => word.length > 5); // Using arrow function for conciseness

console.log(longWords); // Output: ["banana", "grapefruit", "orange"]
```


**Example 3: Filtering Objects (Finding Users Over a Certain Age)** 

```js
// Florin Pop Example
const people = [
  {
    name: "Florin",
    age: 26,
  },
  {
    name: "Ivan",
    age: 18,
  },
  {
    name: "Jai",
    age: 15,
  },
];

// The following code does not work becuase template literal convert the output to tostring.
// console.log(`adults ${adults}`);
const adults = people.filter((person) => person.age >= 18);
console.log(adults);

// Gemini Example
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 20 }
];

const adults = users.filter(user => user.age >= 30);

console.log(adults);
/* Output:
[
  { name: "Alice", age: 30 },
  { name: "Charlie", age: 35 }
]
*/

```

**Example 4: Another usecase of filter method is to remove all the duplicate value.**
```js

const duplicateNumbers = [1, 2, 3, 2, 1, 3, 3, 5, 4, 5, 6];
const uniqueNumbers = numbers.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});
console.log(`unique numbers ${uniqueNumbers}`);
console.log(duplicateNumbers.indexOf(2));
```

**Example 5: Using `index` and `array` (Less common but possible)** 
```js
const fruits = ["apple", "banana", "cherry", "date"];

// Get elements at even indices
const evenIndexFruits = fruits.filter((fruit, index) => index % 2 === 0);
console.log(evenIndexFruits); // Output: ["apple", "cherry"]

// Find fruits that are also present in another list (illustrative, not typical filter use)
const preferredFruits = ["apple", "date"];
const commonFruits = fruits.filter((fruit, index, arr) => preferredFruits.includes(fruit));
console.log(commonFruits); // Output: ["apple", "date"]

```
