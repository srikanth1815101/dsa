---
title: "Decode String - Solution"
problemUrl: "/problems/decode-string/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To decode strings with nested repeating blocks, a stack-based approach tracks both the multiplier counts and the partially assembled string prefixes.

We maintain two stacks:
1. `countStack`: holds the integer repetition counts `k`.
2. `stringStack`: holds the string built prior to opening the current bracket.

As we iterate through the characters of `s`:
- **Digit**: Accumulate multi-digit numbers by multiplying the running count by 10 and adding the digit.
- **`'['`**: The current number `k` and current `StringBuilder` are complete for this level. Push `k` onto `countStack`, push `currentString.toString()` onto `stringStack`, and reset both to 0 and empty.
- **`']'`**: Pop the repetition multiplier `count` from `countStack`, and the previous string `prev` from `stringStack`. Repeat `currentString` `count` times, append it to `prev`, and set `currentString` to the combined result.
- **Letter**: Simply append the character to `currentString`.

When the loop terminates, `currentString.toString()` contains the fully decoded string.

### Step-by-Step Algorithm:
1. Initialize `Stack<Integer> countStack` and `Stack<String> stringStack`.
2. Initialize `StringBuilder currentString = new StringBuilder()` and `int currentCount = 0`.
3. For each character `ch` in `s`:
   - If `ch` is a digit: `currentCount = currentCount * 10 + (ch - '0')`.
   - Else if `ch == '['`:
     - Push `currentCount` to `countStack`.
     - Push `currentString.toString()` to `stringStack`.
     - Reset `currentString` to empty and `currentCount = 0`.
   - Else if `ch == ']'`:
     - Pop `count` from `countStack`.
     - Pop `prev` from `stringStack`.
     - Create a `StringBuilder temp = new StringBuilder(prev)`.
     - Append `currentString` to `temp` `count` times.
     - Set `currentString = temp`.
   - Else:
     - Append `ch` to `currentString`.
4. Return `currentString.toString()`.

## Code

```java
public static String solve(String s) {
    Stack<Integer> countStack = new Stack<>();
    Stack<String> stringStack = new Stack<>();
    StringBuilder currentString = new StringBuilder();
    int currentCount = 0;

    for (int i = 0; i < s.length(); i = i + 1) {
        char ch = s.charAt(i);
        if (Character.isDigit(ch)) {
            currentCount = currentCount * 10 + (ch - '0');
        } else if (ch == '[') {
            countStack.push(currentCount);
            stringStack.push(currentString.toString());
            currentString = new StringBuilder();
            currentCount = 0;
        } else if (ch == ']') {
            int count = countStack.pop();
            StringBuilder temp = new StringBuilder(stringStack.pop());
            for (int j = 0; j < count; j = j + 1) {
                temp.append(currentString);
            }
            currentString = temp;
        } else {
            currentString.append(ch);
        }
    }

    return currentString.toString();
}
```
