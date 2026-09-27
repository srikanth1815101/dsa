---
title: "Min Stack - Solution"
problemUrl: "/problems/min-stack/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To achieve constant $O(1)$ time for `getMin()` alongside `push`, `pop`, and `top`, we maintain two synchronized stacks:
1. `data`: stores all pushed elements.
2. `minStack`: stores the minimum value corresponding to each state of the `data` stack.

When an element `val` is pushed:
- `data.push(val)` is performed.
- If `minStack` is empty or `val <= minStack.peek()`, we also push `val` onto `minStack`.

When an element is popped:
- `int val = data.pop()` removes the top element.
- If `val == minStack.peek()`, we pop from `minStack` as well to maintain the accurate minimum for remaining elements.

For `top()`, we inspect `data.peek()`. For `getMin()`, we inspect `minStack.peek()`. Every operation executes in strictly $O(1)$ time.

### Step-by-Step Algorithm:
1. Initialize an empty stack `data` and an empty stack `minStack`.
2. Initialize a `List<Integer>` named `results`.
3. For each string `op` in `operations`:
   - If `op.startsWith("push")`, parse the integer `val` from `op.substring(5)`:
     - Push `val` to `data`.
     - If `minStack.isEmpty()` or `val <= minStack.peek()`, push `val` to `minStack`.
     - Add `null` to `results`.
   - Else if `op.equals("pop")`:
     - Pop `val` from `data`.
     - If `val == minStack.peek()`, pop from `minStack`.
     - Add `null` to `results`.
   - Else if `op.equals("top")`:
     - Add `data.peek()` to `results`.
   - Else if `op.equals("getMin")`:
     - Add `minStack.peek()` to `results`.
4. Return `results`.

## Code

```java
public static List<Integer> solve(String[] operations) {
    Stack<Integer> data = new Stack<>();
    Stack<Integer> minStack = new Stack<>();
    List<Integer> results = new ArrayList<>();
    for (int i = 0; i < operations.length; i = i + 1) {
        String op = operations[i];
        if (op.startsWith("push")) {
            int val = Integer.parseInt(op.substring(5).trim());
            data.push(val);
            if (minStack.isEmpty() || val <= minStack.peek()) {
                minStack.push(val);
            }
            results.add(null);
        } else if (op.equals("pop")) {
            int val = data.pop();
            if (val == minStack.peek()) {
                minStack.pop();
            }
            results.add(null);
        } else if (op.equals("top")) {
            results.add(data.peek());
        } else if (op.equals("getMin")) {
            results.add(minStack.peek());
        }
    }
    return results;
}
```
