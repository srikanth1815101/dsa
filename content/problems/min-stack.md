---
title: "Min Stack"
date: 2026-09-27T10:13:00+05:30
difficulty: "Medium"
topics: ["Stack", "Design"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MinStack/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MinStack/engineering"

hints:
  - "Maintain a secondary stack that tracks the minimum element seen so far at each depth."
  - "When popping from the primary stack, pop from the minimum stack as well if the popped element equals the current minimum."

youtubeId: ""

solutionUrl: "/solutions/min-stack-solution/"

timeComplexity: "O(1) per operation"
spaceComplexity: "O(n)"

examples:
  - input: "operations = [\"push -2\", \"push 0\", \"push -3\", \"getMin\", \"pop\", \"top\", \"getMin\"]"
    output: "[null, null, null, -3, null, 0, -2]"
    explanation: "After pushing -2, 0, -3, getMin returns -3. After popping -3, top is 0 and getMin is -2."
  - input: "operations = [\"push 5\", \"push 3\", \"getMin\", \"push 7\", \"getMin\"]"
    output: "[null, null, 3, null, 3]"
    explanation: "Pushed 5 then 3 (min is 3). Pushed 7 (min remains 3)."

constraints:
  - "1 <= operations.length <= 10^5"
  - "Methods pop, top and getMin will always be called on non-empty stacks."
  - "All values pushed are between -2^31 and 2^31 - 1."

realWorld:
  - title: "Database Transaction Rollback Points"
    description: "Transaction logs preserve minimum isolation levels across nested savepoints using auxiliary tracking stacks."
  - title: "Memory Allocation Watermarks"
    description: "Embedded memory allocators track low-watermark memory thresholds across nested execution frames."
  - title: "Undo/Redo State Management"
    description: "Graphic design tools track historical minimal canvas bounding coordinates across user operation undo stacks."
---
<!-- All rights reserved to CSRGO DSA -->

Design a stack that supports push, pop, top, and retrieving the minimum element in constant $O(1)$ time.

Given an array of strings `operations` where each operation is one of:
- `"push X"`: Pushes integer `X` onto the stack (returns `null`).
- `"pop"`: Removes the element on top of the stack (returns `null`).
- `"top"`: Gets the top element of the stack (returns the integer value).
- `"getMin"`: Retrieves the minimum element in the stack (returns the integer value).

Execute all operations sequentially and return a list of results corresponding to each operation.
