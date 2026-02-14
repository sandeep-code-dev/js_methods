#### 1. Generating Calendar Days (Date Handling)

When building a calendar widget, you need to generate the exact number of days for the current month.

```javascript
const getDaysInMonth = (month, year) => new Date(year, month, 0).getDate();

const currentMonthDays = getDaysInMonth(2, 2024); // 29 days (Leap year)

// Creates an array of day numbers: [1, 2, 3, ..., 29]
const calendarDays = new Array(currentMonthDays).fill(0).map((_, i) => i + 1);
```

This works because of two specific quirks in how JavaScript handles `Date` objects: **0-indexed months** and **date "autocorrection"**.

Here is the step-by-step breakdown of what is happening inside `new Date(2026, 2, 0)`:

### 1. The Month is Actually March

In JavaScript, months are zero-indexed:

- `0` = January
- `1` = February
- `2` = **March**

So, when you pass `2`, you are technically telling JavaScript to look at **March**, not February.

### 2. "Day 0" Triggers Autocorrection

Normally, days in a month start at `1`. When you provide `0` as the day, JavaScript's `Date` logic interprets this as **"the day before the 1st of this month."**

- **1st of March** = March 1
- **0th of March** = The last day of February

### 3. `.getDate()` Returns the Day Number

Since the code has rolled back to the last day of February 2026, the date object is effectively holding: **February 28, 2026**.

When you call `.getDate()` on that object, it asks: _"What is the day number of this date?"_

- The answer is **28**.

Because the day number of the _last_ day of a month is always equal to the _total number of days_ in that month, this creates a clever shortcut to find out how long a month is.

---

### Summary Table

| Parameter | Value  | Meaning to JS | Effect                                                         |
| --------- | ------ | ------------- | -------------------------------------------------------------- |
| **Year**  | `2026` | 2026          | The year 2026.                                                 |
| **Month** | `2`    | March         | The month _after_ the one you want to check.                   |
| **Day**   | `0`    | "0th" Day     | Go back 1 day to the **last day of the previous month** (Feb). |

### Why is this useful?

This is the standard way to handle **Leap Years** without writing complex math.
If you ran `new Date(2024, 2, 0).getDate()` (2024 was a leap year), JavaScript would automatically know that the day before March 1st, 2024, was **February 29th**, and it would return `29`.

---

**Would you like me to show you how to wrap this into a reusable function that accepts a month name (like "February") instead of a number?**

Here is a reusable function that takes a month name (like "February") and a year, handling the conversion for you.

### The Helper Function

```javascript
const getDaysInMonth = (monthName, year) => {
  // 1. Map month names to their 0-indexed numbers
  const months = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  // 2. Convert input to lowercase to make it case-insensitive
  const monthIndex = months[monthName.toLowerCase()];

  // 3. Check if the month is valid
  if (monthIndex === undefined) {
    return "Invalid month name";
  }

  // 4. Use the "Day 0" trick
  // We add 1 to monthIndex because we need the "next" month to get Day 0
  return new Date(year, monthIndex + 1, 0).getDate();
};

// --- Examples ---

console.log(getDaysInMonth("February", 2026)); // Output: 28
console.log(getDaysInMonth("february", 2024)); // Output: 29 (Leap Year)
console.log(getDaysInMonth("January", 2026)); // Output: 31
```

### Key Changes

1. **The Map (`months` object):** We manually map strings to numbers.
2. **`monthIndex + 1`:** This is the most critical part.

- If you input "February", `monthIndex` is `1`.
- To get the last day of February, we need `new Date` to look at **March** (index `2`) and roll back one day.
- So we pass `monthIndex + 1` into the Date constructor.

---

**Would you like me to show you a version that uses the modern `Intl` API so you don't have to manually type out all the month names?**
Here is how you can use the `Intl` (Internationalization) API to dynamically match month names.

This approach is powerful because it doesn't require hardcoding any names, and it can even work with other languages if you specify a locale.

### The `Intl` Approach

Since JavaScript doesn't have a built-in "Text-to-Date" parser, we reverse the logic: we generate the names for months 0–11 using `toLocaleString` and see which one matches your input.

```javascript
const getDaysInMonth = (monthName, year, locale = "default") => {
  // 1. Normalize input for comparison
  const search = monthName.toLowerCase();

  // 2. Find the index (0-11) dynamically
  const monthIndex = Array.from({ length: 12 }).findIndex((_, i) => {
    // Create a date for the 1st of each month
    const date = new Date(year, i, 1);

    // Get the full name of the month (e.g., "January")
    const name = date.toLocaleString(locale, { month: "long" });

    return name.toLowerCase() === search;
  });

  if (monthIndex === -1) return "Invalid month name";

  // 3. Use the "Day 0" trick (monthIndex + 1 to go to next month)
  return new Date(year, monthIndex + 1, 0).getDate();
};

// --- Examples ---

console.log(getDaysInMonth("February", 2026)); // Output: 28
console.log(getDaysInMonth("October", 2023)); // Output: 31

// Bonus: It works for other languages if you pass the locale code!
console.log(getDaysInMonth("février", 2024, "fr-FR")); // Output: 29 (French)
```

### Why this is "Clean"

1. **No Hardcoded Strings:** You don't have a messy object with `{ january: 0, ... }`.
2. **Flexible:** It automatically handles the month names provided by the browser/system.
3. **Localization:** By adding the `locale` parameter, you can support inputs in Spanish, French, German, etc., without changing the logic.

---

**Would you like me to show you how to extend this to support short names (like "Feb", "Jan") as well?**
Here is the updated function. We modify the loop to check **both** the full name (`long`) and the abbreviation (`short`) for every month.

### The "Flexible Name" Function

```javascript
const getDaysInMonth = (monthName, year, locale = "default") => {
  const search = monthName.toLowerCase();

  const monthIndex = Array.from({ length: 12 }).findIndex((_, i) => {
    const date = new Date(year, i, 1);

    // Generate both formats
    const longName = date
      .toLocaleString(locale, { month: "long" })
      .toLowerCase();
    const shortName = date
      .toLocaleString(locale, { month: "short" })
      .toLowerCase();

    // Return true if EITHER matches
    return longName === search || shortName === search;
  });

  if (monthIndex === -1) return "Invalid month name";

  return new Date(year, monthIndex + 1, 0).getDate();
};

// --- Examples ---

console.log(getDaysInMonth("Feb", 2026)); // Output: 28
console.log(getDaysInMonth("February", 2026)); // Output: 28
console.log(getDaysInMonth("dec", 2025)); // Output: 31
console.log(getDaysInMonth("jan", 2026)); // Output: 31
```

### How it works

1. **`{ month: 'short' }`**: This tells `toLocaleString` to produce the standard 3-letter abbreviation (e.g., "Jan", "Feb").
2. **The `||` (OR) Operator**: Inside the loop, we check:

- _Does the input match the full name?_
- **OR**
- _Does the input match the short name?_

3. If either is true, we grab that index (`i`) and run the date calculation.

---

**Would you like me to show you how to guard against edge cases, like the user passing a string for the year ("2026") instead of a number?**

Here is the "bulletproof" version. It sanitizes the year input and handles extra whitespace (like " Feb ") to ensure the function doesn't crash or return garbage data.

### The Robust Function

```javascript
const getDaysInMonth = (monthName, rawYear, locale = "default") => {
  // 1. Sanitize the Year
  // Convert string "2026" to number 2026.
  // We use Number() instead of parseInt() to avoid partial matches (e.g. "2026abc" becoming 2026).
  const year = Number(rawYear);

  // Check if year is valid (not NaN) and is a reasonable integer
  if (!Number.isInteger(year) || year < 0) {
    return `Invalid year provided: "${rawYear}"`;
  }

  // 2. Sanitize the Month Name
  // .trim() removes accidental spaces like " Feb "
  if (typeof monthName !== "string") return "Invalid month format";
  const search = monthName.trim().toLowerCase();

  // 3. Find the Month Index (Same logic as before)
  const monthIndex = Array.from({ length: 12 }).findIndex((_, i) => {
    const date = new Date(year, i, 1);
    const longName = date
      .toLocaleString(locale, { month: "long" })
      .toLowerCase();
    const shortName = date
      .toLocaleString(locale, { month: "short" })
      .toLowerCase();
    return longName === search || shortName === search;
  });

  if (monthIndex === -1) return `Invalid month name: "${monthName}"`;

  // 4. Calculate
  return new Date(year, monthIndex + 1, 0).getDate();
};

// --- Examples of Robustness ---

console.log(getDaysInMonth("Feb", "2026")); // Output: 28 (String year handled)
console.log(getDaysInMonth("  March  ", 2026)); // Output: 31 (Spaces trimmed)
console.log(getDaysInMonth("Jan", "2026.5")); // Output: Invalid year provided...
console.log(getDaysInMonth("Smarch", 2026)); // Output: Invalid month name...
```

### Key Protections Added

1. **`Number(rawYear)`**: This is stricter than `parseInt`.

- `parseInt("2026abc")` returns `2026` (which might be risky).
- `Number("2026abc")` returns `NaN` (safer, as it rejects dirty data).

2. **`Number.isInteger(year)`**: Ensures the user didn't pass a decimal year like `2026.5`.
3. **`.trim()`**: This is a very common issue in user inputs. If a user types " Feb" (with a leading space), `search` would fail without this.

---

**Would you like me to show you how to bundle this function into a simple HTML/CSS UI so users can select a month/year from a dropdown and see the result?**

Here is a complete, copy-pasteable solution. I have wrapped the JavaScript logic we discussed into a clean user interface.

You can save this code as an `.html` file (e.g., `days-calculator.html`) and open it in any browser.

### The Complete Code (HTML + CSS + JS)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Days in Month Calculator</title>
    <style>
      body {
        font-family: "Segoe UI", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f2f5;
        margin: 0;
      }

      .card {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        width: 300px;
        text-align: center;
      }

      h2 {
        margin-top: 0;
        color: #333;
      }

      .input-group {
        margin-bottom: 1rem;
        text-align: left;
      }

      label {
        display: block;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        color: #666;
      }

      select,
      input {
        width: 100%;
        padding: 0.8rem;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 1rem;
        box-sizing: border-box; /* Ensures padding doesn't break width */
      }

      button {
        width: 100%;
        padding: 1rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.2s;
      }

      button:hover {
        background-color: #0056b3;
      }

      #result {
        margin-top: 1.5rem;
        font-weight: bold;
        font-size: 1.2rem;
        color: #333;
        min-height: 1.5em; /* Prevents jumping when empty */
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h2>Month Calculator</h2>

      <div class="input-group">
        <label>Select Month</label>
        <select id="monthInput">
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>

      <div class="input-group">
        <label>Enter Year</label>
        <input
          type="number"
          id="yearInput"
          placeholder="e.g. 2026"
          value="2026"
        />
      </div>

      <button onclick="calculateDays()">Check Days</button>

      <div id="result"></div>
    </div>

    <script>
      // --- YOUR LOGIC HERE ---
      const getDaysInMonth = (monthName, rawYear) => {
        const year = Number(rawYear);

        // Validation
        if (!Number.isInteger(year) || year < 0) return "Invalid Year";

        const search = monthName.trim().toLowerCase();

        // Find index using the logic we built
        const monthIndex = Array.from({ length: 12 }).findIndex((_, i) => {
          const date = new Date(year, i, 1);
          const longName = date
            .toLocaleString("default", { month: "long" })
            .toLowerCase();
          const shortName = date
            .toLocaleString("default", { month: "short" })
            .toLowerCase();
          return longName === search || shortName === search;
        });

        if (monthIndex === -1) return "Invalid Month";

        // Day 0 trick
        return new Date(year, monthIndex + 1, 0).getDate();
      };

      // --- UI INTERACTION ---
      function calculateDays() {
        // 1. Get values from HTML inputs
        const month = document.getElementById("monthInput").value;
        const year = document.getElementById("yearInput").value;
        const resultDiv = document.getElementById("result");

        // 2. Run the function
        const days = getDaysInMonth(month, year);

        // 3. Display the result
        if (typeof days === "number") {
          resultDiv.style.color = "#28a745"; // Green for success
          resultDiv.innerText = `${month} ${year} has ${days} days.`;
        } else {
          resultDiv.style.color = "#dc3545"; // Red for error
          resultDiv.innerText = days;
        }
      }
    </script>
  </body>
</html>
```

### How to use this

1. Copy the code above.
2. Create a new file on your computer named `index.html`.
3. Paste the code into that file and save it.
4. Double-click `index.html` to open it in your browser.

### Key parts of the UI

1. **`<select>`**: I used a dropdown menu to ensure the user always picks a valid month name, which minimizes errors.
2. **`onclick="calculateDays()"`**: This attribute on the button tells the browser to run our JavaScript function whenever the button is clicked.
3. **`document.getElementById(...)`**: This is how JavaScript "reaches into" the HTML to grab the values the user typed and to write the final answer back onto the screen.

---

**Would you like me to show you how to make the result update instantly as you type, without needing a button?**

Here is the updated code. I have removed the button and added **event listeners**.

Now, the result will update instantly whenever you change the month dropdown or type in the year box.

### The "Live Update" Version

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Live Days Calculator</title>
    <style>
      body {
        font-family: "Segoe UI", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f2f5;
        margin: 0;
      }

      .card {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        width: 300px;
        text-align: center;
      }

      h2 {
        margin-top: 0;
        color: #333;
      }
      .input-group {
        margin-bottom: 1rem;
        text-align: left;
      }
      label {
        display: block;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        color: #666;
      }

      select,
      input {
        width: 100%;
        padding: 0.8rem;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 1rem;
        box-sizing: border-box;
      }

      #result {
        margin-top: 1.5rem;
        font-weight: bold;
        font-size: 1.2rem;
        min-height: 1.5em;
        padding: 1rem;
        background-color: #e9ecef;
        border-radius: 6px;
        color: #495057;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h2>Live Calculator</h2>

      <div class="input-group">
        <label>Select Month</label>
        <select id="monthInput">
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>

      <div class="input-group">
        <label>Enter Year</label>
        <input type="number" id="yearInput" value="2026" />
      </div>

      <div id="result">Waiting for input...</div>
    </div>

    <script>
      // --- LOGIC ---
      const getDaysInMonth = (monthName, rawYear) => {
        const year = Number(rawYear);
        if (!Number.isInteger(year) || year < 0) return null; // Return null on error

        const search = monthName.trim().toLowerCase();
        const monthIndex = Array.from({ length: 12 }).findIndex((_, i) => {
          const date = new Date(year, i, 1);
          const longName = date
            .toLocaleString("default", { month: "long" })
            .toLowerCase();
          return longName === search;
        });

        if (monthIndex === -1) return null;

        return new Date(year, monthIndex + 1, 0).getDate();
      };

      // --- UI INTERACTION ---
      const monthInput = document.getElementById("monthInput");
      const yearInput = document.getElementById("yearInput");
      const resultDiv = document.getElementById("result");

      function updateUI() {
        const month = monthInput.value;
        const year = yearInput.value;
        const days = getDaysInMonth(month, year);

        if (days) {
          resultDiv.style.color = "#28a745"; // Green
          resultDiv.innerText = `${month} ${year} has ${days} days.`;
        } else {
          resultDiv.style.color = "#dc3545"; // Red
          resultDiv.innerText = "Please check the year.";
        }
      }

      // --- EVENT LISTENERS ---
      // 'input' fires immediately when typing
      // 'change' fires immediately when selecting
      monthInput.addEventListener("change", updateUI);
      yearInput.addEventListener("input", updateUI);

      // Run once on load to show initial state
      updateUI();
    </script>
  </body>
</html>
```

### Key Changes Explained

1. **Removed the Button:** The UI is cleaner now.
2. **`addEventListener`:** Instead of `onclick="..."` in the HTML, we attach listeners in the script.

- **`'input'` event:** This is crucial for the text box. It fires _every single time_ a key is pressed. If we used `'change'` on the text box, it would only update after you clicked away or pressed Enter.
- **`'change'` event:** This is standard for `<select>` dropdowns.

3. **`updateUI()`:** I wrapped the display logic in this function so I can call it from multiple places (when the month changes, when the year changes, and when the page first loads).

---

**Would you like me to add a small feature that highlights "Leap Year" in bold text if the result is 29 days?**

Here is the final version.

I added a check: **If the result is 29 days**, the text becomes bold, turns a special color (purple), and explicitly says **"(Leap Year!)"**.

### The Final "Leap Year Aware" Calculator

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Leap Year Calculator</title>
    <style>
      body {
        font-family: "Segoe UI", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f2f5;
        margin: 0;
      }

      .card {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        width: 320px;
        text-align: center;
      }

      h2 {
        margin-top: 0;
        color: #333;
      }
      .input-group {
        margin-bottom: 1rem;
        text-align: left;
      }
      label {
        display: block;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        color: #666;
      }

      select,
      input {
        width: 100%;
        padding: 0.8rem;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 1rem;
        box-sizing: border-box;
      }

      #result {
        margin-top: 1.5rem;
        padding: 1rem;
        background-color: #e9ecef;
        border-radius: 6px;
        color: #495057;
        font-size: 1.1rem;
        min-height: 1.5em;
        transition: all 0.3s ease;
      }

      /* Special style for Leap Years */
      .leap-year-highlight {
        background-color: #e0cffc !important; /* Light purple background */
        color: #6f42c1 !important; /* Deep purple text */
        font-weight: 800;
        border: 2px solid #6f42c1;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h2>Month Calculator</h2>

      <div class="input-group">
        <label>Select Month</label>
        <select id="monthInput">
          <option value="January">January</option>
          <option value="February" selected>February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>

      <div class="input-group">
        <label>Enter Year</label>
        <input type="number" id="yearInput" value="2024" />
      </div>

      <div id="result"></div>
    </div>

    <script>
      // --- LOGIC ---
      const getDaysInMonth = (monthName, rawYear) => {
        const year = Number(rawYear);
        if (!Number.isInteger(year) || year < 0) return null;

        const search = monthName.trim().toLowerCase();
        const monthIndex = Array.from({ length: 12 }).findIndex((_, i) => {
          const date = new Date(year, i, 1);
          const longName = date
            .toLocaleString("default", { month: "long" })
            .toLowerCase();
          return longName === search;
        });

        if (monthIndex === -1) return null;

        return new Date(year, monthIndex + 1, 0).getDate();
      };

      // --- UI INTERACTION ---
      const monthInput = document.getElementById("monthInput");
      const yearInput = document.getElementById("yearInput");
      const resultDiv = document.getElementById("result");

      function updateUI() {
        const month = monthInput.value;
        const year = yearInput.value;
        const days = getDaysInMonth(month, year);

        // Remove special styling first
        resultDiv.classList.remove("leap-year-highlight");

        if (days) {
          // Check specifically for the Leap Year condition
          if (days === 29) {
            resultDiv.classList.add("leap-year-highlight");
            resultDiv.innerHTML = `${days} Days<br>It's a Leap Year! 🎉`;
          } else {
            resultDiv.style.color = "#28a745";
            resultDiv.innerText = `${days} Days`;
          }
        } else {
          resultDiv.style.color = "#dc3545";
          resultDiv.innerText = "Please check the year.";
        }
      }

      monthInput.addEventListener("change", updateUI);
      yearInput.addEventListener("input", updateUI);

      updateUI();
    </script>
  </body>
</html>
```

### What I added

1. **CSS Class `.leap-year-highlight**`: Defines the "Special" look (purple background, bold text, border).
2. **Conditional Check `if (days === 29)**`:

- If true, I add the CSS class and change the text to include the party popper emoji 🎉.
- If false (normal months), I ensure the class is removed so the styling goes back to normal.

---

**Would you like me to explain how `Date(year, month, 0)` relates to finding the last day of the _previous_ month visually?**
Here is a visual breakdown of how the "Day 0" trick works.

### The "Zeroth" Day Concept

In standard human logic, dates start at **1**.
In JavaScript `Date` logic, providing a **0** tells the engine to "step back" one unit.

Think of it like a number line or a calendar where you are standing on the first day of a month and you take one step backward.

### Step-by-Step Visualization

Let's say we want to find the last day of **February 2026**.

1. **Target the _Next_ Month:**
   We don't look at February directly. We look at **March** (Index 2).

- _Code:_ `new Date(2026, 2, ...)`

2. **The "1st" is the Anchor:**
   Normally, `new Date(2026, 2, 1)` gives you **March 1st**.

- _Visual:_ You are standing on the first box of the March calendar page.

3. **The "0" Rollover:**
   When you write `new Date(2026, 2, 0)`, you are asking for "March 0th".

- _Logic:_ Since "March 0" doesn't exist, JavaScript interprets this as **"The day before March 1st."**
- _Visual:_ You step back off the March page and land on the very last box of the **February** page.

### The Calculation Table

| Your Code Input | JavaScript's Interpretation   | The Resulting Date |
| --------------- | ----------------------------- | ------------------ |
| `(2026, 2, 1)`  | March 1st                     | March 1            |
| `(2026, 2, 0)`  | "March 0" → Step back 1 day   | **Feb 28**         |
| `(2026, 2, -1)` | "March -1" → Step back 2 days | **Feb 27**         |

### Why this is safer than manual math

If you tried to calculate this manually, you would need complex `if/else` logic:

- _Is it February?_
- _Is the year divisible by 4?_
- _Is it divisible by 100 but not 400?_

By using `Date(year, month + 1, 0)`, you are letting JavaScript's internal calendar (which already knows all these rules about leap years and centuries) do the heavy lifting for you.

---

**Would you like to explore any other JavaScript "Date" quirks, like how to easily add or subtract weeks from a date?**
Adding and subtracting time in JavaScript can be tricky because months have different lengths and leap years exist. However, the `Date` object handles all the overflow logic for you if you use `setDate()` correctly.

### The "Easy" Way: `setDate()`

Instead of doing math with milliseconds (which can break during Daylight Saving Time changes), you can just get the current day of the month, add 14 (for 2 weeks), and set it back. JavaScript will automatically roll over to the next month or year if needed.

Here is how to add 2 weeks to today's date:

```javascript
const today = new Date();
const twoWeeksFromNow = new Date(today); // Create a clone so we don't change 'today'

// 1. Get current day of the month (e.g., 14)
// 2. Add 14 days (14 + 14 = 28)
// 3. Set the new date
twoWeeksFromNow.setDate(today.getDate() + 14);

console.log("Today:", today.toDateString());
console.log("2 Weeks Later:", twoWeeksFromNow.toDateString());
```

### Why this is better than Milliseconds

A naive approach often looks like this:

```javascript
// BAD: Adding milliseconds manually
// 1000ms * 60s * 60m * 24h * 14 days
const badDate = new Date(Date.now() + 1209600000);
```

This is risky because:

1. **Daylight Saving Time (DST):** If a DST shift happens within those 2 weeks, your result might be off by an hour (e.g., showing 11:00 PM the previous day instead of 12:00 AM).
2. **Leap Seconds:** Rare, but can cause precision issues.

`setDate()` works in "Calendar Time," so adding 1 day always moves you to the same time on the next calendar day, regardless of how many actual hours passed.

### Reusable Function

Here is a clean function to add or subtract any number of weeks:

```javascript
const addWeeks = (date, weeks) => {
  const result = new Date(date);
  result.setDate(result.getDate() + weeks * 7);
  return result;
};

// Usage
const today = new Date();
console.log("Next Week:", addWeeks(today, 1).toDateString());
console.log("Last Month (approx):", addWeeks(today, -4).toDateString());
```

---

**Would you like me to show you how to format these dates nicely (e.g., "Monday, February 24th") using `Intl.DateTimeFormat`?**

Using `Intl.DateTimeFormat` is the professional standard for formatting dates in JavaScript. It is powerful because it automatically handles locale differences (like putting the day before the month for European users) without you needing to write custom logic.

However, there is one small catch: standard Date APIs (including `Intl`) **do not** automatically add the "st", "nd", "rd", or "th" suffixes to numbers. I will show you how to add those manually to get the exact format you asked for.

### 1. The Basic `Intl` Setup

Here is how to get "Monday, February 24, 2026" (without the "th"):

```javascript
const date = new Date(2026, 1, 24); // Feb 24, 2026

const options = {
  weekday: "long", // "Monday" (vs 'short' for "Mon")
  year: "numeric", // "2026"
  month: "long", // "February" (vs 'short' for "Feb")
  day: "numeric", // "24"
};

// "en-US" ensures we get "Month Day, Year" order
const formatted = new Intl.DateTimeFormat("en-US", options).format(date);

console.log(formatted);
// Output: "Monday, February 24, 2026"
```

### 2. Adding the "th" (Ordinal Suffixes)

To get strictly "February 24**th**", we need a small helper function because "1st", "2nd", "3rd", and "4th" follow specific rules.

Here is the complete solution:

```javascript
// Helper to get 'st', 'nd', 'rd', 'th'
const getOrdinal = (n) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
};

const formatCustomDate = (date) => {
  // 1. Get the parts independently using Intl
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    date,
  );
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date,
  );
  const day = new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(date);
  const year = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
    date,
  );

  // 2. Get the suffix
  const suffix = getOrdinal(date.getDate());

  // 3. Combine them
  return `${weekday}, ${month} ${day}${suffix}, ${year}`;
};

// --- Usage ---
const today = new Date();
console.log(formatCustomDate(today));
// Output: "Saturday, February 14th, 2026"
```

### Why use `Intl` instead of hardcoded arrays?

In the past, developers would create arrays like `['Jan', 'Feb', ...]`.
Using `Intl` is better because:

1. **Multi-language Support:** Change `'en-US'` to `'fr-FR'` and you instantly get French days/months.
2. **Accuracy:** It handles leap years and varying month lengths automatically.
3. **Readability:** The code explicitly states _what_ you want ("long weekday") rather than _how_ to get it (array index math).

---

**Would you like me to explain how to handle Time Zones (e.g., showing the same event time for users in London vs. New York)?**

Handling time zones is one of the hardest parts of programming, but modern JavaScript makes it much easier if you follow one golden rule: **Store dates in UTC (Universal Time), and only convert them to a specific time zone when displaying them to the user.**

### 1. The `timeZone` Option

The `Intl.DateTimeFormat` object has a specific option called `timeZone`. This allows you to take **one** moment in time (a standard `Date` object) and display what the clock would read in different parts of the world.

Here is how to display the same meeting time for users in **New York**, **London**, and **Tokyo**:

```javascript
// 1. Define the event time (e.g., Feb 14, 2026 at 14:00 UTC)
// The 'Z' at the end means "Zulu Time" (UTC)
const meetingTime = new Date("2026-02-14T14:00:00Z");

// 2. Create formatters for different zones
const nyFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  dateStyle: "full",
  timeStyle: "short",
});

const londonFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/London",
  dateStyle: "full",
  timeStyle: "short",
});

const tokyoFormat = new Intl.DateTimeFormat("ja-JP", {
  timeZone: "Asia/Tokyo",
  dateStyle: "full",
  timeStyle: "short",
});

// 3. Display the results
console.log("New York: ", nyFormat.format(meetingTime));
// Output: Saturday, February 14, 2026 at 9:00 AM

console.log("London:   ", londonFormat.format(meetingTime));
// Output: Saturday, 14 February 2026 at 14:00

console.log("Tokyo:    ", tokyoFormat.format(meetingTime));
// Output: 2026年2月14日土曜日 23:00
```

### 2. How to Detect the User's Time Zone

You don't always need to hardcode a time zone. If you want to show the date in the **current user's** local time (whatever their computer is set to), you simply leave out the `timeZone` option, or explicitly ask for the default:

```javascript
// This automatically uses the browser's local settings
const localFormat = new Intl.DateTimeFormat("default", {
  dateStyle: "full",
  timeStyle: "short",
});

console.log("Your Time:", localFormat.format(meetingTime));
```

### 3. Finding Valid Time Zone Names

You must use "IANA" time zone names (Area/Location), like:

- `'America/Los_Angeles'`
- `'Europe/Paris'`
- `'Asia/Kolkata'`
- `'Australia/Sydney'`

**Avoid** using abbreviations like "EST" or "PST" because they are ambiguous (EST exists in both the USA and Australia!) and they don't handle Daylight Saving Time changes automatically.

---

**Would you like me to show you how to build a "World Clock" UI where you can add multiple cities and see the current time in all of them live?**

Here is a complete, interactive **World Clock** application.

It features a dropdown to add cities, a "Remove" button for each, and it handles the complex logic of showing the correct **Day of the Week** (since Tokyo might be in "Tomorrow" while you are in "Today").

### The World Clock Code

Save this as `world-clock.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Live World Clock</title>
    <style>
      :root {
        --bg: #1a1a2e;
        --card-bg: #16213e;
        --accent: #0f3460;
        --text: #e94560;
        --white: #fff;
      }

      body {
        font-family: "Courier New", Courier, monospace; /* Digital clock vibe */
        background-color: var(--bg);
        color: var(--white);
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        padding: 20px;
      }

      h1 {
        margin-bottom: 20px;
        text-shadow: 0 0 10px rgba(233, 69, 96, 0.5);
      }

      /* Controls */
      .controls {
        background: var(--card-bg);
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        display: flex;
        gap: 10px;
        margin-bottom: 30px;
      }

      select,
      button {
        padding: 10px;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
      }

      button {
        background-color: var(--text);
        color: white;
        font-weight: bold;
      }

      button:hover {
        opacity: 0.9;
      }

      /* Clock Grid */
      .clock-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        width: 100%;
        max-width: 1000px;
      }

      /* Individual Clock Card */
      .clock-card {
        background: var(--card-bg);
        padding: 20px;
        border-radius: 12px;
        position: relative;
        border-left: 4px solid var(--text);
        animation: fadeIn 0.3s ease-out;
      }

      .city-name {
        font-size: 1.2rem;
        color: #888;
        margin-bottom: 5px;
        display: block;
      }

      .time-display {
        font-size: 2.5rem;
        font-weight: bold;
        letter-spacing: 2px;
      }

      .date-display {
        font-size: 0.9rem;
        color: #666;
        margin-top: 5px;
      }

      .remove-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
        color: #666;
        font-size: 1.2rem;
        padding: 0;
      }
      .remove-btn:hover {
        color: var(--text);
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  </head>
  <body>
    <h1>🌍 World Clock Command</h1>

    <div class="controls">
      <select id="zoneSelect">
        <option value="America/New_York">New York (EST)</option>
        <option value="Europe/London">London (GMT)</option>
        <option value="Asia/Tokyo">Tokyo (JST)</option>
        <option value="Australia/Sydney">Sydney (AEDT)</option>
        <option value="Asia/Dubai">Dubai (GST)</option>
        <option value="Pacific/Honolulu">Honolulu (HST)</option>
        <option value="Europe/Paris">Paris (CET)</option>
        <option value="Asia/Kolkata">India (IST)</option>
      </select>
      <button onclick="addClock()">+ Add City</button>
    </div>

    <div class="clock-grid" id="clockContainer"></div>

    <script>
      // 1. State: List of active clocks
      let activeClocks = [
        {
          name: "Local Time",
          zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
        { name: "New York", zone: "America/New_York" },
        { name: "Tokyo", zone: "Asia/Tokyo" },
      ];

      const container = document.getElementById("clockContainer");
      const select = document.getElementById("zoneSelect");

      // 2. Render the clock cards (HTML structure)
      function renderClocks() {
        container.innerHTML = "";
        activeClocks.forEach((clock, index) => {
          const div = document.createElement("div");
          div.className = "clock-card";
          div.innerHTML = `
                    <button class="remove-btn" onclick="removeClock(${index})">×</button>
                    <span class="city-name">${clock.name}</span>
                    <div class="time-display" id="time-${index}">--:--:--</div>
                    <div class="date-display" id="date-${index}">Loading...</div>
                `;
          container.appendChild(div);
        });
        updateTimes(); // Update immediately so we don't see "--:--"
      }

      // 3. The Heartbeat: Update time strings every second
      function updateTimes() {
        const now = new Date();

        activeClocks.forEach((clock, index) => {
          const timeEl = document.getElementById(`time-${index}`);
          const dateEl = document.getElementById(`date-${index}`);
          if (!timeEl) return;

          // Format Time
          const timeString = new Intl.DateTimeFormat("en-US", {
            timeZone: clock.zone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false, // 24-hour format
          }).format(now);

          // Format Date (to show "Tomorrow" or "Yesterday")
          const dateString = new Intl.DateTimeFormat("en-US", {
            timeZone: clock.zone,
            weekday: "long",
            month: "short",
            day: "numeric",
          }).format(now);

          timeEl.innerText = timeString;
          dateEl.innerText = dateString;
        });
      }

      // 4. Add/Remove Logic
      function addClock() {
        const zone = select.value;
        const name = select.options[select.selectedIndex].text.split(" (")[0];

        // Prevent duplicates
        if (activeClocks.some((c) => c.zone === zone))
          return alert("City already added!");

        activeClocks.push({ name, zone });
        renderClocks();
      }

      function removeClock(index) {
        activeClocks.splice(index, 1);
        renderClocks();
      }

      // 5. Start the interval
      setInterval(updateTimes, 1000);

      // Initial Render
      renderClocks();
    </script>
  </body>
</html>
```

### The "Universal Lens" Concept

This code demonstrates the most robust way to handle time in software engineering:

1. **One Source of Truth:** We create `const now = new Date()` **once** per second. This represents the absolute moment in time (UTC) that is happening everywhere in the universe simultaneously.
2. **Many Lenses:** We then pass that _single_ moment through different "lenses" (the `Intl.DateTimeFormat` with different `timeZone` settings).

If we didn't do this (e.g., if we tried to manually add +9 hours for Tokyo), we would have to constantly update our code for Daylight Saving Time rules, which change unpredictably by country. `Intl` handles all of that for us.

### How to use it

1. Save as `.html`.
2. Open in browser.
3. Click "Add City" to see the list grow.
4. Notice how "New York" might say "Friday" while "Tokyo" says "Saturday" if you run this late at night!

---

**Would you like me to explain `localStorage` so that when you refresh the page, your selected cities are still there?**
`localStorage` is a built-in browser feature that lets you save simple data (key-value pairs) directly on the user's computer. It survives page refreshes and even browser restarts.

Think of it like a tiny database that lives inside Chrome or Firefox, specifically for your website.

### How it works

1. **Save Data:** `localStorage.setItem('key', 'value')`
2. **Read Data:** `localStorage.getItem('key')`
3. **Delete Data:** `localStorage.removeItem('key')`

**Crucial Limitation:** `localStorage` can only save **Strings**.

- You cannot save an array like `[{ city: 'New York' }]` directly.
- You must convert it to a string first using `JSON.stringify()`.
- When you read it back, you convert it to an array using `JSON.parse()`.

### The Updated "Persistent" World Clock

Here is the modified JavaScript. Replace the `<script>` section in your previous file with this one.

**Changes:**

1. **On Load:** We try to load saved cities. If none exist, we default to New York/Tokyo.
2. **On Change:** Every time you add or remove a clock, we save the new list to storage.

```javascript
    <script>
        // 1. CONSTANTS
        const STORAGE_KEY = 'worldClockCities';
        const container = document.getElementById('clockContainer');
        const select = document.getElementById('zoneSelect');

        // 2. LOAD STATE (The "Persistence" Magic)
        function loadClocks() {
            const saved = localStorage.getItem(STORAGE_KEY);

            if (saved) {
                // If data exists, convert string back to array
                return JSON.parse(saved);
            } else {
                // Default setup if first time visiting
                return [
                    { name: 'New York', zone: 'America/New_York' },
                    { name: 'Tokyo', zone: 'Asia/Tokyo' }
                ];
            }
        }

        let activeClocks = loadClocks();

        // 3. SAVE STATE
        function saveClocks() {
            // Convert array to string and save
            localStorage.setItem(STORAGE_KEY, JSON.stringify(activeClocks));
        }

        // 4. Render Logic (Same as before)
        function renderClocks() {
            container.innerHTML = '';
            activeClocks.forEach((clock, index) => {
                const div = document.createElement('div');
                div.className = 'clock-card';
                div.innerHTML = `
                    <button class="remove-btn" onclick="removeClock(${index})">×</button>
                    <span class="city-name">${clock.name}</span>
                    <div class="time-display" id="time-${index}">--:--:--</div>
                    <div class="date-display" id="date-${index}">Loading...</div>
                `;
                container.appendChild(div);
            });
            updateTimes();
        }

        // 5. Update Times (Same as before)
        function updateTimes() {
            const now = new Date();
            activeClocks.forEach((clock, index) => {
                const timeEl = document.getElementById(`time-${index}`);
                const dateEl = document.getElementById(`date-${index}`);
                if (!timeEl) return;

                const timeString = new Intl.DateTimeFormat('en-US', {
                    timeZone: clock.zone,
                    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
                }).format(now);

                const dateString = new Intl.DateTimeFormat('en-US', {
                    timeZone: clock.zone,
                    weekday: 'short', month: 'short', day: 'numeric'
                }).format(now);

                timeEl.innerText = timeString;
                dateEl.innerText = dateString;
            });
        }

        // 6. Add/Remove with SAVE triggers
        function addClock() {
            const zone = select.value;
            const name = select.options[select.selectedIndex].text.split(' (')[0];

            if (activeClocks.some(c => c.zone === zone)) return alert("City already added!");

            activeClocks.push({ name, zone });
            saveClocks(); // <--- Save after adding
            renderClocks();
        }

        function removeClock(index) {
            activeClocks.splice(index, 1);
            saveClocks(); // <--- Save after removing
            renderClocks();
        }

        // Start
        setInterval(updateTimes, 1000);
        renderClocks();

    </script>

```

### Try it out

1. Update your HTML file with this new script.
2. Open the page.
3. Add "London" and remove "Tokyo".
4. **Refresh the page.**
5. London should still be there, and Tokyo should be gone!

---

**Would you like me to show you how to detect if the user prefers "Dark Mode" in their system settings automatically?**
You can detect if a user's operating system (Windows, macOS, Android, iOS) is set to "Dark Mode" using `window.matchMedia`.

This allows your website to automatically switch themes the moment the user changes their system settings, without them needing to click anything on your page.

### The Magic Query: `prefers-color-scheme`

Just like CSS has `@media (max-width: 600px)` for mobile screens, it has `@media (prefers-color-scheme: dark)` for themes. JavaScript can hook into this.

### 1. The Basic Check

Here is the simplest way to check the current setting when the page loads:

```javascript
// Returns true if the user prefers dark mode
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (prefersDark) {
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.remove("dark-theme");
}
```

### 2. The "Live" Listener

Users might switch themes _while_ your page is open (e.g., sunset triggers auto-dark mode on their phone). To handle this, we add an **Event Listener**.

```javascript
const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");

// Define what happens when the system theme changes
function handleThemeChange(e) {
  if (e.matches) {
    console.log("System switched to DARK mode");
    document.body.setAttribute("data-theme", "dark");
  } else {
    console.log("System switched to LIGHT mode");
    document.body.setAttribute("data-theme", "light");
  }
}

// 1. Listen for future changes
themeQuery.addEventListener("change", handleThemeChange);

// 2. Run once on load to set initial state
handleThemeChange(themeQuery);
```

### 3. Integrating with CSS

To make this work visually, you use CSS Variables (Custom Properties).

```css
/* Default (Light Mode) */
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}

/* Dark Mode Override */
[data-theme="dark"] {
  --bg-color: #1a1a2e;
  --text-color: #ffffff;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition:
    background-color 0.3s,
    color 0.3s; /* Smooth fade */
}
```

### Why use `data-theme`?

Using `document.body.setAttribute('data-theme', 'dark')` is cleaner than adding/removing classes because:

1. **Specificity:** It's easy to target in CSS (`[data-theme="dark"]`).
2. **Debugging:** You can see `data-theme="dark"` right on the `<body>` tag in your browser inspector.

---

**Would you like me to combine everything (World Clock + LocalStorage + System Dark Mode) into one final, polished "app" file for you?**
Here is the final, production-ready **"Universal World Clock"**.

It combines:

1. **Live Time Zones** (using `Intl`).
2. **Persistence** (using `localStorage`).
3. **Auto Dark Mode** (syncs with your OS).
4. **Responsive Design** (works on mobile & desktop).

Save this as `index.html` and open it in your browser.

### The Complete Application

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Universal World Clock</title>
    <style>
      /* --- THEME VARIABLES --- */
      :root {
        /* Light Mode (Default) */
        --bg: #f4f7f6;
        --card-bg: #ffffff;
        --text-main: #2c3e50;
        --text-sec: #7f8c8d;
        --accent: #3498db;
        --danger: #e74c3c;
        --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      /* Dark Mode Override */
      [data-theme="dark"] {
        --bg: #1a1a2e;
        --card-bg: #16213e;
        --text-main: #e94560;
        --text-sec: #aeb6bf;
        --accent: #0f3460;
        --danger: #ff6b6b;
        --shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
      }

      /* --- GLOBAL STYLES --- */
      body {
        font-family: "Segoe UI", system-ui, sans-serif;
        background-color: var(--bg);
        color: var(--text-main);
        margin: 0;
        padding: 2rem;
        transition:
          background-color 0.3s ease,
          color 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
      }

      h1 {
        font-weight: 300;
        letter-spacing: 2px;
        margin-bottom: 2rem;
        text-align: center;
      }

      /* --- CONTROLS --- */
      .controls {
        background: var(--card-bg);
        padding: 1rem;
        border-radius: 12px;
        box-shadow: var(--shadow);
        display: flex;
        gap: 10px;
        margin-bottom: 2rem;
        transition: background 0.3s;
      }

      select,
      button {
        padding: 10px 15px;
        border: 1px solid var(--text-sec);
        border-radius: 6px;
        font-size: 1rem;
        background: var(--bg);
        color: var(--text-main);
        cursor: pointer;
      }

      button.add-btn {
        background-color: var(--accent);
        color: white;
        border: none;
        font-weight: 600;
      }

      button.add-btn:hover {
        opacity: 0.9;
      }

      /* --- GRID LAYOUT --- */
      .clock-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        width: 100%;
        max-width: 1200px;
      }

      /* --- CLOCK CARD --- */
      .clock-card {
        background: var(--card-bg);
        padding: 1.5rem;
        border-radius: 16px;
        box-shadow: var(--shadow);
        position: relative;
        transition:
          transform 0.2s,
          background 0.3s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center; /* Center content */
      }

      .clock-card:hover {
        transform: translateY(-5px);
      }

      .city-name {
        font-size: 1.1rem;
        color: var(--text-sec);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 0.5rem;
      }

      .time-display {
        font-size: 2.5rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums; /* Keeps numbers monospaced prevents jitter */
        margin-bottom: 0.25rem;
      }

      .date-display {
        font-size: 0.9rem;
        color: var(--text-sec);
        font-weight: 500;
      }

      .remove-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
        border: none;
        color: var(--text-sec);
        font-size: 1.5rem;
        line-height: 1;
        padding: 0;
        opacity: 0.5;
        cursor: pointer;
      }

      .remove-btn:hover {
        color: var(--danger);
        opacity: 1;
      }
    </style>
  </head>
  <body>
    <h1>🌍 GLOBAL SYNC</h1>

    <div class="controls">
      <select id="zoneSelect">
        <option value="Local">My Local Time</option>
        <option value="America/New_York">New York (EST)</option>
        <option value="Europe/London">London (GMT)</option>
        <option value="Europe/Paris">Paris (CET)</option>
        <option value="Asia/Dubai">Dubai (GST)</option>
        <option value="Asia/Kolkata">Mumbai (IST)</option>
        <option value="Asia/Tokyo">Tokyo (JST)</option>
        <option value="Australia/Sydney">Sydney (AEDT)</option>
        <option value="Pacific/Honolulu">Honolulu (HST)</option>
      </select>
      <button class="add-btn" onclick="addClock()">+ Add City</button>
    </div>

    <div class="clock-grid" id="clockContainer"></div>

    <script>
      // --- 1. THEME MANAGER (System Preference) ---
      const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");

      function handleThemeChange(e) {
        if (e.matches) {
          document.body.setAttribute("data-theme", "dark");
        } else {
          document.body.removeAttribute("data-theme");
        }
      }
      // Listen for changes and run once on load
      themeQuery.addEventListener("change", handleThemeChange);
      handleThemeChange(themeQuery);

      // --- 2. STATE MANAGEMENT (LocalStorage) ---
      const STORAGE_KEY = "universal_clock_cities";

      function loadClocks() {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved
          ? JSON.parse(saved)
          : [
              { name: "Local Time", zone: "Local" },
              { name: "New York", zone: "America/New_York" },
              { name: "Tokyo", zone: "Asia/Tokyo" },
            ];
      }

      let activeClocks = loadClocks();

      function saveClocks() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(activeClocks));
      }

      // --- 3. DOM RENDERING ---
      const container = document.getElementById("clockContainer");
      const select = document.getElementById("zoneSelect");

      function renderClocks() {
        container.innerHTML = "";
        activeClocks.forEach((clock, index) => {
          const div = document.createElement("div");
          div.className = "clock-card";
          div.innerHTML = `
                    <button class="remove-btn" onclick="removeClock(${index})" title="Remove City">&times;</button>
                    <span class="city-name">${clock.name}</span>
                    <div class="time-display" id="time-${index}">--:--</div>
                    <div class="date-display" id="date-${index}">Loading...</div>
                `;
          container.appendChild(div);
        });
        updateTimes(); // Instant update
      }

      // --- 4. TIME LOGIC (Heartbeat) ---
      function updateTimes() {
        const now = new Date();

        activeClocks.forEach((clock, index) => {
          const timeEl = document.getElementById(`time-${index}`);
          const dateEl = document.getElementById(`date-${index}`);
          if (!timeEl) return;

          // Handle "Local" vs specific zones
          const timeZone = clock.zone === "Local" ? undefined : clock.zone;

          try {
            // Time (HH:MM:SS)
            const timeString = new Intl.DateTimeFormat("en-US", {
              timeZone: timeZone,
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            }).format(now);

            // Date (Day, Month DD)
            const dateString = new Intl.DateTimeFormat("en-US", {
              timeZone: timeZone,
              weekday: "long",
              month: "short",
              day: "numeric",
            }).format(now);

            timeEl.innerText = timeString;
            dateEl.innerText = dateString;
          } catch (e) {
            timeEl.innerText = "Error";
            dateEl.innerText = "Invalid Zone";
          }
        });
      }

      // --- 5. INTERACTION ---
      function addClock() {
        const zone = select.value;
        const name = select.options[select.selectedIndex].text.split(" (")[0];

        // Prevent duplicates
        if (activeClocks.some((c) => c.zone === zone)) {
          alert("You already have this city!");
          return;
        }

        activeClocks.push({ name, zone });
        saveClocks();
        renderClocks();
      }

      function removeClock(index) {
        activeClocks.splice(index, 1);
        saveClocks();
        renderClocks();
      }

      // --- INIT ---
      setInterval(updateTimes, 1000);
      renderClocks();
    </script>
  </body>
</html>
```

### How to test the features

1. **Dark Mode:** Go to your computer's system settings (Display/Appearance) and toggle "Dark Mode" on and off. The app will instantly switch colors from white/blue to dark-blue/neon-pink without reloading.
2. **Persistence:** Add a few random cities (like Dubai or Honolulu). Close the tab completely. Open it again. Your cities will still be there!
3. **Local Time:** Notice the "Local Time" card—it uses `undefined` as the time zone, which forces `Intl` to use whatever your browser's current system time is.

You now have a fully functional web app structure! You can expand this by adding flags, weather icons, or alarms.
