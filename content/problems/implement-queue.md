---
title: "Implement Queue using Stacks"
date: 2024-01-09T10:00:00Z
difficulty: "Easy"
topics: ["Stack", "Queue", "Design"]
datastructures: ["Stack", "Queue"]
companies: ["Amazon", "Microsoft", "Bloomberg"]
path: "Advanced"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/queue"
hints:
  - "Use two stacks: one input stack and one output stack."
  - "Move elements from input to output only when output is empty."
youtubeId: "Wg8Nd80DYkg"
solutionUrl: "/solutions/implement-queue-solution/"
timeComplexity: "O(1) amortized"
spaceComplexity: "O(n)"
examples:
  - input: "[\"MyQueue\", \"push\", \"push\", \"peek\", \"pop\", \"empty\"]"
    output: "[null, null, null, 1, 1, false]"
    explanation: "MyQueue myQueue = new MyQueue(); myQueue.push(1); myQueue.push(2); myQueue.peek(); // return 1; myQueue.pop(); // return 1; myQueue.empty(); // return false"
  - input: "[\"MyQueue\", \"push\", \"peek\", \"empty\"]"
    output: "[null, 1, 1, false]"
    explanation: "MyQueue q = new MyQueue(); q.push(1); q.peek(); // returns 1; q.empty(); // returns false"
constraints:
  - "1 <= x <= 9"
  - "At most 100 calls will be made to push, pop, peek, and empty"
  - "All the calls to pop and peek are valid"
realWorld:
  - title: "CPU Task Scheduling"
    description: "Operating systems use queues (ready queue) to manage processes waiting for CPU time, often prioritizing based on arrival."
  - title: "Printer Spooling"
    description: "Print jobs are sent to a queue and processed in the order they were received (FIFO)."
  - title: "Web Server Request Handling"
    description: "Incoming HTTP requests are queued to be handled by worker threads in order, preventing overload."
javaTemplate: |
  class MyQueue {
      public MyQueue() {
          // Initialize your data structure here
      }
      
      public void push(int x) {
          // Push element x to the back of queue
      }
      
      public int pop() {
          // Removes the element from front of queue and returns it
          return 0;
      }
      
      public int peek() {
          // Get the front element
          return 0;
      }
      
      public boolean empty() {
          // Returns whether the queue is empty
          return false;
      }
  }
---

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).

## Approach

Use two stacks: one for pushing elements and one for popping. Transfer elements from push stack to pop stack when needed.
