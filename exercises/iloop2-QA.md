I have reviewed your source text against the file I generated.

**I missed one advanced example** from the `toString()` section regarding "Implicit Type Coercion" with the `alert()` function, and I also missed a specific "Unit" example (for `fr-FR` meters) in the `toLocaleString()` section.

Here is the **updated, complete file** with those missing problems added (incrementing the total count to **26**).

---

**Total Number of Problems: 26**

---

# 1. `toString()` Method (12 Problems)

### 1.1 (1) Numbers to String

**Q:** Convert the number `123` and the BigInt `12345678901234567890n` to strings.

```javascript
const num = 123;
const bigInt = 12345678901234567890n;
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(num.toString()); // "123"
console.log(bigInt.toString()); // "12345678901234567890"
```

</details>

### 1.2 (2) Booleans to String

**Q:** Convert `true` and `false` to strings.

```javascript
const boolTrue = true;
const boolFalse = false;
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(boolTrue.toString()); // "true"
console.log(boolFalse.toString()); // "false"
```

</details>

### 1.3 (3) Arrays to String

**Q:** Convert an array of fruits to a string. Then convert a mixed array (including null/undefined) to a string.

```javascript
const fruits = ["apple", "banana", "cherry"];
const mixedArray = [1, "two", null, undefined, { a: 1 }];
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(fruits.toString()); // "apple,banana,cherry"
console.log(mixedArray.toString()); // "1,two,,,[object Object]"
```

</details>

### 1.4 (4) Date to String

**Q:** Convert the current date to a string.

```javascript
const now = new Date();
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(now.toString()); // e.g. "Fri Jul 26 2024 19:33:02 GMT-0400..."
```

</details>

### 1.5 (5) Functions to String

**Q:** Get the string representation (source code) of a regular function and an arrow function.

```javascript
function greet() {
  console.log("Hello!");
}
const arrowFunc = () => "Arrow!";
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(greet.toString()); // "function greet() { console.log('Hello!'); }"
console.log(arrowFunc.toString()); // "() => 'Arrow!'"
```

</details>

### 1.6 (6) Object Default Behavior

**Q:** What is the default string output for a plain object `{ name: "Alice" }`?

<details>
<summary><b>Answer</b></summary>

```javascript
const myObject = { name: "Alice" };
console.log(myObject.toString()); // "[object Object]"
```

</details>

### 1.7 (7) Implicit Coercion (Concat & Alert)

**Q:** Create a string message by combining the number `5` with text. Also, what happens when you `alert()` a date object?

```javascript
const count = 5;
const date = new Date();
```

<details>
<summary><b>Answer</b></summary>

```javascript
const message = "Count is: " + count;
console.log(message); // "Count is: 5"
// alert(date); // Implicitly converts date to string
```

</details>

### 1.8 (8) Explicit Primitive Conversion

**Q:** Explicitly convert the number `19.99` and boolean `true` to strings.

```javascript
const price = 19.99;
const isActive = true;
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(price.toString()); // "19.99"
console.log(isActive.toString()); // "true"
```

</details>

### 1.9 (9) Type Checking (Object.prototype)

**Q:** Write a function `getType(value)` that returns specific types like "Array", "Null", "Date" using `Object.prototype.toString`.

<details>
<summary><b>Answer</b></summary>

```javascript
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}
console.log(getType([])); // "Array"
console.log(getType(null)); // "Null"
```

</details>

### 1.10 (10) Custom toString()

**Q:** Create a `Book` class where `toString()` returns `Title by Author`.

```javascript
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
```

<details>
<summary><b>Answer</b></summary>

```javascript
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  toString() {
    return `${this.title} by ${this.author}`;
  }
}
const book = new Book("Gatsby", "Fitzgerald");
console.log(book.toString()); // "Gatsby by Fitzgerald"
```

</details>

### 1.11 (11) Handling Null/Undefined

**Q:** Safely convert `null` and `undefined` to strings without throwing an error.

```javascript
const val1 = null;
const val2 = undefined;
```

<details>
<summary><b>Answer</b></summary>

```javascript
// Don't use .toString() on these directly
console.log(String(val1)); // "null"
console.log(String(val2)); // "undefined"
```

</details>

### 1.12 (12) Debugging vs JSON.stringify

**Q:** Compare `toString()` output vs `JSON.stringify()` for the object `{ name: "Bob", id: 123 }`.

<details>
<summary><b>Answer</b></summary>

```javascript
const user = { name: "Bob", id: 123 };
console.log(user.toString()); // "[object Object]" (unhelpful)
console.log(JSON.stringify(user)); // '{"name":"Bob","id":123}' (useful)
```

</details>

---

# 2. `toLocaleString()` Method (14 Problems)

### 2.1 (13) Basic Number Formatting

**Q:** Format the number `7891234.56` to a string with default locale settings.

```javascript
const population = 7891234.56;
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(population.toLocaleString()); // e.g. "7,891,234.56" (en-US)
```

</details>

### 2.2 (14) Locale Specific Formatting

**Q:** Format the number `7891234.56` for German (`de-DE`) and Indian English (`en-IN`).

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(population.toLocaleString("de-DE")); // "7.891.234,56"
console.log(population.toLocaleString("en-IN")); // "78,91,234.56"
```

</details>

### 2.3 (15) Currency Formatting

**Q:** Format the number as **USD** currency and **EUR** (German locale) currency.

```javascript
const price = 7891234.56;
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(
  price.toLocaleString("en-US", { style: "currency", currency: "USD" }),
);
// "$7,891,234.56"

console.log(
  price.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// "7.891.234,56 €"
```

</details>

### 2.4 (16) Percent and Unit Formatting

**Q:** Format `0.75` as a percentage and `100` as "meters" (long format).

<details>
<summary><b>Answer</b></summary>

```javascript
console.log((0.75).toLocaleString("en-US", { style: "percent" }));
// "75%"

console.log(
  (100).toLocaleString("en-US", {
    style: "unit",
    unit: "meter",
    unitDisplay: "long",
  }),
);
// "100 meters"
```

</details>

### 2.5 (17) French Unit Formatting

**Q:** Format `100` meters in French (`fr-FR`) with `unitDisplay: "long"`.

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(
  (100).toLocaleString("fr-FR", {
    style: "unit",
    unit: "meter",
    unitDisplay: "long",
  }),
);
// "100 mètres"
```

</details>

### 2.6 (18) Basic Date Formatting

**Q:** Format the date `July 26, 2025, 7:33:57 PM` to a default string and a German string.

```javascript
const eventDate = new Date("2025-07-26T19:33:57");
```

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(eventDate.toLocaleString("en-US")); // "7/26/2025, 7:33:57 PM"
console.log(eventDate.toLocaleString("de-DE")); // "26.7.2025, 19:33:57"
```

</details>

### 2.7 (19) Date Style Options

**Q:** Format the date using `dateStyle: "full"` and `timeStyle: "long"`.

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(
  eventDate.toLocaleString("en-US", { dateStyle: "full", timeStyle: "long" }),
);
// "Friday, July 26, 2025 at 7:33:57 PM EDT"
```

</details>

### 2.8 (20) Custom Date Components

**Q:** Format the date to show only: numeric year, long month, numeric day, 2-digit hour/minute.

<details>
<summary><b>Answer</b></summary>

```javascript
console.log(
  eventDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }),
);
// "July 26, 2025, 07:33 PM"
```

</details>

### 2.9 (21) Array to Locale String

**Q:** Convert `[12345, new Date("2025-01-01")]` to a locale string.

<details>
<summary><b>Answer</b></summary>

```javascript
const data = [12345, new Date("2025-01-01")];
console.log(data.toLocaleString());
// "12,345,1/1/2025, 12:00:00 AM" (example)
```

</details>

### 2.10 (22) Formatting Array of Prices

**Q:** Format an array of numbers `[10.5, 20.99]` as USD currency collectively.

<details>
<summary><b>Answer</b></summary>

```javascript
const prices = [10.5, 20.99];
console.log(
  prices.toLocaleString("en-US", { style: "currency", currency: "USD" }),
);
// "$10.50,$20.99"
```

</details>

### 2.11 (23) User Locale (Browser)

**Q:** Create a function `formatMoney` that formats a number as USD but uses the user's browser locale (`navigator.language`).

<details>
<summary><b>Answer</b></summary>

```javascript
function formatMoney(amount) {
  return amount.toLocaleString(navigator.language, {
    style: "currency",
    currency: "USD",
  });
}
console.log(formatMoney(99.99));
// Output depends on your browser settings (e.g. "$99.99" or "99,99 $US")
```

</details>

### 2.12 (24) Formatting Calendar Events

**Q:** Map an array of Dates to strings showing only `weekday`, `month`, and `day`.

```javascript
const events = [new Date("2025-08-01"), new Date("2025-08-15")];
```

<details>
<summary><b>Answer</b></summary>

```javascript
const formatted = events.map((d) =>
  d.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }),
);
console.log(formatted.join(" | ")); // "Fri, Aug 1 | Fri, Aug 15"
```

</details>

### 2.13 (25) Conditional Formatting

**Q:** Loop through products. Format price as USD. Append "(High Value!)" if price >= 1000.

```javascript
const products = [{ price: 9.99 }, { price: 1200 }];
```

<details>
<summary><b>Answer</b></summary>

```javascript
products.forEach((p) => {
  let price = p.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  if (p.price >= 1000) price += " (High Value!)";
  console.log(price);
});
// "$9.99"
// "$1,200.00 (High Value!)"
```

</details>

### 2.14 (26) Fixed Decimal Places

**Q:** Use `toLocaleString` to force exactly 2 decimal places (minimum and maximum) for `12.3`.

<details>
<summary><b>Answer</b></summary>

```javascript
const num = 12.3;
console.log(
  num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
);
// "12.30"
```

</details>
