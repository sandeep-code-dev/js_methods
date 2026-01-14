JavaScript's `Array` object has a rich set of built-in methods, constantly evolving with new ECMAScript specifications. It's difficult to give an exact, unchanging number because new methods are occasionally added.

However, if we count the standard **instance methods** (methods you call on an array instance like `myArray.map()`) and **static methods** (methods you call on the `Array` constructor itself, like `Array.isArray()`), the number is **well over 30**, approaching 40-50 if you include less commonly used ones and those added in recent ES versions.

Here's a comprehensive list of the most common and important JavaScript Array methods, categorized for clarity:

---

### Common JavaScript Array Methods

#### I. Iteration / Looping Methods (Higher-Order Functions)

These methods take a callback function that is executed for each element.

1.  ✅ **`forEach()`**: Executes a provided function once for each array element. (Doesn't return a new array)
2.  ✅ **`map()`**: Creates a new array with the results of calling a provided function on every element.
3.  **`filter()`**: Creates a new array with all elements that pass the test implemented by the provided function.
4.  **`reduce()`**: Applies a function against an accumulator and each element (from left to right) to reduce it to a single value.
5.  **`reduceRight()`**: Similar to `reduce()`, but works from right to left.
6.  ✅ **`every()`**: Tests whether all elements in the array pass the test implemented by the provided function. Returns a boolean.
7.  ✅ **`some()`**: Tests whether at least one element in the array passes the test implemented by the provided function. Returns a boolean.
8.  ✅ **`find()`**: Returns the value of the first element in the array that satisfies the provided testing function.
9.  ✅ **`findIndex()`**: Returns the index of the first element in the array that satisfies the provided testing function.
10. ✅ **`findLast()`** (ES2023): Returns the value of the last element in the array that satisfies the provided testing function.
11. ✅ **`findLastIndex()`** (ES2023): Returns the index of the last element in the array that satisfies the provided testing function.
12. ✅ **`flatMap()`** (ES2019): Maps each element using a mapping function, then flattens the result into a new array. Equivalent to `map().flat(1)`.

#### II. Mutating Methods (Modify the Original Array)

These methods change the array they are called on.

1.  **`push()`**: Adds one or more elements to the end of an array and returns the new length of the array.
2.  **`pop()`**: Removes the last element from an array and returns that element.
3.  **`shift()`**: Removes the first element from an array and returns that element.
4.  **`unshift()`**: Adds one or more elements to the beginning of an array and returns the new length of the array.
5.  **`splice()`**: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. Returns the removed elements.
6.  **`sort()`**: Sorts the elements of an array in place and returns the sorted array. The default sort is lexicographical.
7.  **`reverse()`**: Reverses the order of the elements in an array in place.
8.  **`fill()`**: Fills all the elements of an array from a start index to an end index with a static value.
9.  **`copyWithin()`**: Copies part of an array to another location in the same array and returns it, without modifying its length.

#### III. Accessor Methods (Do Not Modify the Original Array)

These methods return new arrays or values without changing the original array.

1. ✅ **`concat()`**: Used to merge two or more arrays. Returns a new array.
2. ✅ **`slice()`**: Returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included).
3. ✅ **`indexOf()`**: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
4. ✅ **`lastIndexOf()`**: Returns the last index at which a given element can be found in the array, or -1 if it is not present.
5. ✅ **`includes()`**: Determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.
6. ✅ **`join()`**: Joins all elements of an array into a string.
7. ✅ **`toString()`**: Returns a string representing the specified array and its elements. (Often equivalent to `join(',')`)
8. ✅ **`toLocaleString()`**: Returns a string representing the elements of the array. Elements are converted to strings using their `toLocaleString` methods.
9. ✅ **`at()`** (ES2022): Takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item.
10. ✅ **`flat()`** (ES2019): Creates a new array with all sub-array elements recursively concatenated into it up to a specified depth.

#### IV. Non-Mutating Array Methods (ES2023 Additions)

These are new methods that provide non-mutating alternatives to existing mutating methods.

1.  **`toReversed()`**: Returns a new array with the elements in reversed order. (Non-mutating alternative to `reverse()`)
2.  **`toSorted()`**: Returns a new array with the elements sorted. (Non-mutating alternative to `sort()`)
3.  **`toSpliced()`**: Returns a new array with some elements removed and/or replaced at a given index. (Non-mutating alternative to `splice()`)
4.  **`with()`**: Returns a new array with the element at the given index replaced with a new value. (Non-mutating way to update an element by index)

#### V. Static Methods (Called on `Array` constructor)

These methods are called directly on the `Array` constructor itself, not on an array instance.

1.  **`Array.isArray()`**: Determines whether the passed value is an `Array`.
2.  **`Array.from()`**: Creates a new, shallow-copied `Array` instance from an array-like or iterable object.
3.  **`Array.of()`**: Creates a new `Array` instance with a variable number of arguments, regardless of number or type of the arguments. (Useful for avoiding `new Array()` quirks with single number arguments).

---

This list covers the vast majority of commonly used and recently added array methods in JavaScript. The extensive nature of these methods is what makes JavaScript arrays so powerful and versatile for data manipulation.
