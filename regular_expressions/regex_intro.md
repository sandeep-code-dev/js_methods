A regular expression, often shortened to regex or regexp, is a sequence of characters that forms a search pattern.

Licensed by Google

It's a powerful tool used in programming and text editors to find, match, and manipulate strings of text. You can think of it as a highly advanced version of the "find and replace" feature in a word processor.

How It Works
A regular expression is essentially a mini-language for describing patterns. This pattern is then interpreted by a regex engine, which checks for matches in a given text. Instead of searching for a literal, exact string like "cat", a regex can describe a more general pattern, such as "a three-letter word that starts with 'c' and ends with 't'".

Regex patterns are built using a combination of literal characters and metacharacters, which are special characters with a unique meaning.

Common Metacharacters
Here are a few common metacharacters and their functions:

[] (Character Set): Matches any single character within the brackets. For example, [aeiou] will match any vowel.

. (Dot): Matches any single character (except for a newline).

- (Asterisk): Matches the preceding character zero or more times. go\*gle will match "ggle", "gogle", "google", etc.

* (Plus): Matches the preceding character one or more times. go+gle will match "gogle", "google", but not "ggle".

? (Question Mark): Makes the preceding character optional, matching it zero or one time. colou?r will match both "color" and "colour".

^ (Caret): Matches the beginning of a string.

$ (Dollar Sign): Matches the end of a string.

\ (Backslash): Used as an escape character to give special characters their literal meaning. For example, \. will match a literal period, not any character.

By combining these characters, you can create complex patterns to perform tasks like:

Validation: Checking if a string is a valid email address or phone number.

Searching: Finding all occurrences of a specific pattern in a large text file.

Data Extraction: Pulling out all the dates or URLs from a block of text.

Replacing: Finding a pattern and replacing it with a new string, like correcting all instances of "teh" to "the".

A regular expression, or **regex**, in JavaScript is a powerful way to define a search pattern for finding and manipulating text within strings. They are their own type of object, providing a compact syntax for complex string operations.

---

## Creating a Regular Expression

There are two primary ways to create a regex in JavaScript:

- **Literal Notation:** This is the most common and simple way. You enclose the pattern in forward slashes (`/`). This is best when the pattern is static and known before the script runs.
  ```javascript
  const pattern = /hello/;
  ```
- **`RegExp` Constructor:** You use this when the pattern is dynamic, like when it comes from user input or a variable. You pass the pattern as a string to the `RegExp` constructor.
  ```javascript
  const userSearch = "hello";
  const pattern = new RegExp(userSearch, "i"); // The "i" is a flag
  ```
  Notice that in the constructor, you don't use slashes. The pattern is a regular string.

---

## Key Components of a Regex Pattern

A regex pattern is built from a combination of special characters and literal characters.

### 1\. Literal Characters

These are characters that match themselves exactly. For example, the pattern `/abc/` will only match the literal string "abc".

### 2\. Metacharacters (Special Characters)

These are characters with special meaning that define the pattern's behavior.

- **`.` (Dot):** Matches any single character except for a newline.
- **`[]` (Character Set):** Matches any single character within the brackets.
  - `/[aeiou]/` matches any single vowel.
  - `/[0-9]/` matches any digit.
  - `/[a-z]/` matches any lowercase letter.
- **`[^...]` (Negated Character Set):** Matches any character **not** in the set.
  - `/[^0-9]/` matches any character that is not a digit.
- **`|` (Alternation):** Acts as an "OR" operator. `/cat|dog/` will match either "cat" or "dog".
- **`\` (Escape Character):** Used to escape a metacharacter to treat it as a literal character. `/\./` matches a literal period. It's also used to create special character sets.
  - `\d`: Matches any digit (equivalent to `[0-9]`).
  - `\w`: Matches any "word" character (letters, numbers, and underscore).
  - `\s`: Matches any whitespace character (space, tab, newline).

### 3\. Quantifiers

Quantifiers specify how many times a character, group, or character set must appear.

- **`+`:** Matches one or more occurrences of the preceding character. `/go+gle/` matches "gogle", "google", etc., but not "ggle".
- **`*`:** Matches zero or more occurrences. `/go*gle/` matches "ggle", "gogle", "google", etc.
- **`?`:** Matches zero or one occurrence. `/colou?r/` matches both "color" and "colour".
- **`{n}`:** Matches exactly `n` occurrences. `/a{3}/` matches "aaa".
- **`{n,}`:** Matches `n` or more occurrences.
- **`{n,m}`:** Matches between `n` and `m` occurrences.

### 4\. Anchors

Anchors don't match characters, but rather positions in the string.

- **`^` (Caret):** Matches the beginning of the string.
- **`$` (Dollar Sign):** Matches the end of the string.
  - `/^hello/` only matches strings that **start** with "hello".
  - `/world$/` only matches strings that **end** with "world".

---

## Flags

Flags are optional parameters added after the closing slash (`/`) that modify the search behavior. They are not used when using the `RegExp` constructor.

- **`g` (Global):** Finds **all** matches in the string, not just the first one.
- **`i` (Case-Insensitive):** Performs a case-insensitive match.
- **`m` (Multiline):** Allows `^` and `$` to match the start and end of a line, not just the whole string.

---

## Common JavaScript String Methods

In JavaScript, you often use regex patterns with built-in string methods.

- `**str.match(regex)`\*\*: Returns an array containing all matches, or `null` if no match is found. With the `g` flag, it returns all matched substrings.
- `**str.replace(regex, replacement)`\*\*: Finds a match for the regex and replaces it with the `replacement` string.
- `**str.search(regex)`\*\*: Returns the index of the first match, or `-1` if no match is found.
- `**regex.test(str)`\*\*: Returns a boolean (`true` or `false`) indicating if a pattern exists in the string. This is a simple and efficient way to check for a match.
- `**regex.exec(str)`\*\*: Returns an array with match information, or `null`. Unlike `test`, it provides details like the matched text, its index, and any captured groups.
