### Concatenating Two Arrays:\*\*

```js
// 1. Create new array of below two arrays.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// output is [ 1, 2, 3, 4, 5, 6 ]

//2.
// create new array of all the users.
const activeUsers = ["Alice", "Bob"];
const inactiveUsers = ["Charlie", "David"];
// output is [ 'Alice', 'Bob', 'Charlie', 'David' ]
```

### Concatenating Multiple Arrays:\*\*

```js
//1. create combined array of all the arrays.
const arrA = ["a", "b"];
const arrB = ["c", "d"];
const arrC = ["e", "f"];
// output is [ 'a', 'b', 'c', 'd', 'e', 'f' ]

//2.
const shoppingCart = ["milk", "eggs"];
//update the cart with following items ("bread", "cheese")
// output is [ 'milk', 'eggs', 'bread', 'cheese' ]
```

### Concatenating Values (Non-Arrays):\*\*

```javascript
const list = [1, 2];
// add the following values to the array (3, [4, 5], 6)
// output is [ 1, 2, 3, 4, 5, 6 ]
```

### Concatenating an Empty Array:\*\*

Calling `concat()` without any arguments creates a shallow copy of the array.

```javascript
const original = [1, 2, { id: 3 }];
// output is [1, 2, { id: 3 }]
```

# `at()` method

### Accessing Elements from the Start (Positive Index):\*\*

```javascript
const fruits = ["apple", "banana", "cherry", "date"];
// access elements at position 0 and 2
// output: 0 is apple
// output: 2 is cherry
```

### Accessing Elements from the End (Negative Index - The Main Use Case):\*\*

```javascript
const colors = ["red", "green", "blue", "yellow"];

// access elements at the end of an array
// Equivalent to colors[colors.length - 1]
// output is red

// access elements at the second last of an array
// Equivalent to colors[colors.length - 2]
// output is blue
```

**3. `at()` with Strings:**

```javascript
// 1. Access characters from position 0, -1 and -5
const sentence = "JavaScript";
// output is for 0 is J
// output is for -1 is t
// output is for -5 is c
```

### Handling Out-of-Bounds Indices:\*\*

```javascript
// 1. it return undefined for out of the list try accessing elements at index 3 and -4
const numbers = [10, 20, 30];

// Output: undefined (index 3 is out of bounds)
// Output: undefined (index -4 is out of bounds)

// when to use
const items = [];
const lastItemOrDefault = items.at(-1) ?? "No items found";
console.log(lastItemOrDefault); // Output: "No items found"

const data = [1, 2, 3];
const firstItemOrDefault = data.at(0) ?? "No items found";
console.log(firstItemOrDefault); // Output: 1
```

# `forEach()` method

### Logging Each Element:\*\*

```javascript
// 1. Log each element.
const fruits = ["apple", "banana", "cherry"];

/* Output:
apple
banana
cherry
*/
```

### Accessing Index and Array:\*\*

```javascript
const numbers = [10, 20, 30];

/* Output:
Element at index 0: 10. Full array: [10,20,30]
Element at index 1: 20. Full array: [10,20,30]
Element at index 2: 30. Full array: [10,20,30]
*/
```

### Performing Side Effects (e.g., Modifying an External Variable):\*\*

```javascript
// 1. Add all the array values with forEach
const prices = [10.5, 20.0, 5.25];
```

### When to use

1.  **Iterating for Side Effects:**
    The primary use case for `forEach()` is when you need to perform an action for each element in an array and the order of execution matters, but you don't need to create a new array or reduce to a single value. Common side effects include:
    - Logging elements to the console.
    - Updating the DOM (e.g., creating elements, setting text content).
    - Triggering external actions (e.g., sending API requests for each item).
    - Modifying an external variable or object state.

    <!-- end list -->

    ```javascript
    const items = ["item1", "item2", "item3"];
    const listElement = document.getElementById("myList"); // Assuming an HTML <ul> with id 'myList'

    items.forEach((itemText) => {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      if (listElement) {
        listElement.appendChild(listItem);
      }
    });
    ```

2.  **Applying a Function to Each Element (Without Returning a New Array):**
    If you have a function that performs an action and you want to apply it to every element.

        ```javascript
        function processUserData(user) {
          console.log(`Processing user: ${user.name}, ID: ${user.id}`);
          // Simulate sending data to an API for each user
          // sendToAPI(user);
        }

        const users = [
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
        ];
        users.forEach(processUserData);
        ```

    **2. Synchronous Asynchronous Operations (Anti-Pattern Warning):
    While `forEach` can _contain_ asynchronous operations, it does **not\*\* wait for them to complete. This is a common pitfall. If you need to perform sequential async operations, use `for...of` with `await`.

### Map Method

#### 1\. Doubling Numbers

```javascript
// Double the numbers below with map method of js.
const numbers = [1, 2, 3, 4, 5];

// Square root of numbers below with map method of js.
// Output: [1, 2, 3, 4, 5] (original array unchanged)
// Output: [2, 4, 6, 8, 10] (new array)
// Output: [ 1, 4, 9, 16, 25 ]
```

#### 3\. Extracting Properties from Objects

```javascript
const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 24 },
  { id: 3, name: "Charlie", age: 35 },
];

console.log(userNames); // Output: ['Alice', 'Bob', 'Charlie']
console.log(userAges); // Output: [30, 24, 35]
```

#### 4\. Formatting Data

```javascript
// format the date to get the output.
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
];

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

// Ouput [ 5000, 7500, 5000 ]

//  Output [
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
// This will log the original array at each iteration within the callback
// Output
// [ '0: a', '1: b', '2: c' ]
// Current element: a, Index: 0, Original array: a,b,c
// Current element: b, Index: 1, Original array: a,b,c
// Current element: c, Index: 2, Original array: a,b,c
// output: [ 'A', 'B', 'C' ]
```
