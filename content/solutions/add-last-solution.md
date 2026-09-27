---
title: "Add Last - Solution"
problemUrl: "/problems/add-last/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Adding an element to the end of a singly linked list can be performed in $O(1)$ constant time if a `tail` pointer is maintained, or $O(n)$ time by traversing to the last node:
1. Construct the initial singly linked list by creating nodes for each element in `arr`, tracking both `head` and `tail`.
2. Allocate a new `Node` with data `val`.
3. If the linked list is empty (`head == null`), assign both `head` and `tail` to `newNode`.
4. Otherwise, set `tail.next = newNode` and update `tail = newNode`.
5. Traverse the updated linked list starting from `head` to copy all elements into an array of size `arr.length + 1`.

### Step-by-Step Algorithm:
1. Define a `Node` class containing integer `val` and pointer `next`.
2. Construct the initial linked list from `arr` maintaining `head` and `tail`.
3. Create `newNode = new Node(val)`.
4. If `head == null`, set `head = newNode` and `tail = newNode`.
5. Else, set `tail.next = newNode` and `tail = newNode`.
6. Traverse from `head` and copy node values into an array of size `arr.length + 1`.
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
    if (head == null) {
        head = newNode;
        tail = newNode;
    } else {
        tail.next = newNode;
        tail = newNode;
    }

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
