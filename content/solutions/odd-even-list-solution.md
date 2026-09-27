---
title: "Odd Even List - Solution"
problemUrl: "/problems/odd-even-list/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To partition the linked list by node positions (odd-positioned nodes followed by even-positioned nodes) in $O(1)$ extra space:
1. Maintain two pointers, `odd` pointing to the first node and `even` pointing to the second node.
2. Store a reference to `evenHead = even` so the two partitioned chains can be connected at the end.
3. While `even != null && even.next != null`:
   - Connect the next odd node: `odd.next = even.next`.
   - Advance `odd = odd.next`.
   - Connect the next even node: `even.next = odd.next`.
   - Advance `even = even.next`.
4. Connect the end of the odd list to the head of the even list: `odd.next = evenHead`.

### Step-by-Step Algorithm:
1. If `arr.length <= 2`, return `arr` as no reordering is needed.
2. Build the linked list from `arr`.
3. Set `odd = head`, `even = head.next`, and `evenHead = even`.
4. Loop while `even != null && even.next != null`:
   - `odd.next = even.next`.
   - `odd = odd.next`.
   - `even.next = odd.next`.
   - `even = even.next`.
5. Link `odd.next = evenHead`.
6. Copy values from `head` into a new result array of size `arr.length` and return it.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr.length <= 2) {
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

    Node odd = head;
    Node even = head.next;
    Node evenHead = even;

    while (even != null && even.next != null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;

    int[] result = new int[arr.length];
    curr = head;
    int idx = 0;
    while (curr != null) {
        result[idx] = curr.val;
        idx = idx + 1;
        curr = curr.next;
    }

    return result;
}
```
