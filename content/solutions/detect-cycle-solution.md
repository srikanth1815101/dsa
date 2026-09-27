---
title: "Detect Cycle - Solution"
problemUrl: "/problems/detect-cycle/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Floyd's Tortoise and Hare algorithm detects cycles in a linked list using two pointers moving at different speeds:
1. Initialize `slow` and `fast` pointers at `head`.
2. Move `slow` by 1 step (`slow = slow.next`) and `fast` by 2 steps (`fast = fast.next.next`).
3. If there is no cycle, `fast` will eventually reach the end of the list (`null`).
4. If there is a cycle, the distance between `fast` and `slow` decreases by 1 in each step once both are in the loop, guaranteeing that `fast` will inevitably catch up and meet `slow`.

### Step-by-Step Algorithm:
1. Build the linked list from `arr` and connect the tail node to the node at index `pos` if `pos >= 0`.
2. If `head == null || head.next == null`, return `false`.
3. Initialize `slow = head` and `fast = head`.
4. While `fast != null && fast.next != null`:
   - Advance `slow = slow.next`.
   - Advance `fast = fast.next.next`.
   - If `slow == fast`, a cycle exists: return `true`.
5. If the loop terminates because `fast` reached `null`, no cycle exists: return `false`.

## Code

```java
public static boolean solve(int[] arr, int pos) {
    if (arr.length == 0 || pos < 0 || pos >= arr.length) {
        return false;
    }

    class Node {
        int val;
        Node next;
        Node(int val) {
            this.val = val;
        }
    }

    Node[] nodes = new Node[arr.length];
    for (int i = 0; i < arr.length; i = i + 1) {
        nodes[i] = new Node(arr[i]);
    }
    for (int i = 0; i < arr.length - 1; i = i + 1) {
        nodes[i].next = nodes[i + 1];
    }
    if (pos >= 0 && pos < arr.length) {
        nodes[arr.length - 1].next = nodes[pos];
    }

    Node slow = nodes[0];
    Node fast = nodes[0];

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }

    return false;
}
```
