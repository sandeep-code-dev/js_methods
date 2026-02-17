Here is the Markdown file explaining **Object CRUD** operations using only **Spread syntax (`...`)** and **Destructuring**. This relies purely on JavaScript operators, not built-in methods.

````markdown
# JavaScript Object CRUD: Operator-Based Approach

_Performing operations using only Spread Syntax (`...`) and Destructuring Assignment._

## 1. CREATE (Adding Properties)

To add a new property, you spread the existing object properties into a new object literal and add the new key-value pair at the end.

### Add Single Property

```javascript
const user = { name: "Alice", age: 25 };

// Add 'city'
const updatedUser = {
  ...user,
  city: "New York",
};

// Result: { name: 'Alice', age: 25, city: 'New York' }
```
````

### Merge Two Objects

```javascript
const part1 = { a: 1 };
const part2 = { b: 2 };

// Combine them

const combined = { ...part1, ...part2 };

// Result: { a: 1, b: 2 }
```

---

## 2. READ (Accessing Properties)

Use **Destructuring** to unpack properties from an object directly into variables.

### Extract Variables

```javascript
const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023,
};

// Extract specific keys into variables

const { brand, model } = car;

console.log(brand); // 'Tesla'
console.log(model); // 'Model 3'
```

### Extract with Rename

If you need to change the variable name while extracting:

```javascript
const response = { status: 200, data: "OK" };

// Rename 'status' to 'code'
const { status: code } = response;

console.log(code); // 200
```

---

## 3. UPDATE (Editing Properties)

To edit a property, you spread the original object first, then define the property you want to change _after_ the spread. JavaScript takes the last defined value for a key.

### Edit a Property

```javascript
const settings = {
  theme: "light",
  notifications: true,
};

// Update 'theme' to 'dark'
const newSettings = {
  ...settings,
  theme: "dark",
};

// Result: { theme: 'dark', notifications: true }
```

### Conditional Update

Add or update a property only if a condition is true.

```javascript
const profile = { id: 1, name: "John" };
const isAdmin = true;

const finalProfile = {
  ...profile,
  ...(isAdmin && { role: "Admin" }),
};

// Result: { id: 1, name: 'John', role: 'Admin' }
```

---

## 4. DELETE (Removing Properties)

To remove a property without using the `delete` keyword, use **Destructuring with Rest Syntax**. You extract the property you want to remove into a variable (which you ignore), and collect the rest of the properties into a new object.

### Remove a Property

```javascript
const product = {
  id: 101,
  price: 500,
  currency: "USD",
};

// Remove 'currency' by extracting it and keeping the rest
const { currency, ...productWithoutCurrency } = product;

// Result (productWithoutCurrency): { id: 101, price: 500 }
```

### Remove Multiple Properties

```javascript
const data = {
  temp: 98,
  humidity: 40,
  wind: 10,
  pressure: 1013,
};

// Remove 'wind' and 'pressure'
const { wind, pressure, ...cleanData } = data;

// Result (cleanData): { temp: 98, humidity: 40 }
```

```

```

Here is the companion Markdown file for **JavaScript Objects**.

This focuses on **Immutable Object Manipulation**, using the Spread Operator (`...`) and Destructuring to perform CRUD operations without modifying the original object.

---

````markdown
# JavaScript Object CRUD: The Immutable Approach

_Performing Create, Read, Update, and Delete operations on Objects without mutating the original data._

Just like with arrays, modern JavaScript (especially in React/Redux) favors **immutability**. Instead of changing an object directly (e.g., `user.name = "John"`), we create a **new** object copy with the specific changes applied.

We rely heavily on the **Spread Operator (`...`)** and **Destructuring Assignment**.

---

## 1. CREATE (Adding Properties)

To add a new property to an object without changing the original, we spread all the existing properties into a new object literal and add the new key-value pair at the end.

### Add a Single Property

```javascript
const user = {
  id: 1,
  name: "Alice",
};

// Create a NEW object with all of 'user', plus 'email'
const userWithEmail = {
  ...user,
  email: "alice@example.com",
};

console.log(userWithEmail);
// { id: 1, name: 'Alice', email: 'alice@example.com' }
```
````

### Merge Two Objects

You can also combine two objects entirely.

```javascript
const basicInfo = { name: "Bob" };
const details = { age: 30, job: "Developer" };

const profile = { ...basicInfo, ...details };

console.log(profile);
// { name: 'Bob', age: 30, job: 'Developer' }
```

---

## 2. READ (Accessing Properties)

While you can always use dot notation (`obj.name`), the modern way to "read" specific properties into variables is via **Destructuring**.

### Basic Destructuring

```javascript
const settings = { theme: "dark", notifications: true };

// Extract 'theme' into a variable
const { theme } = settings;

console.log(theme); // 'dark'
```

### Renaming during Read

Sometimes you want to read a property but call it something else in your code to avoid naming collisions.

```javascript
const data = { id: 99, title: "Post 1" };

// Read 'id' but call it 'postId'
const { id: postId, title } = data;

console.log(postId); // 99
```

---

## 3. UPDATE (Modifying Properties)

To "update" a property immutably, you write the property **after** the spread. In JavaScript objects, if keys are duplicated, the **last one wins**.

### Simple Update

```javascript
const product = {
  id: 101,
  price: 50,
  status: "In Stock",
};

// Copy all of product, BUT overwrite 'price'
const updatedProduct = {
  ...product,
  price: 45,
};

console.log(updatedProduct);
// { id: 101, price: 45, status: 'In Stock' }
```

### Conditional Update

You can conditionally add or update properties using the spread operator and the logical AND (`&&`) operator.

```javascript
const user = { name: "Charlie", isAdmin: true };
const includeEmail = true;

const updatedUser = {
  ...user,
  ...(includeEmail && { email: "admin@site.com" }),
};

console.log(updatedUser);
// { name: 'Charlie', isAdmin: true, email: 'admin@site.com' }
```

### Deep Update (Nested Objects)

**Warning:** The spread operator is "shallow." It only copies the top level. To update a nested object, you must spread every level you want to reach.

```javascript
const state = {
  user: {
    name: "Dave",
    preferences: {
      theme: "light",
      lang: "en",
    },
  },
};

// We want to change 'theme' to 'dark'
const newState = {
  ...state, // 1. Copy top level
  user: {
    ...state.user, // 2. Copy user level
    preferences: {
      ...state.user.preferences, // 3. Copy preferences
      theme: "dark", // 4. Overwrite theme
    },
  },
};
```

---

## 4. DELETE (Removing Properties)

The `delete` operator (`delete obj.prop`) mutates the object. To remove a property immutably, we use **Destructuring with Rest Syntax**.

We "extract" the property we want to remove, and collect **everything else** into a new object variable (often called `rest`).

### Remove a Single Property

```javascript
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

// We want to remove 'year'.
// We extract 'year' into a variable (which we ignore),
// and put everything else into 'carWithoutYear'.
const { year, ...carWithoutYear } = car;

console.log(carWithoutYear);
// { make: 'Toyota', model: 'Corolla' }
```

### Remove Multiple Properties

You can list multiple properties to exclude them from the new object.

```javascript
const session = {
  token: "abc-123",
  userId: 55,
  expiry: 3600,
  browser: "Chrome",
};

// Remove sensitive session data (token and expiry)
const { token, expiry, ...publicSession } = session;

console.log(publicSession);
// { userId: 55, browser: 'Chrome' }
```

```

```
