# `concat()` method

### Concatenating Two Arrays:\*\*

```js
// 1. Create new array of below two arrays.
// concat() method
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// output is [ 1, 2, 3, 4, 5, 6 ]

//2.
// create new array of all the users.
// Concat method
const activeUsers = ["Alice", "Bob"];
const inactiveUsers = ["Charlie", "David"];
// output is [ 'Alice', 'Bob', 'Charlie', 'David' ]
```

### Concatenating Multiple Arrays:\*\*

```js
//1. create combined array of all the arrays.
// concat() method
const arrA = ["a", "b"];
const arrB = ["c", "d"];
const arrC = ["e", "f"];
// output is [ 'a', 'b', 'c', 'd', 'e', 'f' ]

//2.
// Concat method
const shoppingCart = ["milk", "eggs"];
//update the cart with following items ("bread", "cheese")
// output is [ 'milk', 'eggs', 'bread', 'cheese' ]
```

### Concatenating Values (Non-Arrays):\*\*

```javascript
// concat() method
const list = [1, 2];
// add the following values to the array (3, [4, 5], 6)
// output is [ 1, 2, 3, 4, 5, 6 ]
```

### Concatenating an Empty Array:\*\*

Calling `concat()` without any arguments creates a shallow copy of the array.

```javascript
// concat() method
const original = [1, 2, { id: 3 }];
// output is [1, 2, { id: 3 }]
```

# `at()` method

### Accessing Elements from the Start (Positive Index):\*\*

```javascript
// at() method
const fruits = ["apple", "banana", "cherry", "date"];
// access elements at position 0 and 2
// output: 0 is apple
// output: 2 is cherry
```

### Accessing Elements from the End (Negative Index - The Main Use Case):\*\*

```javascript
// at() method
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
// at() method
// 1. Access characters from position 0, -1 and -5
const sentence = "JavaScript";
// output is for 0 is J
// output is for -1 is t
// output is for -5 is c
```

### Handling Out-of-Bounds Indices:\*\*

```javascript
// at() method
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
// foreach() method
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
// foreach() method
const numbers = [10, 20, 30];

/* Output:
Element at index 0: 10. Full array: [10,20,30]
Element at index 1: 20. Full array: [10,20,30]
Element at index 2: 30. Full array: [10,20,30]
*/
```

### Performing Side Effects (e.g., Modifying an External Variable):\*\*

```javascript
// foreach() method
// 1. Add all the array values with forEach
const prices = [10.5, 20.0, 5.25];

let totalPrice = 0;
prices.forEach((price) => (totalPrice += price));
console.log(totalPrice);
// output: 35.75
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
    // foreach() method
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
    // foreach() method
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
    // output: Processing user: Alice, ID: 1
    // output: Processing user: Bob, ID: 2
    ```

    **2. Synchronous Asynchronous Operations (Anti-Pattern Warning):
    While `forEach` can _contain_ asynchronous operations, it does **not\*\* wait for them to complete. This is a common pitfall. If you need to perform sequential async operations, use `for...of` with `await`.

# Map Method

#### 1\. Doubling Numbers

```javascript
// Double the numbers below with map method of js.
// map() method
const numbers = [1, 2, 3, 4, 5];

// Square root of numbers below with map method of js.
// Output: [1, 2, 3, 4, 5] (original array unchanged)
// Output: [2, 4, 6, 8, 10] (new array)
// Output: [ 1, 4, 9, 16, 25 ]
```

#### 3\. Extracting Properties from Objects

```javascript
// map() method
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
// map() method
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
];

console.log(
  products.map((product) => ({
    name: product.name.toUpperCase(),
    price: `$${product.price.toFixed(2)}`,
  })),
);
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
// map() method
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

const totalPrice = products.map((product) => product.price * product.count);
console.log(totalPrice);
// multiply product quantity with product price
// Output: [ 5000, 7500, 5000 ]

//  Output: [
//  { name: 'laptop', totalValue: 5000 },
//  { name: 'desktop', totalValue: 7500 },
//  { name: 'phone', totalValue: 5000 }
//   ]
```

#### 5\. Using `index` and `array` arguments

```javascript
// map() method
const letters = ["a", "b", "c"];

const indexedLetters = letters.map((letter, index) => {
  return `${index}: ${letter}`;
});

console.log(indexedLetters);
// Output: ['0: a', '1: b', '2: c']

const originalArrayInCallback = letters.map((letter, index, arr) => {
  console.log(
    `Current element: ${letter}, Index: ${index}, Original array: ${arr}`,
  );
  return letter.toUpperCase();
});
// This will log the original array at each iteration within the callback
// Output
// Current element: a, Index: 0, Original array: a,b,c
// Current element: b, Index: 1, Original array: a,b,c
// Current element: c, Index: 2, Original array: a,b,c
// output: [ 'A', 'B', 'C' ]
```

# IndexOf() Method

**1. Finding an Element in an Array:**

```javascript
// indexOf() method
const fruits = ["apple", "banana", "cherry", "banana"];
// find the index of banana and grape (which is not in the list)

console.log(fruits.indexOf("banana")); // Output: 1 (first occurrence)
console.log(fruits.indexOf("grape")); // Output: -1

// Output: 1 (first occurrence)
// Output: -1
```

**2. Finding an Element from a Specific Index:**

```javascript
const numbers = [10, 20, 30, 20, 40];
// indexOf() method
// find the index of first 20 in the array, and then second 20 in the array
console.log(numbers.indexOf(20, 0)); // Output: 1 (search from start)
console.log(numbers.indexOf(20, 2)); // Output: 3 (search from index 2)
console.log(numbers.indexOf(20, -1)); // Output: -1 (search from index 4 (5-1), 20 is not found at or after index 4)
```

**3. Searching in Strings:**

```javascript
// indexOf() method
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.indexOf("fox")); // Output: 16 (index of 'f')
console.log(sentence.indexOf("cat")); // Output: -1
console.log(sentence.indexOf("quick", 5)); // Output: -1 (search starts at index 5, 'quick' starts at 4)
console.log(sentence.indexOf("lazy", 20)); // Output: 35 (search starts at index 20)
```

**4. `indexOf()` and `NaN` (Important Distinction):**

```javascript
// indexOf() method
const mixedArray = [1, "hello", NaN, undefined];

console.log(mixedArray.indexOf(NaN)); // Output: -1 (does NOT find NaN)
console.log(mixedArray.indexOf(undefined)); // Output: 3
```

1.  **Finding the First Position of an Element/Substring:**
    When you need to know _where_ an item first appears in a sequence, not just if it exists.

```javascript
// indexOf() method
const cities = ["London", "Paris", "New York", "London"];

const firstLondonIndex = cities.indexOf("London");
console.log(`First London is at index: ${firstLondonIndex}`);
// Output: 0
```

2.  **Checking for Existence and Then Performing an Action Based on Position:**
    If finding the element is just the first step before modifying or removing it at that specific index.

```javascript
// indexOf() method
const todoList = ["Buy groceries", "Walk dog", "Pay bills"];

const taskIndex = todoList.indexOf("Walk dog");

if (taskIndex !== -1) {
  todoList.splice(taskIndex, 1); // Remove the task
  console.log("Task completed:", todoList);
}

// Output: Task completed: [ 'Buy groceries', 'Pay bills' ]
```

3.  **Determining if an Item is Unique or Its First Occurrence:**
    To check if an element is the first of its kind in an array (a common pattern for getting unique values while preserving order).

```javascript
// indexOf() method
// Remove the duplicate numbers
const data = [1, 5, 2, 5, 3, 1, 4];

const uniqueData = data.filter((item, index) => data.indexOf(item) === index);
console.log(uniqueData);
// Output: [1, 5, 2, 3, 4]
```

4.  **Parsing Simple String Formats:**
    When a string contains delimited data and you need to find the position of a delimiter to extract parts.

```javascript
// indexOf() method
const userData = "ID:123;Name:Alice;Age:30";

const nameStartIndex = userData.indexOf("Name:") + "Name:".length;
const nameEndIndex = userData.indexOf(";", nameStartIndex);
const name = userData.substring(nameStartIndex, nameEndIndex);
console.log(`User name: ${name}`);
// Output: User name: Alice
```

# `lastIndexOf()` method

**1. Finding the Last Occurrence of a Number:**

```javascript
// lastIndexOf()
// find the last index of 30
const numbers = [10, 20, 30, 10, 40, 30];

const lastIndexOf30 = numbers.lastIndexOf(30);
console.log(lastIndexOf30);
// Output: 5 (the second 30 is at index 5)
```

**2. Finding an Element Not Present:**

```javascript
// lastIndexOf()
// find the lastindexof grape
const fruits = ["apple", "banana", "cherry"];

const lastIndexOfGrape = fruits.lastIndexOf("grape");
console.log(lastIndexOfGrape);
// Output: -1
```

**3. Using `fromIndex`:**

```javascript
// lastIndexOf()
const data = ["A", "B", "C", "A", "D", "A", "E"];

// Search "A" from index 4 (inclusive) backwards
// lastIndexOf()

const result1 = data.lastIndexOf("A", 4);
console.log(result1);

// Output: 3 (finds the 'A' at index 3)

// Search "A" from index 2 (inclusive) backwards
// lastIndexOf()

const result2 = data.lastIndexOf("A", 2);
console.log(result2);

// Output: 0 (finds the 'A' at index 0)

// Search "A" from a negative fromIndex -2
// lastIndexOf()

const result3 = data.lastIndexOf("A", -2); // -2 refers to index 5 ('A')
console.log(result3);
// Output: 5 (finds the 'A' at index 5, starting search from index 5 backwards)
```

**4. Handling `NaN`:**

```javascript
// lastIndexOf()
// find NaN
const values = [1, 2, NaN, 4, NaN, 6];

const lastIndexOfNaN = values.lastIndexOf(NaN);
console.log(lastIndexOfNaN);
// Output: -1 (does not find NaN as it uses strict equality === and NaN === NaN returns false)
```

**5. Object References:**

```javascript
// lastIndexOf()
const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 1 }; // Different object, same content

const objects = [obj1, obj2, obj1, obj3];

const lastIndexObj1 = objects.lastIndexOf(obj1);
console.log(lastIndexObj1); // Output: 2 (finds the *exact same object reference* at index 2)

const lastIndexObj3 = objects.lastIndexOf(obj3);
console.log(lastIndexObj3); // Output: 3 (finds the exact same object reference at index 3)

// Will not find obj3 if searching for an object with same content but different reference
const lastIndexContent = objects.lastIndexOf({ id: 1 });
console.log(lastIndexContent); // Output: -1
```

1.  **Finding the Most Recent/Latest Occurrence:**
    This is the primary use case. If you have a sequence of events, actions, or data points, and you need to find the position of the _last_ time a specific item or condition appeared.

```javascript
// lastIndexOf()
const userLog = [
  "page_view",
  "add_to_cart",
  "page_view",
  "checkout_start",
  "add_to_cart", // Last time 'add_to_cart' occurred
  "purchase_complete",
];
// find add_to_cart last index

const lastAddToCartIndex = userLog.lastIndexOf("add_to_cart");
console.log(`Last add to cart happened at index: ${lastAddToCartIndex}`);
// Output: 4

// You could then, for example, look at what happened immediately after it
if (lastAddToCartIndex !== -1 && lastAddToCartIndex < userLog.length - 1) {
  console.log(
    `Action after last add to cart: ${userLog[lastAddToCartIndex + 1]}`,
  );
}
// Output: Action after last add to cart: purchase_complete
```

2.  **Removing the Last Occurrence of an Element:**
    If you need to remove only the last instance of a particular value from an array.

```javascript
// lastIndexOf()
// remove "js" from the end of the tag will also use splice method
const tags = ["js", "html", "css", "js", "react", "js"];

const tagToRemove = "js";

const lastJsIndex = tags.lastIndexOf(tagToRemove);
if (lastJsIndex !== -1) {
  tags.splice(lastJsIndex, 1);
}
console.log(tags);
// Output: ['js', 'html', 'css', 'js', 'react']
```

3.  **Validating Input Against a Set of Allowed Values (and needing the last one):**
    If you have a whitelist of valid options that can appear multiple times, but you're interested in the last one.

```javascript
// lastIndexOf()
const allowedExtensions = [".txt", ".jpg", ".pdf", ".txt"];
const fileName = "document.report.txt";

// Get the last '.' to find the extension
const lastDotIndex = fileName.lastIndexOf(".");
if (lastDotIndex !== -1) {
  const extension = fileName.substring(lastDotIndex);
  if (allowedExtensions.includes(extension)) {
    console.log(`File extension '${extension}' is allowed.`);
  } else {
    console.log(`File extension '${extension}' is NOT allowed.`);
  }
} else {
  console.log("No file extension found.");
}
// output File extension .txt is allowed
```

4.  **Finding the "Parent" in a Path-like String (Splitting from Last Delimiter):**
    Often used with string manipulation when dealing with paths, URLs, or hierarchical IDs.

```javascript
// lastIndexOf()
const filePath = "/users/documents/reports/final_report.pdf";

const lastSlashIndex = filePath.lastIndexOf("/");
const folderPath = filePath.substring(0, lastSlashIndex);
const fileName = filePath.substring(lastSlashIndex + 1);

console.log("Folder Path:", folderPath);
console.log("File Name:", fileName);

// Output: /users/documents/reports
// Output: final_report.pdf
```

# `charAt()` method

```javascript
// charAt() method
const message = "JavaScript";

// 1. Get the first character (index 0)
// charAt() method

const firstChar = message.charAt(0);
console.log(firstChar);
// Output: 'J'

// 2. Get the last character
// charAt() method

const lastChar = message.charAt(message.length - 1);
console.log(lastChar);
// Output: 't'

// 3. Get a character from the middle
// charAt() method

const middleChar = message.charAt(4);
console.log(middleChar);
// Output: 'S'

// 4. Handle an out-of-bounds index
// charAt() method

const invalidChar = message.charAt(20);
console.log(invalidChar); // Output: '' (an empty string)
console.log(invalidChar.length);
//
// Output: empty string
// then find the length of empty string which is 0

// 5. Use in a loop to iterate over a string
// charAt() method

for (let i = 0; i < message.length; i++) {
  console.log(`Character at index ${i} is: ${message.charAt(i)}`);
}
// Output:
// Character at index 0 is: J
// Character at index 1 is: a
// ... and so on
```

# `Substring()` method

### 1\. Extracting a Substring with Start and End Indices

This is the most common use case. You provide both a start and end index. The character at the start index is included, but the character at the end index is not.

```javascript
// substring()
let myString = "JavaScript";
// Extracts characters from index 0 up to (but not including) index 4.

let result = myString.substring(0, 4);
console.log(result);
// Output: "Java"
```

### 2\. Extracting to the End of a String

If you omit the second argument, `substring()` extracts all characters from the start index to the end of the string.

```javascript
// substring()
let myString = "HelloWorld";
// Extracts characters from index 5 to the end.

let result = myString.substring(5);
console.log(result);
// Output: "World"
```

### 3\. Handling Swapped Indices

`substring()` is forgiving with its arguments. If the start index is greater than the end index, it automatically swaps them.

```javascript
// substring()
let myString = "developer";

let result = myString.substring(5, 2);
// The method treats this as substring(2, 5).
console.log(result); // Output: "vel"
```

### 4\. Handling Negative or Invalid Indices

Any negative or non-numeric index is treated as `0`.

```javascript
// substring()
let myString = "test";

let result = myString.substring(-2, 3);
// The method treats -2 as 0.
console.log(result); // Output: "tes"
```

### 5\. Handling Indices Exceeding String Length

If an index is larger than the string's length, `substring()` treats it as the string's length.

```javascript
// substring()
let myString = "abc";

let result = myString.substring(1, 100);
// The method treats 100 as the string's length (3).
console.log(result); // Output: "bc"
```

---

---

## Advanced Examples

### 1\. Extracting a Domain Name from a URL

```javascript
//This example uses `indexOf()` to find the start of the domain and `lastIndexOf()` to find the end.
// substring()
let url = "https://www.google.com/search";

let startIndex = url.indexOf("www.") + 4; // Find "www." and add its length to get the start of the domain.
let endIndex = url.indexOf(".com"); // Find the end of the domain.
let domain = url.substring(startIndex, endIndex);
console.log(domain);
// Output: "google"
```

### 2\. Truncating a String to a Max Length

```javascript
// substring()
// A common pattern for displaying text in a limited space.
// Truncate the following string if its length is more than 20 character
("This is a very long sentence to be truncated.");

function truncate(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}
console.log(truncate("This is a very long sentence to be truncated.", 20));
// Output: "This is a very long..."
```

### 3\. Parsing Date from a String

```javascript
// substring()
// Assuming a fixed format, you can use `substring()` to extract specific parts of a date string.
let dateString = "2024-09-04";

let year = dateString.substring(0, 4);
let month = dateString.substring(5, 7);
let day = dateString.substring(8, 10);
console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);
// Output: "Year: 2024, Month: 09, Day: 04"
```

### 4\. Reversing a String (Manual Method)

```javascript
// substring()
// While not the most efficient way, `substring()` can be used to reverse a string character by character.
// Reverse the string using substring method:
Reverse "hello"

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.substring(i, i + 1);
  }
  return reversed;
}
console.log(reverseString("hello"));
// Output: "olleh"
```

### 5\. Sanitizing Input

```javascript
// substring()
// This example removes leading and trailing spaces from an input string, similar to the `trim()` method.
// manually trim white spaces
("   Hello World   "));

function manualTrim(str) {
  let start = 0;
  let end = str.length;

  while (str.substring(start, start + 1) === " ") {
    start++;
  }
  while (str.substring(end - 1, end) === " ") {
    end--;
  }

  return str.substring(start, end);
}
console.log(manualTrim("   Hello World   "));

// Output: "Hello World"
```

# `includes()` method

**1. Checking if an Array Contains a Value:**

```javascript
//includes()
// find out if banana is included in the following array
// find out if grape is included in the following array
const fruits = ["apple", "banana", "cherry"];

console.log(fruits.includes("banana"));
console.log(fruits.includes("grape"));
// Output: true
// Output: false
```

**2. Checking an Array from a Specific Index:**

```javascript
//includes()
// start search at index 2 and find 30
const numbers = [10, 20, 30, 40, 50];

console.log(numbers.includes(30, 2));
// Output: true (search starts at index 2, finds 30)

// start search at index 2 and find 30
console.log(numbers.includes(30, 3));
// Output: false (search starts at index 3, 30 is at index 2)

console.log(numbers.includes(50, -2));
// Output: true (search starts at index 5-2=3, finds 50)

console.log(numbers.includes(10, -3));
// Output: false (search starts at index 5-3=2, 10 is at index 0)
```

**3. Checking for `NaN` in an Array:**

```javascript
//includes()
// find out if undefined and NaN is included in the following array.
const mixedArray = [1, "hello", NaN, undefined];

console.log(mixedArray.includes(NaN));
console.log(mixedArray.includes(undefined));
// Output: true
// Output: true
```

**4. Checking if a String Contains a Substring:**

```javascript
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.includes("fox")); // Output: true
console.log(sentence.includes("cat")); // Output: false
console.log(sentence.includes("Quick")); // Output: false (case-sensitive)
console.log(sentence.includes("fox", 15)); // Output: false (search starts after 'fox')
console.log(sentence.includes("fox", 10)); // Output: true (search starts at index 10, 'fox' is at 16)
```

---

### When to Use `includes()`:

1.  **Simple Existence Checks:**
    This is the primary use case. When you just need to know if an element or substring is present, without needing its exact position.

    ```javascript
    //includes()
    // find out if user have write access and then log "User has write access"
    const permissions = ["read", "write", "delete"];

    if (permissions.includes("write")) {
      console.log("User has write access.");
    }
    // output: User has write access.
    ```

2.  **Validating Input Against a List of Allowed Values:**
    Ideal for checking if user input matches one of several acceptable options.

    ```javascript
    // find out if user preference is included in the allowed colors then print valid color chosen or invlad color.
    //includes()
    const allowedColors = ["red", "green", "blue"];
    const userPreference = "blue";

    if (allowedColors.includes(userPreference)) {
      console.log("Valid color chosen.");
    } else {
      console.log("Invalid color.");
    }
    // output: Valid color chosen.
    ```

3.  **Handling `NaN` in Array Searches:**
    When you specifically need to find `NaN` values within an array, `includes()` is the correct method.

    ```javascript
    //includes()
    // find out if array contains NaN and the print "Data contains invalid numerical readings."
    const readings = [10, 20, NaN, 30];

    if (readings.includes(NaN)) {
      console.log("Data contains invalid numerical readings.");
    }
    // output: Data contains invalid numerical readings.
    ```

4.  **Checking for Substring Presence in User-Generated Content:**
    For quick checks on text, like if a comment contains a specific keyword.

    ```javascript
    //includes()
    // find out the string contains "amazing" keyword and then print "Positive feedback detected."
    const comment = "This product is amazing!";

    if (comment.includes("amazing")) {
      console.log("Positive feedback detected.");
    }
    // output: Positive feedback detected.
    ```

### Advanced Uses with Examples:

**1. Implementing Simple Dynamic Access Control:**

You can combine `includes()` with other logic to create basic authorization checks.

```javascript
// TODO do it when some() method learnt

//includes()
const currentUserRoles = ["admin", "editor", "viewer"];

function canEditContent(userRoles) {
  const requiredRoles = ["admin", "editor"];
  return userRoles.some((role) => requiredRoles.includes(role));
}

function canDeleteUser(userRoles) {
  return userRoles.includes("admin"); // Only admin can delete
}

console.log("Can current user edit?", canEditContent(currentUserRoles)); // Output: true
console.log("Can current user delete?", canDeleteUser(currentUserRoles)); // Output: true
console.log("Can viewer delete?", canDeleteUser(["viewer"])); // Output: false
```

**2. Building a Custom String Search Function (Case-Insensitive):**

Since `includes()` is case-sensitive, you can build a wrapper for case-insensitive search.

```javascript
const articleText = "JavaScript is a versatile language.";

function includesCaseInsensitive(mainString, searchSubString) {
  return mainString.toLowerCase().includes(searchSubString.toLowerCase());
}

console.log(includesCaseInsensitive(articleText, "javascript")); // Output: true
console.log(includesCaseInsensitive(articleText, "VERSATILE")); // Output: true
console.log(includesCaseInsensitive(articleText, "python")); // Output: false
```

**3. Checking for Intersection of Two Arrays (Simplified):**

To see if two arrays share _any_ common elements.

```javascript
// TODO come back when learn some() method.

function hasCommonElement(arr1, arr2) {
  return arr1.some((element) => arr2.includes(element));
}

const userInterests = ["coding", "hiking", "reading"];
const eventTags = ["hiking", "music", "food"];

console.log(
  "Do they share interests?",
  hasCommonElement(userInterests, eventTags),
); // Output: true (hiking)

const userSkills = ["js", "css"];
const jobRequirements = ["java", "python"];
console.log(
  "Are skills matched?",
  hasCommonElement(userSkills, jobRequirements),
); // Output: false
```

**4. Filtering an Array Based on Keywords (Substring Matching):**

`includes()` is useful within a `filter()` method when searching through string properties of objects.

```javascript
// TODO come back when learn some() method.
const posts = [
  { id: 1, title: "Learn JavaScript Basics", tags: ["js", "programming"] },
  { id: 2, title: "Mastering CSS Flexbox", tags: ["css", "frontend"] },
  { id: 3, title: "Node.js Express Tutorial", tags: ["js", "backend"] },
];

function searchPosts(keyword) {
  const lowerCaseKeyword = keyword.toLowerCase();
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerCaseKeyword) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerCaseKeyword)),
  );
}

const results = searchPosts("js");
console.log(results);
/* Output:
[
  { id: 1, title: 'Learn JavaScript Basics', tags: ['js', 'programming'] },
  { id: 3, title: 'Node.js Express Tutorial', tags: ['js', 'backend'] }
]
*/
```

# `find()` method

#### Basic Examples:

**1. Finding the First Number Greater Than 5:**

```javascript
// `find()`;
// find the first number greater than 5
const numbers = [1, 7, 3, 9, 2];

const foundNumber = numbers.find((num) => num > 5);
console.log(foundNumber);
// Output: 7 (the first one found)
```

**2. Finding an Object by a Property:**

```javascript
// `find()`;
// find username bob
// find username Eve
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const userBob = users.find((user) => user.name === "Bob");
console.log(userBob);

const userEve = users.find((user) => user.name === "Eve");
console.log(userEve);
// Output: { id: 2, name: 'Bob' }
// Output: undefined
```

**3. Finding in an Empty Array:**

```javascript
// `find()`;
// find an item > 0 in an empty array.
const emptyArray = [];

const resultEmpty = emptyArray.find((item) => item > 0);
console.log(resultEmpty);
// Output: undefined
```

**4. Using `index` in the Callback:**

```javascript
// `find()`;
const temperatures = [20, 22, 18, 25, 23];
// Find the first temperature above 20 degrees that is not the first element

const hotSpot = temperatures.find((temp, index) => temp > 20 && index > 0);
console.log(hotSpot);
// Output: 22 (at index 1)
```

---

### When to Use `find()`:

1.  **Retrieving the First Matching Element:**
    This is the primary use case. When you need to get the actual object or value from an array that satisfies a specific condition, and you only care about the first one found.

```javascript
// `find()`;
// find the first product with Electronics category.
const products = [
  { id: "a1", name: "Laptop", category: "Electronics" },
  { id: "b2", name: "Mouse", category: "Electronics" },
  { id: "c3", name: "Book", category: "Books" },
];

const electronicsProduct = products.find(
  (product) => product.category === "Electronics",
);
console.log(electronicsProduct);
// Output: { id: 'a1', name: 'Laptop', category: 'Electronics' }
```

2.  **Searching for an Object by a Unique Identifier (ID, slug, etc.):**
    Extremely common for retrieving a single record from a collection based on a unique key.

```javascript
// `find()`;
// Create a function to find userid 102
// Create a function to find userid 999

const allUsers = [
  { id: 101, username: "user_a" },
  { id: 102, username: "user_b" },
  { id: 103, username: "user_c" },
];

function getUserById(userId, userList) {
  return userList.find((user) => user.id === userId);
}
const specificUser = getUserById(102, allUsers);
console.log(specificUser);

const nonExistentUser = getUserById(999, allUsers);
console.log(nonExistentUser);

// Output: { id: 102, username: 'user_b' }
// Output: undefined
```

3.  **Implementing "Find or Create" Logic (in conjunction with other methods):**
    You can use `find()` to check if an item exists before deciding whether to create a new one.

```javascript
// `find()`;
// create a function to find findTag name and if does not exist then add the tagName
const availableTags = [{ id: 1, name: "javascript" }];

function getOrCreateTag(tagName, tagsArray) {
  let tag = tagsArray.find((t) => t.name === tagName);
  if (!tag) {
    tag = {
      id: tagsArray.length + 1,
      name: tagName,
      createdAt: new Date(),
    };
    tagsArray.push(tag); // Add new tag if not found
    console.log(`Created new tag: ${tagName}`);
  }
  return tag;
}

const jsTag = getOrCreateTag("javascript", availableTags);
const reactTag = getOrCreateTag("react", availableTags);

console.log(jsTag);
console.log(reactTag);
console.log(availableTags);
// { id: 1, name: 'javascript' }
// { id: 2, name: 'react', ... } (newly created)
// { id: 2, name: 'react', createdAt: 2025-09-23T21:31:59.992Z }
// Contains both js and react tags now
```

4.  **Complex Search Conditions:**
    The callback function allows for arbitrary complex conditions, which is more powerful than simple equality checks offered by `indexOf()`.

```javascript
// `find()`;
// find Alice draft's status draft or approved.
// Find a document by 'Alice' that is either 'draft' or 'approved'
const documents = [
  { title: "Project Plan", author: "Alice", status: "draft" },
  { title: "Final Report", author: "Bob", status: "approved" },
  { title: "Meeting Notes", author: "Alice", status: "final" },
];

const aliceDoc = documents.find(
  (doc) =>
    doc.author === "Alice" &&
    (doc.status === "draft" || doc.status === "approved"),
);
console.log(aliceDoc);
// Output: { title: 'Project Plan', author: 'Alice', status: 'draft' }
```

### Advanced Examples

```javascript
// find()
// TODO do it when react async programming id done.
const itemCache = []; // Store fetched items

async function getItemFromCacheOrFetch(id) {
  let item = itemCache.find((cachedItem) => cachedItem.id === id);

  if (item) {
    console.log(`Found item ${id} in cache.`);
    return item;
  } else {
    console.log(`Fetching item ${id} from API...`);
    // Simulate API call
    const fetchedItem = await new Promise((resolve) =>
      setTimeout(() => {
        const newItem = {
          id: id,
          data: `Data for ${id}`,
          timestamp: new Date(),
        };
        itemCache.push(newItem); // Add to cache
        resolve(newItem);
      }, 500),
    );
    console.log(`Item ${id} fetched and added to cache.`);
    return fetchedItem;
  }
}

(async () => {
  await getItemFromCacheOrFetch(1); // Fetched from API
  await getItemFromCacheOrFetch(2); // Fetched from API
  await getItemFromCacheOrFetch(1); // Found in cache
  console.log("Current cache:", itemCache);
})();
```

**2. Finding the First Available Resource/Slot:**

```javascript
const resources = [
  { id: "res-A", status: "busy", user: "Alice" },
  { id: "res-B", status: "available", user: null },
  { id: "res-C", status: "busy", user: "Bob" },
  { id: "res-D", status: "available", user: null },
];

function assignResource(userName) {
  const availableResource = resources.find((res) => res.status === "available");

  if (availableResource) {
    availableResource.status = "busy";
    availableResource.user = userName;
    console.log(`Assigned ${availableResource.id} to ${userName}.`);
    return availableResource;
  } else {
    console.log("No available resources at the moment.");
    return null;
  }
}

assignResource("Charlie"); // Assigned res-B to Charlie.
assignResource("Diana"); // Assigned res-D to Diana.
assignResource("Eve"); // No available resources at the moment.

console.log("Resources after assignments:", resources);
/* Output:
Assigned res-B to Charlie.
Assigned res-D to Diana.
No available resources at the moment.
Resources after assignments: [
  { id: 'res-A', status: 'busy', user: 'Alice' },
  { id: 'res-B', status: 'busy', user: 'Charlie' },
  { id: 'res-C', status: 'busy', user: 'Bob' },
  { id: 'res-D', status: 'busy', user: 'Diana' }
]
*/
```

**3. Implementing a Basic Router for a Single Page Application (Simplified):**

`find()` can be used to match the current URL path to a registered route.

```javascript
// TODO do it when done regular expression and router in reactjs
const routes = [
  { path: "/", component: "HomePage" },
  { path: "/users", component: "UserListPage" },
  { path: "/users/:id", component: "UserProfilePage" }, // Dynamic path
  { path: "/products/:category/:id", component: "ProductDetailPage" },
];

function resolveRoute(currentPath) {
  // Escape special regex characters in paths (basic example)
  const escapedRoutes = routes.map((route) => ({
    ...route,
    // Convert dynamic segments like :id to regex groups (e.g., ([^/]+))
    regex: new RegExp(
      `^${route.path.replace(/:([a-zA-Z0-9_]+)/g, "([^/]+)")}$`,
    ),
  }));

  const matchedRoute = escapedRoutes.find((route) =>
    route.regex.test(currentPath),
  );

  if (matchedRoute) {
    const match = currentPath.match(matchedRoute.regex);
    const params = {};
    // Extract parameters from regex groups
    if (match && matchedRoute.path.includes(":")) {
      const paramNames = (
        matchedRoute.path.match(/:([a-zA-Z0-9_]+)/g) || []
      ).map((p) => p.substring(1));
      paramNames.forEach((name, index) => {
        params[name] = match[index + 1];
      });
    }
    return { component: matchedRoute.component, params: params };
  }
  return null; // No route found
}

console.log(resolveRoute("/users/123"));
// Output: { component: 'UserProfilePage', params: { id: '123' } }

console.log(resolveRoute("/products/electronics/abc-456"));
// Output: { component: 'ProductDetailPage', params: { category: 'electronics', id: 'abc-456' } }

console.log(resolveRoute("/about"));
// Output: null
```

## `findIndex()` method

**1. Finding the Index of the First Number Greater Than 5:**

```javascript
// findIndex()
const numbers = [1, 7, 3, 9, 2];

const indexFound = numbers.findIndex((num) => num > 5);
console.log(indexFound);
// Output: 1 (index of 7)
```

**2. Finding the Index of an Object by a Property:**

```javascript
// findIndex()
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
// find Bob

const bobIndex = users.findIndex((user) => user.name === "Bob");
console.log(bobIndex);
// Output: 1
// find Eve

const eveIndex = users.findIndex((user) => user.name === "Eve");
console.log(eveIndex);
// Output: -1
```

**3. Finding in an Empty Array:**

```javascript
// findIndex()
const emptyArray = [];

const resultEmpty = emptyArray.findIndex((item) => item > 0);
console.log(resultEmpty);
// Output: -1
```

**4. Finding `NaN` (where `indexOf` fails):**

```javascript
// findIndex()
const mixedArray = [1, 2, NaN, 4];

console.log(mixedArray.indexOf(NaN));
console.log(mixedArray.findIndex(Number.isNaN));

// Output: -1 (fails)
// Output: 2 (correctly finds NaN)
```

## When to Use `findIndex()`:

### 1. **Retrieving the Index for Subsequent Modification/Deletion:**

This is the primary use case. When you need the position of an element (especially an object) to then perform an operation that requires an index (like `splice()` or direct assignment).

```javascript
const products = [
  { id: "a1", name: "Laptop", price: 1200 },
  { id: "b2", name: "Mouse", price: 25 },
  { id: "c3", name: "Keyboard", price: 75 },
];

function updateProductPrice(productId, newPrice) {
  const index = products.findIndex((p) => p.id === productId);
  if (index !== -1) {
    products[index].price = newPrice; // Modify the object in place
    console.log(
      `Updated product ${productId}. New price: ${products[index].price}`,
    );
  } else {
    console.log(`Product with ID ${productId} not found.`);
  }
}

updateProductPrice("b2", 30);
console.log(products[1]);
// Updated product b2. New price: 30
// Output: { id: 'b2', name: 'Mouse', price: 30 }
```

### 2. **Removing a Specific Object by its Property:**

    A common pattern is to find the index of an object and then use `splice()` to remove it.

```javascript
// findIndex
// create a function to remove user with userId
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

function removeUser(userId) {
  const indexToRemove = users.findIndex((user) => user.id === userId);
  if (indexToRemove !== -1) {
    const removedUser = users.splice(indexToRemove, 1); // Remove 1 element at this index
    console.log(`Removed user: ${removedUser[0].name}`);
    return true;
  } else {
    console.log(`User with ID ${userId} not found.`);
    return false;
  }
}

removeUser(102);
console.log(users);

// Removed user: Bob
// Output: [{ id: 101, name: 'Alice' }, { id: 103, name: 'Charlie' }]
```

### 3. **Checking for Duplicates in an Array while preserving order:**

If you want to filter out duplicates but need to perform operations based on their original positions, `findIndex()` can be part of that logic.

```javascript
// findIndex
// find unique numbers with findIndex
const numbersWithDuplicates = [10, 20, 10, 30, 20, 40];

const uniqueOrdered = numbersWithDuplicates.filter(
  (num, index, arr) => arr.findIndex((item) => item === num) === index, // Only keep the first occurrence's index
);
console.log(uniqueOrdered);

// Output: [10, 20, 30, 40]
```

### 4. **Complex Search Conditions for Index:**

Just like `find()`, `findIndex()` allows for sophisticated conditions in its callback.

````javascript
// findIndex
// Find the index of the first high priority task that is still pending
const tasks = [
  { name: "Develop Feature A", status: "pending", priority: "high" },
  { name: "Fix Bug X", status: "in-progress", priority: "high" },
  { name: "Write Documentation", status: "pending", priority: "medium" },
];

const highPriorityPendingIndex = tasks.findIndex(
  (task) => task.priority === "high" && task.status === "pending",
);
console.log(
  `Index of first high priority pending task: ${highPriorityPendingIndex}`,
);
// Output: 0
    ```
````

## 1. Slicing an Array:\*\*

```javascript
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Extract elements from index 1 up to (but not including) index 4

const selectedFruits = fruits.slice(1, 4);
console.log(selectedFruits);
console.log(fruits);

// Output: ['banana', 'cherry', 'date']
// Output: ['apple', 'banana', 'cherry', 'date', 'elderberry'] (original unchanged)

// Extract from a negative index -2

const lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits);

// Output: ['date', 'elderberry']

// Extract all elements (shallow copy)

const allFruits = fruits.slice();
console.log(allFruits);
console.log(allFruits === fruits);

// Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
// Output: false (it's a new array)
```

**2. Slicing a String:**

```javascript
const sentence = "Hello, world!";

// Extract from index 0 up to (but not including) index 5

const greeting = sentence.slice(0, 5);
console.log(greeting);

// Output: "Hello"

// Extract from index 7 to the end

const worldPart = sentence.slice(7);
console.log(worldPart);

// Output: "world!"

// Extract using negative indices -1

const lastChar = sentence.slice(-1);
console.log(lastChar);

// Output: "!"
```

### When to Use `slice()`:

1.  **Creating a Shallow Copy of an Array:**
    `slice()` without arguments (`arr.slice()`) is a common and efficient way to create a shallow copy of an array. This is useful when you need to modify an array without affecting the original.

```javascript
// create shallow copy of the following array and push 4 at the end of the array.
const originalArray = [1, 2, 3];

const copiedArray = originalArray.slice();
copiedArray.push(4);
console.log(originalArray);
console.log(copiedArray);

// [1, 2, 3]
// [1, 2, 3, 4]
```

2.  **Extracting Sub-arrays or Substrings:**
    When you need a specific portion of an array or string and don't want to alter the original.

```javascript
//slice numbers from index 1 to 4
const numbers = [10, 20, 30, 40, 50];

const middleNumbers = numbers.slice(1, 4);

// [20, 30, 40]

//slice numbers from index 8 to 23
const url = "https://www.example.com/page";

const domain = url.slice(8, 23);

// "www.example.com"
```

3.  **Converting Array-like Objects to Arrays:**
    `slice.call()` (or `Array.prototype.slice.call()`) is a classic technique to convert array-like objects (like `arguments` in old JavaScript functions, or NodeList from DOM queries) into true arrays.

```javascript
// TODO come back when reduce() function is done.
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
// TODO  do when learnt array.from
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
// TODO do when splice() method done.
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

<!-- TODO  comeback when classes are done.-->

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
// TODO come back when push method is done.
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

## `join()` Method

#### Basic Examples:

**1. Joining with Default Separator (Comma):**

```javascript
const fruits = ["apple", "banana", "cherry"];
// Output: "apple,banana,cherry"
```

**2. Joining with a Custom Separator:**

```javascript
const words = ["Hello", "world", "JavaScript"];

const sentenceSpace = words.join(" ");
console.log(sentenceSpace);
// Output: "Hello world JavaScript"

const sentenceHyphen = words.join("-");
console.log(sentenceHyphen);
// Output: "Hello-world-JavaScript"
```

**3. Joining Without a Separator (Empty String):**

```javascript
const chars = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];

const fullWord = chars.join("");
console.log(fullWord);
// Output: "JavaScript"
```

**4. Handling `null` and `undefined` Elements:**

```javascript
const mixedData = ["Name", null, "is", undefined, "Alice"];

const resultString = mixedData.join(" ");
console.log(resultString);

// Output: "Name is Alice" (null and undefined become empty strings)
```

**5. Joining an Empty Array:**

```javascript
const emptyArray = [];

const emptyString = emptyArray.join("-");
console.log(emptyString);
// Output: ""
```

---

### When to Use `join()`:

1.  **Creating Display Strings from Array Elements:**
    This is the most common use case. When you need to present an array's contents as a single, human-readable string, often for display in UI or logs.

```javascript
const tags = ["frontend", "react", "javascript", "css"];

const tagList = tags.join(", ");
console.log(`Tags: ${tagList}`);
// Output: Tags: frontend, react, javascript, css

const pathSegments = ["users", "profile", "john_doe"];

const fullPath = "/" + pathSegments.join("/");
console.log(fullPath);
// Output: /users/profile/john_doe
```

2.  **Generating CSV (Comma-Separated Values) Data:**
    For simple CSV generation where you need to combine an array of values into a single line.

```javascript
const rowData = ["John Doe", 30, "New York"];

const csvLine = rowData.join(",");
console.log(csvLine);
// Output: "John Doe,30,New York"

const headers = ["Name", "Age", "City"];

console.log(headers.join(","));
// Output: "Name,Age,City"
```

3.  **Constructing Query Strings or URLs (Simple Cases):**
    When you need to build parts of a URL or query string from an array of parameters.

```javascript
const params = ["name=Alice", "age=30", "city=NY"];

const queryString = params.join("&");
console.log(queryString);
// Output: "name=Alice&age=30&city=NY"
```

4.  **Reversing a String (by combining with `split()`):**
    A common trick to reverse a string.

    ```javascript
    <!-- TODO come back when split and reverse are done -->
    const originalString = "hello";

    const reversedString = originalString.split("").reverse().join("");
    console.log(reversedString);
    // Output: "olleh"
    ```

---

### When NOT to Use `join()`:

1.  **When Working with Objects in an Array (Without Transformation):**
    If your array contains objects, `join()` will convert each object to its string representation (typically `[object Object]`), which is rarely useful without first transforming the objects into strings using `map()`.
    - **Use `map()` first to extract stringable properties:**

      ```javascript
      const users = [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
      ];

      // DON'T:
      const userStringBad = users.join(", ");
      console.log(userStringBad); // Output: "[object Object],[object Object]"

      // DO:
      const userNames = users.map((user) => user.name).join(", ");
      console.log(userNames); // Output: "Alice, Bob"
      ```

2.  **When Dealing with Complex URL/Query String Encoding:**
    For robust URL or query string construction, just `join()` is insufficient. You'll need to use `encodeURIComponent()` for each individual parameter to handle special characters correctly. - **Use `encodeURIComponent()` for URL safety:**
    <!-- TODO comeback when encodedURIComponent done -->

    ```javascript
    const rawParams = [
      { key: "search", value: "hello world" },
      { key: "filter", value: "JavaScript & React" },
    ];

    const encodedQueryString = rawParams
      .map((p) => `${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`)
      .join("&");
    console.log(encodedQueryString); // Output: "search=hello%20world&filter=JavaScript%20%26%20React"
    ```

3.  **When You Need to Modify the Array In-Place:**
    `join()` returns a new string and does not modify the original array at all. If your goal is to change the array's contents, use methods like `push()`, `pop()`, `splice()`, etc.

---

### Advanced Uses with Examples:

**1. Generating Dynamic SQL `IN` Clauses:**

When building dynamic SQL queries, `join()` can be used to construct the list of values for an `IN` clause. Remember to handle quoting for string values.

```javascript
const userIds = [101, 105, 110];
const productCategories = ["Electronics", "Books", "Clothing"];

// For numbers, direct join is fine

const sqlUserIn = `SELECT * FROM users WHERE id IN (${userIds.join(",")})`;
console.log(sqlUserIn);
// Output: SELECT * FROM users WHERE id IN (101,105,110)

// For strings, you need to quote each item first

const quotedCategories = productCategories.map((cat) => `'${cat}'`);
const sqlCategoryIn = `SELECT * FROM products WHERE category IN (${quotedCategories.join(",")})`;
console.log(sqlCategoryIn);

// Output: SELECT * FROM products WHERE category IN ('Electronics','Books','Clothing')
```

**2. Formatting Multi-Line Text/Reports:**

Joining an array of lines with a newline character (`\n`) is a common way to assemble multi-line text.

```javascript
const reportLines = [
  "--- Sales Report ---",
  "",
  "Product A: 150 units",
  "Product B: 200 units",
  "Product C: 75 units",
  "",
  "--------------------",
];

const fullReport = reportLines.join("\n");
console.log(fullReport);

/* Output:
--- Sales Report ---

Product A: 150 units
Product B: 200 units
Product C: 75 units

--------------------
*/
```

**3. Pretty Printing JSON (Simplified):**

While `JSON.stringify` is for actual JSON, you can use `join()` for custom, simpler string representations of array data.

```javascript
const userProfile = {
  username: "john_doe",
  email: "john@example.com",
  roles: ["admin", "user"],
  lastLogin: "2025-07-26",
};

const userDetails = [
  `Username: ${userProfile.username}`,
  `Email: ${userProfile.email}`,
  `Roles: ${userProfile.roles.join(", ")}`, // Join roles specifically
  `Last Login: ${userProfile.lastLogin}`,
];

const formattedProfile = userDetails.join("\n");
console.log(formattedProfile);
/* Output:
Username: john_doe
Email: john@example.com
Roles: admin, user
Last Login: 2025-07-26
*/
```

**4. Creating Breadcrumbs for Navigation:**

```javascript
const pagePath = ["Home", "Products", "Electronics", "Laptops"];

const breadcrumbs = pagePath.map((segment, index, arr) => {
  // Construct href based on accumulated path
  const href =
    "/" +
    arr
      .slice(0, index + 1)
      .map((s) => s.toLowerCase())
      .join("/");
  return `<a href="${href}">${segment}</a>`;
});

const breadcrumbsHtml = breadcrumbs.join(" &gt; "); // Use &gt; for > character
console.log(breadcrumbsHtml);
/* Output:
<a href="/home">Home</a> &gt; <a href="/home/products">Products</a> &gt; <a href="/home/products/electronics">Electronics</a> &gt; <a href="/home/products/electronics/laptops">Laptops</a>
*/
```
