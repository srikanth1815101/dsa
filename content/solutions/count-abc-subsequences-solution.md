---
title: "Count ABC Subsequences - Solution"
problemUrl: "/problems/count-abc-subsequences/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We track the cumulative counts of valid prefixes for patterns $a^+$, $a^+ b^+$, and $a^+ b^+ c^+$:

1. **State Definition**:
   - `a`: count of subsequences matching $a^+$
   - `ab`: count of subsequences matching $a^+ b^+$
   - `abc`: count of subsequences matching $a^+ b^+ c^+$
2. **Transition Rules**:
   - When encountering `'a'`: The current `'a'` can either start a new sequence on its own ($+1$), attach to all existing $a^+$ sequences, or not attach. Hence, `a = 2 * a + 1`.
   - When encountering `'b'`: The current `'b'` can attach to existing $a^+ b^+$ sequences (doubling them), or attach to all existing $a^+$ sequences to create new $a^+ b^+$ sequences. Hence, `ab = 2 * ab + a`.
   - When encountering `'c'`: The current `'c'` can attach to existing $a^+ b^+ c^+$ sequences (doubling them), or attach to all existing $a^+ b^+$ sequences to complete new $a^+ b^+ c^+$ sequences. Hence, `abc = 2 * abc + ab`.
3. Other characters can be safely skipped.
4. Total valid $a^+ b^+ c^+$ subsequences are returned in `abc` in $O(n)$ time and $O(1)$ auxiliary space.

### Step-by-Step Algorithm:
1. If `s == null || s.length() == 0`, return `0`.
2. Initialize `int a = 0`, `int ab = 0`, and `int abc = 0`.
3. Loop through each character `ch` in `s`:
   - If `ch == 'a'`: `a = 2 * a + 1`.
   - Else if `ch == 'b'`: `ab = 2 * ab + a`.
   - Else if `ch == 'c'`: `abc = 2 * abc + ab`.
4. Return `abc`.

## Code

```java
public static int solve(String s) {
    if (s == null || s.length() == 0) {
        return 0;
    }

    int a = 0;
    int ab = 0;
    int abc = 0;

    for (int i = 0; i < s.length(); i = i + 1) {
        char ch = s.charAt(i);
        if (ch == 'a') {
            a = 2 * a + 1;
        } else if (ch == 'b') {
            ab = 2 * ab + a;
        } else if (ch == 'c') {
            abc = 2 * abc + ab;
        }
    }

    return abc;
}
```
