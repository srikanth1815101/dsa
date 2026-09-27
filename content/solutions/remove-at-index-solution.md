---
title: "Remove at Index - Solution"
problemUrl: "/problems/remove-at-index/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To remove a node at index `idx` from a singly linked list:
1. If `idx == 0`, advance `head = head.next` to decouple the initial node.
2. Otherwise, traverse the linked list to index `idx - 1` using a reference pointer `curr`.
3. Update `curr.next = curr.next.next` to bypass the node at index `idx`.
4. Traverse the updated linked list starting from `head` and populate an integer array of size `arr.length - 1`.

### Step-by-Step Algorithm:
1. Construct the singly linked list from `arr`.
2. If `idx == 0`:
   - Set `head = head.next`.
3. Else:
   - Traverse to index `idx - 1` using pointer `curr`.
   - Set `curr.next = curr.next.next`.
4. Initialize an integer array of size `arr.length - 1`.
5. Traverse from `head` and copy node values into the array.
6. Return the array.

## Code

```java
public static int[] solve(int[] arr, int idx) {
    if (arr == null || arr.length <= 1) {
        return new int[0];
    }

    class Node {
        int data;
        Node next;
        Node(int d) {
            this.data = d;
        }
    }

    Node head = null;
    Node tail = null;
    for (int i = 0; i < arr.length; i = i + 1) {
        Node node = new Node(arr[i]);
        if (head == null) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
    }

    if (idx == 0) {
        head = head.next;
    } else {
        Node curr = head;
        for (int i = 0; i < idx - 1; i = i + 1) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }

    int[] result = new int[arr.length - 1];
    Node curr = head;
    int k = 0;
    while (curr != null) {
        result[k] = curr.data;
        k = k + 1;
        curr = curr.next;
    }

    return result;
}
```
