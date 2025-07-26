The JavaScript `indexOf()` method is used to find the first index at which a given element can be found in the array (or a substring in a string). It returns `-1` if the element/substring is not present.

---

### The `indexOf()` Method in JavaScript

#### It is a Accessor Methods (Do Not Modify the Original Array)

The `indexOf()` method returns the first index at which a given `searchElement` can be found in the array (or `searchString` in a string), or `-1` if it is not present.

#### Syntax:

**For Arrays:**

```javascript
arr.indexOf(searchElement, fromIndex);
```

**For Strings:**

```javascript
str.indexOf(searchString, position);
```

#### Parameters:

- **For Arrays:**

  - `searchElement` (Required): The element to search for.
  - `fromIndex` (Optional): The index at which to start the search.
    - Defaults to `0`.
    - If `fromIndex` is greater than or equal to the array's length, `-1` is returned, meaning the array will not be searched.
    - If `fromIndex` is negative, it is used as an offset from the end of the array (e.g., `-1` means search from the last element, `-2` from the second-to-last, etc.). If the calculated index is less than 0, the entire array will be searched.

- **For Strings:**

  - `searchString` (Required): The string to search for within the calling string.
  - `position` (Optional): The index at which to begin searching the string.
    - Defaults to `0`.

#### Return Value:

- The first index of the `searchElement`/`searchString` if found.
- `-1` if the `searchElement`/`searchString` is not found.

#### Key Features:

- **Strict Equality Comparison:** `indexOf()` uses strict equality (`===`) for comparisons. This means it will not find `NaN` values in arrays (because `NaN === NaN` is `false`).
  - `[NaN].indexOf(NaN)` is `-1`.
  - Use `includes()` for `NaN` checks.
- **Case-sensitive for strings:** `"Hello".indexOf("hello")` is `-1`.

#### Basic Examples:

**1. Finding an Element in an Array:**

```javascript
const fruits = ["apple", "banana", "cherry", "banana"];

console.log(fruits.indexOf("banana")); // Output: 1 (first occurrence)
console.log(fruits.indexOf("grape")); // Output: -1
```

**2. Finding an Element from a Specific Index:**

```javascript
const numbers = [10, 20, 30, 20, 40];

console.log(numbers.indexOf(20, 0)); // Output: 1 (search from start)
console.log(numbers.indexOf(20, 2)); // Output: 3 (search from index 2)
console.log(numbers.indexOf(20, -2)); // Output: -1 (search from index 3 (4-1), 20 is not found at or after index 3)
```

**3. Searching in Strings:**

```javascript
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.indexOf("fox")); // Output: 16 (index of 'f')
console.log(sentence.indexOf("cat")); // Output: -1
console.log(sentence.indexOf("quick", 5)); // Output: -1 (search starts at index 5, 'quick' starts at 4)
console.log(sentence.indexOf("lazy", 20)); // Output: 31 (search starts at index 20)
```

**4. `indexOf()` and `NaN` (Important Distinction):**

```javascript
const mixedArray = [1, "hello", NaN, undefined];

console.log(mixedArray.indexOf(NaN)); // Output: -1 (does NOT find NaN)
console.log(mixedArray.indexOf(undefined)); // Output: 3
```

---

### When to Use `indexOf()`:

1.  **Finding the First Position of an Element/Substring:**
    When you need to know _where_ an item first appears in a sequence, not just if it exists.

    ```javascript
    const cities = ["London", "Paris", "New York", "London"];
    const firstLondonIndex = cities.indexOf("London");
    console.log(`First London is at index: ${firstLondonIndex}`); // Output: 0
    ```

2.  **Checking for Existence and Then Performing an Action Based on Position:**
    If finding the element is just the first step before modifying or removing it at that specific index.

    ```javascript
    const todoList = ["Buy groceries", "Walk dog", "Pay bills"];
    const taskIndex = todoList.indexOf("Walk dog");

    if (taskIndex !== -1) {
      todoList.splice(taskIndex, 1); // Remove the task
      console.log("Task completed:", todoList);
    }
    ```

3.  **Determining if an Item is Unique or Its First Occurrence:**
    To check if an element is the first of its kind in an array (a common pattern for getting unique values while preserving order).

    ```javascript
    const data = [1, 5, 2, 5, 3, 1, 4];
    const uniqueData = data.filter(
      (item, index) => data.indexOf(item) === index,
    );
    console.log(uniqueData); // Output: [1, 5, 2, 3, 4]
    ```

4.  **Parsing Simple String Formats:**
    When a string contains delimited data and you need to find the position of a delimiter to extract parts.

    ```javascript
    const userData = "ID:123;Name:Alice;Age:30";
    const nameStartIndex = userData.indexOf("Name:") + "Name:".length;
    const nameEndIndex = userData.indexOf(";", nameStartIndex);
    const name = userData.substring(nameStartIndex, nameEndIndex);
    console.log(`User name: ${name}`); // Output: User name: Alice
    ```

---

### When NOT to Use `indexOf()`:

1.  **When You Only Need to Check for Existence (Not Position):**
    `includes()` is more semantic, concise, and handles `NaN` correctly for simple existence checks in arrays.

    - **Use `includes()` instead for arrays:**

      ```javascript
      const allowedColors = ["red", "green", "blue"];
      const userChoice = "purple";

      if (allowedColors.includes(userChoice)) {
        // Clearer and handles NaN
        console.log("Valid color.");
      } else {
        console.log("Invalid color.");
      }
      ```

2.  **When Searching for Objects (by content/property) in an Array:**
    `indexOf()` will only find the exact same _object instance_ (`===`). It will not find an object with identical property values if it's a different instance.

    - **Use `findIndex()` or `find()` with a callback for object property matching:**

      ```javascript
      const users = [{ id: 1 }, { id: 2 }];
      const searchUser = { id: 1 }; // This is a NEW object instance

      console.log(users.indexOf(searchUser)); // Output: -1 (because it's a different instance)

      // Use findIndex() to find by property:
      const userIndex = users.findIndex((user) => user.id === 1);
      console.log(`User with ID 1 found at index: ${userIndex}`); // Output: 0

      // Use find() to get the object itself:
      const foundUser = users.find((user) => user.id === 1);
      console.log("Found user:", foundUser); // Output: { id: 1 }
      ```

3.  **When Searching with Regular Expressions:**
    `indexOf()` only accepts literal strings as `searchString`. For pattern matching using regular expressions, use `String.prototype.search()` or `String.prototype.match()`.

    - **Use `search()` or `match()` for regex:**

      ```javascript
      const text = "My email is test@example.com";
      const emailRegex = /\S+@\S+\.\S+/;

      // console.log(text.indexOf(emailRegex)); // Throws TypeError if used directly

      console.log(text.search(emailRegex)); // Output: 12 (index of 't' in test@...)
      ```

4.  **When Performance is Critical for Very Large Arrays and You're Only Checking Existence:**
    For simple existence checks, `Set.prototype.has()` is significantly faster than `Array.prototype.indexOf()` if you can first convert your array to a `Set` (e.g., for frequent lookups on a static list).

    ```javascript
    const largeArray = Array.from({ length: 100000 }, (_, i) => i.toString());
    const largeSet = new Set(largeArray);

    console.time("indexOf");
    largeArray.indexOf("50000"); // Check existence in the middle
    console.timeEnd("indexOf"); // E.g., ~0.5ms

    console.time("Set.has");
    largeSet.has("50000");
    console.timeEnd("Set.has"); // E.g., ~0.01ms (much faster)
    ```

---

### Advanced Uses with Examples:

**1. Finding All Occurrences of an Element/Substring:**

You can combine `indexOf()` with a loop to find all instances.

```javascript
function findAllIndices(arr, searchElement) {
  const indices = [];
  let currentIndex = arr.indexOf(searchElement);
  while (currentIndex !== -1) {
    indices.push(currentIndex);
    currentIndex = arr.indexOf(searchElement, currentIndex + 1); // Start search after the last found index
  }
  return indices;
}

const numbers = [1, 2, 3, 2, 4, 2, 5];
const indicesOfTwo = findAllIndices(numbers, 2);
console.log(indicesOfTwo); // Output: [1, 3, 5]

const text = "banana";
const indicesOfA = findAllIndices(text.split(""), "a"); // Split string to array of chars
console.log(indicesOfA); // Output: [1, 3, 5]
```

**2. Implementing a Simple "Autosuggest" Filter (Start of String Matching):**

```javascript
const products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Printer"];

function filterProducts(query) {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) => product.toLowerCase().indexOf(lowerQuery) === 0, // Check if query is at the very beginning
  );
}

console.log(filterProducts("mo")); // Output: ['Mouse', 'Monitor']
console.log(filterProducts("key")); // Output: ['Keyboard']
console.log(filterProducts("pri")); // Output: ['Printer']
```

**3. Detecting Duplicate Elements in an Array (and their first occurrence):**

```javascript
const dataPoints = [10, 20, 10, 30, 20, 40];

const firstOccurrences = dataPoints.filter((item, index, arr) => {
  return arr.indexOf(item) === index; // True only for the first time item is encountered
});
console.log("Unique elements (first appearance):", firstOccurrences); // Output: [10, 20, 30, 40]

const duplicates = dataPoints.filter((item, index, arr) => {
  return arr.indexOf(item) !== index; // True for any subsequent occurrence
});
console.log("Duplicate elements:", duplicates); // Output: [10, 20] (the actual duplicate values)
```

**4. Validating String Formats (Checking for Delimiters):**

```javascript
function isValidEmailSimple(email) {
  const atIndex = email.indexOf("@");
  const dotIndex = email.indexOf(".", atIndex); // Find dot after @

  // Basic check: has @, and a dot after @, and not at the very start/end
  return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

console.log(isValidEmailSimple("test@example.com")); // Output: true
console.log(isValidEmailSimple("test@com")); // Output: false (no dot after @ or too soon)
console.log(isValidEmailSimple("@example.com")); // Output: false (@ at start)
console.log(isValidEmailSimple("test@example")); // Output: false (no dot)
```

`indexOf()` is a fundamental method for locating elements/substrings by their exact value and position. While `includes()` offers a more semantic approach for mere existence checks, `indexOf()` remains essential when the precise index is needed for subsequent operations or complex parsing.
