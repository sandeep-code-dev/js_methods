# Javascript `slice()` method

Florin pop youtube link

<https://www.youtube.com/watch?v=JfZv9QNSpi4&list=PLgBH1CvjOA62PBFIDq55-S6Beivje30A2&index=5>

#### It is a Accessor Methods (Do Not Modify the Original Array)

The JavaScript `slice()` method is a powerful and versatile tool for working with arrays and strings. Here's a comprehensive explanation, including when to use it, when to avoid it, and advanced examples.

---

### The `slice()` Method in JavaScript

The `slice()` method is used to extract a portion of an array or a string _without modifying the original_. It returns a _new_ array or string containing the extracted elements or characters.

#### Syntax:

**For Arrays:**

```javascript
arr.slice(startIndex, endIndex);
```

**For Strings:**

```javascript
str.slice(startIndex, endIndex);
```

#### Parameters:

- `startIndex` (Optional): The index at which to begin extraction.
  - If omitted, `slice()` starts from index 0.
  - If negative, it's treated as `array.length + startIndex` (e.g., -1 means the last element).
- `endIndex` (Optional): The index _before_ which to end extraction. The element at `endIndex` will _not_ be included.
  - If omitted, `slice()` extracts to the end of the array/string.
  - If negative, it's treated as `array.length + endIndex`.

#### Return Value:

- A new array containing the extracted elements (for arrays).
- A new string containing the extracted characters (for strings).

#### Basic Examples:

**1. Slicing an Array:**

```javascript
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Extract elements from index 1 up to (but not including) index 4
const selectedFruits = fruits.slice(1, 4);
console.log(selectedFruits); // Output: ['banana', 'cherry', 'date']
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry'] (original unchanged)

// Extract from a negative index
const lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits); // Output: ['date', 'elderberry']

// Extract all elements (shallow copy)
const allFruits = fruits.slice();
console.log(allFruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
console.log(allFruits === fruits); // Output: false (it's a new array)
```

**2. Slicing a String:**

```javascript
const sentence = "Hello, world!";

// Extract from index 0 up to (but not including) index 5
const greeting = sentence.slice(0, 5);
console.log(greeting); // Output: "Hello"

// Extract from index 7 to the end
const worldPart = sentence.slice(7);
console.log(worldPart); // Output: "world!"

// Extract using negative indices
const lastChar = sentence.slice(-1);
console.log(lastChar); // Output: "!"
```

---

### When to Use `slice()`:

1.  **Creating a Shallow Copy of an Array:**
    `slice()` without arguments (`arr.slice()`) is a common and efficient way to create a shallow copy of an array. This is useful when you need to modify an array without affecting the original.

    ```javascript
    const originalArray = [1, 2, 3];
    const copiedArray = originalArray.slice();
    copiedArray.push(4);
    console.log(originalArray); // [1, 2, 3]
    console.log(copiedArray); // [1, 2, 3, 4]
    ```

2.  **Extracting Sub-arrays or Substrings:**
    When you need a specific portion of an array or string and don't want to alter the original.

    ```javascript
    const numbers = [10, 20, 30, 40, 50];
    const middleNumbers = numbers.slice(1, 4); // [20, 30, 40]

    const url = "https://www.example.com/page";
    const domain = url.slice(8, 22); // "www.example.com"
    ```

3.  **Converting Array-like Objects to Arrays:**
    `slice.call()` (or `Array.prototype.slice.call()`) is a classic technique to convert array-like objects (like `arguments` in old JavaScript functions, or NodeList from DOM queries) into true arrays.

    ```javascript
    // In an old-style function using 'arguments'
    function sumAll() {
      const args = Array.prototype.slice.call(arguments);
      return args.reduce((acc, curr) => acc + curr, 0);
    }
    console.log(sumAll(1, 2, 3, 4)); // 10

    // Converting a NodeList
    // const divs = document.querySelectorAll('div');
    // const divArray = Array.prototype.slice.call(divs);
    ```

    _Modern alternative: `Array.from()` is generally preferred for this purpose now._

4.  **Implementing Pagination Logic:**
    `slice()` is perfect for displaying a subset of data for pagination.

    ```javascript
    const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
    const itemsPerPage = 10;
    const currentPage = 2; // Displaying the second page

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const pageItems = data.slice(startIndex, endIndex);
    console.log(pageItems); // Shows items 11-20
    ```

---

### When NOT to Use `slice()`:

1.  **When You Need to Modify the Original Array In-Place:**
    If your intention is to add, remove, or replace elements within the _original_ array, `slice()` is not the right choice. Use methods like `splice()`, `push()`, `pop()`, `shift()`, `unshift()`, or direct index assignment.

    - **Use `splice()` instead for in-place modification:**
      ```javascript
      const numbers = [1, 2, 3, 4, 5];
      numbers.splice(1, 2, 10, 11); // Removes 2, 3 and inserts 10, 11
      console.log(numbers); // Output: [1, 10, 11, 4, 5]
      ```

2.  **When You Need a Deep Copy of an Array:**
    `slice()` performs a shallow copy. If your array contains nested objects or arrays, `slice()` will copy the references to those nested structures, meaning changes to the nested structures in the copied array will still affect the original.

    - For deep copies, you'll need techniques like `JSON.parse(JSON.stringify(array))` (with caveats for functions, `Date` objects, etc.) or a dedicated deep-cloning library (e.g., Lodash's `cloneDeep`).

    <!-- end list -->

    ```javascript
    const original = [{ id: 1 }, { id: 2 }];
    const shallowCopy = original.slice();
    shallowCopy[0].id = 100; // Modifies the object within the copy

    console.log(original); // Output: [{ id: 100 }, { id: 2 }] (original was affected!)
    console.log(shallowCopy); // Output: [{ id: 100 }, { id: 2 }]
    ```

3.  **When You Need to Iterate Over All Elements:**
    If your goal is simply to loop through every element of an array, use methods like `forEach()`, `map()`, `filter()`, `for...of`, or a traditional `for` loop. `slice()` is for _extracting_, not _iterating_.

---

### Advanced Uses with Examples:

**1. Creating a Limited History/Queue (First-In, First-Out):**

You can use `slice()` to maintain a fixed-size list by always taking the last `n` elements.

```javascript
class History {
  constructor(maxLength) {
    this.maxLength = maxLength;
    this.items = [];
  }

  add(item) {
    this.items.push(item);
    if (this.items.length > this.maxLength) {
      this.items = this.items.slice(1); // Remove the oldest item
    }
  }

  get() {
    return this.items;
  }
}

const recentSearches = new History(3);
recentSearches.add("JavaScript");
recentSearches.add("React");
recentSearches.add("Vue");
console.log(recentSearches.get()); // ["JavaScript", "React", "Vue"]

recentSearches.add("Angular");
console.log(recentSearches.get()); // ["React", "Vue", "Angular"] (JavaScript was removed)
```

**2. Implementing a Circular Buffer/Carousel:**

`slice()` can be used to simulate a circular buffer where elements wrap around.

```javascript
function getCircularSlice(arr, startIdx, length) {
  const arrLen = arr.length;
  if (arrLen === 0) return [];
  if (length >= arrLen) return arr.slice(); // Return full array if length is greater or equal

  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(arr[(startIdx + i) % arrLen]);
  }
  return result;
}

const carouselImages = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
];

// Show 3 images starting from index 4 (last image), wrapping around
const displayImages = getCircularSlice(carouselImages, 4, 3);
console.log(displayImages); // Output: ['img5.jpg', 'img1.jpg', 'img2.jpg']

// Show 3 images starting from index 1
const displayImages2 = getCircularSlice(carouselImages, 1, 3);
console.log(displayImages2); // Output: ['img2.jpg', 'img3.jpg', 'img4.jpg']
```

**3. Parsing Data with Delimiters (String `slice`):**

When you have a string with known fixed-position segments.

```javascript
const productCode = "PROD-ABC-XYZ-12345";

const type = productCode.slice(0, 4); // "PROD"
const category = productCode.slice(5, 8); // "ABC"
const subCategory = productCode.slice(9, 12); // "XYZ"
const id = productCode.slice(13); // "12345"

console.log(
  `Type: ${type}, Category: ${category}, Sub-Category: ${subCategory}, ID: ${id}`,
);
// Output: Type: PROD, Category: ABC, Sub-Category: XYZ, ID: 12345
```

**4. Filtering an Array by Removing a Range of Elements (Simulating `splice` without mutation):**

You can combine `slice()` calls to effectively remove elements from an array without modifying the original, creating a new array instead.

```javascript
function removeRange(arr, startIndex, deleteCount) {
  const firstPart = arr.slice(0, startIndex);
  const secondPart = arr.slice(startIndex + deleteCount);
  return firstPart.concat(secondPart);
}

const originalNumbers = [1, 2, 3, 4, 5, 6, 7];
const newNumbers = removeRange(originalNumbers, 2, 3); // Remove 3, 4, 5

console.log(newNumbers); // Output: [1, 2, 6, 7]
console.log(originalNumbers); // Output: [1, 2, 3, 4, 5, 6, 7] (original untouched)
```

---

By understanding the immutability and precise control offered by `slice()`, you can leverage it effectively for a wide range of array and string manipulation tasks in JavaScript.
