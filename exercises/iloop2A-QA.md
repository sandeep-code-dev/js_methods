I apologize for altering the code in the previous version. I have now reverted to using the **exact code** from your source text, preserving your variable names, values, and comments exactly as they appeared.

**Total Number of Problems: 28**

---

# 1. `toString()` Method (18 Problems)

### 1.1 (1) Numbers

**Q:** Convert the number and BigInt to strings.

```javascript
const num = 123;
const bigInt = 12345678901234567890n; // BigInt
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(num.toString()); // Output: "123"
console.log(typeof num.toString()); // Output: "string"

console.log(bigInt.toString()); // Output: "12345678901234567890"
```

</details>

### 1.2 (2) Booleans

**Q:** Convert booleans to strings.

```javascript
const boolTrue = true;
const boolFalse = false;
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(boolTrue.toString()); // Output: "true"
console.log(boolFalse.toString()); // Output: "false"
```

</details>

### 1.3 (3) Arrays

**Q:** Convert the following arrays to strings.

```javascript
const fruits = ["apple", "banana", "cherry"];
const mixedArray = [1, "two", null, undefined, { a: 1 }];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(fruits.toString()); // Output: "apple,banana,cherry"

console.log(mixedArray.toString()); // Output: "1,two,,,[object Object]"
// Note: null and undefined become empty strings, objects become '[object Object]'
```

</details>

### 1.4 (4) Dates

**Q:** Convert the Date object to a string.

```javascript
const now = new Date();
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(now.toString()); // Output (example): "Fri Jul 26 2024 19:33:02 GMT-0400 (Eastern Daylight Time)"
```

</details>

### 1.5 (5) Functions

**Q:** Get the string representation of the functions.

```javascript
function greet() {
  console.log("Hello!");
}
const arrowFunc = () => "Arrow!";
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(greet.toString()); // Output: "function greet() { console.log('Hello!'); }"

console.log(arrowFunc.toString()); // Output: "() => 'Arrow!'"
```

</details>

### 1.6 (6) Plain Objects (Default Behavior)

**Q:** Observe the default `toString()` output for objects vs arrays.

```javascript
const myObject = { name: "Alice", age: 30 };
const myArray = [1, 2];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(myObject.toString()); // Output: "[object Object]"
console.log(myArray.toString()); // Output: "1,2" (Array overrides toString())

// How Array's toString() is built on Object's toString():
console.log(Object.prototype.toString.call(myArray)); // Output: "[object Array]"
console.log(Object.prototype.toString.call(myObject)); // Output: "[object Object]"
console.log(Object.prototype.toString.call(new Date())); // Output: "[object Date]"
```

</details>

### 1.7 (7) Implicit Type Coercion

**Q:** Create a message string using implicit coercion.

```javascript
const count = 5;
const date = new Date();
```

<details>
<summary><b>Answer</b></summary>

```javascript
const message = "Count is: " + count; // `count` is implicitly converted to string
console.log(message); // Output: "Count is: 5"

alert(date); // `date` object is implicitly converted to string for the alert box
```

</details>

### 1.8 (8) Converting Primitives to Strings (Explicitly)

**Q:** Explicitly convert primitives to strings.

```javascript
const price = 19.99;
const isActive = true;
```

<details>
<summary><b>Answer</b></summary>

```javascript
const priceString = price.toString(); // "19.99"
const statusString = isActive.toString(); // "true"
```

</details>

### 1.9 (9) For Arrays (as a quick `join(',')`)

**Q:** Use `toString()` as a quick join.

```javascript
const items = ["pen", "book", "paper"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const listString = items.toString(); // "pen,book,paper"
```

</details>

### 1.10 (10) For `Date` Objects (Standard String Representation)

**Q:** Get the standard string for a specific date.

```javascript
const eventTime = new Date("2025-07-26T14:30:00");
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(eventTime.toString()); // E.g., "Fri Jul 26 2024 14:30:00 GMT-0400 (Eastern Daylight Time)"
```

</details>

### 1.11 (11) Type Checking (Advanced)

**Q:** Use `Object.prototype.toString.call()` to check types.

```javascript
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(getType([])); // Output: "Array"
console.log(getType({})); // Output: "Object"
console.log(getType(new Date())); // Output: "Date"
console.log(getType(null)); // Output: "Null"
console.log(getType(undefined)); // Output: "Undefined"
console.log(getType(123)); // Output: "Number"
console.log(getType("hello")); // Output: "String"
console.log(getType(true)); // Output: "Boolean"
```

</details>

### 1.12 (12) When NOT to Use: Specific Formatting

**Q:** Compare `toString()` vs formatting methods for numbers and dates.

```javascript
const amount = 12345.678;
const today = new Date();
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(amount.toString()); // "12345.678"
console.log(amount.toFixed(2)); // "12345.68" (fixed decimal places)
console.log(
  amount.toLocaleString("en-US", { style: "currency", currency: "USD" }),
); // "$12,345.68"

console.log(today.toString()); // "Fri Jul 26 2024..."
console.log(today.toLocaleDateString("en-US")); // "7/26/2024"
```

</details>

### 1.13 (13) When NOT to Use: Custom Delimiter for Arrays

**Q:** Compare `toString()` vs `join()`.

```javascript
const words = ["one", "two", "three"];
```

<details>
<summary><b>Answer</b></summary>

```javascript
// DON'T: words.toString(); // "one,two,three"
// DO:
console.log(words.join(" ")); // "one two three"
console.log(words.join(" - ")); // "one - two - three"
```

</details>

### 1.14 (14) When NOT to Use: Debugging Plain Objects

**Q:** Compare `toString()` vs `JSON.stringify()` for objects.

```javascript
const user = { name: "Bob", id: 123 };
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(user.toString()); // "[object Object]" (unhelpful)

console.log(JSON.stringify(user)); // '{"name":"Bob","id":123}' (useful JSON string)
console.log(user); // Displays object content in console (most useful)
```

</details>

### 1.15 (15) When NOT to Use: Converting `null` or `undefined`

**Q:** Handle `null` and `undefined` string conversion safely.

```javascript
const val1 = null;
const val2 = undefined;
```

<details>
<summary><b>Answer</b></summary>

```javascript
// console.log(val1.toString()); // Throws TypeError

// DO: Use String() constructor for explicit conversion that handles null/undefined safely
console.log(String(val1)); // "null"
console.log(String(val2)); // "undefined"

// Or: Conditional checks
const displayVal =
  val1 === null || val1 === undefined ? "N/A" : val1.toString();
console.log(displayVal); // "N/A"
```

</details>

### 1.16 (16) Advanced: Customizing String Representation

**Q:** Override the `toString()` method in a class.

```javascript
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Override toString()
  toString() {
    return `"${this.title}" by ${this.author} (${this.year})`;
  }
}
const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
class SimpleBook {
  constructor(title) {
    this.title = title;
  }
}
const simpleBook = new SimpleBook("Default Title");
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(myBook.toString()); // Output: "The Great Gatsby" by F. Scott Fitzgerald (1925)
console.log(`My favorite book is: ${myBook}`); // Implicitly calls toString()
// Output: My favorite book is: "The Great Gatsby" by F. Scott Fitzgerald (1925)

// For comparison, without custom toString():
console.log(simpleBook.toString()); // Output: "[object Object]" (less useful)
```

</details>

### 1.17 (17) Advanced: Implementing a Simple Polyfill

**Q:** Implement a robust type checker using `Object.prototype.toString.call`.

```javascript
function getPreciseType(value) {
  if (value === null) {
    return "Null";
  }
  if (typeof value === "undefined") {
    return "Undefined";
  }
  // Using Object.prototype.toString.call to get the internal [[Class]]
  return Object.prototype.toString.call(value).slice(8, -1);
}
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(getPreciseType([])); // Array
console.log(getPreciseType({})); // Object
console.log(getPreciseType(new Date())); // Date
console.log(getPreciseType(null)); // Null
console.log(getPreciseType(undefined)); // Undefined
console.log(getPreciseType(/abc/)); // RegExp
console.log(getPreciseType(new Map())); // Map
```

</details>

### 1.18 (18) Advanced: Debugging and Logging

**Q:** Use `toString()` within a custom Error class.

```javascript
class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "CustomError";
    this.code = code;
  }
  toString() {
    return `${this.name} [Code: ${this.code}]: ${this.message}`;
  }
}
const error = new CustomError("Failed to connect to DB", 500);
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.error(error); // In some environments, this might use toString()
console.log(`An error occurred: ${error}`);
// Output: An error occurred: CustomError [Code: 500]: Failed to connect to DB
```

</details>

---

# 2. `toLocaleString()` Method (10 Problems)

### 2.1 (19) Number Examples

**Q:** Format numbers using various locales, currencies, percentages, and units.

```javascript
const population = 7891234.56;
const percentage = 0.75;
const length = 100;
```

<details>
<summary><b>Answer</b></summary>

```javascript
// Default locale (e.g., en-US)
console.log(population.toLocaleString()); // Output: 7,891,234.56

// German locale (comma as decimal, period as thousands separator)
console.log(population.toLocaleString("de-DE")); // Output: 7.891.234,56

// Indian English (lakhs/crores grouping)
console.log(population.toLocaleString("en-IN")); // Output: 78,91,234.56

// Currency formatting (US Dollar)
console.log(
  population.toLocaleString("en-US", { style: "currency", currency: "USD" }),
); // Output: $7,891,234.56

// Currency formatting (Euro, German locale)
console.log(
  population.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
); // Output: 7.891.234,56 €

// Percentage
console.log(percentage.toLocaleString("en-US", { style: "percent" })); // Output: 75%

// Unit
console.log(length.toLocaleString("en-US", { style: "unit", unit: "meter" })); // Output: 100 m
console.log(length.toLocaleString("fr-FR", { style: "unit", unit: "meter" })); // Output: 100 m

console.log(
  length.toLocaleString("en-US", {
    style: "unit",
    unit: "meter",
    unitDisplay: "long", // This forces the full word
  }),
);
// Output: 100 meters

console.log(
  length.toLocaleString("fr-FR", {
    style: "unit",
    unit: "meter",
    unitDisplay: "long",
  }),
);
// Output: 100 mètres
```

</details>

### 2.2 (20) Date Examples

**Q:** Format a date using different locales and options.

```javascript
const eventDate = new Date("2025-07-26T19:33:57"); // July 26, 2025, 7:33:57 PM
```

<details>
<summary><b>Answer</b></summary>

```javascript
// Default locale (e.g., en-US)
console.log(eventDate.toLocaleString()); // Output: 7/26/2025, 7:33:57 PM

// German locale (date first, 24-hour time)
console.log(eventDate.toLocaleString("de-DE")); // Output: 26.7.2025, 19:33:57

// Full date and time style
console.log(
  eventDate.toLocaleString("en-US", { dateStyle: "full", timeStyle: "long" }),
);
// Output: Friday, July 26, 2025 at 7:33:57 PM EDT

// Custom components
console.log(
  eventDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }),
); // Output: July 26, 2025, 07:33 PM

// Date-only
console.log(
  eventDate.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }),
); // Output: 07/26/2025
```

</details>

### 2.3 (21) Array Examples

**Q:** Format mixed arrays and arrays of numbers/dates collectively.

```javascript
const mixedData = [12345, new Date("2025-01-01"), "hello", 0.5];
const prices = [10.5, 20.99, 5.0];
const dates = [new Date("2025-07-26"), new Date("2025-08-15")];
```

<details>
<summary><b>Answer</b></summary>

```javascript
// Default array toLocaleString
console.log(mixedData.toLocaleString());
// Output (example): "12,345,1/1/2025, 12:00:00 AM,hello,50%" (if 0.5 defaults to percent in locale)
// More reliably: "12,345,1/1/2025, 12:00:00 AM,hello,0.5"

// With German locale
console.log(mixedData.toLocaleString("de-DE"));
// Output (example): "12.345,01.01.2025, 00:00:00,hello,0,5" (Note number and date differences)

// When options are used with Array.prototype.toLocaleString,
// they are typically passed down to the toLocaleString calls of the elements.
console.log(
  prices.toLocaleString("en-US", { style: "currency", currency: "USD" }),
);
// Output: "$10.50,$20.99,$5.00" (each number is formatted)

console.log(dates.toLocaleString("en-GB", { day: "2-digit", month: "short" }));
// Output: "26 Jul,15 Aug"
```

</details>

### 2.4 (22) When to Use: Displaying User-Facing Numbers

**Q:** Format sales figures and timestamps for the user interface.

```javascript
const salesFigure = 1234567.89;
const timestamp = new Date();
```

<details>
<summary><b>Answer</b></summary>

```javascript
document.getElementById("sales").textContent = salesFigure.toLocaleString(
  "en-CA",
  { style: "currency", currency: "CAD" },
);
// Output for user in Canada: "$1,234,567.89"
document.getElementById("sales").textContent = salesFigure.toLocaleString(
  "fr-CA",
  { style: "currency", currency: "CAD" },
);
// Output for user in French Canada: "1 234 567,89 $CA"

document.getElementById("lastLogin").textContent = timestamp.toLocaleString(
  navigator.language,
  {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  },
);
// This will automatically adapt based on the user's browser language.
```

</details>

### 2.5 (23) When NOT to Use: Machine-Readable Data

**Q:** Understand why `toLocaleString` shouldn't be used for machine data.

```javascript
const transactionValue = 1000000;
```

<details>
<summary><b>Answer</b></summary>

```javascript
// DON'T: save transactionValue.toLocaleString() to DB or send to API
// DO:
const transactionToSend = transactionValue; // Use the raw number
const dateToSend = new Date().toISOString(); // "2025-07-26T23:33:57.000Z"
```

</details>

### 2.6 (24) When NOT to Use: Specific, Non-Locale-Sensitive Format

**Q:** Compare `toLocaleString` vs `toFixed` vs string manipulation.

```javascript
const fixedPrice = 12.3;
const today = new Date();
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(
  fixedPrice.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
); // "$12.30"
// This is fine, but if you strictly always want "12.30" without locale rules:
console.log(fixedPrice.toFixed(2)); // "12.30"

const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Add leading zero
const day = today.getDate().toString().padStart(2, "0");
console.log(`${year}-${month}-${day}`); // "2025-07-26"
```

</details>

### 2.7 (25) When NOT to Use: Simple Debugging

**Q:** Compare `toLocaleString` vs `JSON.stringify` for objects.

```javascript
const myObj = { a: 1 };
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(myObj.toLocaleString()); // "[object Object]"
console.log(JSON.stringify(myObj)); // '{"a":1}'
```

</details>

### 2.8 (26) Advanced: Dynamic Formatting

**Q:** Create a function to format data based on user locale.

```javascript
function formatForUser(value, type, options = {}) {
  const userLocale = navigator.language; // E.g., 'en-CA', 'fr-CA'

  if (type === "number") {
    return value.toLocaleString(userLocale, options);
  } else if (type === "date") {
    return value.toLocaleString(userLocale, options);
  } else if (type === "currency") {
    return value.toLocaleString(userLocale, { style: "currency", ...options });
  }
  // Fallback or error
  return String(value);
}
const largeNumber = 1234567.89;
const specificDate = new Date("2025-01-20T10:00:00Z"); // UTC date
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log("Number:", formatForUser(largeNumber, "number"));
console.log(
  "Date:",
  formatForUser(specificDate, "date", {
    dateStyle: "long",
    timeStyle: "short",
  }),
);
console.log(
  "Currency (USD):",
  formatForUser(99.99, "currency", { currency: "USD" }),
);
// Output will vary based on your browser's locale.
```

</details>

### 2.9 (27) Advanced: Formatting an Array of Dates

**Q:** Transform an array of dates into a calendar-friendly format.

```javascript
const upcomingEvents = [
  new Date("2025-08-01T10:00:00"),
  new Date("2025-08-15T14:30:00"),
  new Date("2025-09-05T09:00:00"),
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const formattedEvents = upcomingEvents.map((eventDate) => {
  return eventDate.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
});

console.log("Upcoming events:", formattedEvents.join(" | "));
// Output: "Fri, Aug 1, 10:00 AM | Fri, Aug 15, 02:30 PM | Fri, Sep 5, 09:00 AM"
```

</details>

### 2.10 (28) Advanced: Conditional Formatting

**Q:** Apply different formatting based on value within a loop.

```javascript
const productPrices = [
  { name: "Basic Widget", price: 9.99 },
  { name: "Premium Widget", price: 199.99 },
  { name: "Deluxe Widget", price: 1234.5 },
];
```

<details>
<summary><b>Answer</b></summary>

```javascript
productPrices.forEach((product) => {
  const priceString = product.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  let displayPrice = priceString;

  if (product.price >= 1000) {
    displayPrice += " (High Value!)";
  }

  console.log(`${product.name}: ${displayPrice}`);
});
/* Output:
Basic Widget: $9.99
Premium Widget: $199.99
Deluxe Widget: $1,234.50 (High Value!)
*/
```

</details>
