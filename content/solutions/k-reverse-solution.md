---
title: "K Reverse - Solution"
problemUrl: "/problems/k-reverse/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To reverse the nodes of a linked list in groups of size `k`:
1. Check if there are at least `k` nodes remaining. If fewer than `k` nodes exist, return the head as-is.
2. Reverse the first `k` nodes using the standard iterative 3-pointer reversal algorithm.
3. The original head node now becomes the tail of this reversed group.
4. Recursively call the function for the remaining list (starting at node `k + 1`) and connect the tail's `next` pointer to the head returned by the recursive call.
5. Return the new head of the reversed group.

### Step-by-Step Algorithm:
1. If `head == null` or `k <= 1`, return the original list.
2. Check if at least `k` nodes exist by advancing a pointer `k` times. If not, return `head`.
3. Reverse `k` nodes:
   - Maintain `prev = null`, `curr = head`, and `next = null`.
   - In each of the `k` steps:
     - `next = curr.next`.
     - `curr.next = prev`.
     - `prev = curr`.
     - `curr = next`.
4. Connect: `head.next = reverseKGroup(curr, k)`.
5. Return `prev` as the new head of this reversed block.

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

    Node head = new Node(arr[0]);
    Node currNode = head;
    for (int i = 1; i < arr.length; i = i + 1) {
        currNode.next = new Node(arr[i]);
        currNode = currNode.next;
    }

    class Reverser {
        Node reverseK(Node node, int groupSize) {
            Node check = node;
            for (int i = 0; i < groupSize; i = i + 1) {
                if (check == null) {
                    return node;
                }
                check = check.next;
            }

            Node prev = null;
            Node curr = node;
            Node next = null;
            for (int i = 0; i < groupSize; i = i + 1) {
                next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }

            node.next = reverseK(curr, groupSize);
            return prev;
        }
    }

    Reverser reverser = new Reverser();
    Node newHead = reverser.reverseK(head, k);

    int[] result = new int[arr.length];
    currNode = newHead;
    int idx = 0;
    while (currNode != null) {
        result[idx] = currNode.val;
        idx = idx + 1;
        currNode = currNode.next;
    }

    return result;
}
```
