---
title: "Detect Cycle II - Solution"
problemUrl: "/problems/detect-cycle-ii/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Floyd's algorithm can also locate the start of the cycle using mathematical pointer analysis:
1. Phase 1 (Detect Cycle): Advance `slow` by 1 step and `fast` by 2 steps. If `fast` reaches null, no cycle exists. When `slow == fast`, they meet inside the cycle.
2. Phase 2 (Locate Entry): Let distance from head to cycle entrance be $L_1$, and distance from entrance to meeting point be $L_2$. The remaining distance in the cycle back to the entrance is $C - L_2$.
3. Mathematically, $L_1 = k \cdot C - L_2$. Therefore, placing one pointer at `head` and leaving the other at the meeting point, advancing both 1 step at a time guarantees they will meet exactly at the cycle entrance node.

### Step-by-Step Algorithm:
1. Construct the linked list from `arr` and connect the tail to index `pos` if valid.
2. If `pos < 0 || pos >= arr.length`, return -1.
3. Initialize `slow = head` and `fast = head`.
4. While `fast != null && fast.next != null`:
   - `slow = slow.next`.
   - `fast = fast.next.next`.
   - If `slow == fast`, break out of loop.
5. If `fast == null || fast.next == null`, return -1.
6. Reset `slow = head`.
7. While `slow != fast`:
   - `slow = slow.next`.
   - `fast = fast.next`.
8. Return `slow.val`.

## Code

```java
public static int solve(int[] arr, int pos) {
    if (arr.length == 0 || pos < 0 || pos >= arr.length) {
        return -1;
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
    nodes[arr.length - 1].next = nodes[pos];

    Node slow = nodes[0];
    Node fast = nodes[0];
    boolean hasCycle = false;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }

    if (!hasCycle) {
        return -1;
    }

    slow = nodes[0];
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow.val;
}
```
