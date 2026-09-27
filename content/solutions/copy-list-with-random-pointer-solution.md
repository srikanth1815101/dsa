---
title: "Copy List with Random Pointer - Solution"
problemUrl: "/problems/copy-list-with-random-pointer/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We can clone a linked list with random pointers in $O(n)$ time and $O(1)$ auxiliary space by interleaving the cloned nodes directly into the original list:
1. Pass 1: Duplicate each node in-place such that each cloned node `A'` is inserted immediately after its original node `A`: `A -> A' -> B -> B'`.
2. Pass 2: Assign random pointers for the cloned nodes: if `curr.random != null`, then `curr.next.random = curr.random.next`.
3. Pass 3: Decouple the intertwined list to restore the original list and extract the cloned list.

### Step-by-Step Algorithm:
1. If the input list is empty, return an empty array.
2. Build the linked list with random pointers using the given 2D array.
3. Traverse the list: for each node `curr`, create a copy node `copy = new Node(curr.val)`, insert `copy` between `curr` and `curr.next`, then advance `curr = copy.next`.
4. Traverse again: for each original node `curr`, set `curr.next.random = (curr.random != null) ? curr.random.next : null`, then advance `curr = curr.next.next`.
5. Separate the lists: restore `curr.next = copy.next` and build the cloned chain `copy.next = (copy.next != null) ? copy.next.next : null`.
6. Convert the cloned list back into `[val, randomIndex]` format and return.

## Code

```java
public static int[][] solve(int[][] arr) {
    if (arr.length == 0) {
        return new int[0][0];
    }

    class Node {
        int val;
        Node next;
        Node random;
        Node(int val) {
            this.val = val;
        }
    }

    int n = arr.length;
    Node[] originalNodes = new Node[n];
    for (int i = 0; i < n; i = i + 1) {
        originalNodes[i] = new Node(arr[i][0]);
    }
    for (int i = 0; i < n - 1; i = i + 1) {
        originalNodes[i].next = originalNodes[i + 1];
    }
    for (int i = 0; i < n; i = i + 1) {
        int rIdx = arr[i][1];
        if (rIdx >= 0 && rIdx < n) {
            originalNodes[i].random = originalNodes[rIdx];
        }
    }

    Node curr = originalNodes[0];
    while (curr != null) {
        Node copy = new Node(curr.val);
        copy.next = curr.next;
        curr.next = copy;
        curr = copy.next;
    }

    curr = originalNodes[0];
    while (curr != null) {
        if (curr.random != null) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }

    Node headCopy = originalNodes[0].next;
    curr = originalNodes[0];
    Node currCopy = headCopy;
    while (curr != null) {
        curr.next = curr.next.next;
        if (currCopy.next != null) {
            currCopy.next = currCopy.next.next;
        }
        curr = curr.next;
        currCopy = currCopy.next;
    }

    Node[] clonedNodes = new Node[n];
    curr = headCopy;
    for (int i = 0; i < n; i = i + 1) {
        clonedNodes[i] = curr;
        curr = curr.next;
    }

    int[][] result = new int[n][2];
    for (int i = 0; i < n; i = i + 1) {
        result[i][0] = clonedNodes[i].val;
        int rIdx = -1;
        if (clonedNodes[i].random != null) {
            for (int j = 0; j < n; j = j + 1) {
                if (clonedNodes[j] == clonedNodes[i].random) {
                    rIdx = j;
                    break;
                }
            }
        }
        result[i][1] = rIdx;
    }

    return result;
}
```
