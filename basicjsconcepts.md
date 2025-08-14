An **object literal** is a way to create a JavaScript object directly in your code using curly braces `{}`. It's the simplest and most common method for creating objects. You define the object's properties as `key: value` pairs, separated by commas.

### Key-Value Pairs

Think of an object literal as a collection of data, where each piece of data has a label.

- **Key**: The label (a string or a symbol). In the `map` example, `name` and `age` are the keys.
- **Value**: The data assigned to the key. In the `map` example, `user.name` and `user.age` are the values.

For example, here is a simple object literal:

```javascript
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
```

In this example, `make`, `model`, and `year` are the keys, and `"Toyota"`, `"Corolla"`, and `2020` are their corresponding values.

```javascript
const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 24 },
  { id: 3, name: "Charlie", age: 35 },
];

// --- Correct Method 1: Implicit Return ---
// This is the most common way for a single expression.
// We remove the curly braces and the `return` keyword.
// The parentheses around the object literal are important to distinguish it from the function body.
const userNamesAndAges = users.map((user) => ({
  name: user.name,
  age: user.age,
}));
console.log(userNamesAndAges);
// Expected output: [ { name: "Alice", age: 30 }, { name: "Bob", age: 24 }, { name: "Charlie", age: 35 } ]

// --- Correct Method 2: Explicit Return ---
// Here we keep the curly braces but add the `return` keyword.
const userNamesWithReturn = users.map((user) => {
  return { name: user.name, age: user.age };
});
console.log(userNamesWithReturn);
// Expected output: [ { name: "Alice", age: 30 }, { name: "Bob", age: 24 }, { name: "Charlie", age: 35 } ]
```

The `map` example uses an object literal to create a new object for each user, assigning the `name` and `age` values from the original user object to new keys.
