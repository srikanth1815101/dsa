---
title: "Implement Queue using Stacks"
date: 2024-01-09
problemUrl: "/problems/implement-queue/"
---

## Approach

A queue is FIFO (First-In-First-Out) while a stack is LIFO (Last-In-First-Out).
We can use two stacks: `s1` (input) and `s2` (output).

- **Push**: Always push to `s1`.
- **Pop/Peek**:
    - If `s2` is empty, move all elements from `s1` to `s2`. This reverses their order, making the first element pushed to `s1` appear at the top of `s2`.
    - Pop/Peek from `s2`.

### Complexity

- **Time Complexity**: Amortized O(1). Each element is pushed once and popped once.
- **Space Complexity**: O(n).

## Code

```java
class MyQueue {
    Stack<Integer> s1 = new Stack<>();
    Stack<Integer> s2 = new Stack<>();

    public void push(int x) {
        s1.push(x);
    }
    
    public int pop() {
        peek();
        return s2.pop();
    }
    
    public int peek() {
        if (s2.isEmpty()) {
            while (!s1.isEmpty()) s2.push(s1.pop());
        }
        return s2.peek();
    }
    
    public boolean empty() {
        return s1.isEmpty() && s2.isEmpty();
    }
}
```
