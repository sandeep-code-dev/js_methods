# `filter()` method

Florin pop youtube filter tutorial link

#### It is a Iteration / Looping Methods (Higher-Order Functions)

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

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0; // Check if the number is even
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (original array unchanged)
```

**Example 2: Filtering Strings (Finding Words Longer Than 5 Characters)**

```js
// Gemini example
const words = ["apple", "banana", "kiwi", "grapefruit", "orange", "dog"];

const longWords = words.filter((word) => word.length > 5); // Using arrow function for conciseness

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
// Output: [ { name: 'Florin', age: 26 }, { name: 'Ivan', age: 18 } ]

// Gemini Example
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 20 },
];

const adults = users.filter((user) => user.age >= 30);

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
const uniqueNumbers = duplicateNumbers.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});
console.log(`unique numbers ${uniqueNumbers}`);
// Outcome: unique numbers 1,2,3,5,4,6
```

**Example 5: Using `index` and `array` (Less common but possible)**

```js
const fruits = ["apple", "banana", "cherry", "date"];

// Get elements at even indices
const evenIndexFruits = fruits.filter((fruit, index) => index % 2 === 0);
console.log(evenIndexFruits); // Output: ["apple", "cherry"]

// Find fruits that are also present in another list (illustrative, not typical filter use)
const preferredFruits = ["apple", "date"];
const commonFruits = fruits.filter((fruit, index, arr) =>
  preferredFruits.includes(fruit),
);
console.log(commonFruits); // Output: ["apple", "date"]
```

### Advanced Uses of the `filter()` Method

#### 1\. Chaining Filters for Multi-Criteria Selection

You can chain multiple `filter()` calls together to apply a sequence of criteria, effectively narrowing down your dataset with each step.

```javascript
const products = [
  { name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { name: "Headphones", category: "Electronics", price: 150, inStock: false },
  {
    name: "Headphones Portronics",
    category: "Electronics",
    price: 150,
    inStock: true,
  },
  { name: "T-Shirt", category: "Apparel", price: 25, inStock: true },
  { name: "Smartphone", category: "Electronics", price: 800, inStock: true },
  { name: "Jeans", category: "Apparel", price: 60, inStock: true },
];

const availableElectronicsUnder500 = products
  .filter((product) => product.category === "Electronics") // First filter: Electronics
  .filter((product) => product.inStock) // Second filter: In stock
  .filter((product) => product.price < 500); // Third filter: Price under 500

console.log(availableElectronicsUnder500);
// output of above code:
// [
//   {
//     name: 'Headphones Portronics',
//     category: 'Electronics',
//     price: 150,
//     inStock: true
//   }
// ]

// Output: [{ name: 'Headphones', category: 'Electronics', price: 150, inStock: false }] - wait, headphones are not in stock
// Oh, the example data for headphones is false, so it will not be included.
// Let's re-evaluate the output based on the provided data:
// The correct output for the above example would be an empty array [] because 'Headphones' is not inStock.
// If 'Headphones' was inStock, then it would be [{ name: 'Headphones', category: 'Electronics', price: 150, inStock: true }]
// Let's assume for the sake of demonstration that headphones *are* in stock in a corrected scenario.
// If 'Headphones' had inStock: true, the output would be:
// [{ name: 'Headphones', category: 'Electronics', price: 150, inStock: true }]
```

#### 2\. Filtering Based on Relationships or External Data

You can use `filter()` to select elements based on whether they exist in another array, or satisfy a condition derived from an external data source.

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const premiumUserIds = [1, 3];

const premiumUsers = users.filter((user) => premiumUserIds.includes(user.id));

console.log(premiumUsers);
// Output: [{ id: 1, name: 'Alice' }, { id: 3, name: 'Charlie' }]
```

#### 3\. Debouncing or Throttling Event Handlers (Conceptual)

While not a direct `filter()` use, you can conceptually think of `filter()` as part of a larger pattern to control event emissions. For example, if you have a stream of events, you might "filter" them based on a time interval using a custom logic (though typically this is done with specialized libraries or more complex debouncing/throttling implementations).

<!-- NOTE this is nodejs topic -->

```javascript
// This is a conceptual example, actual debouncing/throttling is more complex.
const rawEvents = [
  { type: "click", timestamp: 100 },
  { type: "mousemove", timestamp: 110 },
  { type: "click", timestamp: 500 },
  { type: "mousemove", timestamp: 520 },
  { type: "click", timestamp: 1000 },
];

const MIN_INTERVAL = 300; // milliseconds
let lastEventTimestamp = 0;

const processedEvents = rawEvents.filter((event) => {
  if (event.timestamp - lastEventTimestamp > MIN_INTERVAL) {
    lastEventTimestamp = event.timestamp;
    return true;
  }
  return false;
});

console.log(processedEvents);
// Output: [
//   { type: 'click', timestamp: 100 }, // First event always passes
//   { type: 'click', timestamp: 500 }, // 500 - 100 = 400 > 300
//   { type: 'click', timestamp: 1000 } // 1000 - 500 = 500 > 300
// ]
```

#### 4\. Filtering with Closure for Dynamic Criteria

You can use closures to create filter functions with dynamic or configurable criteria, making your filters more reusable and flexible.

<!-- NOTE comeback when closure is done -->

```javascript
function createPriceFilter(minPrice, maxPrice) {
  return (product) => product.price >= minPrice && product.price <= maxPrice;
}

const electronics = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Monitor", category: "Electronics", price: 300 },
  { name: "Keyboard", category: "Accessories", price: 75 },
];

const affordableElectronics = electronics.filter(createPriceFilter(100, 500));
const highEndElectronics = electronics.filter(
  createPriceFilter(1000, Infinity),
);

console.log(affordableElectronics);
// Output: [{ name: 'Monitor', category: 'Electronics', price: 300 }]

console.log(highEndElectronics);
// Output: [{ name: 'Laptop', category: 'Electronics', price: 1200 }]
```

#### 5\. Combining with `map()` and `reduce()` for Complex Data Transformations

`filter()` is often a preliminary step in a data processing pipeline that includes `map()` (for transformation) and `reduce()` (for aggregation).

```javascript
// filter the sales over $500
// Transform to revenue
// Sum the revenues
const salesData = [
  { item: "Laptop", quantity: 2, price: 1200 },
  { item: "Mouse", quantity: 5, price: 25 },
  { item: "Monitor", quantity: 1, price: 300 },
  { item: "Keyboard", quantity: 3, price: 75 },
];

const highValueSalesRevenue = salesData
  .filter((sale) => sale.quantity * sale.price > 250) // Filter for sales over $500
  .map((sale) => sale.quantity * sale.price) // Transform to revenue
  .reduce((total, revenue) => total + revenue, 0); // Sum the revenues

console.log(highValueSalesRevenue);
// Output: 2700 (Laptop: 2*1200 = 2400, Monitor: 1*300 = 300. Total = 2400 + 300 = 2700)
```

These examples demonstrate how `filter()` can be leveraged beyond basic use cases to build more sophisticated and efficient data manipulation logic in JavaScript.
