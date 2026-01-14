The **`substring()`** method in JavaScript extracts characters from a string between two specified indices and returns a new string. It's useful for getting a part of a string based on its starting and ending positions.

---

## Basic Examples

### 1\. Extracting a Substring with Start and End Indices

This is the most common use case. You provide both a start and end index. The character at the start index is included, but the character at the end index is not.

```javascript
let myString = "JavaScript";
let result = myString.substring(0, 4);
// Extracts characters from index 0 up to (but not including) index 4.
console.log(result); // Output: "Java"
```

### 2\. Extracting to the End of a String

If you omit the second argument, `substring()` extracts all characters from the start index to the end of the string.

```javascript
let myString = "HelloWorld";
let result = myString.substring(5);
// Extracts characters from index 5 to the end.
console.log(result); // Output: "World"
```

### 3\. Handling Swapped Indices

`substring()` is forgiving with its arguments. If the start index is greater than the end index, it automatically swaps them.

```javascript
let myString = "developer";
let result = myString.substring(5, 2);
// The method treats this as substring(2, 5).
console.log(result); // Output: "vel"
```

### 4\. Handling Negative or Invalid Indices

Any negative or non-numeric index is treated as `0`.

```javascript
let myString = "test";
let result = myString.substring(-2, 3);
// The method treats -2 as 0.
console.log(result); // Output: "tes"
```

### 5\. Handling Indices Exceeding String Length

If an index is larger than the string's length, `substring()` treats it as the string's length.

```javascript
let myString = "abc";
let result = myString.substring(1, 100);
// The method treats 100 as the string's length (3).
console.log(result); // Output: "bc"
```

---

## When to Use `substring()` and When Not to

### Use `substring()` when:

- You need to extract a part of a string based on specific index positions and don't care if the start and end indices are in the wrong order. Its forgiving nature can prevent errors.
- The indices are known to be positive and within a reasonable range.
- You need a simple, reliable method for basic string slicing that is compatible across all modern browsers.

### Do not use `substring()` when:

- You need to extract from the end of a string using a negative index. `substring()` will treat negative indices as `0`. Use **`slice()`** instead.
- The order of the start and end indices is semantically important. For example, if you need to enforce a specific range and want an empty string if the end is before the start, `slice()` is the better choice.
- You need to extract a specific number of characters starting from a given index, rather than up to an end index. While you can calculate the end index, it's more direct to use the older `substr()` method (though `slice()` is the modern alternative for most use cases).

---

## Advanced Examples

### 1\. Extracting a Domain Name from a URL

This example uses `indexOf()` to find the start of the domain and `lastIndexOf()` to find the end.

```javascript
let url = "https://www.google.com/search";
let startIndex = url.indexOf("www.") + 4; // Find "www." and add its length to get the start of the domain.
let endIndex = url.indexOf(".com"); // Find the end of the domain.
let domain = url.substring(startIndex, endIndex);
console.log(domain); // Output: "google"
```

### 2\. Truncating a String to a Max Length

A common pattern for displaying text in a limited space.

```javascript
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

Assuming a fixed format, you can use `substring()` to extract specific parts of a date string.

```javascript
let dateString = "2024-09-04";
let year = dateString.substring(0, 4);
let month = dateString.substring(5, 7);
let day = dateString.substring(8, 10);
console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);
// Output: "Year: 2024, Month: 09, Day: 04"
```

### 4\. Reversing a String (Manual Method)

While not the most efficient way, `substring()` can be used to reverse a string character by character.

```javascript
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.substring(i, i + 1);
  }
  return reversed;
}
console.log(reverseString("hello")); // Output: "olleh"
```

✦ The reason str.length and str.length - 1 provide the same answer and don't add a space is due to how String.prototype.substring() works.

When i is str.length (e.g., 5 for "hello"), str.substring(i, i + 1) becomes str.substring(5, 6).
According to JavaScript's substring behavior, if indexStart is equal to the string's length, an empty string is returned. It does not return a space character
or cause an error.

So, for i = str.length, an empty string "" is appended to reversed, which has no effect on the final output. The actual characters "o", "l", "l", "e", "h" are
appended when i is str.length - 1 down to 0.

If you start i at str.length - 1, the first character appended is "o" (from str.substring(4, 5)), and the result is the same.

The console.log(working); line would likely cause a ReferenceError if working is not defined.

### 5\. Sanitizing Input

This example removes leading and trailing spaces from an input string, similar to the `trim()` method.

```javascript
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
console.log(manualTrim("   Hello World   ")); // Output: "Hello World"
```
