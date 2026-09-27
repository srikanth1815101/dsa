---
title: "Add First"
date: 2026-09-27T10:19:00+05:30
difficulty: "Easy"
topics: ["Linked List", "Data Structures"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AddFirst/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AddFirst/engineering"

hints:
  - "Create a new node holding the given value and set its next pointer to the current head of the list."
  - "Update the head reference to point to this newly created node."

youtubeId: ""

solutionUrl: "/solutions/add-first-solution/"

timeComplexity: "O(1) insertion, O(n) array conversion"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, 30], val = 5"
    output: "[5, 10, 20, 30]"
    explanation: "Prepending 5 before head element 10 places 5 at the front of the linked list."
  - input: "arr = [], val = 1"
    output: "[1]"
    explanation: "Adding to an empty list makes the new node both head and tail."

constraints:
  - "0 <= arr.length <= 10^5"
  - "-10^9 <= arr[i], val <= 10^9"
  - "The returned array must represent the exact sequence of nodes in the linked list starting from head."

realWorld:
  - title: "Browser Navigation History Stacks"
    description: "Web browsers prepend newly visited URLs at the front of back-stack linked lists."
  - title: "Recent Notifications Feed"
    description: "Social media and push messaging streams prepend new incoming notifications to user activity lists."
  - title: "Undo Command Stacks"
    description: "Document editors prepend newly executed action nodes to the head of undo sequence chains."
---
<!-- All rights reserved to CSRGO DSA -->

Implement the `addFirst` operation for a singly linked list.

Given an array of integers `arr` representing the initial nodes of a linked list in order and an integer `val`, insert a new node containing `val` at the beginning (head) of the linked list.

Return an array representing the sequence of elements in the linked list after inserting `val` at the front.
