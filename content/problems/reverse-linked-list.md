---
title: "Reverse Linked List"
date: 2024-01-06T00:00:00Z
difficulty: "Easy"
topics: ["Linked List", "Recursion"]
companies: ["Amazon", "Microsoft", "Apple"]
path: "Basic"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/reverse-linked-list"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/reverse-linked-list"
hints:
  - "Use three pointers: prev, curr, and next."
  - "At each step, reverse the current node's pointer and move forward."
youtubeId: "G0_I-DBvHhm"
solutionUrl: "/solutions/reverse-linked-list-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(1)"
examples:
  - input: "head = [1,2,3,4,5]"
    output: "[5,4,3,2,1]"
    explanation: "Reverse all the links: 1←2←3←4←5, so 5 becomes the new head."
  - input: "head = [1,2]"
    output: "[2,1]"
    explanation: "Simply swap the two nodes: 1←2 becomes 2→1."
constraints:
  - "The number of nodes is in the range [0, 5000]"
  - "-5000 <= Node.val <= 5000"
realWorld:
  - title: "Undo Functionality"
    description: "Reversing a sequence of user actions to implement undo operations."
  - title: "Browser History"
    description: "Navigating backwards through visited pages requires reverse traversal."
  - title: "Text Editor"
    description: "Reversing text or command history for editing operations."
---

Given the `head` of a singly linked list, **reverse the list**, and return the reversed list.
