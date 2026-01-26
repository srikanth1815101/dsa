---
title: "Reverse Linked List"
date: 2024-01-08T00:00:00Z
difficulty: "Easy"
topics: ["Linked List"]
datastructures: ["Linked List"]
companies: ["Amazon", "Microsoft", "Apple"]
path: "Basic"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/reverse-linked-list"
hints:
  - "Iterate through the list and change the next pointer of each node to point to the previous node."
  - "Keep track of prev, curr, and next nodes."
youtubeId: "G0_I-DBvHhm"
solutionUrl: "/solutions/reverse-linked-list-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(1)"
examples:
  - input: "head = [1,2,3,4,5]"
    output: "[5,4,3,2,1]"
    explanation: "Reverse the entire linked list"
  - input: "head = [1,2]"
    output: "[2,1]"
constraints:
  - "The number of nodes in the list is in the range [0, 5000]"
  - "-5000 <= Node.val <= 5000"
realWorld:
  - title: "Undo Functionality"
    description: "Reversing a sequence of actions or state changes."
  - title: "Browser History"
    description: "Going back through visited pages requires traversing history in reverse."
javaTemplate: |
  class Solution {
      public ListNode reverseList(ListNode head) {
          
      }
  }
---

Given the `head` of a singly linked list, reverse the list, and return the reversed list.

## Approach

Use three pointers (prev, current, next) to reverse the links iteratively. Start with prev as null and iterate through the list, reversing each link.
