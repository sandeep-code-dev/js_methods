There isn't a single, definitive number for how many string methods there are in JavaScript because new methods are occasionally added with new versions of the language. However, there are over **20** built-in string methods in the `String` object, with several more added in recent ECMAScript versions.

You can categorize these methods based on their function:

---

## ✂️ Extraction and Slicing

These methods are used to extract parts of a string.

- **🔁 `slice(start, end)`**: Extracts a portion of a string and returns a new one. It handles negative indices, counting from the end of the string.
- **✅ `substring(start, end)`**: Extracts a substring, but treats negative indices as `0` and swaps start and end if the start is greater.
- **🔁 `at(index)`**: A newer method that returns the character at a specified index. Unlike bracket notation (`str[0]`), it can handle negative indices to count from the end.
- **✅ `charAt(index)`**: Returns the character at a specific index.
- **`charCodeAt(index)`**: Returns the Unicode value of the character at a given index.

---

## 🔍 Searching and Matching

These methods help you find substrings or patterns within a string.

- **🔁 `indexOf(searchString)`**: Returns the index of the first occurrence of a specified value. Returns `-1` if not found.
- **🔁 `lastIndexOf(searchString)`**: Returns the index of the last occurrence of a specified value.
- **🔁 `includes(searchString)`**: Checks if a string contains another string and returns `true` or `false`.
- **`startsWith(searchString)`**: Checks if a string begins with a specified value.
- **`endsWith(searchString)`**: Checks if a string ends with a specified value.
- **`search(regex)`**: Searches a string for a match against a regular expression and returns the index of the first match.
- **`match(regex)`**: Retrieves the results of matching a string against a regular expression.
- **`matchAll(regex)`**: Returns an iterator of all results matching a regular expression.

---

## 🔄 Manipulation and Transformation

These methods change a string's appearance or structure.

- **`replace(pattern, replacement)`**: Replaces the **first** match of a pattern.
- **`replaceAll(pattern, replacement)`**: Replaces **all** matches of a pattern.
- **`toUpperCase()`**: Converts the string to uppercase.
- **`toLowerCase()`**: Converts the string to lowercase.
- **`trim()`**: Removes whitespace from both ends of a string.
- **`trimStart()` / `trimEnd()`**: Removes whitespace from the beginning or end, respectively.
- **🔁 `concat(str1, str2, ...)`**: Joins two or more strings.
- **`split(separator)`**: Divides a string into an array of substrings based on a separator.
- **`repeat(count)`**: Returns a new string with a specified number of copies.
- **`padStart(targetLength, padString)`**: Pads a string at the start to a specified length.
- **`padEnd(targetLength, padString)`**: Pads a string at the end to a specified length.

---

Keep in mind that some older methods, like `substr()`, are considered legacy and should be avoided in new code. The modern alternatives like `slice()` are preferred.

[Most Important String Methods In JavaScript](https://www.youtube.com/watch?v=4RHPbSpEpbw)
This video is relevant because it discusses some of the most important and commonly used string methods in JavaScript.
http://googleusercontent.com/youtube_content/0
