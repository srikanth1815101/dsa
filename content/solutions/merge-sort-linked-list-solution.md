---
title: "Merge Sort Linked List - Solution"
problemUrl: "/problems/merge-sort-linked-list/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Merge sort is ideal for linked lists because elements can be split and merged without extra memory allocation for elements:
1. Divide: Split the linked list into two halves using the slow and fast pointer approach. The slow pointer lands at the middle node, where we break the link to divide the list.
2. Conquer: Recursively apply merge sort to both halves until the base case (list has 0 or 1 node) is reached.
3. Combine: Merge the two sorted halves into one sorted linked list by comparing heads and splicing pointers.

### Step-by-Step Algorithm:
1. If the input array has length 0 or 1, return the array as it is already sorted.
2. Build a linked list from `arr`.
3. Apply `mergeSort(head)`:
   - Base case: If `head == null` or `head.next == null`, return `head`.
   - Find the middle node using `slow` and `fast` pointers.
   - Disconnect the first half from the second half: `midNext = mid.next; mid.next = null;`.
   - Recursively sort both halves: `left = mergeSort(head)` and `right = mergeSort(midNext)`.
   - Merge `left` and `right` using a helper merge function.
4. Traverse the sorted list and copy elements back to a result array.

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

    class Sorter {
        Node merge(Node l1, Node l2) {
            Node dummy = new Node(0);
            Node tail = dummy;
            while (l1 != null && l2 != null) {
                if (l1.val <= l2.val) {
                    tail.next = l1;
                    l1 = l1.next;
                } else {
                    tail.next = l2;
                    l2 = l2.next;
                }
                tail = tail.next;
            }
            if (l1 != null) {
                tail.next = l1;
            } else {
                tail.next = l2;
            }
            return dummy.next;
        }

        Node sort(Node node) {
            if (node == null || node.next == null) {
                return node;
            }
            Node prev = null;
            Node slow = node;
            Node fast = node;
            while (fast != null && fast.next != null) {
                prev = slow;
                slow = slow.next;
                fast = fast.next.next;
            }
            prev.next = null;
            Node left = sort(node);
            Node right = sort(slow);
            return merge(left, right);
        }
    }

    Sorter sorter = new Sorter();
    Node sortedHead = sorter.sort(head);

    int[] result = new int[arr.length];
    curr = sortedHead;
    int idx = 0;
    while (curr != null) {
        result[idx] = curr.val;
        idx = idx + 1;
        curr = curr.next;
    }
    return result;
}
```
