---
title: "Min Stack"
date: 2024-01-12T00:00:00Z
difficulty: "Medium"
topics: ["Stack", "Design"]
companies: ["Amazon", "Bloomberg", "Microsoft"]
path: "Advanced"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/min-stack"
hints:
  - "Store the minimum alongside each element."
  - "Or use two stacks: one for values, one for tracking minimums."
youtubeId: "qkLl7nAwDPo"
solutionUrl: "/solutions/min-stack-solution/"
timeComplexity: "O(1)"
spaceComplexity: "O(n)"
examples:
  - input: "[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"]"
    output: "[null,null,null,null,-3,null,0,-2]"
    explanation: "Push -2, 0, -3. getMin returns -3. Pop removes -3. top returns 0. getMin now returns -2."
  - input: "[\"MinStack\",\"push\",\"getMin\",\"push\",\"getMin\"]"
    output: "[null,null,5,null,1]"
    explanation: "Push 5, min is 5. Push 1, min is now 1."
constraints:
  - "-2^31 <= val <= 2^31 - 1"
  - "At most 3 * 10^4 calls will be made to push, pop, top, and getMin"
  - "pop, top and getMin will always be called on non-empty stacks"
realWorld:
  - title: "Stock Trading Systems"
    description: "Tracking the minimum price in a sliding window of recent trades."
  - title: "Resource Monitoring"
    description: "Keeping track of minimum resource usage for scaling decisions."
  - title: "Order Book Systems"
    description: "Maintaining the best bid/ask prices in financial exchanges."
---

Design a stack that supports push, pop, top, and retrieving the **minimum element** in **constant time**.

Implement the `MinStack` class:
- `MinStack()` initializes the stack object
- `void push(int val)` pushes the element onto the stack
- `void pop()` removes the element on the top of the stack
- `int top()` gets the top element of the stack
- `int getMin()` retrieves the minimum element in the stack
