JavaScript is incredibly versatile, and its methods are heavily used across various data types. Here's a breakdown of some of the most commonly used methods, categorized by their respective data structures:

### Array Methods

Arrays are fundamental in JavaScript, and their methods are used for everything from iteration to manipulation.

- **`forEach()`**: Executes a provided function once for each array element. Great for side effects (e.g., logging, updating the DOM) without creating a new array.
  ```javascript
  const numbers = [1, 2, 3];
  numbers.forEach((num) => console.log(num * 2)); // Output: 2, 4, 6
  ```
- **`map()`**: Creates a _new_ array by calling a provided function on every element in the calling array. Ideal for transforming data.
  ```javascript
  const numbers = [1, 2, 3];
  const doubledNumbers = numbers.map((num) => num * 2); // doubledNumbers is [2, 4, 6]
  ```
- **`filter()`**: Creates a _new_ array with all elements that pass the test implemented by the provided function. Used for selecting subsets of data.
  ```javascript
  const ages = [12, 18, 25, 7];
  const adults = ages.filter((age) => age >= 18); // adults is [18, 25]
  ```
- **`reduce()`**: Executes a reducer function on each element of the array, resulting in a single output value. Great for summing, counting, or flattening arrays.
  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  ); // sum is 10
  ```
- **`push()`**: Adds one or more elements to the end of an array and returns the new length of the array. Modifies the original array.
  ```javascript
  const fruits = ["apple", "banana"];
  fruits.push("orange"); // fruits is ['apple', 'banana', 'orange']
  ```
- **`pop()`**: Removes the last element from an array and returns that element. Modifies the original array.
  ```javascript
  const fruits = ["apple", "banana", "orange"];
  const lastFruit = fruits.pop(); // lastFruit is 'orange', fruits is ['apple', 'banana']
  ```
- **`shift()`**: Removes the first element from an array and returns that removed element. Modifies the original array.
  ```javascript
  const fruits = ["apple", "banana", "orange"];
  const firstFruit = fruits.shift(); // firstFruit is 'apple', fruits is ['banana', 'orange']
  ```
- **`unshift()`**: Adds one or more elements to the beginning of an array and returns the new length of the array. Modifies the original array.
  ```javascript
  const fruits = ["banana", "orange"];
  fruits.unshift("apple"); // fruits is ['apple', 'banana', 'orange']
  ```
- **`indexOf()`**: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
  ```javascript
  const colors = ["red", "green", "blue"];
  const index = colors.indexOf("green"); // index is 1
  ```
- **`includes()`**: Determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.
  ```javascript
  const colors = ["red", "green", "blue"];
  const hasGreen = colors.includes("green"); // hasGreen is true
  ```
- **`join()`**: Joins all elements of an array into a string.
  ```javascript
  const words = ["hello", "world"];
  const sentence = words.join(" "); // sentence is "hello world"
  ```
- **`slice()`**: Returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included). The original array will not be modified.
  ```javascript
  const originalArray = [1, 2, 3, 4, 5];
  const newArray = originalArray.slice(1, 4); // newArray is [2, 3, 4]
  ```
- **`splice()`**: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. Modifies the original array.
  ```javascript
  const months = ["Jan", "Mar", "Apr", "May"];
  months.splice(1, 0, "Feb"); // months is ['Jan', 'Feb', 'Mar', 'Apr', 'May'] (adds 'Feb' at index 1)
  ```

### String Methods

Strings are sequences of characters, and JavaScript provides many methods for manipulating them.

- **`length`**: (Property, not a method, but crucial) Returns the length of a string.
  ```javascript
  const text = "Hello";
  console.log(text.length); // Output: 5
  ```
- **`toUpperCase()`**: Converts a string to uppercase letters.
  ```javascript
  const name = "Alice";
  const upperName = name.toUpperCase(); // upperName is "ALICE"
  ```
- **`toLowerCase()`**: Converts a string to lowercase letters.
  ```javascript
  const name = "BOB";
  const lowerName = name.toLowerCase(); // lowerName is "bob"
  ```
- **`indexOf()`**: Returns the index within the calling `String` object of the first occurrence of the specified value, starting the search at `fromIndex`. Returns -1 if the value is not found.
  ```javascript
  const sentence = "Hello world";
  const index = sentence.indexOf("world"); // index is 6
  ```
- **`includes()`**: Determines whether one string may be found within another string, returning `true` or `false` as appropriate.
  ```javascript
  const sentence = "The quick brown fox";
  const hasFox = sentence.includes("fox"); // hasFox is true
  ```
- **`substring()`**: Returns a new string containing the extracted part of the string. Similar to `slice()`, but handles negative arguments differently.
  ```javascript
  const str = "JavaScript";
  const sub = str.substring(0, 4); // sub is "Java"
  ```
- **`slice()`**: Extracts a section of a string and returns it as a new string, without modifying the original string.
  ```javascript
  const str = "JavaScript";
  const sliced = str.slice(4, 10); // sliced is "Script"
  ```
- **`trim()`**: Removes whitespace from both ends of a string.
  ```javascript
  const greeting = "  Hello!  ";
  const trimmed = greeting.trim(); // trimmed is "Hello!"
  ```
- **`split()`**: Divides a `String` into an ordered list of substrings by searching for a pattern; puts these substrings into an array, and returns the array.
  ```javascript
  const csv = "apple,banana,orange";
  const fruitsArray = csv.split(","); // fruitsArray is ["apple", "banana", "orange"]
  ```
- **`replace()`**: Returns a new string with some or all matches of a `pattern` replaced by a `replacement`. The pattern can be a string or a `RegExp`.
  ```javascript
  const text = "I like cats. Cats are cute.";
  const newText = text.replace("Cats", "Dogs"); // newText is "I like cats. Dogs are cute." (only replaces first match)
  const allNewText = text.replace(/Cats/g, "Dogs"); // allNewText is "I like dogs. Dogs are cute." (replaces all matches using regex)
  ```
- **`startsWith()`**: Determines whether a string begins with the characters of a specified string, returning `true` or `false` as appropriate.
  ```javascript
  const url = "https://example.com";
  const startsWithHttp = url.startsWith("http"); // startsWithHttp is true
  ```
- **`endsWith()`**: Determines whether a string ends with the characters of a specified string, returning `true` or `false` as appropriate.
  ```javascript
  const filename = "document.pdf";
  const isPdf = filename.endsWith(".pdf"); // isPdf is true
  ```

### Object Methods

While objects are primarily accessed via properties, there are several useful static methods on the `Object` constructor itself.

- **`Object.keys()`**: Returns an array of a given object's own enumerable property names, iterated in the same order that a `for...in` loop would give them.
  ```javascript
  const person = { name: "Alice", age: 30 };
  const keys = Object.keys(person); // keys is ["name", "age"]
  ```
- **`Object.values()`**: Returns an array of a given object's own enumerable property values.
  ```javascript
  const person = { name: "Alice", age: 30 };
  const values = Object.values(person); // values is ["Alice", 30]
  ```
- **`Object.entries()`**: Returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.
  ```javascript
  const person = { name: "Alice", age: 30 };
  const entries = Object.entries(person); // entries is [["name", "Alice"], ["age", 30]]
  ```
- **`Object.assign()`**: Copies all enumerable own properties from one or more source objects to a target object. It returns the target object. Useful for shallow merging or cloning objects.
  ```javascript
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  const merged = Object.assign({}, obj1, obj2); // merged is { a: 1, b: 3, c: 4 }
  ```
- **`Object.freeze()`**: Freezes an object. A frozen object can no longer be changed; new properties cannot be added, existing properties cannot be removed, their enumerable, configurable, and writable attributes cannot be changed, and the values of existing properties cannot be changed.
  ```javascript
  const user = { name: "Bob" };
  Object.freeze(user);
  user.name = "John"; // This will not change user.name
  ```

### Number Methods

While numbers are primitive, there are static methods on the `Number` object and prototype methods for number instances.

- **`parseInt()`**: Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
  ```javascript
  const strNum = "123";
  const num = parseInt(strNum); // num is 123
  const floatStr = "12.5";
  const int = parseInt(floatStr); // int is 12
  ```
- **`parseFloat()`**: Parses a string argument and returns a floating-point number.
  ```javascript
  const floatStr = "12.5";
  const float = parseFloat(floatStr); // float is 12.5
  ```
- **`isNaN()`**: Determines whether a value is `NaN` (Not-a-Number).
  ```javascript
  isNaN(123); // false
  isNaN("hello"); // true
  ```
- **`toFixed()`**: Formats a number using fixed-point notation.
  ```javascript
  const price = 12.3456;
  const fixedPrice = price.toFixed(2); // fixedPrice is "12.35" (returns a string)
  ```
- **`toString()`**: Returns a string representing the specified `Number` object.
  ```javascript
  const num = 42;
  const str = num.toString(); // str is "42"
  ```

### Date Methods

JavaScript's `Date` object provides methods for working with dates and times.

- **`new Date()`**: Creates a new `Date` object. Can be called with arguments to specify a date or time.
  ```javascript
  const now = new Date(); // Current date and time
  const specificDate = new Date("2025-07-26T10:00:00Z"); // A specific date and time
  ```
- **`getFullYear()`**: Returns the year (4 digits) of the specified date according to local time.
  ```javascript
  const today = new Date();
  const year = today.getFullYear(); // e.g., 2025
  ```
- **`getMonth()`**: Returns the month (0-11) of the specified date according to local time. (January is 0).
  ```javascript
  const today = new Date();
  const month = today.getMonth(); // e.g., 6 for July
  ```
- **`getDate()`**: Returns the day of the month (1-31) for the specified date according to local time.
  ```javascript
  const today = new Date();
  const day = today.getDate(); // e.g., 26
  ```
- **`getHours()`**: Returns the hour (0-23) of the specified date according to local time.
  ```javascript
  const now = new Date();
  const hours = now.getHours(); // e.g., 22 for 10 PM
  ```
- **`getTime()`**: Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (Unix epoch).
  ```javascript
  const now = new Date();
  const timestamp = now.getTime(); // e.g., 1753594150000
  ```
- **`toISOString()`**: Returns a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ).
  ```javascript
  const now = new Date();
  const isoString = now.toISOString(); // e.g., "2025-07-27T02:49:10.000Z" (UTC time)
  ```
- **`toLocaleDateString()`**: Returns the date portion of a `Date` object as a string, using locale conventions.
  ```javascript
  const now = new Date();
  const dateString = now.toLocaleDateString("en-US"); // e.g., "7/26/2025"
  ```
- **`toLocaleTimeString()`**: Returns the time portion of a `Date` object as a string, using locale conventions.
  ```javascript
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US"); // e.g., "10:49:10 PM"
  ```

This list covers the most frequently encountered and essential JavaScript methods across these core data types. Mastering these will give you a strong foundation for nearly any JavaScript development task.
