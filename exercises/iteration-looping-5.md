The JavaScript `fill()` method is a mutable array method that changes all elements in an array, within a selected range, to a static value. It modifies the **original array**.

---

### The `fill()` Method in JavaScript

#### It is a Mutating Methods (Modify the Original Array)

The `fill()` method changes all elements in an array from a `startIndex` to an `endIndex` (exclusive) to a static `value`. It modifies the original array and returns the modified array.

#### Syntax:

```javascript
arr.fill(value, startIndex, endIndex);
```

#### Parameters:

- `value` (Required): The value to fill the array with.
- `startIndex` (Optional): The index at which to start filling.
  - Defaults to `0`.
  - If negative, it's treated as `array.length + startIndex`.
- `endIndex` (Optional): The index at which to stop filling (exclusive).
  - Defaults to `array.length`.
  - If negative, it's treated as `array.length + endIndex`.

#### Return Value:

- The **modified array**. Note that the array is modified in place, and this method returns a reference to the same array.

#### How it Works (Mental Model):

Imagine `fill()` as painting a section of your array with a single color (value). You specify the color, where to start, and where to stop painting.

#### Basic Examples:

**1. Filling an Entire Array:**

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.fill(0);
console.log(numbers); // Output: [0, 0, 0, 0, 0] (original array modified)
```

**2. Filling a Part of an Array:**

```javascript
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Fill from index 1 (inclusive) to index 3 (exclusive) with 'orange'
fruits.fill("orange", 1, 3);
console.log(fruits); // Output: ['apple', 'orange', 'orange', 'date', 'elderberry']
```

**3. Filling from a Specific Start Index to the End:**

```javascript
const data = ["A", "B", "C", "D", "E"];

// Fill from index 2 to the end with 'X'
data.fill("X", 2);
console.log(data); // Output: ['A', 'B', 'X', 'X', 'X']
```

**4. Using Negative Indices:**

```javascript
const items = [10, 20, 30, 40, 50];

// Fill from the second to last element (-2) to the end with 'Z'
items.fill("Z", -2);
console.log(items); // Output: [10, 20, 30, 'Z', 'Z']

// Fill from the beginning to the third from last element (-2 exclusive, so up to -3 inclusive)
items.fill("Y", 0, -2);
console.log(items); // Output: ['Y', 'Y', 'Y', 'Z', 'Z']
```

---

### When to Use `fill()`:

1.  **Initializing an Array with a Static Value:**
    When you need to create an array of a certain size and populate all its elements with the same default value. This is especially useful for pre-allocating memory or setting up a fixed-size structure.

    ```javascript
    // Create an array of 5 empty strings
    const fiveEmptyStrings = new Array(5).fill("");
    console.log(fiveEmptyStrings); // Output: ['', '', '', '', '']

    // Create an array for a 7-day schedule, all initially 'Free'
    const weeklySchedule = new Array(7).fill("Free");
    console.log(weeklySchedule); // Output: ['Free', 'Free', 'Free', 'Free', 'Free', 'Free', 'Free']
    ```

2.  **Resetting a Section of an Array:**
    If you have a portion of an array that needs to be "cleared" or reset to a default value.

    ```javascript
    const gameBoard = [1, 1, 0, 1, 0, 0, 1, 1, 1];
    // Reset a section of the board to 0
    gameBoard.fill(0, 2, 6); // Reset elements from index 2 up to (but not including) 6
    console.log(gameBoard); // Output: [1, 1, 0, 0, 0, 0, 1, 1, 1]
    ```

3.  **Pre-allocating Array Slots for Future Use:**
    Useful when you know the maximum size of an array and want to create it with placeholder values before populating it dynamically.

    ```javascript
    // Create an array of 10 slots for user IDs, initialized to null
    const userIdSlots = new Array(10).fill(null);
    console.log(userIdSlots); // Output: [null, null, null, null, null, null, null, null, null, null]
    ```

---

### When NOT to Use `fill()`:

1.  **When You Need an Immutable Operation (Don't Modify Original Array):**
    `fill()` is a mutable method, meaning it directly changes the array on which it's called. If your application architecture relies on immutability (e.g., in React state management, Redux), you should create a shallow copy first.
    - **Create a copy before filling:**
      ```javascript
      const originalArray = [1, 2, 3, 4, 5];
      const newArray = [...originalArray].fill(0, 2, 4); // Use spread to create a copy
      console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original untouched)
      console.log(newArray); // Output: [1, 2, 0, 0, 5]
      ```

2.  **When Filling with Objects (Shallow Copy Pitfall):**
    If you fill an array with object literals, arrays, or other non-primitive values, `fill()` will assign the _same reference_ to all filled slots. This means modifying one of these objects will affect all other slots pointing to the same object.
    - **Use `map()` for unique object instances:**

      ```javascript
      // DANGEROUS: All elements reference the SAME object
      const badFill = new Array(3).fill({});
      badFill[0].id = 1;
      console.log(badFill); // Output: [{ id: 1 }, { id: 1 }, { id: 1 }] (all changed!)

      // CORRECT: Use map to create unique object instances
      const goodFill = new Array(3).fill(null).map(() => ({})); // Fill with null first, then map
      goodFill[0].id = 1;
      console.log(goodFill); // Output: [{ id: 1 }, {}, {}] (only the first changed)
      ```

3.  **When Populating an Array with Dynamic or Sequential Values:**
    `fill()` is for static values. If you need to populate an array with values that depend on their index or a sequence, use `Array.from()` or `map()`. - **Use `Array.from()` for sequential/dynamic values:**

        <!-- NOTE: comeback when Array.from Done

          ```javascript
          // DON'T:
          // const sequence = new Array(5).fill().forEach((_, i) => i + 1); // Doesn't work like this

          // DO:
          const sequence = Array.from({ length: 5 }, (_, i) => i + 1);
          console.log(sequence); // Output: [1, 2, 3, 4, 5]

          // Or map after initial fill for simpler cases:
          const randomNumbers = new Array(3).fill(null).map(() => Math.random());
          console.log(randomNumbers); // Output: [0.123..., 0.456..., 0.789...] (random numbers)
          ```

---

### Advanced Uses with Examples:

**1. Creating a Fixed-Size Buffer/Pool (e.g., for object reuse):**

<!-- NOTE comeback when classes are done -->

```javascript
class ObjectPool {
  constructor(size, factoryFn) {
    // Pre-fill the pool with instances
    this.pool = new Array(size).fill(null).map(factoryFn);
    this.availableIndices = Array.from({ length: size }, (_, i) => i);
  }

  acquire() {
    if (this.availableIndices.length > 0) {
      const index = this.availableIndices.pop();
      return { object: this.pool[index], index: index };
    }
    return null; // Pool exhausted
  }

  release(index) {
    if (
      index >= 0 &&
      index < this.pool.length &&
      !this.availableIndices.includes(index)
    ) {
      // Reset object state if necessary (e.g., clear data)
      // this.pool[index].reset();
      this.availableIndices.push(index);
    }
  }
}

// Example: A pool of 3 "worker" objects
const workerPool = new ObjectPool(3, () => ({
  id: Math.random().toFixed(2),
  busy: false,
}));

console.log("Initial Pool:", workerPool.pool);
/* Output (example):
Initial Pool: [
  { id: '0.12', busy: false },
  { id: '0.34', busy: false },
  { id: '0.56', busy: false }
]
*/

const worker1 = workerPool.acquire();
if (worker1) {
  worker1.object.busy = true;
  console.log("Acquired Worker 1:", worker1.object);
}

const worker2 = workerPool.acquire();
if (worker2) {
  worker2.object.busy = true;
  console.log("Acquired Worker 2:", worker2.object);
}

console.log("Current Pool (modified in place):", workerPool.pool);
/* Output (example):
Current Pool (modified in place): [
  { id: '0.12', busy: true },  // Worker 1 modified
  { id: '0.34', busy: true },  // Worker 2 modified
  { id: '0.56', busy: false }
]
*/

workerPool.release(worker1.index); // Release worker1 by its index
console.log(
  "After releasing Worker 1, available:",
  workerPool.availableIndices,
); // [0, (original last index)]
```

**2. Clearing a Section of a Pre-allocated Array (e.g., for a board game):**

<!-- NOTE Array.from comeback when learnt -->

```javascript
const chessBoard = Array(64).fill(null); // Initialize 8x8 board

// Simulate setting up some pieces (e.g., pawns on rank 2)
for (let i = 8; i < 16; i++) {
  chessBoard[i] = "bPawn";
}
// And pawns on rank 7
for (let i = 48; i < 56; i++) {
  chessBoard[i] = "wPawn";
}

// Simulate a capture on a square (e.g., square 12, which is bPawn)
chessBoard.fill(null, 12, 13);
console.log("Square 12 after capture:", chessBoard[12]); // Output: Square 12 after capture: null

// Reset a whole rank (e.g., clear all white pawns, which start at index 48 to 55)
chessBoard.fill(null, 48, 56);
console.log(
  "Chess board after clearing white pawns (partial view):",
  chessBoard.slice(40, 60),
);
// Output: [..., null, null, null, null, null, null, null, null, null, null, ...]
```

**3. Initializing a Matrix (2D Array) (Careful with Shallow Copy\!):**

You can use `fill()` to initialize rows, but then `map()` to ensure each row is a _unique_ array.

<!-- NOTE Array.from comeback when learnt -->

```javascript
// Creates a 3x3 matrix initialized with 0s
// Step 1: Create an array of 3 'slots' (null or undefined)
// Step 2: Map each slot to a new array of 3 zeros
const matrix = new Array(3).fill(null).map(() => new Array(3).fill(0));
console.log(matrix);
/* Output:
[
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
*/

// Test for uniqueness of inner arrays (important!)
matrix[0][0] = 9;
console.log(matrix);
/* Output:
[
  [9, 0, 0], // Only this row changed
  [0, 0, 0],
  [0, 0, 0]
]
*/

// Contrast with incorrect way (all rows would be the same array reference):
// const badMatrix = new Array(3).fill(new Array(3).fill(0));
// badMatrix[0][0] = 9;
// console.log(badMatrix); // All rows would be [9,0,0]!
```

`fill()` is a concise and efficient method for bulk-assigning a single value to array elements, either across the entire array or a specified range. Always remember its mutable nature and be particularly mindful of the shallow copy behavior when dealing with non-primitive values.

The JavaScript `reverse()` method is used to reverse the order of the elements in an array. It's a **mutable** method, meaning it changes the original array directly.

---

### The `reverse()` Method in JavaScript

#### It is a Mutating Methods (Modify the Original Array)

The `reverse()` method reverses the order of the elements in an array **in place**. The first array element becomes the last, and the last array element becomes the first.

#### Syntax:

```javascript
arr.reverse();
```

#### Parameters:

- None.

#### Return Value:

- A reference to the **original array**, now reversed.

#### How it Works (Mental Model):

Imagine `reverse()` as flipping your array end-for-end. The first item swaps with the last, the second with the second-to-last, and so on, until the entire array is inverted.

#### Basic Examples:

**1. Reversing an Array of Numbers:**

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1] (original array modified)
```

**2. Reversing an Array of Strings:**

```javascript
const fruits = ["apple", "banana", "cherry"];

fruits.reverse();
console.log(fruits); // Output: ['cherry', 'banana', 'apple']
```

**3. Reversing an Array of Objects:**

`reverse()` works on arrays of objects just like primitives; it reorders the object references.

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

users.reverse();
console.log(users);
/* Output:
[
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' }
]
*/
```

---

### When to Use `reverse()`:

1.  **When You Need to Reverse an Array In-Place:**
    This is the core purpose of `reverse()`. If you're building a feature where you need to change the order of items directly within an existing array and don't need the original order preserved, `reverse()` is ideal.

    ```javascript
    const chatMessages = [
      "User: Hello!",
      "Bot: Hi there!",
      "User: How are you?",
    ];
    // Display messages in chronological order (latest last)
    console.log("Original Order (latest last):", chatMessages);

    // Display messages in reverse chronological order (latest first)
    chatMessages.reverse();
    console.log("Reversed Order (latest first):", chatMessages);
    ```

2.  **Displaying Data in Reverse Order:**
    Common for displaying activity feeds, news articles, or chat logs where the most recent item should appear at the top.

    ```javascript
    const activityLog = [
      { time: "10:00", event: "Logged in" },
      { time: "10:15", event: "Viewed profile" },
      { time: "10:30", event: "Edited settings" },
    ];

    // Assuming activityLog is already sorted oldest to newest, reverse for newest to oldest display
    activityLog.reverse();
    activityLog.forEach((log) => console.log(`${log.time}: ${log.event}`));
    /* Output:
    10:30: Edited settings
    10:15: Viewed profile
    10:00: Logged in
    */
    ```

3.  **String Reversal (in combination with `split()` and `join()`):**
    A classic interview question and a practical use for simple string reversal.

    ```javascript
    const originalString = "JavaScript";
    const reversedString = originalString.split("").reverse().join("");
    console.log(reversedString); // Output: "tpircSavaJ"
    ```

4.  **Implementing Stack-like Behavior with Arrays (Push/Pop from End, Reverse to Process):**
    While `push()` and `pop()` are efficient at the end of an array, if you conceptually need to process items in LIFO (Last-In, First-Out) order but they were added in FIFO (First-In, First-Out) order, reversing the array can prepare it for iteration.

    ```javascript
    const operations = ["load data", "process data", "save results"];
    // Operations were added in order, but we want to undo/process them in reverse
    operations.reverse();
    while (operations.length > 0) {
      const op = operations.pop();
      console.log(`Executing: ${op}`);
    }
    // This will execute 'save results', then 'process data', then 'load data'
    ```

---

### When NOT to Use `reverse()`:

1.  **When You Need an Immutable Operation (Don't Modify Original Array):**
    `reverse()` modifies the array in place. If your application architecture relies on immutability (e.g., in React state management, Redux), you _must_ create a shallow copy of the array before reversing it.
    - **Create a copy before reversing:**

      ```javascript
      const originalArray = [1, 2, 3];
      const reversedCopy = [...originalArray].reverse(); // Using spread operator
      // OR
      // const reversedCopy = originalArray.slice().reverse(); // Using slice()

      console.log(originalArray); // Output: [1, 2, 3] (original untouched)
      console.log(reversedCopy); // Output: [3, 2, 1]
      ```

2.  **When Iterating and Simultaneously Modifying the Array by Order:**
    If you are using a `for` loop and trying to iterate through an array that you are also reversing within the loop (which would be an extremely unusual and likely buggy scenario), `reverse()` will immediately mess up your loop's order. This is generally an anti-pattern for any in-place modifying method during iteration.

3.  **For Performance-Critical Sorting with Complex Criteria:**
    `reverse()` is very fast for its simple task. However, if you are looking to sort an array in descending order, it's often more efficient and clearer to use `sort()` with a custom `compareFunction` that directly sorts in descending order (`(a, b) => b - a`) rather than sorting ascending and then reversing. While `sort().reverse()` works, it involves two passes/operations.

    ```javascript
    const numbers = [40, 100, 1, 5, 25, 10];

    // More direct and often slightly more efficient for descending sort:
    numbers.sort((a, b) => b - a);
    console.log(numbers); // [100, 40, 25, 10, 5, 1]

    // Vs. two operations:
    // numbers.sort((a, b) => a - b).reverse();
    ```

---

### Advanced Uses with Examples:

**1. Creating a Reverse Iterator (Conceptual):**

While `reverse()` creates a new array for iteration, you can conceptually use it to create an "iterator" that processes elements from end to start.

```javascript
function processInReverseOrder(items, callback) {
  // Create a copy to avoid modifying original array for this specific processing
  const reversedItems = [...items].reverse();
  for (const item of reversedItems) {
    callback(item);
  }
}

const steps = ["Step 1: Init", "Step 2: Process", "Step 3: Finalize"];
console.log("Processing steps in reverse:");
processInReverseOrder(steps, (step) => console.log(step));
/* Output:
Processing steps in reverse:
Step 3: Finalize
Step 2: Process
Step 1: Init
*/
```

**2. Implementing a Circular Queue or Deque (Simplified Push/Unshift/Shift/Pop):**

If you simulate a queue or deque where adding/removing from both ends is important, `reverse()` can be part of how you manage the underlying array, though not typically for every operation.

```javascript
class Deque {
  constructor(items = []) {
    this.data = items;
  }

  addFront(item) {
    this.data.unshift(item); // Add to front
  }

  addBack(item) {
    this.data.push(item); // Add to back
  }

  removeFront() {
    return this.data.shift(); // Remove from front
  }

  removeBack() {
    return this.data.pop(); // Remove from back
  }

  // A display method that can show in reversed order
  displayReversed() {
    return [...this.data].reverse(); // Return a reversed copy
  }

  toArray() {
    return this.data;
  }
}

const myDeque = new Deque();
myDeque.addBack(1); // [1]
myDeque.addBack(2); // [1, 2]
myDeque.addFront(0); // [0, 1, 2]

console.log("Deque (normal order):", myDeque.toArray()); // [0, 1, 2]
console.log("Deque (reversed order):", myDeque.displayReversed()); // [2, 1, 0]
```

**3. Simple UI Element Reordering (e.g., for a 'latest first' feed):**

In UI development, if you get data in one order and need to display it in reverse, applying `reverse()` (on a copy if managing state immutably) is common.

```javascript
// Imagine this is data fetched from an API, oldest first
const recentActivities = [
  { id: 1, text: "User A posted", timestamp: "2025-07-26T10:00:00Z" },
  { id: 2, text: "User B commented", timestamp: "2025-07-26T10:15:00Z" },
  { id: 3, text: "User A liked a post", timestamp: "2025-07-26T10:30:00Z" },
];

// To display 'Latest Activity' first in a feed:
const displayActivities = [...recentActivities].reverse(); // Create a copy and reverse it

displayActivities.forEach((activity) => {
  console.log(
    `[${new Date(activity.timestamp).toLocaleTimeString()}] ${activity.text}`,
  );
});
/* Output:
[10:30:00 AM] User A liked a post
[10:15:00 AM] User B commented
[10:00:00 AM] User A posted
*/
```

`reverse()` is a straightforward and efficient array method for changing the order of elements directly within an array. Its primary considerations are its mutable nature and the simplicity of its operation.

The JavaScript `toReversed()` method is a new, non-mutating array method (introduced in ES2023) that returns a new array with the elements in reverse order. It is the immutable counterpart to the existing `reverse()` method.

---

### The `toReversed()` Method in JavaScript

#### It is a Non-Mutating Array Methods (ES2023 Additions)

Historically, reversing an array (`Array.prototype.reverse()`) directly mutated the original array. This was often inconvenient, forcing developers to create a copy first (`[...arr].reverse()` or `arr.slice().reverse()`) if they wanted to preserve the original array. `toReversed()` solves this by always returning a brand new array.

#### Syntax:

```javascript
arr.toReversed();
```

#### Parameters:

- None.

#### Return Value:

- A new `Array` instance with the elements of the original array reversed.

#### How it Works (Mental Model):

Imagine `toReversed()` as a copy machine that reverses the order of items. You feed it a list, and it spits out a new list with all the items in reverse sequence, leaving your original list untouched.

#### Key Features:

- **Non-mutating:** This is its defining characteristic. It never modifies the original array.
- **Returns a New Array:** Always creates and returns a completely new array instance.
- **Shallow Copy:** Like most array methods that return new arrays, it performs a shallow copy. If your array contains objects, the new array will contain references to the _same_ objects, not copies of them. Modifying a nested object in the reversed array will still affect the original object.
- **Readability:** Clearly indicates that the original array is not being changed.

#### Basic Examples:

**1. Reversing a Simple Array:**

```javascript
const originalNumbers = [1, 2, 3, 4, 5];
const reversedNumbers = originalNumbers.toReversed();

console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]
console.log(originalNumbers); // Output: [1, 2, 3, 4, 5] (original is unchanged)
```

**2. Reversing an Array of Strings:**

```javascript
const words = ["apple", "banana", "cherry"];
const reversedWords = words.toReversed();

console.log(reversedWords); // Output: ["cherry", "banana", "apple"]
console.log(words); // Output: ["apple", "banana", "cherry"]
```

**3. Shallow Copy Behavior (Objects):**

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const reversedUsers = users.toReversed();

console.log(reversedUsers);
// Output: [{ id: 2, name: 'Bob' }, { id: 1, name: 'Alice' }]

// Modifying an object in the new array affects the original object:
reversedUsers[0].name = "Bobby";
console.log(users[1]); // Output: { id: 2, name: 'Bobby' } (Original array's object is modified)
```

---

### When to Use `toReversed()`:

1.  **When You Need a Reversed Copy, Preserving the Original Array:**
    This is the primary and most common use case. In functional programming paradigms, or when working with state management (like in React or Redux), immutability is crucial. `toReversed()` perfectly fits this need.

    ```javascript
    const messages = ["Received", "Read", "Replied"];
    const displayOrderMessages = messages.toReversed(); // For displaying latest first

    console.log("Original messages:", messages);
    console.log("Display order:", displayOrderMessages);
    ```

2.  **Chaining Array Methods:**
    Since `toReversed()` returns a new array, you can directly chain other non-mutating array methods (`map`, `filter`, `reduce`, `slice`, `sort`, etc.) onto its result without an intermediate step.

    ```javascript
    const scores = [85, 92, 78, 95, 88];

    // Get the top 2 scores, sorted descending, in an immutable way
    const topScores = scores
      .toSorted((a, b) => a - b) // Sort ascending first (to use toReversed more clearly)
      .toReversed() // Then reverse to get descending
      .slice(0, 2); // Take the top 2

    console.log(topScores); // Output: [95, 92]
    console.log(scores); // Output: [85, 92, 78, 95, 88] (original is unchanged)
    ```

3.  **Readability and Clarity:**
    The method name `toReversed()` clearly communicates that a _new_, reversed array will be returned, making the code more self-documenting compared to `arr.slice().reverse()`.

    ```javascript
    // Less clear intention (requires knowing slice() makes a copy)
    const oldWay = myArray.slice().reverse();

    // Clearer intention
    const newWay = myArray.toReversed();
    ```

---

### When NOT to Use `toReversed()`:

1.  **When You Intend to Mutate the Original Array:**
    If you genuinely want to reverse the array in place and don't care about preserving the original order (or you actively want to modify it), `reverse()` is more direct and slightly more performant (as it doesn't create a new array).
    - **Use `reverse()` instead:**
      ```javascript
      const tasks = ["Buy groceries", "Walk dog", "Pay bills"];
      // DO: If you want to permanently reverse 'tasks'
      tasks.reverse();
      console.log(tasks); // Output: ["Pay bills", "Walk dog", "Buy groceries"]
      ```

2.  **When Browser Compatibility for Older Environments is a Concern (Without Polyfill):**
    `toReversed()` is an ES2023 feature. If you're targeting older browsers or environments that don't transpile newer JavaScript features, `toReversed()` will not be available. In such cases, the `[...arr].reverse()` or `arr.slice().reverse()` pattern is the compatible solution.
    - **Fallback for older environments:**
      ```javascript
      const myArr = [1, 2, 3];
      const reversedCopy = [...myArr].reverse(); // Works universally
      // Or:
      // const reversedCopy = myArr.slice().reverse();
      ```

3.  **When Performance is Absolutely Critical for Very Large Arrays and Original Can Be Mutated:**
    While the performance difference is often negligible for typical array sizes, `toReversed()` does involve creating a new array in memory. For extremely large arrays where every millisecond and memory allocation matters, and modifying the original is acceptable, `reverse()` might have a minor performance edge. However, this is a rare optimization concern in most web development.

---

### Advanced Uses with Examples:

**1. Displaying Chronological Data in Reverse Order (Latest First):**

A common UI pattern is to show recent activity or comments with the newest entry at the top.

```javascript
const activityFeed = [
  { id: 1, action: "User logged in", timestamp: "2025-07-26T10:00:00Z" },
  { id: 2, action: "Item added to cart", timestamp: "2025-07-26T10:15:00Z" },
  { id: 3, action: "Order placed", timestamp: "2025-07-26T10:30:00Z" },
];

function renderActivityFeed(feed) {
  const reversedFeed = feed.toReversed(); // Get latest activity first
  reversedFeed.forEach((activity) => {
    console.log(
      `[${new Date(activity.timestamp).toLocaleTimeString()}] ${activity.action}`,
    );
  });
}

console.log("--- Latest Activity First ---");
renderActivityFeed(activityFeed);
/* Output:
--- Latest Activity First ---
[10:30:00 AM] Order placed
[10:15:00 AM] Item added to cart
[10:00:00 AM] User logged in
*/
console.log("\nOriginal feed still intact:", activityFeed);
```

**2. Implementing Undo/Redo Stacks (Immutable History):**

<!-- NOTE do it when react is react router is done. -->

While a full undo/redo system is complex, `toReversed()` can be useful when reconstructing states or displaying history in a particular order without affecting the underlying history array.

```javascript
let appStateHistory = []; // Assume this stores snapshots of your app state

function commitState(newState) {
  appStateHistory.push(newState);
  console.log("State committed. History length:", appStateHistory.length);
}

function getUndoStack() {
  // Get a stack of states that can be "undone" (reversed from current to past)
  // Exclude the very last (current) state from the undo stack, or include if current is undoable.
  return appStateHistory.slice(0, -1).toReversed();
}

// Simulate app state changes
commitState({ theme: "light", user: "Guest" });
commitState({ theme: "dark", user: "Guest" });
commitState({ theme: "dark", user: "Alice" });

const undoableStates = getUndoStack();
console.log("\nUndo Stack (most recent undo first):");
undoableStates.forEach((state, index) => {
  console.log(`  Undo ${index + 1}:`, state);
});
/* Output:
  Undo 1: { theme: 'dark', user: 'Guest' }
  Undo 2: { theme: 'light', user: 'Guest' }
*/
console.log("\nOriginal history remains:", appStateHistory);
```

**3. Preparing Data for Specific UI Components:**

Some UI libraries or components might expect data in a specific order (e.g., for a historical chart where the X-axis needs to be reversed).

<!-- NOTE  do it when react and react router is done.-->

```javascript
const sensorReadings = [
  { timestamp: 1, value: 20 },
  { timestamp: 2, value: 22 },
  { timestamp: 3, value: 21 },
  { timestamp: 4, value: 25 },
];

// If a charting library expects data points from newest to oldest for a specific type of chart
const chartData = sensorReadings.toReversed().map((reading) => ({
  x: `Time ${reading.timestamp}`,
  y: reading.value,
}));

console.log("Chart data (reversed order):", chartData);
/* Output:
Chart data (reversed order): [
  { x: 'Time 4', y: 25 },
  { x: 'Time 3', y: 21 },
  { x: 'Time 2', y: 22 },
  { x: 'Time 1', y: 20 }
]
*/
```

`toReversed()` is a welcome addition to JavaScript's array methods, promoting more functional and immutable programming patterns. By providing a direct, non-mutating way to reverse an array, it simplifies code and reduces the risk of unintended side effects, especially in complex applications where state integrity is paramount.

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

The JavaScript `toSpliced()` method is a new, non-mutating array method (introduced in ES2023) that returns a new array with some elements removed and/or added at a specified index, without modifying the original array. It is the immutable counterpart to the existing `splice()` method.

---

### The `toSpliced()` Method in JavaScript

#### It is a Non-Mutating Array Methods (ES2023 Additions)

Historically, modifying an array by removing or adding elements in the middle (`Array.prototype.splice()`) directly mutated the original array. This often necessitated creating a copy first (`[...arr].splice(...)` or `arr.slice().splice(...)` which doesn't directly work as `splice` mutates) if the original array needed to be preserved. `toSpliced()` directly addresses this by always returning a brand new array with the changes.

#### Syntax:

```javascript
arr.toSpliced(start, deleteCount, item1, item2, /* ..., */ itemN);
```

#### Parameters:

- `start` (Required): The zero-based index at which to start changing the array.
  - If `start` is greater than the array's length, `start` will be set to the array's length.
  - If `start` is negative, it will begin that many elements from the end of the array. (e.g., `-1` means the last element).
- `deleteCount` (Optional): The number of elements to remove from the array, starting at `start`.
  - If `deleteCount` is omitted or greater than or equal to the number of elements left in the array (starting at `start`), all elements from `start` to the end of the array will be deleted.
  - If `deleteCount` is `0` or negative, no elements are removed.
- `item1, item2, ..., itemN` (Optional): The elements to add to the array, beginning at `start`. If no elements are specified, `toSpliced()` only removes elements.

#### Return Value:

- A new `Array` instance containing the elements of the original array with the specified changes.

#### How it Works (Mental Model):

Imagine `toSpliced()` as a very precise editor for a copy of your list. You tell it: "take this part out (deleteCount from start), and put these new things in (items N)." It then hands you a _brand new list_ with those edits, leaving your original list completely untouched.

#### Key Features:

- **Non-mutating:** This is its defining characteristic. It never modifies the original array.
- **Returns a New Array:** Always creates and returns a completely new array instance.
- **Shallow Copy:** Like most array methods that return new arrays, it performs a shallow copy. If you insert objects or if the original elements are objects, the new array will contain references to the _same_ objects, not copies of them.
- **Combines Deletion and Insertion:** Can simultaneously remove existing elements and/or insert new ones.

#### Basic Examples:

**1. Deleting Elements:**

```javascript
const originalFruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Remove 1 element starting at index 2 ('cherry')
const fruitsAfterDelete = originalFruits.toSpliced(2, 1);
console.log(fruitsAfterDelete); // Output: ["apple", "banana", "date", "elderberry"]
console.log(originalFruits); // Output: ["apple", "banana", "cherry", "date", "elderberry"] (original unchanged)

// Remove 2 elements starting at index 1 ('banana', 'cherry')
const fruitsAfterMultiDelete = originalFruits.toSpliced(1, 2);
console.log(fruitsAfterMultiDelete); // Output: ["apple", "date", "elderberry"]
```

**2. Inserting Elements (deleteCount = 0):**

```javascript
const numbers = [1, 2, 5, 6];

// Insert 3 and 4 at index 2 (between 2 and 5)
const numbersAfterInsert = numbers.toSpliced(2, 0, 3, 4);
console.log(numbersAfterInsert); // Output: [1, 2, 3, 4, 5, 6]
console.log(numbers); // Output: [1, 2, 5, 6] (original unchanged)
```

**3. Replacing Elements (deleteCount \> 0 and items to add):**

```javascript
const colors = ["red", "green", "blue", "yellow"];

// Replace 'green' and 'blue' (2 elements from index 1) with 'cyan' and 'magenta'
const colorsAfterReplace = colors.toSpliced(1, 2, "cyan", "magenta");
console.log(colorsAfterReplace); // Output: ["red", "cyan", "magenta", "yellow"]
console.log(colors); // Output: ['red', 'green', 'blue', 'yellow'] (original unchanged)
```

**4. Using Negative `start` Index:**

```javascript
const letters = ["a", "b", "c", "d", "e"];

// Remove the last element ('e')
const noLastLetter = letters.toSpliced(-1, 1);
console.log(noLastLetter); // Output: ["a", "b", "c", "d"]

// Insert 'x' and 'y' before the last element ('e')
const beforeLastLetter = letters.toSpliced(-1, 0, "x", "y");
console.log(beforeLastLetter); // Output: ["a", "b", "c", "d", "x", "y", "e"]
```

---

### When to Use `toSpliced()`:

1.  **When You Need a Modified Copy, Preserving the Original Array:**
    This is the primary and most common use case. In functional programming paradigms, or when working with state management (like in React or Redux), immutability is crucial. `toSpliced()` perfectly fits this need for adding, removing, or replacing elements.

    ```javascript
    const todoList = [
      { id: 1, task: "Buy groceries", completed: false },
      { id: 2, task: "Walk dog", completed: false },
      { id: 3, task: "Pay bills", completed: true },
    ];

    // Mark 'Walk dog' as completed (by replacing it with a modified object)
    const taskToUpdateIndex = todoList.findIndex((t) => t.id === 2);
    if (taskToUpdateIndex !== -1) {
      const updatedTask = { ...todoList[taskToUpdateIndex], completed: true };
      const updatedTodoList = todoList.toSpliced(
        taskToUpdateIndex,
        1,
        updatedTask,
      );
      console.log("Updated Todo List:", updatedTodoList);
    }
    console.log("Original Todo List:", todoList); // Original is unchanged!
    ```

2.  **Chaining Array Methods:**
    Since `toSpliced()` returns a new array, you can directly chain other non-mutating array methods (`map`, `filter`, `reduce`, `slice`, `toReversed()`, `toSorted()`, etc.) onto its result without an intermediate step. This makes pipelines of operations cleaner.

    ```javascript
    const shoppingCart = ["Milk", "Bread", "Eggs", "Cheese", "Milk"];

    const finalCart = shoppingCart
      .toSpliced(shoppingCart.indexOf("Bread") + 1, 0, "Butter") // Adds 'Butter' at index 2
      // FIX: Add +1 to the index because 'Butter' pushed the rest of the array to the right
      .toSpliced(shoppingCart.lastIndexOf("Milk") + 1, 1)
      .toSorted()
      .filter((item, index, arr) => arr.indexOf(item) === index);

    console.log("Final Cart:", finalCart);
    // Output: [ 'Bread', 'Butter', 'Cheese', 'Eggs', 'Milk' ]

    console.log("Original Cart:", shoppingCart);
    // Output: [ 'Milk', 'Bread', 'Eggs', 'Cheese', 'Milk' ]
    ```

3.  **Readability and Clarity:**
    The method name `toSpliced()` clearly communicates that a _new_, modified array will be returned, making the code more self-documenting compared to `[...arr].splice(...)` (which is incorrect usage as `splice` mutates) or `arr.slice().splice(...)` (which still mutates the slice and requires another copy if the result is needed). `toSpliced()` is the direct solution for an immutable splice.

---

### When NOT to Use `toSpliced()`:

1.  **When You Intend to Mutate the Original Array:**
    If you genuinely want to modify the array in place and don't care about preserving the original (or you actively want to modify it), `splice()` is more direct and slightly more performant (as it doesn't create a new array).
    - **Use `splice()` instead:**
      ```javascript
      const pendingTasks = ["Write report", "Email client", "Call supplier"];
      // DO: If you want to permanently remove 'Email client'
      pendingTasks.splice(1, 1);
      console.log(pendingTasks); // Output: ["Write report", "Call supplier"]
      ```

2.  **When Browser Compatibility for Older Environments is a Concern (Without Polyfill):**
    `toSpliced()` is an ES2023 feature. If you're targeting older browsers or environments that don't transpile newer JavaScript features, `toSpliced()` will not be available. In such cases, you'd typically use a combination of `slice()` and array spread syntax, or manual array reconstruction for immutable operations.
    - **Fallback for older environments (for removing elements):**
      ```javascript
      const myArr = [1, 2, 3, 4];
      const indexToRemove = 2; // Remove '3'
      const newArr = [
        ...myArr.slice(0, indexToRemove),
        ...myArr.slice(indexToRemove + 1),
      ];
      console.log(newArr); // Output: [1, 2, 4]
      ```
    - **Fallback for older environments (for inserting elements):**
      ```javascript
      const myArr = [1, 2, 4];
      const indexToInsert = 2; // Insert at index 2
      const itemsToInsert = [3];
      const newArrInsert = [
        ...myArr.slice(0, indexToInsert),
        ...itemsToInsert,
        ...myArr.slice(indexToInsert),
      ];
      console.log(newArrInsert); // Output: [1, 2, 3, 4]
      ```

3.  **When Performance is Absolutely Critical for Very Large Arrays and Original Can Be Mutated:**
    While the performance difference is often negligible for typical array sizes, `toSpliced()` does involve creating a new array in memory. For extremely large arrays where every millisecond and memory allocation matters, and modifying the original is acceptable, `splice()` might have a minor performance edge. However, this is a rare optimization concern in most web development.

---

### Advanced Uses with Examples:

**1. Managing an Immutable Selection/Exclusion List:**

Imagine managing a list of selected items where adding/removing an item should create a new state without affecting the previous one.

```javascript
const currentSelection = ["apple", "banana", "orange"];

function toggleSelection(item, selectedItems) {
  const itemIndex = selectedItems.indexOf(item);
  if (itemIndex !== -1) {
    // Item is currently selected, so remove it
    return selectedItems.toSpliced(itemIndex, 1);
  } else {
    // Item is not selected, so add it
    return selectedItems.toSpliced(selectedItems.length, 0, item);
  }
}

let userSelection = ["Product A", "Product C"];

userSelection = toggleSelection("Product B", userSelection);
console.log("After adding B:", userSelection); // Output: ["Product A", "Product C", "Product B"]

userSelection = toggleSelection("Product A", userSelection);
console.log("After removing A:", userSelection); // Output: ["Product C", "Product B"]

console.log(
  "Original selections are implicitly preserved due to immutability.",
);
```

**2. Implementing Undo/Redo Operations on Text (Array of Characters/Words):**

For simple text editors, each edit operation can be a `toSpliced()` call that generates a new version of the text array, pushing it onto a history stack for undo/redo.

```javascript
let documentContent = ["This", "is", "a", "sample", "text."];
const history = [documentContent]; // Initial state

function applyEdit(contentArray, operation) {
  let newContent;
  if (operation.type === "insert") {
    newContent = contentArray.toSpliced(operation.index, 0, operation.value);
  } else if (operation.type === "delete") {
    newContent = contentArray.toSpliced(operation.index, operation.count);
  } else if (operation.type === "replace") {
    newContent = contentArray.toSpliced(
      operation.index,
      operation.count,
      operation.value,
    );
  }
  history.push(newContent);
  documentContent = newContent;
  console.log("Current content:", documentContent.join(" "));
}

applyEdit(documentContent, { type: "insert", index: 3, value: "new" });
// Output: This is a new sample text.
applyEdit(documentContent, { type: "delete", index: 4, count: 1 });
// Output: This is a new text.
applyEdit(documentContent, {
  type: "replace",
  index: 1,
  count: 1,
  value: "was",
});
// Output: This was a new text.

console.log(
  "\nFull history:",
  history.map((h) => h.join(" ")),
);
/* Output:
Full history: [
  'This is a sample text.',
  'This is a new sample text.',
  'This is a new text.',
  'This was a new text.'
]
*/
```

**3. Maintaining a Fixed-Size Cache or Buffer with Item Insertion/Removal:**

If you have a cache and you want to remove an old item and insert a new one at a specific position (e.g., least recently used, or based on priority) while keeping the cache immutable.

```javascript
const cache = ["itemA", "itemB", "itemC"];
const MAX_CACHE_SIZE = 3;

function updateCache(newEntry, currentCache) {
  const existingIndex = currentCache.indexOf(newEntry);
  let updatedCache;

  if (existingIndex !== -1) {
    // If already in cache, move it to the end (most recent)
    updatedCache = currentCache.toSpliced(existingIndex, 1);
    updatedCache = updatedCache.toSpliced(updatedCache.length, 0, newEntry);
  } else {
    // If new, add it to the end
    updatedCache = currentCache.toSpliced(currentCache.length, 0, newEntry);
    // If exceeds max size, remove the oldest (first)
    if (updatedCache.length > MAX_CACHE_SIZE) {
      updatedCache = updatedCache.toSpliced(0, 1);
    }
  }
  return updatedCache;
}

let myCache = ["File1", "File2", "File3"];
console.log("Initial cache:", myCache); // ['File1', 'File2', 'File3']

myCache = updateCache("File4", myCache);
console.log("After adding File4:", myCache); // ['File2', 'File3', 'File4'] (File1 removed)

myCache = updateCache("File2", myCache);
console.log("After accessing File2:", myCache); // ['File3', 'File4', 'File2'] (File2 moved to end)

console.log("Original cache state is unchanged:", ["File1", "File2", "File3"]);
```

`toSpliced()` is a powerful and very welcome addition to JavaScript's array methods. It directly supports immutable programming patterns by providing a clean and safe way to perform insertion, deletion, and replacement operations on arrays without side effects on the original data. This makes it ideal for modern application development, especially when working with reactive UI frameworks or robust state management.

The JavaScript `with()` method is a new, non-mutating array method (introduced in ES2023) that returns a new array with the element at a given index replaced by a new value, without modifying the original array. It is the immutable counterpart to directly setting an element using bracket notation (`arr[index] = value`).

---

### The `with()` Method in JavaScript

#### It is a Non-Mutating Array Methods (ES2023 Additions)

Historically, updating an element at a specific index in an array (`arr[index] = newValue`) directly mutated the original array. To achieve this immutably, developers often had to use array spread syntax (`[...arr.slice(0, index), newValue, ...arr.slice(index + 1)]`) or `map()` if the transformation was across all elements. `with()` simplifies this specific use case: immutably replacing a single element at a known index.

#### Syntax:

```javascript
arr.with(index, value);
```

#### Parameters:

- `index` (Required): The zero-based index of the element to be replaced.
  - Can be a positive or negative integer. Negative indices count from the end of the array (e.g., `-1` for the last element).
- `value` (Required): The new value to place at the specified `index`.

#### Return Value:

- A new `Array` instance with the element at the specified `index` replaced by `value`.

#### How it Works (Mental Model):

Imagine `with()` as a "surgical copy machine" for lists. You give it a list, point to a specific spot (index), and hand it a new item. It then creates a _brand new list_ that is identical to the original, _except_ at that one spot, where it puts your new item. Your original list remains untouched.

#### Key Features:

- **Non-mutating:** This is its defining characteristic. It never modifies the original array.
- **Returns a New Array:** Always creates and returns a completely new array instance.
- **Shallow Copy:** Like most array methods that return new arrays, it performs a shallow copy. If the original elements are objects (and not the one being replaced), the new array will contain references to the _same_ objects.
- **Handles Negative Indices:** Like `at()`, it supports negative indices for convenience.
- **Throws `RangeError` for Out-of-Bounds Index:** Unlike `at()` (which returns `undefined`) or `arr[index] = value` (which silently fails to add to non-existent indices or creates sparse arrays), `with()` throws an error if the index is out of bounds, which can be useful for strict validation.

#### Basic Examples:

**1. Replacing an Element by Positive Index:**

```javascript
const originalNumbers = [1, 2, 3, 4, 5];

// Replace the element at index 2 (which is 3) with 10
const numbersAfterReplace = originalNumbers.with(2, 10);
console.log(numbersAfterReplace); // Output: [1, 2, 10, 4, 5]
console.log(originalNumbers); // Output: [1, 2, 3, 4, 5] (original is unchanged)
```

**2. Replacing an Element by Negative Index:**

```javascript
const fruits = ["apple", "banana", "cherry", "date"];

// Replace the last element ('date') with 'grape'
const fruitsAfterLastReplace = fruits.with(-1, "grape");
console.log(fruitsAfterLastReplace); // Output: ["apple", "banana", "cherry", "grape"]

// Replace the second-to-last element ('cherry') with 'kiwi'
const fruitsAfterSecondLastReplace = fruits.with(-2, "kiwi");
console.log(fruitsAfterSecondLastReplace); // Output: ["apple", "banana", "kiwi", "date"]
```

**3. Throws `RangeError` for Out-of-Bounds:**

```javascript
const data = [10, 20];

try {
  data.with(2, 30); // Index 2 is out of bounds for an array of length 2
} catch (e) {
  console.error(e.name + ": " + e.message); // Output: RangeError: index out of bounds
}

try {
  data.with(-3, 5); // Index -3 is out of bounds
} catch (e) {
  console.error(e.name + ": " + e.message); // Output: RangeError: index out of bounds
}

console.log(data); // Original array remains unchanged: [10, 20]
```

---

### When to Use `with()`:

1.  **When You Need to Update a Single Element Immutably at a Known Index:**
    This is the primary and most common use case. In functional programming, React/Redux state updates, or any scenario where preserving the original array is critical.

    ```javascript
    const userList = [
      { id: 1, name: "Alice", status: "active" },
      { id: 2, name: "Bob", status: "inactive" },
      { id: 3, name: "Charlie", status: "active" },
    ];

    // Scenario: Bob's status changes to 'active'.
    // Find Bob's index (assuming IDs are unique and stable, or you have a consistent sorting)
    const bobIndex = userList.findIndex((user) => user.id === 2);

    if (bobIndex !== -1) {
      // Create an updated user object (also immutably)
      const updatedBob = { ...userList[bobIndex], status: "active" };
      // Use `with()` to create a new userList with Bob's updated status
      const newUserList = userList.with(bobIndex, updatedBob);

      console.log("New User List:", newUserList);
      console.log("Original User List:", userList); // Original is unchanged!
    }
    ```

2.  **Chaining Array Methods with Immutable Updates:**
    Since `with()` returns a new array, you can directly chain other non-mutating array methods (`map`, `filter`, `reduce`, `slice`, `toReversed()`, `toSorted()`, `toSpliced()`, etc.) onto its result. This makes pipelines of operations cleaner and more expressive.

    ```javascript
    const productPrices = [10, 20, 30, 40, 50];

    // Scenario: Increase the price of the third item (index 2) by 5,
    // then double the prices of all items, then filter out items below 50.
    const finalPrices = productPrices
      .with(2, productPrices.at(2) + 5) // Immutably update 3rd item (30 -> 35)
      .map((price) => price * 2) // Double all prices
      .filter((price) => price >= 50); // Filter

    console.log("Final Prices:", finalPrices); // Output: [20, 40, 70, 80, 100]
    console.log("Original Prices:", productPrices); // Original is unchanged!
    ```

3.  **Readability and Clarity for Specific Element Replacement:**
    When the goal is precisely "replace element at this index," `with()` is very clear compared to the spread syntax alternative, especially when dealing with negative indices.

    ```javascript
    // Less clear intention (requires knowing slice() behavior for replacement)
    const oldWay = [
      ...myArray.slice(0, index),
      newValue,
      ...myArray.slice(index + 1),
    ];

    // Clearer intention
    const newWay = myArray.with(index, newValue);
    ```

---

### When NOT to Use `with()`:

1.  **When You Intend to Mutate the Original Array:**
    If you genuinely want to modify the array in place and don't care about preserving the original (or you actively want to modify it), direct bracket assignment (`arr[index] = value`) is simpler and more performant.
    - **Use `arr[index] = value` instead:**
      ```javascript
      const pendingTasks = ["Write report", "Email client"];
      // DO: If you want to permanently update the first task
      pendingTasks[0] = "Submit report";
      console.log(pendingTasks); // Output: ["Submit report", "Email client"]
      ```

2.  **When Browser Compatibility for Older Environments is a Concern (Without Polyfill):**
    `with()` is an ES2023 feature. If you're targeting older browsers or environments that don't transpile newer JavaScript features, `with()` will not be available. In such cases, the array spread syntax pattern (`[...arr.slice(0, index), newValue, ...arr.slice(index + 1)]`) is the compatible solution.
    - **Fallback for older environments:**
      ```javascript
      const myArr = [1, 2, 3];
      const indexToUpdate = 1;
      const newValue = 99;
      const newArr = [
        ...myArr.slice(0, indexToUpdate),
        newValue,
        ...myArr.slice(indexToUpdate + 1),
      ];
      console.log(newArr); // Output: [1, 99, 3]
      ```

3.  **When Replacing Multiple Elements or Inserting/Deleting:**
    `with()` is specifically for replacing a _single_ element. If you need to replace multiple elements, insert elements, or delete elements, `toSpliced()` is the immutable method for that.
    - **Use `toSpliced()` instead:**
      ```javascript
      const items = ["a", "b", "c", "d"];
      // DON'T: use `with` multiple times for complex changes (inefficient and verbose)
      // DO: To replace 'b' and 'c' with 'x', 'y' (immutably)
      const newItems = items.toSpliced(1, 2, "x", "y");
      console.log(newItems); // Output: ["a", "x", "y", "d"]
      ```

4.  **When You Need to Transform All Elements:**
    If the transformation applies to every element (e.g., doubling all numbers, capitalizing all strings), `map()` is the more appropriate and often more readable choice.
    - **Use `map()` instead:**
      ```javascript
      const prices = [10, 20, 30];
      // DON'T: prices.with(0, prices[0]*2).with(1, prices[1]*2)... (bad idea)
      // DO:
      const doubledPrices = prices.map((p) => p * 2);
      console.log(doubledPrices); // Output: [20, 40, 60]
      ```

---

### Advanced Uses with Examples:

**1. Managing Form State in a Reactive UI (e.g., React, Vue):**

When handling arrays of input fields or options, `with()` can immutably update a single field's value.

```javascript
// Imagine this is part of a component's state
let formFields = [
  { id: "name", value: "John Doe", type: "text" },
  { id: "email", value: "john@example.com", type: "email" },
  { id: "consent", value: false, type: "checkbox" },
];

function handleInputChange(fieldId, newValue) {
  const fieldIndex = formFields.findIndex((field) => field.id === fieldId);
  if (fieldIndex !== -1) {
    // Create an immutable copy of the field itself
    const updatedField = { ...formFields[fieldIndex], value: newValue };
    // Use `with()` to create a new array with the updated field
    formFields = formFields.with(fieldIndex, updatedField);
    console.log(`Field '${fieldId}' updated. New formFields:`, formFields);
  }
}

console.log("Initial formFields:", formFields);
handleInputChange("email", "john.doe@example.com");
handleInputChange("consent", true);
```

**2. Implementing Immutable Board Game States:**

For turn-based games where modifying a board state must not affect previous states for undo/redo or AI exploration.

<!-- NOTE Advanced problem learn later on -->

```javascript
const initialBoard = [
  [".", ".", "."],
  [".", "X", "."],
  [".", ".", "."],
];

function makeMove(currentBoard, row, col, player) {
  // Check if move is valid (within bounds, spot is empty)
  if (
    row < 0 ||
    row >= currentBoard.length ||
    col < 0 ||
    col >= currentBoard[row].length ||
    currentBoard.at(row).at(col) !== "."
  ) {
    console.error("Invalid move!");
    return currentBoard; // Return original board on invalid move
  }

  // First, immutably update the specific row
  const updatedRow = currentBoard[row].with(col, player);
  // Then, immutably update the board with the new row
  const newBoard = currentBoard.with(row, updatedRow);

  return newBoard;
}

let ticTacToeBoard = initialBoard;
console.log("--- Initial Board ---");
ticTacToeBoard.forEach((row) => console.log(row.join(" ")));

ticTacToeBoard = makeMove(ticTacToeBoard, 0, 0, "O");
console.log("\n--- After Player O Move (0,0) ---");
ticTacToeBoard.forEach((row) => console.log(row.join(" ")));

ticTacToeBoard = makeMove(ticTacToeBoard, 2, 2, "X");
console.log("\n--- After Player X Move (2,2) ---");
ticTacToeBoard.forEach((row) => console.log(row.join(" ")));

console.log("\nOriginal initialBoard is untouched:", initialBoard);
```

**3. Simulating Versioning or Snapshots of Configurations:**

If you have an array representing a configuration (e.g., a sequence of steps, settings), and you need to generate new configurations based on small changes.

```javascript
const baseConfig = [
  { step: 1, action: "Initialize", status: "pending" },
  { step: 2, action: "Process Data", status: "pending" },
  { step: 3, action: "Generate Report", status: "pending" },
];

function updateStepStatus(config, stepNumber, newStatus) {
  const stepIndex = config.findIndex((s) => s.step === stepNumber);
  if (stepIndex !== -1) {
    const updatedStep = { ...config[stepIndex], status: newStatus };
    return config.with(stepIndex, updatedStep);
  }
  return config; // Return original if step not found
}

let currentConfig = baseConfig;
console.log("Base Config:", currentConfig);

currentConfig = updateStepStatus(currentConfig, 1, "completed");
console.log("\nConfig after step 1 complete:", currentConfig);

currentConfig = updateStepStatus(currentConfig, 2, "in-progress");
console.log("\nConfig after step 2 starts:", currentConfig);

console.log("\nBase config is still:", baseConfig);
```

`with()` is a specific and highly useful method for immutable array updates. It significantly cleans up code that previously relied on verbose array spread syntax for single-element replacements, making it a valuable tool for modern JavaScript development, especially in contexts that prioritize immutability.
