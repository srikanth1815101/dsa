---
title: "Remove Duplicates - Solution"
problemUrl: "/problems/remove-duplicates/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Since the linked list is sorted in ascending order, duplicate elements must appear consecutively. We can remove duplicates in a single pass:
1. Start at the head node with a pointer `curr`.
2. Compare the value of `curr` with `curr.next`.
3. If `curr.val == curr.next.val`, set `curr.next = curr.next.next` to remove the duplicate node.
4. If values are distinct, advance `curr = curr.next`.
5. Repeat until `curr` or `curr.next` becomes null.

### Step-by-Step Algorithm:
1. If the input array has length 0 or 1, return the array as is.
2. Build the linked list from `arr`.
3. Initialize `curr = head`.
4. While `curr != null && curr.next != null`:
   - If `curr.val == curr.next.val`, update `curr.next = curr.next.next`.
   - Else, update `curr = curr.next`.
5. Count the remaining nodes and copy their values into a result array.
6. Return the result array.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr.length <= 1) {
        return arr;
    }

    class Node {
        int val;
        Node next;
        Node(int val) {
            this.val = val;
        }
    }

    Node head = new Node(arr[0]);
    Node curr = head;
    for (int i = 1; i < arr.length; i = i + 1) {
        curr.next = new Node(arr[i]);
        curr = curr.next;
    }

    curr = head;
    while (curr != null && curr.next != null) {
        if (curr.val == curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    int count = 0;
    Node temp = head;
    while (temp != null) {
        count = count + 1;
        temp = temp.next;
    }

    int[] result = new int[count];
    temp = head;
    int idx = 0;
    while (temp != null) {
        result[idx] = temp.val;
        idx = idx + 1;
        temp = temp.next;
    }

    return result;
}
```
