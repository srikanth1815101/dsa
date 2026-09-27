---
title: "Remove at Index"
date: 2026-09-27T10:24:00+05:30
difficulty: "Easy"
topics: ["Linked List", "Data Structures"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RemoveAtIndex/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/RemoveAtIndex/engineering"

hints:
  - "If index is 0, the operation is equivalent to removeFirst."
  - "Otherwise, traverse to index - 1 and update its next reference to bypass the target node by pointing to curr.next.next."

youtubeId: ""

solutionUrl: "/solutions/remove-at-index-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, 30, 40], idx = 2"
    output: "[10, 20, 40]"
    explanation: "Node at index 2 (value 30) is removed, linking 20 directly to 40."
  - input: "arr = [5, 10], idx = 0"
    output: "[10]"
    explanation: "Removing index 0 removes the head element 5, leaving [10]."

constraints:
  - "1 <= arr.length <= 10^5"
  - "0 <= idx < arr.length"
  - "-10^9 <= arr[i] <= 10^9"

realWorld:
  - title: "Shopping Cart Item Deletion"
    description: "E-commerce checkout sessions delete individual items by index from active shopping cart item lists."
  - title: "Active Playlist Track Removal"
    description: "Media players allow users to remove an upcoming track at an arbitrary position in their playing queue."
  - title: "Tab Management in Web Browsers"
    description: "Browser window managers detach closed tabs at specific positions from the open tabs linked sequence."
---
<!-- All rights reserved to CSRGO DSA -->

Implement the `removeAtIndex` operation for a singly linked list.

Given an array of integers `arr` representing the initial nodes of a linked list and a 0-based integer index `idx`, remove the node at index `idx` from the linked list.

Return an array representing the sequence of remaining elements in the linked list after the deletion.
