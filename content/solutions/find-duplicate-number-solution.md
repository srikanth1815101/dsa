---
title: "Find Duplicate Number - Solution"
problemUrl: "/problems/find-duplicate-number/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem places strict requirements:
1. Cannot modify the array `nums` (precluding negation marking or sorting).
2. Must run in $O(n)$ time.
3. Must use strictly $O(1)$ auxiliary memory (precluding `HashSet` or frequency counting arrays).

This problem can be reduced to finding the **entry point of a cycle in a linked list** using **Floyd's Tortoise and Hare Cycle Finding Algorithm**:

### Graph / Linked List Analogy
- Treat each index $i$ as a node, and let the edge point to $\text{nums}[i]$.
- Because every element in `nums` is in the range $[1, n]$, and the array has length $n + 1$, index $0$ is guaranteed to never be pointed to by any node.
- A duplicate number means that at least two distinct indices point to the same target index (i.e. having an in-degree $\ge 2$). This forms a directed cycle.

### Two-Phase Execution
1. **Phase 1: Finding the Intersection Point**
   - Initialize `slow = nums[0]` and `fast = nums[0]`.
   - Advance `slow` by 1 step: $\text{slow} = \text{nums}[\text{slow}]$.
   - Advance `fast` by 2 steps: $\text{fast} = \text{nums}[\text{nums}[\text{fast}]]$.
   - Continue until `slow == fast`. A cycle is guaranteed to exist by the Pigeonhole Principle.

2. **Phase 2: Locating the Cycle Entrance**
   - Reset `slow = nums[0]`. Keep `fast` at the intersection point.
   - Advance both pointers by 1 step at a time:
     $$\text{slow} = \text{nums}[\text{slow}], \quad \text{fast} = \text{nums}[\text{fast}]$$
   - The node where they meet is the start of the cycle, which corresponds exactly to the duplicate number.

### Complexity Analysis
- **Time Complexity**: $O(n)$, since the fast pointer traverses at most twice the perimeter of the cycle before intersecting.
- **Space Complexity**: $O(1)$, requiring only two pointer variables.

---

## Code

```java
public static int solve(int[] nums) {
    int slow = nums[0];
    int fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);

    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
}
```
