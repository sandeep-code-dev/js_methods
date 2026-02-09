The JavaScript `toSorted()` method is a new, non-mutating array method (introduced in ES2023) that returns a new array with the elements sorted according to a provided comparison function, or in a default lexical (string) ascending order. It is the immutable counterpart to the existing `sort()` method.

---

### The `toSorted()` Method in JavaScript

#### It is a Non-Mutating Array Methods (ES2023 Additions)

Historically, sorting an array (`Array.prototype.sort()`) directly mutated the original array. This often led to scenarios where developers had to create a copy first (`[...arr].sort()` or `arr.slice().sort()`) if they needed to preserve the original array. `toSorted()` directly addresses this by always returning a brand new, sorted array.

#### Syntax:

```javascript
arr.toSorted(compareFn);
```

#### Parameters:

- `compareFn` (Optional): A function that defines the sort order.
  - If omitted, the elements are converted to strings and sorted according to their Unicode code points (lexical ascending order).
  - If provided, it should accept two arguments (`a`, `b`) and return:
    - A negative value if `a` should come before `b`.
    - A positive value if `a` should come after `b`.
    - `0` if `a` and `b` are considered equal for sorting purposes.

#### Return Value:

- A new `Array` instance with the elements of the original array sorted.

#### How it Works (Mental Model):

Imagine `toSorted()` as a smart copy machine that also sorts. You feed it a messy list, and it spits out a _new_, neatly sorted list based on rules you provide (or default alphabetical rules), leaving your original messy list exactly as it was.

#### Key Features:

- **Non-mutating:** This is its defining characteristic. It never modifies the original array.
- **Returns a New Array:** Always creates and returns a completely new array instance.
- **Shallow Copy:** Like most array methods that return new arrays, it performs a shallow copy. If your array contains objects, the new array will contain references to the _same_ objects, not copies of them. Modifying a nested object in the sorted array will still affect the original object.
- **Readability:** Clearly indicates that the original array is not being changed.
- **Stable Sort:** Guarantees that the relative order of equal elements (as determined by `compareFn`) is preserved.

#### Basic Examples:

**1. Default Lexical Sort (Strings):**

```javascript
const fruits = ["banana", "apple", "cherry", "date"];
const sortedFruits = fruits.toSorted();

console.log(sortedFruits); // Output: ["apple", "banana", "cherry", "date"]
console.log(fruits); // Output: ["banana", "apple", "cherry", "date"] (original is unchanged)
```

**2. Numeric Sort (Ascending):**

The default sort converts numbers to strings, which can lead to incorrect numerical sorting (e.g., 10 comes before 2). A `compareFn` is essential for numbers.

```javascript
const originalNumbers = [1, 10, 5, 2, 20];

// Incorrect default sort:
// console.log(originalNumbers.toSorted()); // Output: [1, 10, 2, 20, 5] (lexical)

// Correct numeric ascending sort:
const sortedNumbersAsc = originalNumbers.toSorted((a, b) => a - b);
console.log(sortedNumbersAsc); // Output: [1, 2, 5, 10, 20]
console.log(originalNumbers); // Output: [1, 10, 5, 2, 20] (original is unchanged)
```

**3. Numeric Sort (Descending):**

```javascript
const scores = [85, 92, 78, 95, 88];
const sortedScoresDesc = scores.toSorted((a, b) => b - a);
console.log(sortedScoresDesc); // Output: [95, 92, 88, 85, 78]
```

**4. Sorting Objects by a Property:**

```javascript
const users = [
  { name: "Bob", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 35 },
];

// Sort by age ascending
const sortedUsersByAge = users.toSorted((a, b) => a.age - b.age);
console.log(sortedUsersByAge);
/* Output:
[
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
]
*/
console.log(users); // Original array unchanged

// Shallow copy behavior illustrated:
sortedUsersByAge[0].age = 26; // Modify the object in the new array
console.log(users[1]); // Output: { name: 'Alice', age: 26 } (Original array's object is modified)
```

---

### When to Use `toSorted()`:

1.  **When You Need a Sorted Copy, Preserving the Original Array:**
    This is the primary and most common use case. In functional programming paradigms, or when working with state management (like in React or Redux), immutability is crucial. `toSorted()` perfectly fits this need.

    ```javascript
    const originalPosts = [
      { id: 1, title: "Intro to JS", likes: 10 },
      { id: 2, title: "Advanced CSS", likes: 50 },
      { id: 3, title: "React Basics", likes: 30 },
    ];

    // For a "Most Liked" section on a UI, without affecting the original order
    const mostLikedPosts = originalPosts.toSorted((a, b) => b.likes - a.likes);

    console.log("Most Liked:", mostLikedPosts);
    console.log("Original Posts:", originalPosts); // Original order preserved
    ```

2.  **Chaining Array Methods:**
    Since `toSorted()` returns a new array, you can directly chain other non-mutating array methods (`map`, `filter`, `reduce`, `slice`, `toReversed()`, etc.) onto its result without an intermediate step.

    ```javascript
    const products = [
      { name: "Laptop", price: 1200, category: "Electronics" },
      { name: "Keyboard", price: 75, category: "Electronics" },
      { name: "Mouse", price: 25, category: "Electronics" },
      { name: "Book", price: 15, category: "Books" },
    ];

    // Get the names of the 2 most expensive electronics products
    const expensiveElectronicsNames = products
      .filter((p) => p.category === "Electronics") // Filter first
      .toSorted((a, b) => b.price - a.price) // Sort descending by price
      .slice(0, 2) // Take top 2
      .map((p) => p.name); // Get names

    console.log(expensiveElectronicsNames); // Output: ["Laptop", "Keyboard"]
    console.log(products); // Original array untouched
    ```

3.  **Readability and Clarity:**
    The method name `toSorted()` clearly communicates that a _new_, sorted array will be returned, making the code more self-documenting compared to `arr.slice().sort()`.

    ```javascript
    // Less clear intention (requires knowing slice() makes a copy)
    const oldWay = myArray.slice().sort((a, b) => a - b);

    // Clearer intention
    const newWay = myArray.toSorted((a, b) => a - b);
    ```

---

### When NOT to Use `toSorted()`:

1.  **When You Intend to Mutate the Original Array:**
    If you genuinely want to sort the array in place and don't care about preserving the original order (or you actively want to modify it), `sort()` is more direct and slightly more performant (as it doesn't create a new array).
    - **Use `sort()` instead:**
      ```javascript
      const tasks = ["Buy groceries", "Walk dog", "Pay bills"];
      // DO: If you want to permanently sort 'tasks' alphabetically
      tasks.sort();
      console.log(tasks); // Output: ["Buy groceries", "Pay bills", "Walk dog"]
      ```

2.  **When Browser Compatibility for Older Environments is a Concern (Without Polyfill):**
    `toSorted()` is an ES2023 feature. If you're targeting older browsers or environments that don't transpile newer JavaScript features, `toSorted()` will not be available. In such cases, the `[...arr].sort()` or `arr.slice().sort()` pattern is the compatible solution.
    - **Fallback for older environments:**
      ```javascript
      const myArr = [1, 3, 2];
      const sortedCopy = [...myArr].sort(); // Works universally
      // Or:
      // const sortedCopy = myArr.slice().sort();
      ```

3.  **When Performance is Absolutely Critical for Very Large Arrays and Original Can Be Mutated:**
    While the performance difference is often negligible for typical array sizes, `toSorted()` does involve creating a new array in memory. For extremely large arrays where every millisecond and memory allocation matters, and modifying the original is acceptable, `sort()` might have a minor performance edge. However, this is a rare optimization concern in most web development.

---

### Advanced Uses with Examples:

**1. Sorting by Multiple Criteria (Chained/Nested Sort):**

You can create a `compareFn` that handles multiple sorting levels, for example, sorting by category, then by price within each category.

```javascript
const products = [
  { name: "Banana", category: "Fruit", price: 1.0 },
  { name: "Apple", category: "Fruit", price: 1.5 },
  { name: "Milk", category: "Dairy", price: 3.0 },
  { name: "Cheese", category: "Dairy", price: 5.0 },
  { name: "Bread", category: "Bakery", price: 2.5 },
];

// Sort first by category (alphabetical), then by price (ascending)
const sortedProducts = products.toSorted((a, b) => {
  if (a.category < b.category) return -1;
  if (a.category > b.category) return 1;
  // If categories are the same, sort by price
  return a.price - b.price;
});

console.log(sortedProducts);
/* Output:
[
  { name: 'Bread', category: 'Bakery', price: 2.5 },
  { name: 'Cheese', category: 'Dairy', price: 5 },
  { name: 'Milk', category: 'Dairy', price: 3 },
  { name: 'Apple', category: 'Fruit', price: 1.5 },
  { name: 'Banana', category: 'Fruit', price: 1 }
]
*/
```

**2. Sorting Mixed Data Types with Custom Logic:**

If your array contains mixed data types and you need a specific, robust sorting order.

```javascript
const mixedItems = [
  10,
  "apple",
  null,
  undefined,
  5,
  "banana",
  true,
  { id: 1 },
  false,
];

const customSortedItems = mixedItems.toSorted((a, b) => {
  const typeA = typeof a;
  const typeB = typeof b;

  // Define a custom order for types
  const typeOrder = {
    undefined: 0,
    object: 1,
    boolean: 2,
    number: 3,
    string: 4,
    function: 5,
  };

  const orderA = typeOrder[typeA] ?? 99; // Default for unknown types
  const orderB = typeOrder[typeB] ?? 99;

  if (orderA !== orderB) {
    return orderA - orderB; // Sort by type first
  }

  // If types are the same, apply secondary sort (e.g., natural string or numeric)
  if (typeA === "number") return a - b;
  if (typeA === "string") return a.localeCompare(b);
  if (typeA === "boolean") return a === b ? 0 : a ? -1 : 1; // true before false
  // For objects, fall back to default comparison or more specific ID comparison
  if (typeA === "object" && a && b && "id" in a && "id" in b)
    return a.id - b.id;
  return 0; // Maintain original order for other types or equal values
});

console.log(customSortedItems);
/* Output (Actual Output)
[
  null,      { id: 1 },
  true,      false,
  5,         10,
  'apple',   'banana',
  undefined
]
*/

/* Output: (Output that came with example from Gemini)
[
  undefined,
  null,          // typeof null is 'object', comes after undefined due to typeOrder
  { id: 1 },
  false,
  true,
  5,
  10,
  'apple',
  'banana'
]
*/
```

**3. Sorting by a Derived or Computed Property:**

Sorting based on a value that isn't directly present but can be computed from the object.

```javascript
const items = [
  { name: "FileA.txt", sizeKB: 100 },
  { name: "ImageB.jpg", sizeKB: 1024 }, // 1MB
  { name: "ReportC.pdf", sizeKB: 500 },
];

// Sort items by a computed size (e.g., megabytes), descending
const sortedBySizeMB = items.toSorted((a, b) => {
  const sizeAMB = a.sizeKB / 1024;
  const sizeBMB = b.sizeKB / 1024;
  return sizeBMB - sizeAMB; // Descending
});

console.log(sortedBySizeMB);
/* Output:
[
  { name: 'ImageB.jpg', sizeKB: 1024 },
  { name: 'ReportC.pdf', sizeKB: 500 },
  { name: 'FileA.txt', sizeKB: 100 }
]
*/
```

`toSorted()` is a highly valuable addition to JavaScript for anyone prioritizing immutability and cleaner code. It simplifies common patterns of sorting a copy of an array, making code more robust and easier to reason about, especially in modern web development contexts.
