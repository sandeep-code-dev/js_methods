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
console.log(fruits); // Output: ['apple', 'banana', 'cherry']
console.log(newLength); // Output: 3
```

**2. Adding Multiple Elements to the Beginning:**

```javascript
const numbers = [3, 4, 5];

const newLengthMulti = numbers.unshift(0, 1, 2);
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5]
console.log(newLengthMulti); // Output: 6
```

**3. Unshifting to an Empty Array:**

```javascript
const emptyArray = [];

emptyArray.unshift("first");
console.log(emptyArray); // Output: ['first']
```

**4. Unshifting Various Data Types:**

`unshift()` can add any data type, including other arrays or objects. Similar to `push()`, if you unshift an array, it adds the array _as a single element_, not its contents.

```javascript
const mixedBag = ["existing"];

mixedBag.unshift(0, { id: 1 }, ["nested"]);
console.log(mixedBag); // Output: [0, { id: 1 }, ['nested'], 'existing']
```

---

### When to Use `unshift()`:

1.  **Adding Elements to the Beginning of an Array In-Place:**
    This is the core purpose of `unshift()`. When you need to extend an existing array by prepending new items.

    ```javascript
    const recentActivities = ["User X logged in"];
    recentActivities.unshift("New message received from Y");
    console.log(recentActivities); // Output: ['New message received from Y', 'User X logged in']
    ```

2.  **Implementing a Queue Data Structure (FIFO - First-In, First-Out) where items are added to the front:**
    While `push()` and `shift()` are more common for a traditional queue (add to end, remove from front), sometimes you might design a queue where new items arrive at the front.

    ```javascript
    const printerQueue = ["docB", "docC"];
    printerQueue.unshift("docA"); // New document arrives, put it at the front
    console.log("Printer Queue:", printerQueue); // ['docA', 'docB', 'docC']

    // To process, you'd usually use pop() or shift() depending on desired behavior.
    // If you want to process the _newest_ item immediately:
    const nextDoc = printerQueue.shift();
    console.log("Processing:", nextDoc); // docA
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
