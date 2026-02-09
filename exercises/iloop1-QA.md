**Total Number of Problems: 73**

---

# 1. `concat()` Method (6 Problems)

### 1.1 (1) Concatenating Two Arrays

**Q:** Create a new array by merging `array1` and `array2`.

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const result = array1.concat(array2);
console.log(result); // [ 1, 2, 3, 4, 5, 6 ]
```

</details>

### 1.2 (2) Concatenating User Lists

**Q:** Create a new array of all users by combining `activeUsers` and `inactiveUsers`.

```javascript
const activeUsers = ["Alice", "Bob"];
const inactiveUsers = ["Charlie", "David"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const allUsers = activeUsers.concat(inactiveUsers);
console.log(allUsers); // [ 'Alice', 'Bob', 'Charlie', 'David' ]
```

</details>

### 1.3 (3) Concatenating Multiple Arrays

**Q:** Create a combined array of `arrA`, `arrB`, and `arrC`.

```javascript
const arrA = ["a", "b"];
const arrB = ["c", "d"];
const arrC = ["e", "f"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const combined = arrA.concat(arrB, arrC);
console.log(combined); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```

</details>

### 1.4 (4) Updating Shopping Cart

**Q:** Update the `shoppingCart` by concatenating `"bread"` and `"cheese"` to it.

```javascript
const shoppingCart = ["milk", "eggs"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const updatedCart = shoppingCart.concat("bread", "cheese");
console.log(updatedCart); // [ 'milk', 'eggs', 'bread', 'cheese' ]
```

</details>

### 1.5 (5) Concatenating Mixed Values

**Q:** Add the values `3`, `[4, 5]`, and `6` to the `list` array using concat.

```javascript
const list = [1, 2];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const result = list.concat(3, [4, 5], 6);
console.log(result); // [ 1, 2, 3, 4, 5, 6 ]
// Note: concat flattens the array [4, 5] by one level
```

</details>

### 1.6 (6) Concatenating Empty Array (Shallow Copy)

**Q:** Use `concat()` to create a shallow copy of `original`.

```javascript
const original = [1, 2, { id: 3 }];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const copy = original.concat();
console.log(copy); // [1, 2, { id: 3 }]
```

</details>

---

# 2. `at()` Method (4 Problems)

### 2.1 (7) Accessing Elements (Positive Index)

**Q:** Access the element at position `0` and position `2`.

```javascript
const fruits = ["apple", "banana", "cherry", "date"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(fruits.at(0)); // "apple"
console.log(fruits.at(2)); // "cherry"
```

</details>

### 2.2 (8) Accessing Elements (Negative Index)

**Q:** Access the last element and the second-to-last element using `at()`.

```javascript
const colors = ["red", "green", "blue", "yellow"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(colors.at(-1)); // "yellow"
console.log(colors.at(-2)); // "blue"
```

</details>

### 2.3 (9) `at()` with Strings

**Q:** Access characters at positions `0`, `-1`, and `-5` in the string.

```javascript
const sentence = "JavaScript";
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(sentence.at(0)); // "J"
console.log(sentence.at(-1)); // "t"
console.log(sentence.at(-5)); // "c"
```

</details>

### 2.4 (10) Handling Out-of-Bounds & Defaults

**Q:** Try accessing index `3` and `-4`. Then, use the `??` operator to provide a default value "No items found" if accessing index `-1` of an empty array returns undefined.

```javascript
const numbers = [10, 20, 30];
const items = [];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(numbers.at(3)); // undefined
console.log(numbers.at(-4)); // undefined

const lastItem = items.at(-1) ?? "No items found";
console.log(lastItem); // "No items found"
```

</details>

---

# 3. `forEach()` Method (5 Problems)

### 3.1 (11) Logging Each Element

**Q:** Log each element of the array.

```javascript
const fruits = ["apple", "banana", "cherry"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
fruits.forEach((fruit) => console.log(fruit));
// Output:
// apple
// banana
// cherry
```

</details>

### 3.2 (12) Accessing Index and Array

**Q:** Log the current element, its index, and the full array for each item.

```javascript
const numbers = [10, 20, 30];
```

<details>
<summary><b>Answer</b></summary>

```javascript
numbers.forEach((num, index, arr) => {
  console.log(`Element at index ${index}: ${num}. Full array: ${arr}`);
});
```

</details>

### 3.3 (13) Calculating Total (Side Effect)

**Q:** Calculate the sum of `prices` and store it in the variable `totalPrice`.

```javascript
const prices = [10.5, 20.0, 5.25];
let totalPrice = 0;
```

<details>
<summary><b>Answer</b></summary>

```javascript
prices.forEach((price) => (totalPrice += price));
console.log(totalPrice); // 35.75
```

</details>

### 3.4 (14) DOM Manipulation (Side Effect)

**Q:** Write a `forEach` loop that creates an `<li>` element for each item and appends it to a list element with id `myList`.

```javascript
const items = ["item1", "item2", "item3"];
const listElement = document.getElementById("myList");
```

<details>
<summary><b>Answer</b></summary>

```javascript
items.forEach((itemText) => {
  const listItem = document.createElement("li");
  listItem.textContent = itemText;
  if (listElement) listElement.appendChild(listItem);
});
```

</details>

### 3.5 (15) Processing Data with Function

**Q:** Apply the `processUserData` function to every user in the array.

```javascript
function processUserData(user) {
  console.log(`Processing user: ${user.name}, ID: ${user.id}`);
}
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
users.forEach(processUserData);
// Output:
// Processing user: Alice, ID: 1
// Processing user: Bob, ID: 2
```

</details>

---

# 4. `map()` Method (5 Problems)

### 4.1 (16) Doubling Numbers

**Q:** Create a new array where every number is doubled.

```javascript
const numbers = [1, 2, 3, 4, 5];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

</details>

### 4.2 (17) Extracting Properties

**Q:** Create two arrays: `userNames` containing only names, and `userAges` containing only ages.

```javascript
const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 24 },
  { id: 3, name: "Charlie", age: 35 },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const userNames = users.map((user) => user.name);
const userAges = users.map((user) => user.age);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']
console.log(userAges); // [30, 24, 35]
```

</details>

### 4.3 (18) Formatting Data

**Q:** Create a new array of objects where `name` is uppercase and `price` is formatted as a string (e.g., "$1200.00").

```javascript
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const formatted = products.map((product) => ({
  name: product.name.toUpperCase(),
  price: `$${product.price.toFixed(2)}`,
}));
console.log(formatted);
```

</details>

### 4.4 (19) Calculating Total Values

**Q:** Create an array of the total cost for each product (`price * count`).

```javascript
const products = [
  { name: "laptop", price: 1000, count: 5 },
  { name: "desktop", price: 1500, count: 5 },
  { name: "phone", price: 500, count: 10 },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const totalValues = products.map((p) => p.price * p.count);
console.log(totalValues); // [ 5000, 7500, 5000 ]
```

</details>

### 4.5 (20) Using Index and Array Arguments

**Q:** Map the array to return strings like "0: a". Also, log the original array inside the callback.

```javascript
const letters = ["a", "b", "c"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const indexed = letters.map((letter, index, arr) => {
  console.log(`Original: ${arr}`);
  return `${index}: ${letter}`;
});
console.log(indexed); // ['0: a', '1: b', '2: c']
```

</details>

---

# 5. `indexOf()` Method (7 Problems)

### 5.1 (21) Basic Search

**Q:** Find the index of "banana" and "grape".

```javascript
const fruits = ["apple", "banana", "cherry", "banana"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("grape")); // -1
```

</details>

### 5.2 (22) Search from Specific Index

**Q:** Find the index of `20` starting from index 0. Then find `20` starting from index 2. Then find `20` starting from index -1.

```javascript
const numbers = [10, 20, 30, 20, 40];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(numbers.indexOf(20, 0)); // 1
console.log(numbers.indexOf(20, 2)); // 3
console.log(numbers.indexOf(20, -1)); // -1
```

</details>

### 5.3 (23) String Search

**Q:** Find the index of "fox". Find "quick" starting at index 5. Find "lazy" starting at index 20.

```javascript
const sentence = "The quick brown fox jumps over the lazy dog.";
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(sentence.indexOf("fox")); // 16
console.log(sentence.indexOf("quick", 5)); // -1
console.log(sentence.indexOf("lazy", 20)); // 35
```

</details>

### 5.4 (24) NaN vs Undefined

**Q:** Try to find `NaN` and `undefined` using `indexOf`.

```javascript
const mixedArray = [1, "hello", NaN, undefined];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(mixedArray.indexOf(NaN)); // -1 (Cannot find NaN)
console.log(mixedArray.indexOf(undefined)); // 3
```

</details>

### 5.5 (25) Find and Remove

**Q:** Find the index of "Walk dog". If it exists, remove it using splice.

```javascript
const todoList = ["Buy groceries", "Walk dog", "Pay bills"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const taskIndex = todoList.indexOf("Walk dog");
if (taskIndex !== -1) {
  todoList.splice(taskIndex, 1);
}
console.log(todoList); // ["Buy groceries", "Pay bills"]
```

</details>

### 5.6 (26) Filter Unique Values

**Q:** Use `filter` and `indexOf` to remove duplicate numbers.

```javascript
const data = [1, 5, 2, 5, 3, 1, 4];
```

<details>
<summary><b>Answer</b></summary>

```javascript
// Keep item if its FIRST occurrence index matches current index
const unique = data.filter((item, index) => data.indexOf(item) === index);
console.log(unique); // [1, 5, 2, 3, 4]
```

</details>

### 5.7 (27) Parsing String format

**Q:** Extract the name between "Name:" and the next semicolon.

```javascript
const userData = "ID:123;Name:Alice;Age:30";
```

<details>
<summary><b>Answer</b></summary>

```javascript
const start = userData.indexOf("Name:") + "Name:".length;
const end = userData.indexOf(";", start);
const name = userData.substring(start, end);
console.log(name); // "Alice"
```

</details>

---

# 6. `lastIndexOf()` Method (7 Problems)

### 6.1 (28) Basic Last Index

**Q:** Find the **last** index of `30`.

```javascript
const numbers = [10, 20, 30, 10, 40, 30];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(numbers.lastIndexOf(30)); // 5
```

</details>

### 6.2 (29) Search from Index

**Q:** Find "A" searching backwards from index 4. Then from index 2. Then from index -2.

```javascript
const data = ["A", "B", "C", "A", "D", "A", "E"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(data.lastIndexOf("A", 4)); // 3
console.log(data.lastIndexOf("A", 2)); // 0
console.log(data.lastIndexOf("A", -2)); // 5 (Starts at 'A' (index 5) and looks back)
```

</details>

### 6.3 (30) Object References

**Q:** Find the last index of `obj1` and `obj3`. Then try to find a new object `{ id: 1 }`.

```javascript
const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 1 };
const objects = [obj1, obj2, obj1, obj3];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(objects.lastIndexOf(obj1)); // 2
console.log(objects.lastIndexOf(obj3)); // 3
console.log(objects.lastIndexOf({ id: 1 })); // -1 (Different reference)
```

</details>

### 6.4 (31) Find Last Action

**Q:** Find the index of the last "add_to_cart" event.

```javascript
const userLog = [
  "page_view",
  "add_to_cart",
  "page_view",
  "add_to_cart",
  "purchase_complete",
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(userLog.lastIndexOf("add_to_cart")); // 3
```

</details>

### 6.5 (32) Remove Last Occurrence

**Q:** Remove only the last "js" from the array.

```javascript
const tags = ["js", "html", "css", "js", "react", "js"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const lastIndex = tags.lastIndexOf("js");
if (lastIndex !== -1) tags.splice(lastIndex, 1);
console.log(tags); // ['js', 'html', 'css', 'js', 'react']
```

</details>

### 6.6 (33) File Extension Check

**Q:** Get the substring starting from the last dot to find the extension.

```javascript
const fileName = "documentReport.txt";
```

<details>
<summary><b>Answer</b></summary>

```javascript
const lastDot = fileName.lastIndexOf(".");
const ext = fileName.substring(lastDot);
console.log(ext); // ".txt"
```

</details>

### 6.7 (34) File Path Split

**Q:** Separate the folder path and the file name using the last slash.

```javascript
const filePath = "/users/documents/reports/final_report.pdf";
```

<details>
<summary><b>Answer</b></summary>

```javascript
const lastSlash = filePath.lastIndexOf("/");
const folder = filePath.substring(0, lastSlash);
const file = filePath.substring(lastSlash + 1);
console.log(folder); // "/users/documents/reports"
console.log(file); // "final_report.pdf"
```

</details>

---

# 7. `charAt()` Method (3 Problems)

### 7.1 (35) Basic Access

**Q:** Get the first char, last char, and char at index 4.

```javascript
const message = "JavaScript";
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(message.charAt(0)); // "J"
console.log(message.charAt(message.length - 1)); // "t"
console.log(message.charAt(4)); // "S"
```

</details>

### 7.2 (36) Out of Bounds

**Q:** What does `charAt(20)` return? What is its length?

<details>
<summary><b>Answer</b></summary>

```javascript
const char = message.charAt(20);
console.log(char); // "" (Empty string)
console.log(char.length); // 0
```

</details>

### 7.3 (37) Loop Iteration

**Q:** Use a loop to log every character using `charAt`.

<details>
<summary><b>Answer</b></summary>

```javascript
for (let i = 0; i < message.length; i++) {
  console.log(message.charAt(i));
}
```

</details>

---

# 8. `substring()` Method (6 Problems)

### 8.1 (38) Basic Extraction

**Q:** Extract "Java" (0 to 4) and "World" (5 to end).

```javascript
let str1 = "JavaScript";
let str2 = "HelloWorld";
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(str1.substring(0, 4)); // "Java"
console.log(str2.substring(5)); // "World"
```

</details>

### 8.2 (39) Swapped Indices

**Q:** What happens if you run `substring(5, 2)`?

```javascript
let str = "developer";
```

<details>
<summary><b>Answer</b></summary>

```javascript
// It swaps them automatically to (2, 5)
console.log(str.substring(5, 2)); // "vel"
```

</details>

### 8.3 (40) Negative & Overflow Indices

**Q:** What is the result of `substring(-2, 3)` and `substring(1, 100)`?

```javascript
let t1 = "test";
let t2 = "abc";
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(t1.substring(-2, 3)); // "tes" (Treats -2 as 0)
console.log(t2.substring(1, 100)); // "bc" (Stops at end of string)
```

</details>

### 8.4 (41) Domain Extraction

**Q:** Extract "google" from the URL using `indexOf` and `substring`.

```javascript
let url = "https://www.google.com/search";
```

<details>
<summary><b>Answer</b></summary>

```javascript
let start = url.indexOf("www.") + 4;
let end = url.indexOf(".com");
console.log(url.substring(start, end)); // "google"
```

</details>

### 8.5 (42) Truncate String

**Q:** Write a function that returns the text followed by "..." if it exceeds `maxLength`.

```javascript
const text = "This is a very long sentence to be truncated.";
```

<details>
<summary><b>Answer</b></summary>

```javascript
function truncate(text, max) {
  if (text.length > max) return text.substring(0, max) + "...";
  return text;
}
console.log(truncate(text, 20)); // "This is a very long..."
```

</details>

### 8.6 (43) Manual String Reverse

**Q:** Reverse "hello" using a loop and `substring`.

<details>
<summary><b>Answer</b></summary>

```javascript
function reverse(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str.substring(i, i + 1);
  }
  return rev;
}
console.log(reverse("hello")); // "olleh"
```

</details>

---

# 9. `includes()` Method (6 Problems)

### 9.1 (44) Array Includes

**Q:** Check if "banana" and "grape" exist in the array.

```javascript
const fruits = ["apple", "banana", "cherry"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape")); // false
```

</details>

### 9.2 (45) From Index

**Q:** Check `includes(30)` starting at index 2, index 3, and index -2.

```javascript
const numbers = [10, 20, 30, 40, 50];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(numbers.includes(30, 2)); // true
console.log(numbers.includes(30, 3)); // false
console.log(numbers.includes(50, -2)); // true (starts at index 3)
```

</details>

### 9.3 (46) NaN Check

**Q:** Does the array include `NaN` or `undefined`?

```javascript
const mixed = [1, "hello", NaN, undefined];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(mixed.includes(NaN)); // true
console.log(mixed.includes(undefined)); // true
```

</details>

### 9.4 (47) String Includes

**Q:** Check if sentence includes "fox", "cat", or "Quick" (case sensitive).

```javascript
const sentence = "The quick brown fox jumps over the lazy dog.";
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(sentence.includes("fox")); // true
console.log(sentence.includes("cat")); // false
console.log(sentence.includes("Quick")); // false
```

</details>

### 9.5 (48) Role & Permission Check

**Q:** Check if `userRoles` contains any of the `requiredRoles`.

```javascript
const userRoles = ["admin", "editor", "viewer"];
const requiredRoles = ["admin", "editor"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const hasAccess = userRoles.some((role) => requiredRoles.includes(role));
console.log(hasAccess); // true
```

</details>

### 9.6 (49) Case Insensitive Search

**Q:** Create a function to check if a string includes a substring ignoring case.

```javascript
const text = "JavaScript is Versatile";
```

<details>
<summary><b>Answer</b></summary>

```javascript
function check(main, sub) {
  return main.toLowerCase().includes(sub.toLowerCase());
}
console.log(check(text, "versatile")); // true
```

</details>

---

# 10. `find()` Method (6 Problems)

### 10.1 (50) Find Number

**Q:** Find the first number greater than 5.

```javascript
const numbers = [1, 7, 3, 9, 2];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(numbers.find((n) => n > 5)); // 7
```

</details>

### 10.2 (51) Find User

**Q:** Find the user with name "Bob".

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(users.find((u) => u.name === "Bob")); // { id: 2, name: "Bob" }
```

</details>

### 10.3 (52) Conditional Find with Index

**Q:** Find the first temperature above 20 that is NOT at index 0.

```javascript
const temps = [20, 22, 18, 25];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const hot = temps.find((t, i) => t > 20 && i > 0);
console.log(hot); // 22
```

</details>

### 10.4 (53) Complex Condition

**Q:** Find a document by "Alice" that is either "draft" or "approved".

```javascript
const docs = [
  { title: "Plan", author: "Alice", status: "draft" },
  { title: "Report", author: "Bob", status: "approved" },
  { title: "Notes", author: "Alice", status: "final" },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const doc = docs.find(
  (d) =>
    d.author === "Alice" && (d.status === "draft" || d.status === "approved"),
);
console.log(doc); // { title: "Plan", ... }
```

</details>

### 10.5 (54) Find or Create Logic

**Q:** Check if "javascript" tag exists. If not, simulate creating it (push to array).

```javascript
const tags = [{ id: 1, name: "javascript" }];
```

<details>
<summary><b>Answer</b></summary>

```javascript
function getOrCreate(name) {
  let tag = tags.find((t) => t.name === name);
  if (!tag) {
    tag = { id: tags.length + 1, name };
    tags.push(tag);
  }
  return tag;
}
console.log(getOrCreate("javascript")); // returns existing
console.log(getOrCreate("react")); // creates new
```

</details>

### 10.6 (55) Resource Assignment

**Q:** Find the first resource with status "available", set it to "busy", and assign user "Charlie".

```javascript
const resources = [
  { id: "A", status: "busy", user: "Alice" },
  { id: "B", status: "available", user: null },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const res = resources.find((r) => r.status === "available");
if (res) {
  res.status = "busy";
  res.user = "Charlie";
}
console.log(res); // { id: "B", status: "busy", user: "Charlie" }
```

</details>

---

# 11. `findIndex()` Method (5 Problems)

### 11.1 (56) Basic Index

**Q:** Find the index of the first number greater than 5.

```javascript
const numbers = [1, 7, 3, 9, 2];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(numbers.findIndex((n) => n > 5)); // 1
```

</details>

### 11.2 (57) Find Index of Object

**Q:** Find index of user "Bob". Find index of "Eve".

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(users.findIndex((u) => u.name === "Bob")); // 1
console.log(users.findIndex((u) => u.name === "Eve")); // -1
```

</details>

### 11.3 (58) Update by Index

**Q:** Find index of product "b2" and update its price to 30.

```javascript
const products = [
  { id: "a1", price: 10 },
  { id: "b2", price: 25 },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const idx = products.findIndex((p) => p.id === "b2");
if (idx !== -1) products[idx].price = 30;
console.log(products[1]); // { id: "b2", price: 30 }
```

</details>

### 11.4 (59) Remove by Index

**Q:** Find index of user `102` and remove them using splice.

```javascript
const list = [{ id: 101 }, { id: 102 }, { id: 103 }];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const i = list.findIndex((u) => u.id === 102);
if (i !== -1) list.splice(i, 1);
console.log(list); // [{ id: 101 }, { id: 103 }]
```

</details>

### 11.5 (60) High Priority Task

**Q:** Find the index of the first task that is "high" priority AND "pending".

```javascript
const tasks = [
  { status: "pending", priority: "low" },
  { status: "in-progress", priority: "high" },
  { status: "pending", priority: "high" },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const idx = tasks.findIndex(
  (t) => t.priority === "high" && t.status === "pending",
);
console.log(idx); // 2
```

</details>

---

# 12. `slice()` Method (6 Problems)

### 12.1 (61) Array Slicing

**Q:** Extract indices 1 to 4. Extract last 2 elements. Create a full copy.

```javascript
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(fruits.slice(1, 4)); // ['banana', 'cherry', 'date']
console.log(fruits.slice(-2)); // ['date', 'elderberry']
console.log(fruits.slice()); // Full shallow copy
```

</details>

### 12.2 (62) String Slicing

**Q:** Slice string from 0 to 5. Slice from 7 to end. Slice last char.

```javascript
const str = "Hello, world!";
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(7)); // "world!"
console.log(str.slice(-1)); // "!"
```

</details>

### 12.3 (63) Copy and Modify

**Q:** Create a shallow copy of `arr`, then push `4` to the copy only.

```javascript
const arr = [1, 2, 3];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const copy = arr.slice();
copy.push(4);
console.log(arr); // [1, 2, 3]
console.log(copy); // [1, 2, 3, 4]
```

</details>

### 12.4 (64) Pagination Logic

**Q:** Calculate start/end indices for Page 2 (10 items per page) and slice the data.

```javascript
const data = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
const page = 2,
  perPage = 10;
```

<details>
<summary><b>Answer</b></summary>

```javascript
const start = (page - 1) * perPage;
const end = start + perPage;
const items = data.slice(start, end);
console.log(items); // ["Item 11", ... "Item 20"]
```

</details>

### 12.5 (65) Circular Buffer (Advanced)

**Q:** Create a function that takes a slice of length 3 starting from index 4, wrapping around to the start if needed.

```javascript
const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
function getCircular(arr, start, len) {
  const res = [];
  for (let i = 0; i < len; i++) {
    res.push(arr[(start + i) % arr.length]);
  }
  return res;
}
console.log(getCircular(imgs, 4, 3)); // ['5.jpg', '1.jpg', '2.jpg']
```

</details>

### 12.6 (66) Parse Product Code

**Q:** Slice the string to get Type (first 4), Category (next 3), and ID (from index 13).

```javascript
const code = "PROD-ABC-XYZ-12345";
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(code.slice(0, 4)); // "PROD"
console.log(code.slice(5, 8)); // "ABC"
console.log(code.slice(13)); // "12345"
```

</details>

---

# 13. `join()` Method (7 Problems)

### 13.1 (67) Basic Join

**Q:** Join with space. Join with hyphen. Join with empty string.

```javascript
const words = ["Hello", "world", "JavaScript"];
const chars = ["J", "S"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(words.join(" ")); // "Hello world JavaScript"
console.log(words.join("-")); // "Hello-world-JavaScript"
console.log(chars.join("")); // "JS"
```

</details>

### 13.2 (68) Null/Undefined Handling

**Q:** Join array containing `null` and `undefined`.

```javascript
const mixed = ["Name", null, "is", undefined, "Alice"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(mixed.join(" ")); // "Name  is  Alice" (Empty strings for null/undefined)
```

</details>

### 13.3 (69) Path and CSV

**Q:** Create a URL path from segments. Create a CSV line from data.

```javascript
const path = ["users", "profile", "john"];
const data = ["John", 30, "NY"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log("/" + path.join("/")); // "/users/profile/john"
console.log(data.join(",")); // "John,30,NY"
```

</details>

### 13.4 (70) Reverse String

**Q:** Reverse "hello" using split, reverse, and join.

<details>
<summary><b>Answer</b></summary>

```javascript
console.log("hello".split("").reverse().join("")); // "olleh"
```

</details>

### 13.5 (71) Join Object Properties

**Q:** Extract names from users and join them with ", ".

```javascript
const users = [{ name: "Alice" }, { name: "Bob" }];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const str = users.map((u) => u.name).join(", ");
console.log(str); // "Alice, Bob"
```

</details>

### 13.6 (72) SQL IN Clause

**Q:** Create a SQL string `... IN ('Electronics','Books')` from array.

```javascript
const cats = ["Electronics", "Books"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const quoted = cats.map((c) => `'${c}'`).join(",");
console.log(`IN (${quoted})`); // "IN ('Electronics','Books')"
```

</details>

### 13.7 (73) Multi-line Report

**Q:** Join array of strings with newline `\n` character.

```javascript
const lines = ["Line 1", "Line 2", "Line 3"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(lines.join("\n"));
/* Output:
Line 1
Line 2
Line 3
*/
```

</details>
