---
title: "Implement Queue using Stacks"
date: 2024-01-20T00:00:00Z
difficulty: "Easy"
topics: ["Stack", "Queue", "Design"]
companies: ["Amazon", "Microsoft", "Bloomberg"]
path: "Advanced"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/implement-queue-using-stacks"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/implement-queue-using-stacks"
hints:
  - "Use two stacks: one for input, one for output."
  - "Transfer elements from input to output only when output is empty."
youtubeId: "Wg8Nd80DYkg"
solutionUrl: "/solutions/implement-queue-using-stacks-solution/"
timeComplexity: "O(1) amortized"
spaceComplexity: "O(n)"
examples:
  - input: "[\"MyQueue\", \"push\", \"push\", \"peek\", \"pop\", \"empty\"]"
    output: "[null, null, null, 1, 1, false]"
    explanation: "Push 1, push 2, peek returns 1 (first in), pop returns 1, empty returns false."
  - input: "[\"MyQueue\", \"push\", \"pop\", \"empty\"]"
    output: "[null, null, 1, true]"
    explanation: "Push 1, pop returns 1, queue is now empty."
constraints:
  - "1 <= x <= 9"
  - "At most 100 calls will be made to push, pop, peek, and empty"
  - "All calls to pop and peek are valid"
realWorld:
  - title: "Message Queuing"
    description: "Implementing FIFO message queues using stack-based storage."
  - title: "Task Scheduling"
    description: "Managing job queues with stack-based memory allocators."
  - title: "Browser History"
    description: "Implementing forward navigation using back stack."
---

Implement a **first in first out (FIFO)** queue using only **two stacks**. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).

Implement the `MyQueue` class:
- `void push(int x)` Pushes element x to the back of the queue
- `int pop()` Removes the element from the front and returns it
- `int peek()` Returns the element at the front
- `boolean empty()` Returns `true` if the queue is empty, `false` otherwise
