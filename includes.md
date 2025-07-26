The JavaScript `includes()` method is a simple and intuitive way to check if an array or a string contains a particular element or substring, respectively. It returns a boolean value (`true` or `false`).

---

### The `includes()` Method in JavaScript

#### It is a Accessor Methods (Do Not Modify the Original Array)

The `includes()` method determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate. For strings, it checks if a string contains another string (a substring).

#### Syntax:

**For Arrays:**

```javascript
arr.includes(searchElement, fromIndex);
```

**For Strings:**

```javascript
str.includes(searchString, position);
```

#### Parameters:

- **For Arrays:**

  - `searchElement` (Required): The value to search for.
  - `fromIndex` (Optional): The position in this array at which to begin searching for `searchElement`.
    - Defaults to `0`.
    - If negative, it's treated as `array.length + fromIndex`. If the calculated index is less than 0, the entire array will be searched.

- **For Strings:**

  - `searchString` (Required): The string to search for.
  - `position` (Optional): The position within the string at which to begin searching for `searchString`.
    - Defaults to `0`.

#### Return Value:

- `true` if the `searchElement` (or `searchString`) is found within the array (or string).
- `false` otherwise.

#### Key Features:

- **Case-sensitive for strings:** `"Hello".includes("hello")` is `false`.
- **Handles `NaN` for arrays:** Unlike `indexOf()`, which struggles with `NaN`, `includes()` correctly identifies `NaN`.
  - `[NaN].includes(NaN)` is `true`.
  - `[NaN].indexOf(NaN)` is `-1`.
- **Exact match for array elements:** Uses SameValueZero comparison, which means it treats `NaN` as equal to `NaN`, and `-0` as equal to `0`.

#### Basic Examples:

**1. Checking if an Array Contains a Value:**

```javascript
const fruits = ["apple", "banana", "cherry"];

console.log(fruits.includes("banana")); // Output: true
console.log(fruits.includes("grape")); // Output: false
```

**2. Checking an Array from a Specific Index:**

```javascript
const numbers = [10, 20, 30, 40, 50];

console.log(numbers.includes(30, 2)); // Output: true (search starts at index 2, finds 30)
console.log(numbers.includes(30, 3)); // Output: false (search starts at index 3, 30 is at index 2)
console.log(numbers.includes(50, -2)); // Output: true (search starts at index 5-2=3, finds 50)
console.log(numbers.includes(10, -3)); // Output: false (search starts at index 5-3=2, 10 is at index 0)
```

**3. Checking for `NaN` in an Array:**

```javascript
const mixedArray = [1, "hello", NaN, undefined];

console.log(mixedArray.includes(NaN)); // Output: true
console.log(mixedArray.includes(undefined)); // Output: true
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
    const permissions = ["read", "write", "delete"];
    if (permissions.includes("write")) {
      console.log("User has write access.");
    }
    ```

2.  **Validating Input Against a List of Allowed Values:**
    Ideal for checking if user input matches one of several acceptable options.

    ```javascript
    const allowedColors = ["red", "green", "blue"];
    const userPreference = "blue";

    if (allowedColors.includes(userPreference)) {
      console.log("Valid color chosen.");
    } else {
      console.log("Invalid color.");
    }
    ```

3.  **Handling `NaN` in Array Searches:**
    When you specifically need to find `NaN` values within an array, `includes()` is the correct method.

    ```javascript
    const readings = [10, 20, NaN, 30];
    if (readings.includes(NaN)) {
      console.log("Data contains invalid numerical readings.");
    }
    ```

4.  **Checking for Substring Presence in User-Generated Content:**
    For quick checks on text, like if a comment contains a specific keyword.

    ```javascript
    const comment = "This product is amazing!";
    if (comment.includes("amazing")) {
      console.log("Positive feedback detected.");
    }
    ```

---

### When NOT to Use `includes()`:

1.  **When You Need the Index of the Element:**
    If you require the position of the found element (e.g., to then modify or remove it), `indexOf()` (or `findIndex()` for objects) is the appropriate method.

    - **Use `indexOf()` instead:**
      ```javascript
      const fruits = ["apple", "banana", "cherry"];
      const index = fruits.indexOf("banana");
      if (index !== -1) {
        console.log(`Banana is at index: ${index}`); // Output: 1
      }
      ```

2.  **When Searching for Objects within an Array:**
    `includes()` uses strict equality (SameValueZero) for objects, meaning it will only return `true` if it finds the _exact same object instance_ in the array, not an object with identical properties.

    - **Use `some()` or `find()` with a callback for object property matching:**

      ```javascript
      const users = [{ id: 1 }, { id: 2 }];
      const newUser = { id: 1 };

      console.log(users.includes(newUser)); // Output: false (different object instance)

      // Use .some() to check if any user has id: 1
      console.log(users.some((user) => user.id === 1)); // Output: true

      // Use .find() to get the actual matching object
      const foundUser = users.find((user) => user.id === 1);
      console.log(foundUser); // Output: { id: 1 }
      ```

3.  **When You Need to Search Using a Regular Expression:**
    `includes()` only supports string literals for string searching. For pattern matching using regular expressions, use `String.prototype.match()` or `String.prototype.search()`.

    - **Use `match()` or `search()` for regex:**

      ```javascript
      const text = "My email is test@example.com";
      const emailRegex = /\S+@\S+\.\S+/;

      // console.log(text.includes(emailRegex)); // Throws TypeError if used this way

      console.log(text.match(emailRegex) !== null); // Output: true (returns match array or null)
      console.log(text.search(emailRegex) !== -1); // Output: true (returns index or -1)
      ```

---

### Advanced Uses with Examples:

**1. Implementing Simple Dynamic Access Control:**

You can combine `includes()` with other logic to create basic authorization checks.

```javascript
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
function includesCaseInsensitive(mainString, searchSubString) {
  return mainString.toLowerCase().includes(searchSubString.toLowerCase());
}

const articleText = "JavaScript is a versatile language.";
console.log(includesCaseInsensitive(articleText, "javascript")); // Output: true
console.log(includesCaseInsensitive(articleText, "VERSATILE")); // Output: true
console.log(includesCaseInsensitive(articleText, "python")); // Output: false
```

**3. Checking for Intersection of Two Arrays (Simplified):**

To see if two arrays share _any_ common elements.

```javascript
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

`includes()` is a straightforward and highly readable method for checking existence, making your code cleaner than using `indexOf() !== -1` for mere presence checks, especially when dealing with `NaN`.
