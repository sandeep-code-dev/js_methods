**Total Number of Problems: 45**

---

# 1. `flat()` Method (7 Problems)

### 1.1 (1) Flattening One Level

**Q:** Flatten the array `[1, [2, 3], 4]` by one level.

```javascript
const nestedArray = [1, [2, 3], 4];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const flattened = nestedArray.flat();
console.log(flattened); // [1, 2, 3, 4]
```

</details>

### 1.2 (2) Flattening Multiple Levels

**Q:** Flatten the array `[1, [2, [3, 4]], 5]` by 2 levels.

```javascript
const deeplyNested = [1, [2, [3, 4]], 5];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const flattened = deeplyNested.flat(2);
console.log(flattened); // [1, 2, 3, 4, 5]
```

</details>

### 1.3 (3) Flattening All Levels

**Q:** Completely flatten the array `[1, [2, [3, [4, 5]]], [6, 7]]` regardless of depth.

```javascript
const evenDeeper = [1, [2, [3, [4, 5]]], [6, 7]];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const fullyFlattened = evenDeeper.flat(Infinity);
console.log(fullyFlattened); // [1, 2, 3, 4, 5, 6, 7]
```

</details>

### 1.4 (4) Handling Empty Slots

**Q:** Flatten `[1, , 3, [4, , 6]]` and observe how `flat()` handles empty slots.

```javascript
const sparseArray = [1, , 3, [4, , 6]];
```

<details>
<summary><b>Answer</b></summary>

```javascript
// Removes top-level empty slots
console.log(sparseArray.flat()); // [1, 3, 4, 6]
// Note: Nested empty slots in [4, , 6] are removed because they become top-level after flattening
```

</details>

### 1.5 (5) Consolidating Nested Data

**Q:** Flatten the `categories` array into a single list of strings.

```javascript
const categories = [
  ["Electronics", "Laptops", "Phones"],
  ["Books", "Fiction", "Non-Fiction"],
  ["Clothing", "Men", "Women"],
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const allItems = categories.flat();
console.log(allItems);
// ['Electronics', 'Laptops', 'Phones', 'Books', 'Fiction', 'Non-Fiction', 'Clothing', 'Men', 'Women']
```

</details>

### 1.6 (6) Cleaning Sparse Arrays (Advanced)

**Q:** Flatten and remove all empty/falsy values from `[1, , 3, undefined, [4, , 6, null], , 7, 0]`.

```javascript
const sparseData = [1, , 3, undefined, [4, , 6, null], , 7, 0];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const cleanedData = sparseData.flat(Infinity).filter(Boolean);
console.log(cleanedData); // [1, 3, 4, 6, 7] (Note: 0 is removed because it is falsy)
```

</details>

### 1.7 (7) Chaining with Map

**Q:** Use `map` to split sentences into words, then `flat` to get a single array of words.

```javascript
const sentences = ["Hello world", "I am JavaScript"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const words = sentences.map((s) => s.split(" ")).flat();
console.log(words); // ["Hello", "world", "I", "am", "JavaScript"]
```

</details>

---

# 2. `flatMap()` Method (6 Problems)

### 2.1 (8) Splitting Sentences

**Q:** Use `flatMap()` to split sentences into a single array of words.

```javascript
const sentences = ["Hello world", "I am JavaScript"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const words = sentences.flatMap((s) => s.split(" "));
console.log(words); // ["Hello", "world", "I", "am", "JavaScript"]
```

</details>

### 2.2 (9) Expanding and Filtering

**Q:** Use `flatMap()` to: return `[num, num]` if even, or return `num` if odd.

```javascript
const numbers = [1, 2, 3, 4];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const result = numbers.flatMap((num) => (num % 2 === 0 ? [num, num] : num));
console.log(result); // [1, 2, 2, 3, 4, 4]
```

</details>

### 2.3 (10) Filter and Transform

**Q:** Use `flatMap()` to filter out numbers `< 3` and triple numbers `>= 3`.

```javascript
const numbers = [1, 2, 3, 4];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const result = numbers.flatMap((num) => (num < 3 ? [] : num * 3));
console.log(result); // [9, 12]
```

</details>

### 2.4 (11) Extracting Tags

**Q:** Create a single array of all tags from the articles.

```javascript
const articles = [
  { title: "JS", tags: ["javascript", "es6"] },
  { title: "CSS", tags: ["css", "frontend"] },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const allTags = articles.flatMap((article) => article.tags);
console.log(allTags); // ['javascript', 'es6', 'css', 'frontend']
```

</details>

### 2.5 (12) Combinations (Advanced)

**Q:** Generate all size-color combinations (e.g., "Shirt - Size: S, Color: Red").

```javascript
const product = { name: "Shirt", sizes: ["S", "M"], colors: ["Red", "Blue"] };
```

<details>
<summary><b>Answer</b></summary>

```javascript
const variants = product.sizes.flatMap((size) =>
  product.colors.map(
    (color) => `${product.name} - Size: ${size}, Color: ${color}`,
  ),
);
console.log(variants);
```

</details>

### 2.6 (13) Scheduling Intervals (Advanced)

**Q:** Generate an array of all booked hours. `includeEnd: true` means end hour is inclusive.

```javascript
const intervals = [
  { start: 1, end: 3, includeEnd: true },
  { start: 5, end: 5, includeEnd: true },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const hours = intervals.flatMap((ivl) => {
  const points = [];
  const end = ivl.includeEnd ? ivl.end : ivl.end - 1;
  for (let i = ivl.start; i <= end; i++) points.push(i);
  return points;
});
console.log(hours); // [1, 2, 3, 5]
```

</details>

---

# 3. `some()` Method (6 Problems)

### 3.1 (14) Check for Even Numbers

**Q:** Check if `[1, 3, 5, 8]` contains at least one even number.

```javascript
const numbers = [1, 3, 5, 8];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // true
```

</details>

### 3.2 (15) Check Price Condition

**Q:** Check if any product has a price greater than 100.

```javascript
const products = [
  { name: "Shirt", price: 50 },
  { name: "Pants", price: 120 },
  { name: "Socks", price: 10 },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const hasExpensive = products.some((p) => p.price > 100);
console.log(hasExpensive); // true
```

</details>

### 3.3 (16) Empty Array Behavior

**Q:** What does `some()` return for an empty array?

```javascript
const empty = [];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(empty.some((x) => x > 0)); // false
```

</details>

### 3.4 (17) Check Permissions

**Q:** Check if `userPermissions` contains any permission from `adminPermissions`.

```javascript
const userPermissions = ["view", "edit"];
const adminPermissions = ["delete", "manage_users"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const isAdmin = userPermissions.some((p) => adminPermissions.includes(p));
console.log(isAdmin); // false
```

</details>

### 3.5 (18) Form Validation (Errors)

**Q:** Check if any field in the form has `isValid: false`.

```javascript
const fields = [
  { name: "user", isValid: true },
  { name: "email", isValid: false },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const hasError = fields.some((f) => !f.isValid);
console.log(hasError); // true
```

</details>

### 3.6 (19) Detect Dirty State

**Q:** Check if any user in the list has `isDirty: true`.

```javascript
const users = [
  { id: 1, isDirty: false },
  { id: 2, isDirty: true },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const unsavedChanges = users.some((u) => u.isDirty);
console.log(unsavedChanges); // true
```

</details>

---

# 4. `every()` Method (6 Problems)

### 4.1 (20) Check All Even

**Q:** Check if all numbers in `[2, 4, 6, 8]` are even.

```javascript
const numbers = [2, 4, 6, 8];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const allEven = numbers.every((n) => n % 2 === 0);
console.log(allEven); // true
```

</details>

### 4.2 (21) Check Age Condition

**Q:** Check if all people are 18 or older.

```javascript
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 16 },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const allAdults = people.every((p) => p.age >= 18);
console.log(allAdults); // false
```

</details>

### 4.3 (22) Empty Array Behavior

**Q:** What does `every()` return for an empty array?

```javascript
const empty = [];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(empty.every((x) => x > 0)); // true (Vacuously true)
```

</details>

### 4.4 (23) Verify File Types

**Q:** Check if all files are of type "pdf".

```javascript
const files = [
  { name: "A.pdf", type: "pdf" },
  { name: "B.jpg", type: "jpg" },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const allPdf = files.every((f) => f.type === "pdf");
console.log(allPdf); // false
```

</details>

### 4.5 (24) Nested Validation (Advanced)

**Q:** Check if every inner array contains only numbers greater than 5.

```javascript
const batch = [
  [10, 20],
  [6, 15],
  [7, 12],
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const valid = batch.every((inner) => inner.every((n) => n > 5));
console.log(valid); // true
```

</details>

### 4.6 (25) Strictly Increasing Check

**Q:** Check if the array `[1, 3, 5, 2]` is strictly increasing.

```javascript
const data = [1, 3, 5, 2];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const increasing = data.every((val, i, arr) => i === 0 || val > arr[i - 1]);
console.log(increasing); // false
```

</details>

---

# 5. `reduce()` Method (17 Problems)

### 5.1 (26) Sum of Array

**Q:** Calculate the sum of `[10, 20, 30, 40]`.

```javascript
const nums = [10, 20, 30, 40];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 100
```

</details>

### 5.2 (27) Product of Array

**Q:** Calculate the product of `[1, 2, 3, 4]`.

```javascript
const nums = [1, 2, 3, 4];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const product = nums.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 24
```

</details>

### 5.3 (28) Find Max Value

**Q:** Find the maximum value in `[5, 12, 8, 130, 44]`.

```javascript
const nums = [5, 12, 8, 130, 44];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const max = nums.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
console.log(max); // 130
```

</details>

### 5.4 (29) Reverse String

**Q:** Reverse the string "hello" using reduce.

```javascript
const str = "hello";
```

<details>
<summary><b>Answer</b></summary>

```javascript
const reversed = str.split("").reduce((acc, char) => char + acc, "");
console.log(reversed); // "olleh"
```

</details>

### 5.5 (30) Flatten 2D Array

**Q:** Flatten `[[1, 2], [3, 4], [5, 6]]` using reduce.

```javascript
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const flat = matrix.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // [1, 2, 3, 4, 5, 6]
```

</details>

### 5.6 (31) Count Occurrences

**Q:** Count the occurrences of each color.

```javascript
const colors = ["red", "blue", "red", "green", "blue", "red"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const counts = colors.reduce((acc, color) => {
  acc[color] = (acc[color] || 0) + 1;
  return acc;
}, {});
console.log(counts); // { red: 3, blue: 2, green: 1 }
```

</details>

### 5.7 (32) Group by Property

**Q:** Group people by their age.

```javascript
const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 21 },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const grouped = people.reduce((acc, person) => {
  const key = person.age;
  if (!acc[key]) acc[key] = [];
  acc[key].push(person);
  return acc;
}, {});
console.log(grouped);
```

</details>

### 5.8 (33) Array to Lookup Map

**Q:** Convert array to an object map where `id` is the key.

```javascript
const items = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const map = items.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});
console.log(map); // { 1: {id:1, name:"A"}, 2: {id:2, name:"B"} }
```

</details>

### 5.9 (34) Shopping Cart Total

**Q:** Calculate total price (`price * qty`).

```javascript
const cart = [
  { price: 10, qty: 2 },
  { price: 5, qty: 1 },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const total = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
console.log(total); // 25
```

</details>

### 5.10 (35) Invert Object

**Q:** Invert keys and values.

```javascript
const obj = { a: "1", b: "2", c: "3" };
```

<details>
<summary><b>Answer</b></summary>

```javascript
const inverted = Object.entries(obj).reduce((acc, [key, val]) => {
  acc[val] = key;
  return acc;
}, {});
console.log(inverted); // { "1": "a", "2": "b", "3": "c" }
```

</details>

### 5.11 (36) Query String to Object

**Q:** Convert query string to object.

```javascript
const qs = "name=user&age=25";
```

<details>
<summary><b>Answer</b></summary>

```javascript
const params = qs.split("&").reduce((acc, pair) => {
  const [key, val] = pair.split("=");
  acc[key] = val;
  return acc;
}, {});
console.log(params); // { name: "user", age: "25" }
```

</details>

### 5.12 (37) Function Pipe

**Q:** Pipe `5` through Add 1, Multiply 2, Subtract 3.

```javascript
const fns = [(x) => x + 1, (x) => x * 2, (x) => x - 3];
const start = 5;
```

<details>
<summary><b>Answer</b></summary>

```javascript
const res = fns.reduce((acc, fn) => fn(acc), start);
console.log(res); // 9
```

</details>

### 5.13 (38) Deep Flatten (Recursive)

**Q:** Flatten deeply nested array using recursion and reduce.

```javascript
const nested = [1, [2, [3, 4], 5], 6];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const flatten = (arr) =>
  arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
    [],
  );
console.log(flatten(nested));
```

</details>

### 5.14 (39) E-Commerce Pipeline

**Q:** Filter stock > 0, Add 10% tax, Format currency.

```javascript
const products = [
  { name: "Laptop", price: 1000, stock: 5 },
  { name: "Mouse", price: 20, stock: 0 },
];
// Functions: filterOutOfStock, addTax, formatCurrency
```

<details>
<summary><b>Answer</b></summary>

```javascript
const pipeline = [
  (items) => items.filter((i) => i.stock > 0),
  (items) => items.map((i) => ({ ...i, price: i.price * 1.1 })),
  (items) => items.map((i) => ({ ...i, price: `$${i.price.toFixed(2)}` })),
];
const result = pipeline.reduce((data, fn) => fn(data), products);
console.log(result);
```

</details>

### 5.15 (40) Shopping Cart Pipeline

**Q:** Calculate checkout price: Coupon (10% off), Tax (5%), Shipping (+15).

```javascript
const cartPrice = 100;
```

<details>
<summary><b>Answer</b></summary>

```javascript
const steps = [(p) => p * 0.9, (p) => p * 1.05, (p) => p + 15];
const final = steps.reduce((acc, step) => step(acc), cartPrice);
console.log(final.toFixed(2)); // 109.50
```

</details>

### 5.16 (41) Message Sanitization

**Q:** Trim, Strip HTML, Block "hack", Format string.

```javascript
const msg = "  Hello <script>hack</script>  ";
```

<details>
<summary><b>Answer</b></summary>

```javascript
const steps = [
  (s) => s.trim(),
  (s) => s.replace(/<[^>]*>/g, ""),
  (s) => s.replace(/hack/gi, "****"),
  (s) => `User says: "${s}"`,
];
console.log(steps.reduce((acc, fn) => fn(acc), msg));
```

</details>

### 5.17 (42) GPS Data Smoothing

**Q:** Validate accuracy, Round coords, Format string.

```javascript
const gps = { lat: 40.7128, lng: -74.006, accuracy: 15 };
```

<details>
<summary><b>Answer</b></summary>

```javascript
const pipeline = [
  (p) => (p.accuracy > 20 ? null : p),
  (p) =>
    p
      ? {
          ...p,
          lat: Math.round(p.lat * 100) / 100,
          lng: Math.round(p.lng * 100) / 100,
        }
      : null,
  (p) => (p ? `${p.lat}, ${p.lng}` : "Invalid"),
];
console.log(pipeline.reduce((d, fn) => fn(d), gps)); // "40.71, -74.01"
```

</details>

---

# 6. `reduceRight()` Method (3 Problems)

### 6.1 (43) Summing Numbers

**Q:** Sum `[1, 2, 3, 4]` from right to left.

```javascript
const numbers = [1, 2, 3, 4];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const sum = numbers.reduceRight((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

</details>

### 6.2 (44) Concatenating Strings

**Q:** Concatenate `["Hello", "World", "JavaScript"]` from right to left using `reduceRight`.

```javascript
const words = ["Hello", "World", "JavaScript"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const reversed = words.reduceRight((acc, word) => acc + " " + word);
console.log(reversed); // "JavaScript World Hello"
```

</details>

### 6.3 (45) Config Merge (Right Priority)

**Q:** Merge config updates where later array entries override earlier ones (Right-to-Left processing).

```javascript
const updates = [
  ["theme", "light"], // Processed last
  ["theme", "dark"], // Processed first
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const config = updates.reduceRight((acc, [key, val]) => {
  acc[key] = val;
  return acc;
}, {});
console.log(config); // { theme: "light" }
```

</details>
