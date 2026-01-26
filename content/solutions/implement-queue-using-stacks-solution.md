---
title: "Implement Queue using Stacks - Solution"
problemUrl: "/problems/implement-queue-using-stacks/"
---

## Explanation

The key insight is to use **two stacks** and **lazy transfer**. Elements are pushed to the input stack. When we need to pop or peek, we transfer from input to output if output is empty—this reverses the order, giving us FIFO behavior.

**Why this works:** The first element pushed to input becomes the last in input stack. When transferred to output, it becomes the first (top) in output—exactly what we need for a queue.

**Amortized O(1):** Each element is moved at most twice (once to input, once to output), so all operations are O(1) amortized.

## Code

```java
class MyQueue {
    private Stack<Integer> input = new Stack<>();
    private Stack<Integer> output = new Stack<>();

    public void push(int x) {
        input.push(x);
    }
    
    public int pop() {
        peek();
        return output.pop();
    }
    
    public int peek() {
        if (output.isEmpty()) {
            while (!input.isEmpty()) {
                output.push(input.pop());
            }
        }
        return output.peek();
    }
    
    public boolean empty() {
        return input.isEmpty() && output.isEmpty();
    }
}
```
