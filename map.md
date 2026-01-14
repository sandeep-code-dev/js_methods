# Javascript `map()` method

Florin pop youtube link of `map()` method

<https://www.youtube.com/watch?v=P4RAFdZDn3M>

#### It is a Iteration / Looping Methods (Higher-Order Functions)

The `map()` method in JavaScript is a powerful and commonly used method for arrays. It creates a **new array** by calling a provided function on every element in the calling array. Here's a detailed explanation:

## Syntax

```javascript
arr.map(callback(currentValue, index, array), thisArg);
```

---

## What `map()` Does

1. **Iterates:** It goes through each element of the original array one by one.
2. **Transforms:** For each element, it executes a **callback function** you provide. This function performs some operation or transformation on the element.
3. **Creates New Array:** Instead of modifying the original array, `map()` gathers the results of each callback function call into a brand-new array.
4. **Maintains Order:** The order of elements in the new array will be the same as the order of elements in the original array.

---

#### Parameters

- **`callback` (required):** A function that is called for every element in the array. It takes up to three arguments:
  - **`currentValue` (required):** The current element being processed in the array.
  - **`index` (optional):** The index of the current element being processed.
  - **`array` (optional):** The array `map` was called upon.
- **`thisArg` (optional):** A value to use as `this` when executing the `callback` function.

#### Return Value

- A **new array** containing the results of calling the `callback` function on every element in the original array.

---

## How it Works (Conceptual Example)

Imagine you have an array of numbers: `[1, 2, 3]`. If you want to double each number, `map()` would do this:

1. It takes `1`, passes it to your doubling function, and gets `2`.
2. It takes `2`, passes it to your doubling function, and gets `4`.
3. It takes `3`, passes it to your doubling function, and gets `6`.
4. It then returns a new array: `[2, 4, 6]`.

The original array `[1, 2, 3]` remains unchanged.

---

## Key Characteristics and Use Cases

- **Non-Mutating:** This is a crucial point. `map()` **does not modify the original array**. It always returns a new array. This makes it a "pure function" in the functional programming sense, which can lead to more predictable and easier-to-debug code.
- **Transformation:** Its primary purpose is to transform data from one format to another.
- **Common Use Cases:**
  - **Transforming an array of numbers:** Doubling, squaring, converting units, etc.
  - **Extracting specific properties from an array of objects:** If you have an array of user objects, you might use `map()` to get an array of just their names or IDs.
  - **Formatting data:** Taking raw data and formatting it for display (e.g., currency formatting).
  - **Rendering lists in UI frameworks:** In React, Vue, Angular, etc., `map()` is frequently used to iterate over data and generate a list of UI components.
  - **Creating a new array with calculated values.**

---

## Examples

#### 1\. Doubling Numbers

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(numbers); // Output: [1, 2, 3, 4, 5] (original array unchanged)
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10] (new array)
```

#### 2\. Using Arrow Functions (more concise)

Arrow functions are very commonly used with `map()` due to their conciseness.

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

#### 3\. Extracting Properties from Objects

```javascript
const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 24 },
  { id: 3, name: "Charlie", age: 35 },
];

const userNames = users.map((user) => user.name);
const userAges = users.map((user) => user.age);

console.log(userNames); // Output: ['Alice', 'Bob', 'Charlie']
console.log(userAges); // Output: [30, 24, 35]
```

#### 4\. Formatting Data

```javascript
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
];

const formattedProducts = products.map((product) => {
  return {
    name: product.name.toUpperCase(),
    price: `$${product.price.toFixed(2)}`, // Format price to 2 decimal places with a dollar sign
  };
});

console.log(formattedProducts);
/*
Output:
[
  { name: 'LAPTOP', price: '$1200.00' },
  { name: 'MOUSE', price: '$25.00' },
  { name: 'KEYBOARD', price: '$75.00' }
]
*/
```

#### 5\. Formatting data to find the total value of particular product using `map()` method

```js
const products = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 1500,
    count: 5,
  },
  {
    name: "phone",
    price: 500,
    count: 10,
  },
];

const totalProductsValue = products.map((item) => item.price * item.count);
console.log(totalProductsValue);
// ouput [ 5000, 7500, 5000 ]

const totalProductsValueWithName = products.map((item) => ({
  name: item.name,
  totalValue: item.price * item.count,
}));
console.log(totalProductsValueWithName);
//  output [
//  { name: 'laptop', totalValue: 5000 },
//  { name: 'desktop', totalValue: 7500 },
//  { name: 'phone', totalValue: 5000 }
//   ]
```

#### 5\. Using `index` and `array` arguments

```javascript
const letters = ["a", "b", "c"];

const indexedLetters = letters.map((letter, index) => {
  return `${index}: ${letter}`;
});

console.log(indexedLetters); // Output: ['0: a', '1: b', '2: c']

const originalArrayInCallback = letters.map((letter, index, arr) => {
  console.log(
    `Current element: ${letter}, Index: ${index}, Original array: ${arr}`,
  );
  return letter.toUpperCase();
});
console.log(originalArrayInCallback);
// This will log the original array at each iteration within the callback
// Output
// [ '0: a', '1: b', '2: c' ]
// Current element: a, Index: 0, Original array: a,b,c
// Current element: b, Index: 1, Original array: a,b,c
// Current element: c, Index: 2, Original array: a,b,c
// output: [ 'A', 'B', 'C' ]
```

---

## Advance uses of `map()` method

You're looking for some more advanced and perhaps less obvious uses of the JavaScript **`map()`** method\! While its core purpose remains transformation, here are several examples that go beyond simple doubling or property extraction, showcasing its flexibility:

---

## 1\. Chaining `map()` with Other Array Methods

**`map()`** is often used in conjunction with **`filter()`**, **`reduce()`**, or other array methods to create powerful data pipelines.

**Example: Filter, then Map**

Imagine you have a list of employees and want to get the full names of only the active senior employees.

```javascript
const employees = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Smith",
    status: "active",
    seniority: "junior",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Johnson",
    status: "inactive",
    seniority: "senior",
  },
  {
    id: 3,
    firstName: "Charlie",
    lastName: "Brown",
    status: "active",
    seniority: "senior",
  },
  {
    id: 4,
    firstName: "Diana",
    lastName: "Miller",
    status: "active",
    seniority: "junior",
  },
];

const seniorActiveEmployeeNames = employees
  .filter((emp) => emp.status === "active" && emp.seniority === "senior") // Filter first
  .map((emp) => `${emp.firstName} ${emp.lastName}`); // Then map

console.log(seniorActiveEmployeeNames); // Output: ['Charlie Brown']
```

---

## 2\. Flattening Nested Arrays (One Level Deep)

<!-- NOTE  do when flat is learnt.-->

While **`flatMap()`** is specifically designed for this, you can achieve a similar effect for one level of nesting using **`map()`** followed by **`flat(1)`** (or `flat()` without an argument as it defaults to `1`).

**Example:**

Transform an array of arrays into a single, flattened array after a transformation.

```javascript
const categories = [
  { name: "Fruits", items: ["apple", "banana"] },
  { name: "Vegetables", items: ["carrot", "spinach"] },
];

const allItems = categories.map((category) => category.items).flat();
// Alternatively: categories.flatMap(category => category.items);

console.log(allItems); // Output: ['apple', 'banana', 'carrot', 'spinach']
```

---

## 3\. Creating HTML/JSX Elements for UI Rendering

This is extremely common in frontend frameworks like React, Vue, and Angular, where **`map()`** is used to render lists of components or elements.

**Example (Conceptual React/JSX):**

```javascript
// In a React component (or similar UI framework)
const products = [
  { id: "p1", name: "Laptop", price: 1200 },
  { id: "p2", name: "Mouse", price: 25 },
  { id: "p3", name: "Keyboard", price: 75 },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

// In vanilla JS, you might create actual DOM elements:
const productDivs = products.map((product) => {
  const div = document.createElement("div");
  div.className = "product-card";
  div.innerHTML = `<h3>${product.name}</h3><p>Price: $${product.price.toFixed(2)}</p><button>Add to Cart</button>`;
  return div;
});

// productDivs is now an array of HTML div elements
// You would then append them to the DOM:
// productDivs.forEach(div => document.body.appendChild(div));
```

---

## 4\. Creating Lookup Maps/Objects from Arrays

<!-- NOTE practice when Object is done -->

While **`reduce()`** is often better for creating a single object from an array, you can use **`map()`** as an intermediate step to prepare data before combining it, or sometimes, you might just want an array of key-value pairs that you then convert to an object.

**Example: Preparing for an `Object.fromEntries()` conversion**

You have user data and want to create an object where the keys are user IDs.

```javascript
const users = [
  { id: "u1", name: "Alice" },
  { id: "u2", name: "Bob" },
  { id: "u3", name: "Charlie" },
];

// Map to an array of [key, value] pairs, then use Object.fromEntries
const usersById = Object.fromEntries(users.map((user) => [user.id, user]));

console.log(usersById);
/*
Output:
{
  u1: { id: 'u1', name: 'Alice' },
  u2: { id: 'u2', name: 'Bob' },
  u3: { id: 'u3', name: 'Charlie' }
}
*/
```

_Note_: While this uses `map()`, **`reduce()`** is generally more direct for creating a single object from an array:

```javascript
const usersByIdReduced = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});
```

The **`map()`** approach followed by **`Object.fromEntries()`** can be more readable for some, especially when the transformation to `[key, value]` pairs is complex.

---

## 5\. Type Coercion / Data Cleaning

**`map()`** can be used to ensure all elements in an array conform to a specific type or format.

<!-- NOTE come back when learnt `Number` -->

**Example: Converting String Numbers to Actual Numbers**

If you receive data where numbers are strings, **`map()`** can quickly convert them.

```javascript
const stringNumbers = ["1", "2", "3", "4.5"];

const actualNumbers = stringNumbers.map(Number); // Using the Number constructor as a callback
// Or: stringNumbers.map(str => parseFloat(str));
// Or: stringNumbers.map(str => +str);

console.log(actualNumbers); // Output: [1, 2, 3, 4.5]
console.log(typeof actualNumbers[0]); // Output: 'number'
```

---

## 6\. Working with `thisArg` (Less Common in Modern JS)

While arrow functions largely mitigate the need for **`thisArg`** due to their lexical `this` binding, understanding it can be useful, especially when working with older codebases or specific class methods.

**Example:** Using a `this` context for a calculation.

```javascript
class Calculator {
  constructor(factor) {
    this.factor = factor;
  }

  multiply(value) {
    return value * this.factor;
  }

  // Method to process an array using the instance's factor
  processArray(arr) {
    // Here, this.multiply is passed as the callback.
    // Without this, 'this' inside multiply would refer to the global object or undefined in strict mode.
    return arr.map(this.multiply, this);
  }
}

const myCalc = new Calculator(10);
const values = [1, 2, 3];

const multipliedValues = myCalc.processArray(values);
console.log(multipliedValues); // Output: [10, 20, 30]

// Without `this`:
// const failedAttempt = values.map(myCalc.multiply); // This would likely throw an error or return NaN
// console.log(failedAttempt);
```

---

## 7\. Creating a Sequence or Range (Combined with `Array.from()`)

This isn't **`map()`** on its own, but **`map()`** is often used with **`Array.from()`** to generate sequences of numbers or items.

<!-- NOTE comeback when learnt `Array.from()` -->

**Example: Creating a range of numbers**

```javascript
-- Create an array of numbers from 1 to 5
const range = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(range); // Output: [1, 2, 3, 4, 5]

-- Create an array of objects representing days of the week
const days = Array.from({ length: 7 }, (_, i) => {
  const date = new Date(2025, 0, i + 1); // Jan 1st, 2nd, etc.
  return {
    dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'long' }),
    date: date.getDate()
  };
});

console.log(days);
/*
Output: (assuming Jan 1st, 2025 is a Wednesday)
[
  { dayOfWeek: 'Wednesday', date: 1 },
  { dayOfWeek: 'Thursday', date: 2 },
  { dayOfWeek: 'Friday', date: 3 },
  { dayOfWeek: 'Saturday', date: 4 },
  { dayOfWeek: 'Sunday', date: 5 },
  { dayOfWeek: 'Monday', date: 6 },
  { dayOfWeek: 'Tuesday', date: 7 }
]
*/
```

## When NOT to use `map()`

- **When you don't need a new array:** If your goal is simply to iterate over an array and perform side effects (like logging to the console, making an API call, or modifying elements _in place_), `forEach()` or a `for...of` loop might be more appropriate. `map()` is specifically designed to **return a new array**.
- **When you want to filter elements:** If you want to select a subset of elements based on a condition, `filter()` is the right choice.
- **When you want to reduce an array to a single value:** If you want to sum, average, or combine all elements into a single result, `reduce()` is what you need.

In summary, `map()` is an indispensable tool in modern JavaScript development for transforming arrays into new arrays based on a given transformation function. Its non-mutating nature promotes cleaner and more functional programming styles.
These examples highlight how **`map()`** serves as a fundamental building block for data manipulation and transformation in JavaScript, often working in concert with other methods and language features to solve complex problems elegantly.
