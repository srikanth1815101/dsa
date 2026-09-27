---
title: "Reverse Nodes in K Group - Solution"
problemUrl: "/problems/reverse-nodes-in-k-group/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To reverse nodes in groups of `k` iteratively in $O(1)$ space:
1. Count total nodes to determine how many full groups of `k` can be reversed.
2. Maintain a dummy head node.
3. For each group of `k` nodes:
   - Identify the segment start and iteratively reverse internal links using 3 pointers.
   - Reconnect the previous group's tail to the new head of the reversed group, and connect the tail of the reversed group to the next unreversed group.
4. Any leftover nodes (less than `k`) remain attached in their original order.

### Step-by-Step Algorithm:
1. If `arr.length <= 1 || k <= 1`, return `arr`.
2. Construct the linked list with a dummy head pointing to the original head.
3. Count the total number of nodes in the list.
4. Maintain `prevGroupEnd = dummy`.
5. While remaining nodes count is `>= k`:
   - Initialize `curr = prevGroupEnd.next` and `next = curr.next`.
   - Perform `k - 1` pointer shifts:
     - `curr.next = next.next`.
     - `next.next = prevGroupEnd.next`.
     - `prevGroupEnd.next = next`.
     - `next = curr.next`.
   - Update `prevGroupEnd = curr`.
   - Decrement remaining nodes count by `k`.
6. Traverse the modified list from `dummy.next` and copy elements into a result array.

## Code

```java
public static int[] solve(int[] arr, int k) {
    if (arr.length <= 1 || k <= 1) {
        return arr;
    }

    class Node {
        int val;
        Node next;
        Node(int val) {
            this.val = val;
        }
    }

    Node dummy = new Node(0);
    Node tail = dummy;
    for (int i = 0; i < arr.length; i = i + 1) {
        tail.next = new Node(arr[i]);
        tail = tail.next;
    }

    int count = arr.length;
    Node prevGroupEnd = dummy;

    while (count >= k) {
        Node curr = prevGroupEnd.next;
        Node next = curr.next;
        for (int i = 1; i < k; i = i + 1) {
            curr.next = next.next;
            next.next = prevGroupEnd.next;
            prevGroupEnd.next = next;
            next = curr.next;
        }
        prevGroupEnd = curr;
        count = count - k;
    }

    int[] result = new int[arr.length];
    Node temp = dummy.next;
    int idx = 0;
    while (temp != null) {
        result[idx] = temp.val;
        idx = idx + 1;
        temp = temp.next;
    }

    return result;
}
```
