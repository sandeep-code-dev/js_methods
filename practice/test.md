# Frequently Asked Questions (FAQ)

This document provides answers to common programming questions, often including code examples.

---

## Q1: How do I reverse a string in Python?

<details>
  <summary>Click to view answer and code</summary>

To reverse a string in Python, you can use slicing with a step of `-1`. This creates a reversed copy of the string.

### Example:

```python
def reverse_string(s):
    return s[::-1]

my_string = "hello"
reversed_string = reverse_string(my_string)
print(f"Original: {my_string}")
print(f"Reversed: {reversed_string}")
# Output:
# Original: hello
# Reversed: olleh
```

Alternatively, you can use a `for` loop or the `reversed()` function with `join()`, but slicing is generally considered the most Pythonic and efficient method.

</details>

---

