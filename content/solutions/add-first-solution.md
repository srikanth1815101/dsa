---
title: "Add First - Solution"
problemUrl: "/problems/add-first/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Adding an element to the beginning of a singly linked list is an $O(1)$ constant time operation:
1. Construct the initial singly linked list by creating nodes for each element in `arr`.
2. Allocate a new `Node` with data `val`.
3. Set `newNode.next` to the current `head` of the linked list.
4. Update `head` to point to `newNode`.
5. Traverse the updated linked list starting from `head` to copy elements into a returned array of size `arr.length + 1`.

### Step-by-Step Algorithm:
1. Define a `Node` class containing integer `val` and pointer `next`.
2. Build the linked list from `arr` maintaining `head`.
3. Create `newNode = new Node(val)`.
4. Point `newNode.next = head`.
5. Update `head = newNode`.
6. Traverse from `head` and populate an integer array of size `arr.length + 1`.
7. Return the resulting array.

## Code

```java
public static int[] solve(int[] arr, int val) {
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

    Node newNode = new Node(val);
    newNode.next = head;
    head = newNode;

    int[] result = new int[arr.length + 1];
    Node curr = head;
    int idx = 0;
    while (curr != null) {
        result[idx] = curr.data;
        idx = idx + 1;
        curr = curr.next;
    }

    return result;
}
```
