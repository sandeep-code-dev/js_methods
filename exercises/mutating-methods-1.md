### The `push()` Method in JavaScript

#### It is a Mutating Methods (Modify the Original Array)

The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

#### Syntax:

```javascript
arr.push(element1, element2, ..., elementN)
```

#### Parameters:

- `element1, element2, ..., elementN` (Optional): The elements to add to the end of the array. You can pass zero or more elements.

#### Return Value:

- The new `length` property of the array after the elements have been added.

#### How it Works (Mental Model):

Imagine `push()` as appending items to a list. You give it some items, and it places them at the very end of your existing list, making the list longer.

#### Basic Examples:

**1. Adding a Single Element:**

```javascript
// push
// push cherry into the following array.
// print new array and array length
const fruits = ["apple", "banana"];

const newLength = fruits.push("cherry");
console.log(fruits);
console.log(newLength);
// Output: ['apple', 'banana', 'cherry']
// Output: 3
```

**2. Adding Multiple Elements:**

```javascript
// push 3, 4, 5 to the following array
// print new array and array length
const numbers = [1, 2];

const newLengthMulti = numbers.push(3, 4, 5);
console.log(numbers);
console.log(newLengthMulti);
// Output: [1, 2, 3, 4, 5]
// Output: 5
```

**3. Pushing to an Empty Array:**

```javascript
// push word first in following empty array
const emptyArray = [];

emptyArray.push("first");
console.log(emptyArray);
// Output: ['first']
```

**4. Pushing Various Data Types:**

`push()` can add any data type, including other arrays or objects. Note that if you push an array, it adds the array _as a single element_, not its contents.

```javascript
// push following data ("hello", { id: 2 }, [3, 4]); to this array
const mixedBag = [1];

mixedBag.push("hello", { id: 2 }, [3, 4]);
console.log(mixedBag);
// Output: [1, 'hello', { id: 2 }, [3, 4]]
```

---

### When to Use `push()`:

1.  **Adding Elements to the End of an Array In-Place:**
    This is the most common and direct use case. When you need to extend an existing array by appending new items.

    ```javascript
    // add ( keyboard ) to the following array
    const cartItems = ["Laptop", "Mouse"];

    cartItems.push("Keyboard");
    console.log(cartItems);
    // Output: ['Laptop', 'Mouse', 'Keyboard']
    ```

2.  **Building an Array Dynamically (e.g., from a loop or filtered data):**
    When you iterate over data and collect elements that meet certain criteria into a new array.

    ```javascript
    const allNumbers = [1, 2, 3, 4, 5, 6];

    const evenNumbers = [];

    for (const num of allNumbers) {
      if (num % 2 === 0) {
        evenNumbers.push(num); // Add even numbers to the new array
      }
    }
    console.log(evenNumbers);
    // Output: [2, 4, 6]
    ```

3.  **Implementing a Stack Data Structure (LIFO - Last-In, First-Out):**
    `push()` and `pop()` (which removes the last element) are the core operations for simulating a stack.

    ```javascript
    const callStack = [];
    callStack.push("functionA"); // Add to top of stack
    callStack.push("functionB");
    callStack.push("functionC");

    console.log("Current stack:", callStack);

    const currentFn = callStack.pop();
    console.log("Executing:", currentFn);
    console.log("Stack after pop:", callStack);
    // ['functionA', 'functionB', 'functionC']
    // Remove from top
    // Executing: functionC
    // ['functionA', 'functionB']
    ```

4.  **Collecting Results of Operations:**
    When a function or process generates multiple results that you want to accumulate in an array.

    ```javascript
    const rawData = ["apple", "banana", "cherry"];

    function processData(items) {
      const processedResults = [];
      items.forEach((item) => {
        // Simulate processing
        const result = item.toUpperCase();
        processedResults.push(result);
      });
      return processedResults;
    }

    const results = processData(rawData);
    console.log(results);
    // Output: ['APPLE', 'BANANA', 'CHERRY']
    ```

---

### When NOT to Use `push()`:

1.  **When You Need an Immutable Operation (Don't Modify Original Array):**
    `push()` modifies the array in place. If your application architecture or design principles require data immutability (common in modern front-end frameworks like React/Redux), `push()` is not suitable. Instead, use methods that return new arrays.
    - **Use Spread Syntax (`...`) or `concat()` for immutability:**

      ```javascript
      const originalArray = [1, 2];

      // DON'T do this if you need immutability:
      // originalArray.push(3);

      // DO this (Spread Syntax):
      const newArraySpread = [...originalArray, 3];
      console.log(originalArray); // Output: [1, 2] (unchanged)
      console.log(newArraySpread); // Output: [1, 2, 3]

      // OR (concat()):
      const newArrayConcat = originalArray.concat(3);
      console.log(originalArray); // Output: [1, 2] (unchanged)
      console.log(newArrayConcat); // Output: [1, 2, 3]
      ```

2.  **When Adding Elements to the Beginning of an Array:**
    While you _can_ use `push()` and then `reverse()`, this is inefficient and less clear. `unshift()` is the dedicated method for adding to the beginning.
    - **Use `unshift()` instead:**
      ```javascript
      const myQueue = [2, 3];
      myQueue.unshift(1); // Add 1 to the beginning
      console.log(myQueue); // Output: [1, 2, 3]
      ```

3.  **When Inserting Elements at a Specific Index (Not End or Beginning):**
    For inserting elements into the middle of an array, `splice()` is the correct method.
    - **Use `splice()` instead:**
      ```javascript
      const elements = ["A", "C"];
      elements.splice(1, 0, "B"); // Insert 'B' at index 1, delete 0 elements
      console.log(elements); // Output: ['A', 'B', 'C']
      ```

4.  **When You Need to Add Elements of Another Array Individually (Without Adding the Array Itself):**
    If you `push([4,5])`, the array `[4,5]` becomes a single element. If you want `4` and `5` as individual elements, use `concat()` or the spread syntax.
    - **Use spread syntax (`...`) or `concat()`:**

      ```javascript
      const arr1 = [1, 2, 3];
      const arrToMerge = [4, 5];

      // DON'T (adds arrToMerge as a single element):
      // arr1.push(arrToMerge); // arr1 becomes [1, 2, 3, [4, 5]]

      // DO (Spread syntax):
      arr1.push(...arrToMerge); // Pushes 4 and 5 individually
      console.log(arr1); // Output: [1, 2, 3, 4, 5]

      // OR (concat for immutability):
      // const newArr = arr1.concat(arrToMerge); // newArr is [1, 2, 3, 4, 5]
      ```

---

### Advanced Uses with Examples:

**1. Implementing a Simple Logger/History Feed:**

```javascript
class Logger {
  constructor(maxSize = 10) {
    this.logs = [];
    this.maxSize = maxSize;
  }

  log(message) {
    const timestamp = new Date().toLocaleTimeString();
    this.logs.push(`[${timestamp}] ${message}`);
    // Keep the log size bounded
    if (this.logs.length > this.maxSize) {
      this.logs.shift(); // Remove the oldest entry if max size exceeded
    }
  }

  getLogs() {
    return [...this.logs]; // Return a copy to prevent external modification
  }
}

const appLogger = new Logger(3);
appLogger.log("App started");
appLogger.log("User logged in");
appLogger.log("Data loaded");
console.log("Current logs:", appLogger.getLogs());
/* Output (timestamps will vary):
Current logs: [
  '[7:02:38 PM] App started',
  '[7:02:38 PM] User logged in',
  '[7:02:38 PM] Data loaded'
]
*/

appLogger.log("New event occurred"); // This will push and then shift the oldest
console.log("Logs after new event:", appLogger.getLogs());
/* Output (timestamps will vary):
Logs after new event: [
  '[7:02:38 PM] User logged in', // Oldest log removed
  '[7:02:38 PM] Data loaded',
  '[7:02:38 PM] New event occurred'
]
*/
```

**2. Building a Custom `map()`-like Function:**

While you'd typically use the built-in `map()`, `push()` is how you'd implement a custom version.

```javascript
const numbers = [1, 2, 3];

function myMap(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

const doubled = myMap(numbers, (n) => n * 2);
console.log(doubled); // Output: [2, 4, 6]
```

**3. Collecting Form Data into an Array of Objects:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Form Data Collector</title>
  </head>
  <body>
    <form id="myForm">
      <input type="text" name="name" placeholder="Name" />
      <input type="number" name="age" placeholder="Age" />
      <button type="submit">Add User</button>
    </form>
    <div id="userList"></div>

    <script>
      const users = []; // Array to store user objects
      const myForm = document.getElementById("myForm");
      const userListDiv = document.getElementById("userList");

      myForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(myForm);
        const newUser = {
          name: formData.get("name"),
          age: parseInt(formData.get("age")),
        };

        users.push(newUser); // Add the new user object to the array

        renderUserList();
        myForm.reset(); // Clear form fields
      });

      function renderUserList() {
        userListDiv.innerHTML = ""; // Clear previous list
        users.forEach((user) => {
          const p = document.createElement("p");
          p.textContent = `Name: ${user.name}, Age: ${user.age}`;
          userListDiv.appendChild(p);
        });
      }
    </script>
  </body>
</html>
```

#### It is a Mutating Methods (Modify the Original Array)

The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

#### Syntax:

```javascript
arr.pop();
```

#### Parameters:

- None.

#### Return Value:

- The element that was removed from the array.
- `undefined` if the array is empty.

#### How it Works (Mental Model):

Imagine `pop()` as taking the very last item off your list. It hands you that item and makes your list one item shorter.

#### Basic Examples:

**1. Removing the Last Element:**

```javascript
const fruits = ["apple", "banana", "cherry"];

const removedFruit = fruits.pop();
console.log(fruits);
console.log(removedFruit);
// Output: ['apple', 'banana'] (original array modified)
// Output: 'cherry'
```

**2. Popping from an Empty Array:**

```javascript
const emptyArray = [];

const result = emptyArray.pop();
console.log(emptyArray);
console.log(result);
// Output: []
// Output: undefined
```

**3. Popping Multiple Times:**

```javascript
const numbers = [1, 2, 3];

numbers.pop();
// Removes 3
numbers.pop();
// Removes 2
console.log(numbers);
// Output: [1]
```

**4. Popping an Array of Objects:**

`pop()` works the same way for objects; it returns the last object reference.

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const removedUser = users.pop();
console.log(users); // Output: [{ id: 1, name: 'Alice' }]
console.log(removedUser); // Output: { id: 2, name: 'Bob' }
```

---

### When to Use `pop()`:

1.  **Removing Elements from the End of an Array In-Place:**
    This is the primary and most direct use case. When you need to shorten an existing array by removing its last item.

    ```javascript
    const logQueue = ["event1", "event2", "event3"];
    while (logQueue.length > 0) {
      const logEntry = logQueue.pop(); // Process logs from the end
      console.log("Processing:", logEntry);
    }
    console.log("Log queue after processing:", logQueue); // []
    ```

2.  **Implementing a Stack Data Structure (LIFO - Last-In, First-Out):**
    `pop()` and `push()` are the core operations for simulating a stack. Elements are added (`push`) and removed (`pop`) from the same end (the "top" of the stack).

    ```javascript
    const taskStack = ["taskA", "taskB", "taskC"];

    console.log("Tasks to complete (top last):", taskStack);

    let nextTask;
    while ((nextTask = taskStack.pop()) !== undefined) {
      console.log(`Completed: ${nextTask}`);
    }
    console.log("All tasks completed. Stack:", taskStack);
    /* Output:
    Tasks to complete (top last): [ 'taskA', 'taskB', 'taskC' ]
    Completed: taskC
    Completed: taskB
    Completed: taskA
    All tasks completed. Stack: []
    */
    ```

3.  **Iterating Backwards and Consuming an Array:**
    When you need to process elements from the end of an array towards the beginning, and you also want to empty the array as you go.

    ```javascript
    const countdown = [5, 4, 3, 2, 1, "Lift Off!"];
    let current;
    while (countdown.length > 0) {
      current = countdown.pop();
      console.log(current);
      if (typeof current === "number") {
        // Simulate a delay
      }
    }
    ```

4.  **Managing "Undo" or "History" Stacks:**
    In simple applications, `pop()` can retrieve the last action from an undo stack.

    ```javascript
    const undoStack = ["action1", "action2", "action3"];

    function undoLastAction() {
      const lastAction = undoStack.pop();
      if (lastAction) {
        console.log(`Undoing: ${lastAction}`);
        // Perform actual undo logic here
        return true; // Action was undone
      } else {
        console.log("No more actions to undo.");
        return false;
      }
    }

    undoLastAction(); // Undoing: action3
    undoLastAction(); // Undoing: action2
    undoLastAction(); // Undoing: action1
    undoLastAction(); // No more actions to undo.
    ```

---

### When NOT to Use `pop()`:

1.  **When You Need an Immutable Operation (Don't Modify Original Array):**
    `pop()` modifies the array in place. If your application design or state management principles require immutability (e.g., in React/Redux), `pop()` is not suitable. Instead, create a new array without the last element.
    - **Use `slice()` or spread syntax (`...`) for immutability:**

      ```javascript
      const originalArray = [1, 2, 3];

      // DON'T do this if you need immutability:
      // originalArray.pop();

      // DO this (slice()):
      const newArraySlice = originalArray.slice(0, -1); // Creates new array excluding the last element
      console.log(originalArray); // Output: [1, 2, 3] (unchanged)
      console.log(newArraySlice); // Output: [1, 2]

      // OR (Spread Syntax with destructuring for the removed element):
      const [...newArraySpread] = originalArray; // Copy the array
      const removedElement = newArraySpread.pop(); // Pop from the copy
      console.log(originalArray); // Output: [1, 2, 3] (unchanged)
      console.log(newArraySpread); // Output: [1, 2]
      console.log(removedElement); // Output: 3
      ```

2.  **When Removing Elements from the Beginning of an Array:**
    While you _can_ `reverse()` then `pop()` then `reverse()` again, this is inefficient and less clear. `shift()` is the dedicated method for removing from the beginning.
    - **Use `shift()` instead:**
      ```javascript
      const myQueue = [1, 2, 3];
      const firstElement = myQueue.shift(); // Remove 1 from the beginning
      console.log(myQueue); // Output: [2, 3]
      console.log(firstElement); // Output: 1
      ```

3.  **When Removing Elements from a Specific Index (Not End or Beginning):**
    For removing elements from the middle of an array, `splice()` is the correct method.
    - **Use `splice()` instead:**
      ```javascript
      const elements = ["A", "B", "C", "D"];
      const removedMid = elements.splice(1, 1); // Remove 1 element at index 1
      console.log(elements); // Output: ['A', 'C', 'D']
      console.log(removedMid); // Output: ['B']
      ```

---

### Advanced Uses with Examples:

**1. Implementing a Simple Task Processor with a "Retry" Mechanism:**

```javascript
const tasks = [
  { id: 1, name: "Upload Image", status: "pending" },
  { id: 2, name: "Process Data", status: "pending" },
  { id: 3, name: "Send Email", status: "pending" },
];

const completedTasks = [];
const failedTasks = [];

function processTasks(taskQueue) {
  let task;
  while ((task = taskQueue.pop()) !== undefined) {
    console.log(`Attempting task: ${task.name}`);
    // Simulate task execution
    const success = Math.random() > 0.3; // 70% chance of success

    if (success) {
      task.status = "completed";
      completedTasks.push(task);
      console.log(`Task ${task.name} COMPLETED.`);
    } else {
      task.status = "failed";
      failedTasks.push(task);
      console.log(`Task ${task.name} FAILED. Will retry later.`);
    }
  }
}

// Clone tasks array to simulate a queue
const taskQueue = [...tasks];
processTasks(taskQueue);

console.log("\n--- Summary ---");
console.log("Original tasks:", tasks);
console.log("Completed tasks:", completedTasks);
console.log("Failed tasks:", failedTasks);

// Output:
// Attempting task: Send Email
// Task Send Email FAILED. Will retry later.
// Attempting task: Process Data
// Task Process Data COMPLETED.
// Attempting task: Upload Image
// Task Upload Image COMPLETED.
//
// --- Summary ---
// Original tasks: [
//   { id: 1, name: 'Upload Image', status: 'completed' },
//   { id: 2, name: 'Process Data', status: 'completed' },
//   { id: 3, name: 'Send Email', status: 'failed' }
// ]
// Completed tasks: [
//   { id: 2, name: 'Process Data', status: 'completed' },
//   { id: 1, name: 'Upload Image', status: 'completed' }
// ]
// Failed tasks: [ { id: 3, name: 'Send Email', status: 'failed' } ]
```

**2. Managing Breadcrumb Navigation History (Simplified):**

In a single-page application, you might use an array to represent the history of visited pages, and `pop()` when navigating "back".

```javascript
const navigationHistory = [
  "/home",
  "/products",
  "/products/electronics",
  "/products/laptops",
];

function goBack() {
  if (navigationHistory.length > 1) {
    // Ensure there's a page to go back to
    const currentPage = navigationHistory.pop(); // Remove current page
    const previousPage = navigationHistory[navigationHistory.length - 1]; // Get the new last page
    console.log(`Navigating from ${currentPage} back to ${previousPage}`);
    // Simulate routing or loading previous page content
    return previousPage;
  } else {
    console.log("Already at the first page.");
    return navigationHistory[0]; // Stay on the first page
  }
}

console.log("Current History:", navigationHistory);
goBack(); // Navigating from /products/laptops back to /products/electronics
console.log("History after back:", navigationHistory);

goBack(); // Navigating from /products/electronics back to /products
console.log("History after back:", navigationHistory);
```

**3. Implementing a "Limited History" or "Recent Items" List:**

<!-- NOTE comeback when classes are done -->

Similar to the `Logger` example, `pop()` can be used with `unshift()` to maintain a fixed-size list of recent items, always keeping the newest items.

```javascript
class RecentItems {
  constructor(maxSize = 5) {
    this.items = [];
    this.maxSize = maxSize;
  }

  addItem(item) {
    // Add to the front (most recent)
    this.items.unshift(item);
    // If exceeds max size, remove the oldest (last) item
    if (this.items.length > this.maxSize) {
      this.items.pop();
    }
  }

  getRecentItems() {
    return [...this.items]; // Return a copy
  }
}

const history = new RecentItems(3);
history.addItem("Doc A"); // [A]
history.addItem("Doc B"); // [B, A]
history.addItem("Doc C"); // [C, B, A]
console.log("History 1:", history.getRecentItems());

history.addItem("Doc D"); // [D, C, B] (A is popped)
console.log("History 2:", history.getRecentItems());

history.addItem("Doc E"); // [E, D, C] (B is popped)
console.log("History 3:", history.getRecentItems());
```

`pop()` is a straightforward and efficient method for manipulating arrays when you need to remove and retrieve the last element. It's particularly useful for stack-like operations and when processing items from the end of an array. Always be mindful of its in-place modification and choose immutable alternatives when necessary.

### The `shift()` Method in JavaScript

#### It is a Mutating Methods (Modify the Original Array)

The `shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array and shifts all subsequent elements to a lower index.

#### Syntax:

```javascript
arr.shift();
```

#### Parameters:

- None.

#### Return Value:

- The element that was removed from the array (i.e., the first element).
- `undefined` if the array is empty.

#### How it Works (Mental Model):

Imagine `shift()` as taking the very first item off your list. It hands you that item, makes your list one item shorter, and then all the remaining items move up to fill the empty spot at the beginning.

#### Basic Examples:

**1. Removing the First Element:**

```javascript
const fruits = ["apple", "banana", "cherry"];

const removedFruit = fruits.shift();
console.log(fruits);
console.log(removedFruit);
// Output: ['banana', 'cherry'] (original array modified)
// Output: 'apple'
```

**2. Shifting from an Empty Array:**

```javascript
const emptyArray = [];

const result = emptyArray.shift();
console.log(emptyArray);
console.log(result);
// Output: []
// Output: undefined
```

**3. Shifting Multiple Times:**

```javascript
const numbers = [1, 2, 3];

numbers.shift(); // Removes 1
numbers.shift(); // Removes 2
console.log(numbers); // Output: [3]
```

**4. Shifting an Array of Objects:**

`shift()` works the same way for objects; it returns the first object reference.

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const removedUser = users.shift();
console.log(users); // Output: [{ id: 2, name: 'Bob' }]
console.log(removedUser); // Output: { id: 1, name: 'Alice' }
```

---

### When to Use `shift()`:

1.  **Removing Elements from the Beginning of an Array In-Place:**
    This is the primary and most direct use case. When you need to shorten an existing array by removing its first item.

    ```javascript
    const tasksToDo = ["Write report", "Email client", "Call team"];
    const nextTask = tasksToDo.shift(); // Get the next task from the beginning
    console.log(`Next task: ${nextTask}`); // Next task: Write report
    console.log(`Remaining tasks: ${tasksToDo}`); // Remaining tasks: Email client,Call team
    ```

2.  **Implementing a Queue Data Structure (FIFO - First-In, First-Out):**
    `push()` (to add to the end) and `shift()` (to remove from the beginning) are the core operations for simulating a traditional queue, where items are processed in the order they were added.

    ```javascript
    const jobQueue = [];
    jobQueue.push("jobA");
    jobQueue.push("jobB");
    jobQueue.push("jobC");

    console.log("Jobs in queue (first in, first out):", jobQueue);

    let currentJob;
    while ((currentJob = jobQueue.shift()) !== undefined) {
      console.log(`Processing job: ${currentJob}`);
    }
    console.log("All jobs processed. Queue:", jobQueue);
    /* Output:
    Jobs in queue (first in, first out): [ 'jobA', 'jobB', 'jobC' ]
    Processing job: jobA
    Processing job: jobB
    Processing job: jobC
    All jobs processed. Queue: []
    */
    ```

3.  **Consuming Elements from the Beginning of an Array Iteratively:**
    When you need to process elements one by one from the start of an array, and you want to empty the array as you go.

    ```javascript
    const messages = ["Hello", "How are you?", "I am good."];
    while (messages.length > 0) {
      const message = messages.shift();
      console.log(`Displaying: "${message}"`);
      // Simulate display delay
    }
    console.log("All messages displayed.");
    ```

4.  **Parsing Data Streams where Order is Important:**
    If you have an array representing a sequence of events or commands and you need to process them in chronological order.

    ```javascript
    const commandStream = [
      "init",
      "load_config",
      "start_server",
      "log_startup",
    ];
    function executeCommand(command) {
      console.log(`Executing: ${command}`);
    }
    while (commandStream.length > 0) {
      executeCommand(commandStream.shift());
    }

    // output:
    // Executing: init
    // Executing: load_config
    // Executing: start_server
    // Executing: log_startup
    ```

---

### When NOT to Use `shift()`:

1.  **When You Need an Immutable Operation (Don't Modify Original Array):**
    `shift()` modifies the array in place. If your application architecture or design principles require data immutability (common in modern front-end frameworks like React/Redux), `shift()` is not suitable. Instead, create a new array without the first element.
    - **Use `slice()` or spread syntax (`...`) for immutability:**

      ```javascript
      const originalArray = [1, 2, 3];

      // DON'T do this if you need immutability:
      // originalArray.shift();

      // DO this (slice()):
      const newArraySlice = originalArray.slice(1); // Creates new array starting from index 1
      console.log(originalArray); // Output: [1, 2, 3] (unchanged)
      console.log(newArraySlice); // Output: [2, 3]

      // OR (Spread Syntax with destructuring for the removed element):
      const [removedElement, ...newArraySpread] = originalArray; // Destructures first element and rest
      console.log(originalArray); // Output: [1, 2, 3] (unchanged)
      console.log(newArraySpread); // Output: [2, 3]
      console.log(removedElement); // Output: 1
      ```

2.  **When Removing Elements from the End of an Array:**
    `pop()` is the dedicated and more efficient method for removing from the end. `shift()` involves re-indexing all subsequent elements, which can be slower for very large arrays.
    - **Use `pop()` instead:**
      ```javascript
      const myNumbers = [1, 2, 3];
      myNumbers.pop(); // Remove 3 from the end
      console.log(myNumbers); // Output: [1, 2]
      ```

3.  **When Removing Elements from a Specific Index (Not End or Beginning):**
    For removing elements from the middle of an array, `splice()` is the correct method.
    - **Use `splice()` instead:**
      ```javascript
      const elements = ["A", "B", "C", "D"];
      const removedMid = elements.splice(1, 1); // Remove 1 element at index 1
      console.log(elements); // Output: ['A', 'C', 'D']
      console.log(removedMid); // Output: ['B']
      ```

4.  **When Performance is Critical for Very Large Arrays (Especially in a Loop):**
    Because `shift()` re-indexes all remaining elements (changing their indices), its performance can degrade significantly ($O(n)$ complexity) as the array size grows. For very frequent removals from the front of massive arrays, consider alternative data structures like a `LinkedList` or specialized queue implementations if `shift` operations are consistently a performance bottleneck. For most common web development scenarios, this performance impact is acceptable.

---

### Advanced Uses with Examples:

**1. Implementing a Task Queue Processor:**

This is a classic use case for `shift()`: processing a backlog of jobs or tasks.

```javascript
class TaskProcessor {
  constructor() {
    this.queue = [];
    this.isRunning = false;
  }

  addTask(taskName) {
    this.queue.push(taskName);
    console.log(`Added task: ${taskName}. Queue size: ${this.queue.length}`);
    this.startProcessing();
  }

  startProcessing() {
    if (!this.isRunning && this.queue.length > 0) {
      this.isRunning = true;
      this._processNextTask();
    }
  }

  _processNextTask() {
    if (this.queue.length > 0) {
      const currentTask = this.queue.shift(); // Remove the first task
      console.log(`Processing: ${currentTask}...`);
      // Simulate async work
      setTimeout(() => {
        console.log(`Finished: ${currentTask}.`);
        this._processNextTask(); // Process the next task
      }, 1000); // Simulate 1 second work
    } else {
      this.isRunning = false;
      console.log("Task queue empty. Processor idle.");
    }
  }
}

const processor = new TaskProcessor();
processor.addTask("Generate Report A");
processor.addTask("Send Notifications");
processor.addTask("Update Database");
processor.addTask("Clean Cache");
// Tasks will be processed in the order they were added.
```

**2. Parsing Command Line Arguments (Simplified):**

In Node.js, `process.argv` is an array. `shift()` can be used to consume arguments.

```javascript
// Simulate process.argv for browser environment
// In Node.js, this would be: const args = process.argv.slice(2);
const simulatedArgs = ["--env=production", "--port=8080", "start"];

function parseCommandLineArgs(args) {
  const options = {};
  while (args.length > 0) {
    const arg = args.shift(); // Consume one argument at a time
    if (arg.startsWith("--")) {
      const [key, value] = arg.substring(2).split("=");
      options[key] = value || true; // Handle --flag or --key=value
    } else {
      // Treat as a command or positional argument
      options.command = arg;
    }
  }
  return options;
}

const config = parseCommandLineArgs(simulatedArgs);
console.log("Parsed config:", config);
// Output: { env: 'production', port: '8080', command: 'start' }
```

**3. Implementing a Circular Buffer (Fixed Size Queue):**

When combined with `push()`, `shift()` can maintain a fixed-size buffer where older elements are discarded.

<!-- NOTE comeback when classes are done -->

```javascript
class CircularBuffer {
  constructor(capacity) {
    this.capacity = capacity;
    this.buffer = [];
  }

  add(item) {
    this.buffer.push(item);
    if (this.buffer.length > this.capacity) {
      this.buffer.shift(); // Remove the oldest item
    }
  }

  getContents() {
    return [...this.buffer]; // Return a copy
  }
}

const sensorReadings = new CircularBuffer(3);
sensorReadings.add(10); // [10]
sensorReadings.add(20); // [10, 20]
sensorReadings.add(30); // [10, 20, 30]
console.log("Readings 1:", sensorReadings.getContents());

sensorReadings.add(40); // [20, 30, 40] (10 is shifted out)
console.log("Readings 2:", sensorReadings.getContents());

sensorReadings.add(50); // [30, 40, 50] (20 is shifted out)
console.log("Readings 3:", sensorReadings.getContents());
```

`shift()` is a vital method for managing arrays where elements need to be processed from the beginning in a FIFO manner. Its efficiency and direct modification of the array make it suitable for queue-like operations. However, always be mindful of its performance characteristics for very large arrays and use immutable alternatives when preserving the original array is a requirement.

The JavaScript `unshift()` method is used to add one or more elements to the **beginning** of an array. It modifies the **original array** in-place and returns the new length of the array.

---

Mnemonics: How to Remember Them

Since the logic is still a bit abstract, here are three simple ways to stop mixing them up:

The "Word Length" Trick

shift is a short word. It makes the array shorter.

unshift is a longer word. It makes the array longer.

### The `unshift()` Method in JavaScript

#### It is a Mutating Methods (Modify the Original Array)

The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

#### Syntax:

```javascript
arr.unshift(element1, element2, ..., elementN)
```

#### Parameters:

- `element1, element2, ..., elementN` (Optional): The elements to add to the beginning of the array. You can pass zero or more elements.

#### Return Value:

- The new `length` property of the array after the elements have been added.

#### How it Works (Mental Model):

Imagine `unshift()` as inserting items at the very front of your list. All existing items get shifted to the right (their indices increase) to make room for the new items at the beginning.

#### Basic Examples:

**1. Adding a Single Element to the Beginning:**

```javascript
const fruits = ["banana", "cherry"];

const newLength = fruits.unshift("apple");
console.log(fruits);
console.log(newLength);
// Output: ['apple', 'banana', 'cherry']
// Output: 3
```

**2. Adding Multiple Elements to the Beginning:**

```javascript
const numbers = [3, 4, 5];

const newLengthMulti = numbers.unshift(0, 1, 2);
console.log(numbers);
console.log(newLengthMulti);
// Output: [0, 1, 2, 3, 4, 5]
// Output: 6
```

**3. Unshifting to an Empty Array:**

```javascript
const emptyArray = [];

emptyArray.unshift("first");
console.log(emptyArray);
// Output: ['first']
```

**4. Unshifting Various Data Types:**

`unshift()` can add any data type, including other arrays or objects. Similar to `push()`, if you unshift an array, it adds the array _as a single element_, not its contents.

```javascript
const mixedBag = ["existing"];

mixedBag.unshift(0, { id: 1 }, ["nested"]);
console.log(mixedBag);
// Output: [0, { id: 1 }, ['nested'], 'existing']
```

---

### When to Use `unshift()`:

1.  **Adding Elements to the Beginning of an Array In-Place:**
    This is the core purpose of `unshift()`. When you need to extend an existing array by prepending new items.

    ```javascript
    const recentActivities = ["User X logged in"];

    recentActivities.unshift("New message received from Y");
    console.log(recentActivities);
    // Output: ['New message received from Y', 'User X logged in']
    ```

2.  **Implementing a Queue Data Structure (FIFO - First-In, First-Out) where items are added to the front:**
    While `push()` and `shift()` are more common for a traditional queue (add to end, remove from front), sometimes you might design a queue where new items arrive at the front.

    ```javascript
    const printerQueue = ["docB", "docC"];

    printerQueue.unshift("docA");
    console.log("Printer Queue:", printerQueue);
    // New document arrives, put it at the front
    // ['docA', 'docB', 'docC']

    // To process, you'd usually use pop() or shift() depending on desired behavior.
    // If you want to process the _newest_ item immediately:
    const nextDoc = printerQueue.shift();
    console.log("Processing:", nextDoc);
    // docA
    ```

3.  **Maintaining a Limited "Most Recent" List (in conjunction with `pop()`):**
    If you want a fixed-size list that always shows the latest N items, adding to the front and removing from the back is a common pattern.

    ```javascript
    const recentNotifications = [];
    const MAX_NOTIFICATIONS = 3;

    function addNotification(notification) {
      recentNotifications.unshift(notification); // Add new notification to the top
      if (recentNotifications.length > MAX_NOTIFICATIONS) {
        recentNotifications.pop(); // Remove the oldest notification
      }
    }

    addNotification("New email from Alice");
    addNotification("Event reminder at 3 PM");
    addNotification("Security alert!");
    console.log("Recent notifications:", recentNotifications);
    // Output: ['Security alert!', 'Event reminder at 3 PM', 'New email from Alice']

    addNotification("Birthday wish from Bob"); // This will remove 'New email from Alice'
    console.log("Recent notifications:", recentNotifications);
    // Output: ['Birthday wish from Bob', 'Security alert!', 'Event reminder at 3 PM']
    ```

---

### When NOT to Use `unshift()`:

1.  **When You Need an Immutable Operation (Don't Modify Original Array):**
    `unshift()` modifies the array in place. For immutable state management, `unshift()` is not suitable. Instead, create a new array with the elements prepended.
    - **Use Spread Syntax (`...`) for immutability:**

      ```javascript
      const originalArray = [1, 2];

      // DON'T do this if you need immutability:
      // originalArray.unshift(0);

      // DO this (Spread Syntax):
      const newArraySpread = [0, ...originalArray];
      console.log(originalArray); // Output: [1, 2] (unchanged)
      console.log(newArraySpread); // Output: [0, 1, 2]
      ```

2.  **When Adding Elements to the End of an Array:**
    `push()` is the dedicated and more efficient method for adding to the end. `unshift()` involves re-indexing all existing elements, which can be slower for very large arrays.
    - **Use `push()` instead:**
      ```javascript
      const myNumbers = [1, 2];
      myNumbers.push(3); // Add 3 to the end
      console.log(myNumbers); // Output: [1, 2, 3]
      ```

3.  **When Inserting Elements at a Specific Index (Not End or Beginning):**
    For inserting elements into the middle of an array, `splice()` is the correct method.
    - **Use `splice()` instead:**
      ```javascript
      const elements = ["A", "C"];
      elements.splice(1, 0, "B"); // Insert 'B' at index 1, delete 0 elements
      console.log(elements); // Output: ['A', 'B', 'C']
      ```

4.  **When Performance is Critical for Very Large Arrays (Especially in a Loop):**
    Because `unshift()` shifts all existing elements, its performance can degrade significantly ($O(n)$ complexity) as the array size grows. For frequent additions to the front of very large arrays, consider using a different data structure like a `LinkedList` or a custom array-like structure that manages its internal pointers more efficiently if `unshift` operations are truly a bottleneck. For most common web development scenarios, this performance impact is negligible.

---

### Advanced Uses with Examples:

**1. Building a Recent Activity Feed (Newest First):**

This is a direct application where `unshift()` shines, as new activities naturally go to the top.

```javascript
const activityFeed = [];

function addActivity(user, action) {
  const timestamp = new Date().toLocaleTimeString();
  const activity = `${timestamp}: ${user} ${action}.`;
  activityFeed.unshift(activity); // Add to the beginning for "newest first"
  // Optionally, limit the feed size
  if (activityFeed.length > 5) {
    activityFeed.pop(); // Remove the oldest if the feed gets too long
  }
}

addActivity("Alice", "posted a new photo");
addActivity("Bob", "commented on your status");
addActivity("Charlie", "liked your post");

console.log("Activity Feed:");
activityFeed.forEach((activity) => console.log(activity));
/* Output (timestamps will vary):
7:05:30 PM: Charlie liked your post.
7:05:30 PM: Bob commented on your status.
7:05:30 PM: Alice posted a new photo.
*/

addActivity("David", "shared a link");
console.log("\nActivity Feed (after new event):");
activityFeed.forEach((activity) => console.log(activity));
/* Output (timestamps will vary):
7:05:30 PM: David shared a link.
7:05:30 PM: Charlie liked your post.
7:05:30 PM: Bob commented on your status.
*/
```

**2. Prepending Default Options or Fallbacks:**

If you have a dynamic list and want to ensure certain default options always appear at the top.

```javascript
function getDropdownOptions(userOptions) {
  const defaultOptions = ["-- Select --", "N/A"];
  // Create a new array with defaults at the beginning, then add user options
  return [...defaultOptions, ...userOptions];
  // Alternatively, using unshift if 'userOptions' array itself can be modified:
  // userOptions.unshift('-- Select --', 'N/A');
  // return userOptions;
}

const fetchedOptions = ["Option A", "Option B"];
const finalOptions = getDropdownOptions(fetchedOptions);
console.log(finalOptions); // Output: ['-- Select --', 'N/A', 'Option A', 'Option B']
```

**3. Simulating a Deque (Double-Ended Queue) where elements are added to the front:**

While `push` and `shift` are typical for a queue, `unshift` combined with `pop` can offer a deque-like behavior if you need to add to the front and remove from the back.

<!-- NOTE  comeback when classes are done.-->

```javascript
class Deque {
  constructor() {
    this.elements = [];
  }

  // Add to the front
  addFront(item) {
    this.elements.unshift(item);
  }

  // Add to the back (typically push)
  addBack(item) {
    this.elements.push(item);
  }

  // Remove from the front (typically shift)
  removeFront() {
    return this.elements.shift();
  }

  // Remove from the back
  removeBack() {
    return this.elements.pop();
  }

  toArray() {
    return [...this.elements];
  }
}

const queue = new Deque();
queue.addFront("A"); // ['A']
queue.addFront("B"); // ['B', 'A']
queue.addBack("C"); // ['B', 'A', 'C']

console.log(queue.toArray()); // ['B', 'A', 'C']

console.log("Removed from front:", queue.removeFront()); // Removed from front: B
console.log("Removed from back:", queue.removeBack()); // Removed from back: C
console.log(queue.toArray()); // ['A']
```

`unshift()` is valuable for adding elements to the start of an array, particularly when maintaining order where new items always appear first. However, its performance implications for very large arrays and its mutable nature mean it's crucial to use it thoughtfully or choose immutable alternatives (like the spread operator) when appropriate.

The JavaScript `splice()` method is a powerful and versatile tool for modifying arrays directly (in-place). Unlike `slice()`, which creates a new array, `splice()` alters the original array by adding, removing, or replacing elements.

---

### The `splice()` Method in JavaScript

The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements **in place**.

#### Syntax:

```javascript
arr.splice(startIndex, deleteCount, item1, item2, ...)
```

#### Parameters:

- `startIndex` (Required): The index at which to start changing the array.
  - If `startIndex` is greater than the array's length, it's set to the array's length.
  - If `startIndex` is negative, it will begin that many elements from the end of the array (e.g., `-1` is the last element, `-2` is the second to last, etc.). If `startIndex` is negative and its absolute value is larger than the array's length, it's set to `0`.
- `deleteCount` (Optional): An integer indicating the number of elements to remove from `startIndex`.
  - If `deleteCount` is omitted or is greater than or equal to the number of elements left in the array (starting from `startIndex`), all elements from `startIndex` to the end of the array will be deleted.
  - If `deleteCount` is `0` or negative, no elements are removed. In this case, you must specify at least one `item` to add.
- `item1, item2, ...` (Optional): The elements to add to the array, beginning at `startIndex`. If you don't specify any elements, `splice()` will only remove elements.

#### Return Value:

- An array containing the deleted elements.
- If no elements are removed, an empty array is returned.

#### How it Works (Mental Model):

Think of `splice()` as cutting a section out of your array, and optionally pasting new elements back into that cut.

#### Basic Examples:

**1. Deleting Elements:**

```javascript
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Remove 1 element starting from index 2
const deletedFruits = fruits.splice(2, 1);
console.log(fruits); // Output: ['apple', 'banana', 'date', 'elderberry'] (cherry is removed)
console.log(deletedFruits); // Output: ['cherry']
```

**2. Adding Elements (without deleting any):**

```javascript
const colors = ["red", "green", "blue"];

// Add 'yellow' and 'purple' starting from index 1 (0 elements deleted)
const addedColors = colors.splice(1, 0, "yellow", "purple");
console.log(colors); // Output: ['red', 'yellow', 'purple', 'green', 'blue']
console.log(addedColors); // Output: [] (no elements were deleted)
```

**3. Replacing Elements:**

```javascript
const items = ["pen", "notebook", "eraser", "pencil"];

// Replace 1 element starting from index 2 with 'stapler'
const replacedItems = items.splice(2, 1, "stapler");
console.log(items); // Output: ['pen', 'notebook', 'stapler', 'pencil']
console.log(replacedItems); // Output: ['eraser']
```

**4. Using Negative `startIndex`:**

```javascript
const numbers = [10, 20, 30, 40, 50];

// Remove 2 elements starting from 2 positions from the end
const removedFromEnd = numbers.splice(-2, 2);
console.log(numbers); // Output: [10, 20, 30]
console.log(removedFromEnd); // Output: [40, 50]
```

---

### When to Use `splice()`:

1.  **Modifying an Array In-Place:**
    This is the core reason to use `splice()`. When you explicitly need to change the original array by adding, removing, or replacing elements.

    ```javascript
    const tasks = ["Buy groceries", "Pay bills", "Walk dog"];
    tasks.splice(1, 1); // Task at index 1 is done, remove it
    console.log(tasks); // Output: ['Buy groceries', 'Walk dog']
    ```

2.  **Inserting Elements at a Specific Position:**
    When you want to add one or more elements into the middle or beginning/end of an array without removing anything.

    ```javascript
    const myList = ["item1", "item2", "item5"];
    myList.splice(2, 0, "item3", "item4"); // Insert 'item3', 'item4' at index 2
    console.log(myList); // Output: ['item1', 'item2', 'item3', 'item4', 'item5']
    ```

3.  **Removing a Specific Number of Elements from a Specific Position:**
    When you know the index and how many elements you want to take out.

    ```javascript
    const inventory = ["apple", "banana", "orange", "grape", "kiwi"];
    // Remove 'orange' and 'grape'
    inventory.splice(2, 2);
    console.log(inventory); // Output: ['apple', 'banana', 'kiwi']
    ```

4.  **Replacing Existing Elements with New Ones:**
    When you want to swap out one or more elements for different ones at a particular position.

    ```javascript
    const schedule = ["Monday", "Tuesday", "Wednesday", "Thursday"];
    // Replace Wednesday with 'Meeting' and 'Lunch'
    schedule.splice(2, 1, "Meeting", "Lunch");
    console.log(schedule); // Output: ['Monday', 'Tuesday', 'Meeting', 'Lunch', 'Thursday']
    ```

---

### When NOT to Use `splice()`:

1.  **When You Need an Immutable Operation (Don't Modify Original Array):**
    If your design principle is to keep original data structures unchanged and work with copies, `splice()` is the wrong choice. Use `slice()`, `filter()`, `map()`, or the spread operator (`...`) to create new arrays.
    - **Use `slice()` for extracting without modifying:**
      ```javascript
      const originalArray = [1, 2, 3, 4, 5];
      const subArray = originalArray.slice(1, 4); // [2, 3, 4]
      console.log(originalArray); // [1, 2, 3, 4, 5] (original untouched)
      ```
    - **Use `filter()` for removing elements immutably:**
      ```javascript
      const originalArray = [1, 2, 3, 4, 5];
      const newArrayWithout3 = originalArray.filter((num) => num !== 3); // [1, 2, 4, 5]
      console.log(originalArray); // [1, 2, 3, 4, 5] (original untouched)
      ```

2.  **When Iterating and Simultaneously Modifying the Array by Index:**
    Modifying an array's length or indices while iterating over it with a `for` loop (especially a `for (let i = 0; i < array.length; i++)` loop) that depends on `i` and `array.length` can lead to skipped elements or infinite loops. If you must modify during iteration, iterate backwards or use methods that create new arrays.

    ```javascript
    // DANGEROUS PATTERN (AVOID!)
    const numbers = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        numbers.splice(i, 1); // This shifts elements and changes length, messing up the loop counter
      }
    }
    console.log(numbers); // Output: [1, 3, 5] (Oops! 4 was skipped because 5 moved into its spot)

    // Better way to remove elements while iterating (if you must modify in place):
    const numbersSafe = [1, 2, 3, 4, 5];
    for (let i = numbersSafe.length - 1; i >= 0; i--) {
      // Iterate backwards
      if (numbersSafe[i] % 2 === 0) {
        numbersSafe.splice(i, 1);
      }
    }
    console.log(numbersSafe); // Output: [1, 3, 5] (Correct!)
    ```

---

### Advanced Uses with Examples:

**1. Implementing a "Move Element" Function:**

You can use `splice()` twice to move an element from one position to another within the same array.

```javascript
function moveElement(arr, fromIndex, toIndex) {
  if (
    fromIndex === toIndex ||
    fromIndex < 0 ||
    toIndex < 0 ||
    fromIndex >= arr.length ||
    toIndex >= arr.length
  ) {
    return; // No change needed or invalid indices
  }

  // 1. Remove the element from its original position
  const [movedElement] = arr.splice(fromIndex, 1);

  // 2. Insert the element at the new position
  arr.splice(toIndex, 0, movedElement);
}

const colors = ["red", "green", "blue", "yellow", "purple"];
moveElement(colors, 1, 3); // Move 'green' (index 1) to after 'yellow' (new index 3)
console.log(colors); // Output: ['red', 'blue', 'yellow', 'green', 'purple']

moveElement(colors, 4, 0); // Move 'purple' (index 4) to the beginning
console.log(colors); // Output: ['purple', 'red', 'blue', 'yellow', 'green']
```

**2. Implementing Undo/Redo (Simplified Concept):**

While a full undo/redo stack is complex, `splice()` can be a core part of array state management for mutable operations.

```javascript
class HistoryManager {
  constructor(initialState) {
    this.states = [initialState.slice()]; // Store initial state as a copy
    this.currentIndex = 0;
  }

  // Perform an operation that modifies the array in-place
  performOperation(array, operationFn) {
    // Clear any 'redo' states if a new operation is performed
    if (this.currentIndex < this.states.length - 1) {
      this.states.splice(this.currentIndex + 1);
    }

    const newState = array.slice(); // Create a copy for the new state
    operationFn(newState); // Apply the operation to the copy
    this.states.push(newState);
    this.currentIndex++;
    return newState;
  }

  undo() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.states[this.currentIndex].slice(); // Return a copy of the previous state
    }
    return this.states[0].slice(); // Return the initial state if no more undo
  }

  redo() {
    if (this.currentIndex < this.states.length - 1) {
      this.currentIndex++;
      return this.states[this.currentIndex].slice(); // Return a copy of the next state
    }
    return this.states[this.currentIndex].slice(); // Return current state if no more redo
  }
}

let data = ["A", "B", "C"];
const history = new HistoryManager(data);

console.log("Initial:", data); // Initial: ['A', 'B', 'C']

// Operation 1: Add D
data = history.performOperation(data, (arr) => arr.splice(3, 0, "D"));
console.log("After Add D:", data); // After Add D: ['A', 'B', 'C', 'D']

// Operation 2: Replace B with X
data = history.performOperation(data, (arr) => arr.splice(1, 1, "X"));
console.log("After Replace B:", data); // After Replace B: ['A', 'X', 'C', 'D']

data = history.undo();
console.log("Undo 1:", data); // Undo 1: ['A', 'B', 'C', 'D']

data = history.undo();
console.log("Undo 2:", data); // Undo 2: ['A', 'B', 'C']

data = history.redo();
console.log("Redo 1:", data); // Redo 1: ['A', 'B', 'C', 'D']

data = history.performOperation(data, (arr) => arr.splice(0, 1)); // New operation, remove A
console.log("After Remove A (new branch):", data); // After Remove A (new branch): ['B', 'C', 'D']

data = history.undo();
console.log("Undo New Branch:", data); // Undo New Branch: ['A', 'B', 'C', 'D']

data = history.redo();
console.log("Redo New Branch:", data); // Redo New Branch: ['B', 'C', 'D']
```

**3. Efficiently Emptying an Array:**

While `arr.length = 0` is the fastest and most common way to empty an array, `splice()` can also be used.

```javascript
let myArr = [1, 2, 3, 4, 5];
myArr.splice(0, myArr.length); // Remove all elements starting from index 0
console.log(myArr); // Output: []
```

`splice()` is a cornerstone for dynamic array manipulation in JavaScript. Its in-place modification makes it distinct from immutable methods like `slice()`, `map()`, and `filter()`. Understanding when to use each is key to writing effective and maintainable JavaScript code.
