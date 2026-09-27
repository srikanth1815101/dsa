---
title: "Add Two Linked Lists - Solution"
problemUrl: "/problems/add-two-linked-lists/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Since the digits are stored in reverse order, the least significant digits appear at the heads of the lists. This matches standard column-by-column arithmetic from right to left:
1. Initialize a pointer to the head of each list and a `carry` variable initialized to 0.
2. At each step, compute `sum = digit1 + digit2 + carry`.
3. Update `carry = sum / 10`.
4. Create a new node with `sum % 10` and append it to our result list.
5. Continue until both lists are traversed and no carry remains.

### Step-by-Step Algorithm:
1. Create a dummy head node and pointer `curr = dummy`.
2. Initialize `carry = 0`, index `i = 0`, and index `j = 0`.
3. While `i < l1.length || j < l2.length || carry != 0`:
   - `x = (i < l1.length) ? l1[i] : 0`.
   - `y = (j < l2.length) ? l2[j] : 0`.
   - `sum = x + y + carry`.
   - `carry = sum / 10`.
   - Append `sum % 10` to the result.
   - Advance `i` if valid, and advance `j` if valid.
4. Convert the accumulated values into an integer array and return it.

## Code

```java
public static int[] solve(int[] l1, int[] l2) {
    int i = 0;
    int j = 0;
    int carry = 0;

    int maxLen = l1.length;
    if (l2.length > maxLen) {
        maxLen = l2.length;
    }
    int[] temp = new int[maxLen + 1];
    int count = 0;

    while (i < l1.length || j < l2.length || carry != 0) {
        int x = 0;
        if (i < l1.length) {
            x = l1[i];
            i = i + 1;
        }

        int y = 0;
        if (j < l2.length) {
            y = l2[j];
            j = j + 1;
        }

        int sum = x + y + carry;
        carry = sum / 10;
        temp[count] = sum % 10;
        count = count + 1;
    }

    int[] result = new int[count];
    for (int k = 0; k < count; k = k + 1) {
        result[k] = temp[k];
    }

    return result;
}
```
