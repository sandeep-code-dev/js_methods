The JavaScript `every()` method is a powerful array iterator that tests whether **all** elements in the array pass the test implemented by the provided function. It returns a boolean value.

#### I. Iteration / Looping Methods (Higher-Order Functions)

---

### The `every()` Method in JavaScript

The `every()` method executes a provided `callback` function once for each element in an array. It returns `true` if the `callback` returns a truthy value for **every** element, and `false` otherwise. It short-circuits: if the `callback` returns `false` for any element, `every()` immediately stops iterating and returns `false`.

#### Syntax:

```javascript
arr.every(callback(element, index, array), thisArg);
```

#### Parameters:

- `callback` (Required): A function to execute on each element in the array. It can take up to three arguments:
  - `element`: The current element being processed in the array.
  - `index` (Optional): The index of the current element being processed.
  - `array` (Optional): The array `every()` was called upon.
- `thisArg` (Optional): A value to use as `this` when executing the `callback`.

#### Return Value:

- `true` if the `callback` function returns `true` for **all** array elements.
- `false` if the `callback` function returns `false` for at least one array element.
- Returns `true` for an **empty array** because there are no elements to fail the test.

#### Key Features:

- **Non-mutating:** `every()` does not modify the original array.
- **Short-circuiting:** It stops iterating as soon as the `callback` returns `false`.
- **Callback arguments:** Provides access to the element, its index, and the original array.

#### How it Works (Mental Model):

Imagine `every()` as a strict quality control check for every item on an assembly line. It passes each item to a "tester" function. If _any_ item fails the test, the entire batch is rejected (`false`). Only if _all_ items pass, is the batch approved (`true`).

#### Basic Examples:

**1. Checking if All Numbers are Even:**

```javascript
const numbers1 = [2, 4, 6, 8];
const allEven1 = numbers1.every((num) => num % 2 === 0);
console.log(allEven1); // Output: true

const numbers2 = [2, 4, 7, 8]; // 7 is odd
const allEven2 = numbers2.every((num) => num % 2 === 0);
console.log(allEven2); // Output: false (stops at 7)
```

**2. Checking if All Elements Meet a Condition (e.g., age greater than 18):**

```javascript
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];

const allAdults = people.every((person) => person.age >= 18);
console.log(allAdults); // Output: true

const people2 = [
  { name: "David", age: 16 }, // David is under 18
  { name: "Eve", age: 22 },
];
const allAdults2 = people2.every((person) => person.age >= 18);
console.log(allAdults2); // Output: false (stops at David)
```

**3. Behavior with an Empty Array:**

```javascript
const emptyArray = [];
const resultEmpty = emptyArray.every((item) => item > 0);
console.log(resultEmpty); // Output: true (vacuously true, no elements to fail)
```

**4. Using the `index` and `array` arguments (less common for `every`):**

```javascript
const values = [1, 2, 3];
// Check if elements are in ascending order based on index
const isInOrder = values.every((value, index, arr) => {
  if (index === 0) return true; // First element has no previous to compare
  return value > arr[index - 1];
});
console.log(isInOrder); // Output: true
```

---

### When to Use `every()`:

1.  **Validating All Elements Against a Rule:**
    This is the primary use case. When you need to assert that _all_ items in a collection conform to a specific standard or condition.

    ```javascript
    const passwords = ["Pa$$word1", "Secure@123", "MyP@ssword"];
    // Check if all passwords contain at least one special character
    const hasSpecialChar = (str) => /[!@#$%^&*()]/.test(str);
    const allPasswordsStrong = passwords.every((pass) => hasSpecialChar(pass));
    console.log(`Are all passwords strong? ${allPasswordsStrong}`); // Output: true
    ```

2.  **Checking for Homogeneity or Consistency:**
    To ensure all elements are of a certain type, size, or share a common property.

    ```javascript
    const files = [
      { name: "report.pdf", type: "pdf", size: 1024 },
      { name: "image.jpg", type: "jpg", size: 512 },
      { name: "doc.pdf", type: "pdf", size: 2048 },
    ];
    // Check if all files are PDFs
    const allPdfs = files.every((file) => file.type === "pdf");
    console.log(`Are all files PDFs? ${allPdfs}`); // Output: false

    // Check if all file sizes are below a limit
    const MAX_SIZE = 3000;
    const allFilesWithinLimit = files.every((file) => file.size <= MAX_SIZE);
    console.log(`Are all files within size limit? ${allFilesWithinLimit}`); // Output: true
    ```

3.  **Form Validation (e.g., checking if all fields are valid):**
    When you have an array of form input states and need to know if the entire form is valid.

    ```javascript
    const formFields = [
      { name: "username", value: "john_doe", isValid: true },
      { name: "email", value: "john@example.com", isValid: true },
      { name: "password", value: "", isValid: false }, // Empty password
    ];

    const isFormValid = formFields.every((field) => field.isValid);
    console.log(`Is the form completely valid? ${isFormValid}`); // Output: false
    ```

4.  **Implementing Logical AND for Array Elements:**
    Conceptually, `every()` is like applying a logical AND operation across a series of boolean checks.

    ```javascript
    const conditions = [true, true, false, true];
    const allTrue = conditions.every((c) => c === true); // Or just conditions.every(c => c)
    console.log(`Are all conditions true? ${allTrue}`); // Output: false
    ```

---

### When NOT to Use `every()`:

1.  **When You Need to Modify the Array:**
    `every()` is a non-mutating method. It's for testing, not changing, the array. If you need to transform or modify elements, use `map()`, `forEach()`, or `splice()`.

    ```javascript
    const arr = [1, 2, 3];
    // DON'T: every won't change the array
    // arr.every(num => arr[num-1] = num * 10);
    // console.log(arr); // Still [1,2,3]

    // DO: Use map for transformation
    const transformedArr = arr.map((num) => num * 10);
    console.log(transformedArr); // [10, 20, 30]
    ```

2.  **When You Need to Find at Least One Element that Passes a Test:**
    If you only need to know if _any_ element satisfies a condition (logical OR), `some()` is the appropriate method.

    - **Use `some()` instead:**

      ```javascript
      const numbers = [1, 3, 5, 8]; // Contains one even number

      // DON'T use every if you just want to find *any* even number:
      // const hasEven = !numbers.every(num => num % 2 !== 0); // Less direct

      // DO: Use some()
      const hasEven = numbers.some((num) => num % 2 === 0);
      console.log(`Does the array have at least one even number? ${hasEven}`); // Output: true
      ```

3.  **When You Need to Find the Actual Elements that Fail/Pass the Test:**
    `every()` only returns a boolean. If you need a new array containing the elements that passed or failed, use `filter()`.

    - **Use `filter()` instead:**

      ```javascript
      const products = [
        { id: 1, price: 50, inStock: true },
        { id: 2, price: 0, inStock: false }, // Out of stock
        { id: 3, price: 120, inStock: true },
      ];

      // DON'T use every if you want the actual out-of-stock products:
      // const allInStock = products.every(p => p.inStock); // Gives boolean, not products

      // DO: Use filter()
      const outOfStockProducts = products.filter((p) => !p.inStock);
      console.log("Out of stock products:", outOfStockProducts); // Output: [{ id: 2, price: 0, inStock: false }]
      ```

4.  **When Iterating for Side Effects:**
    If your primary goal is to perform an action for each element (e.g., logging, updating a UI element) and the return value of the test is secondary or irrelevant, `forEach()` is typically more appropriate and semantically clearer.

    - **Use `forEach()` instead:**
      ```javascript
      const userEmails = ["a@example.com", "b@example.com"];
      // DO: Use forEach for sending emails (side effect)
      userEmails.forEach((email) => {
        // sendEmail(email); // Imagine this sends an email
        console.log(`Sending email to: ${email}`);
      });
      ```

---

### Advanced Uses with Examples:

**1. Validating Nested Data Structures:**

`every()` can be chained or used on nested arrays to perform deep validation.

```javascript
const batchData = [
  [10, 20, 30],
  [5, 15, 25],
  [7, 12, 18],
];

// Check if every inner array contains only numbers greater than 5
const allNumbersGreaterThanFive = batchData.every((innerArray) =>
  innerArray.every((num) => typeof num === "number" && num > 5),
);
console.log(`Are all numbers in batch > 5? ${allNumbersGreaterThanFive}`); // Output: true

const batchDataWithError = [
  [10, 20, 30],
  [5, 15, 25],
  [7, "invalid", 18], // Contains a string
];
const allNumbersStrictly = batchDataWithError.every((innerArray) =>
  innerArray.every((num) => typeof num === "number"),
);
console.log(`Are all elements strictly numbers? ${allNumbersStrictly}`); // Output: false
```

**2. Implementing a Rule Engine (Simplified):**

You can define an array of validation rules and use `every()` to check if an item passes all of them.

```javascript
const validationRules = [
  (item) => item !== null,
  (item) => typeof item === "number",
  (item) => item >= 0,
  (item) => item % 1 === 0, // Is an integer
];

function validateItem(item) {
  return validationRules.every((rule) => rule(item));
}

console.log(`Is 10 valid? ${validateItem(10)}`); // Output: true
console.log(`Is -5 valid? ${validateItem(-5)}`); // Output: false (fails item >= 0)
console.log(`Is 3.14 valid? ${validateItem(3.14)}`); // Output: false (fails is an integer)
console.log(`Is null valid? ${validateItem(null)}`); // Output: false (fails item !== null)
```

**3. Checking for Monotonicity in a Sequence:**

Ensuring an array is strictly increasing, decreasing, or non-decreasing.

```javascript
const dataPoints = [1, 3, 5, 7, 9];
const decreasingPoints = [9, 7, 5, 3, 1];
const mixedPoints = [1, 5, 3, 7];

function isStrictlyIncreasing(arr) {
  if (arr.length <= 1) return true; // Single or empty array is considered increasing
  return arr.every((value, index) => {
    if (index === 0) return true; // First element has no previous
    return value > arr[index - 1];
  });
}

console.log(
  `[1,3,5,7,9] strictly increasing? ${isStrictlyIncreasing(dataPoints)}`,
); // true
console.log(
  `[9,7,5,3,1] strictly increasing? ${isStrictlyIncreasing(decreasingPoints)}`,
); // false
console.log(
  `[1,5,3,7] strictly increasing? ${isStrictlyIncreasing(mixedPoints)}`,
); // false
```

**4. Ensuring All Elements of an Array are Present in Another Set/Array:**

```javascript
const requiredPermissions = new Set(["read", "write", "execute"]);
const userPermissions = ["read", "write", "execute"]; // User has all required

const hasAllPermissions = [...requiredPermissions].every((permission) =>
  userPermissions.includes(permission),
);
console.log(`User has all required permissions? ${hasAllPermissions}`); // Output: true

const userPermissionsPartial = ["read", "write"];
const hasAllPermissionsPartial = [...requiredPermissions].every((permission) =>
  userPermissionsPartial.includes(permission),
);
console.log(
  `User has all required permissions (partial)? ${hasAllPermissionsPartial}`,
); // Output: false
```

`every()` is an indispensable tool for validation and assertion in JavaScript. Its short-circuiting behavior makes it efficient for scenarios where a single failing condition means the entire test fails. Use it whenever you need to confirm that _all_ elements in a collection meet a specified criterion.
