---
title: "Min Stack - Solution"
problemUrl: "/problems/min-stack/"
---

## Explanation

The challenge is achieving O(1) time for `getMin()`. The key insight is to **track the minimum at each level** of the stack.

**Approach:** Use two stacks:
1. **Main stack** - stores all values normally
2. **Min stack** - stores the minimum value at each corresponding level

When pushing:
- Always push to main stack
- Push to min stack only if the value is ≤ current minimum

When popping:
- If popped value equals min stack's top, pop from min stack too

## Code

```java
class MinStack {
    private Stack<Integer> stack;
    private Stack<Integer> minStack;

    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }

    public void push(int val) {
        stack.push(val);
        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }

    public void pop() {
        if (stack.pop().equals(minStack.peek())) {
            minStack.pop();
        }
    }

    public int top() {
        return stack.peek();
    }

    public int getMin() {
        return minStack.peek();
    }
}
```
