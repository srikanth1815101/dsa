---
title: "Intersection Point - Solution"
problemUrl: "/problems/intersection-point/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the intersection node of two linked lists in $O(n + m)$ time and $O(1)$ space without knowing their lengths beforehand:
1. Maintain two pointers, `pA` starting at `headA` and `pB` starting at `headB`.
2. In each iteration, advance both pointers by one step.
3. When `pA` reaches `null`, redirect it to `headB`. Similarly, when `pB` reaches `null`, redirect it to `headA`.
4. If the lists intersect, both pointers travel an equal total distance (`lenA + lenB`) and will collide exactly at the intersection node.
5. If the lists do not intersect, both pointers will eventually reach `null` simultaneously after traversing `lenA + lenB` nodes.

### Step-by-Step Algorithm:
1. Build both linked lists according to `l1`, `l2`, `skip1`, and `skip2`, splicing the shared tail segment if an intersection exists.
2. If either head is null, return -1.
3. Initialize `pA = headA` and `pB = headB`.
4. While `pA != pB`:
   - Set `pA = (pA == null) ? headB : pA.next`.
   - Set `pB = (pB == null) ? headA : pB.next`.
5. If `pA != null`, return `pA.val`. Otherwise, return -1.

## Code

```java
public static int solve(int[] l1, int[] l2, int skip1, int skip2) {
    class Node {
        int val;
        Node next;
        Node(int val) {
            this.val = val;
        }
    }

    Node commonHead = null;
    Node commonTail = null;
    if (skip1 < l1.length && skip2 < l2.length) {
        commonHead = new Node(l1[skip1]);
        commonTail = commonHead;
        for (int i = skip1 + 1; i < l1.length; i = i + 1) {
            commonTail.next = new Node(l1[i]);
            commonTail = commonTail.next;
        }
    }

    Node headA = null;
    Node tailA = null;
    for (int i = 0; i < skip1; i = i + 1) {
        Node node = new Node(l1[i]);
        if (headA == null) {
            headA = node;
            tailA = node;
        } else {
            tailA.next = node;
            tailA = node;
        }
    }
    if (headA == null) {
        headA = commonHead;
    } else {
        tailA.next = commonHead;
    }

    Node headB = null;
    Node tailB = null;
    for (int i = 0; i < skip2; i = i + 1) {
        Node node = new Node(l2[i]);
        if (headB == null) {
            headB = node;
            tailB = node;
        } else {
            tailB.next = node;
            tailB = node;
        }
    }
    if (headB == null) {
        headB = commonHead;
    } else {
        tailB.next = commonHead;
    }

    if (headA == null || headB == null) {
        return -1;
    }

    Node pA = headA;
    Node pB = headB;

    while (pA != pB) {
        if (pA == null) {
            pA = headB;
        } else {
            pA = pA.next;
        }

        if (pB == null) {
            pB = headA;
        } else {
            pB = pB.next;
        }
    }

    if (pA != null) {
        return pA.val;
    }
    return -1;
}
```
