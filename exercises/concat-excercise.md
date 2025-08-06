### Concatenating Two Arrays:\*\*

```js
// 1. Create new array of below two arrays.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// output is [ 1, 2, 3, 4, 5, 6 ]

//2.
// create new array of all the users.
const activeUsers = ["Alice", "Bob"];
const inactiveUsers = ["Charlie", "David"];
// output is [ 'Alice', 'Bob', 'Charlie', 'David' ]
```

### Concatenating Multiple Arrays:\*\*

```js
//1. create combined array of all the arrays.
const arrA = ["a", "b"];
const arrB = ["c", "d"];
const arrC = ["e", "f"];
// output is [ 'a', 'b', 'c', 'd', 'e', 'f' ]

//2.
const shoppingCart = ["milk", "eggs"];
//update the cart with following items ("bread", "cheese")
// output is [ 'milk', 'eggs', 'bread', 'cheese' ]
```

### Concatenating Values (Non-Arrays):\*\*

```javascript
const list = [1, 2];
// add the following values to the array (3, [4, 5], 6)
// output is [ 1, 2, 3, 4, 5, 6 ]
```

### Concatenating an Empty Array:\*\*

Calling `concat()` without any arguments creates a shallow copy of the array.

```javascript
const original = [1, 2, { id: 3 }];
// output is [1, 2, { id: 3 }]
```

# `at()` method

### Accessing Elements from the Start (Positive Index):\*\*

```javascript
const fruits = ["apple", "banana", "cherry", "date"];
// access elements at position 0 and 2
// output is 0 is apple
// output is 0 is cherry
```

### Accessing Elements from the End (Negative Index - The Main Use Case):\*\*

```javascript
const colors = ["red", "green", "blue", "yellow"];

// access elements at the end of an array
// Equivalent to colors[colors.length - 1]
// output is red

// access elements at the second last of an array
// Equivalent to colors[colors.length - 2]
// output is blue
```

**3. `at()` with Strings:**

```javascript
// 1. Access characters from position 0, -1 and -5
const sentence = "JavaScript";
// output is for 0 is J
// output is for -1 is t
// output is for -5 is c
```

### Handling Out-of-Bounds Indices:\*\*

```javascript
// 1. it return undefined for out of the list try accessing elements at index 3 and -4
const numbers = [10, 20, 30];

// Output: undefined (index 3 is out of bounds)
// Output: undefined (index -4 is out of bounds)

// when to use
const items = [];
const lastItemOrDefault = items.at(-1) ?? "No items found";
console.log(lastItemOrDefault); // Output: "No items found"

const data = [1, 2, 3];
const firstItemOrDefault = data.at(0) ?? "No items found";
console.log(firstItemOrDefault); // Output: 1
```

# `forEach()` method

### Logging Each Element:\*\*

```javascript
// 1. Log each element.
const fruits = ["apple", "banana", "cherry"];

/* Output:
apple
banana
cherry
*/
```

### Accessing Index and Array:\*\*

```javascript
const numbers = [10, 20, 30];

/* Output:
Element at index 0: 10. Full array: [10,20,30]
Element at index 1: 20. Full array: [10,20,30]
Element at index 2: 30. Full array: [10,20,30]
*/
```

### Performing Side Effects (e.g., Modifying an External Variable):\*\*

```javascript
// 1. Add all the array values with forEach
const prices = [10.5, 20.0, 5.25];
```

### When to use

1.  **Iterating for Side Effects:**
    The primary use case for `forEach()` is when you need to perform an action for each element in an array and the order of execution matters, but you don't need to create a new array or reduce to a single value. Common side effects include:
    - Logging elements to the console.
    - Updating the DOM (e.g., creating elements, setting text content).
    - Triggering external actions (e.g., sending API requests for each item).
    - Modifying an external variable or object state.

    <!-- end list -->

    ```javascript
    const items = ["item1", "item2", "item3"];
    const listElement = document.getElementById("myList"); // Assuming an HTML <ul> with id 'myList'

    items.forEach((itemText) => {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      if (listElement) {
        listElement.appendChild(listItem);
      }
    });
    ```

2.  **Applying a Function to Each Element (Without Returning a New Array):**
    If you have a function that performs an action and you want to apply it to every element.

    ```javascript
    function processUserData(user) {
      console.log(`Processing user: ${user.name}, ID: ${user.id}`);
      // Simulate sending data to an API for each user
      // sendToAPI(user);
    }

    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    users.forEach(processUserData);
    ```
