---
title: "Median Priority Queue - Solution"
problemUrl: "/problems/median-priority-queue/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To maintain and query the median dynamically:
1. Divide stored elements into two heaps:
   - `left`: A max-heap that holds the smaller half of the numbers.
   - `right`: A min-heap that holds the larger half of the numbers.
2. Invariant:
   - All elements in `left` are less than or equal to all elements in `right`.
   - `left.size()` is either equal to `right.size()` or `right.size() + 1`.
3. Operations:
   - **Add(`val`)**: If `right.size() > 0 && val > right.peek()`, add `val` to `right`. Otherwise, add `val` to `left`. Balance sizes: if `left.size() - right.size() > 1`, move root of `left` to `right`. If `right.size() > left.size()`, move root of `right` to `left`.
   - **Peek()**: If total size is `0`, return `-1`. Otherwise, return `left.peek()`.
   - **Remove()**: If total size is `0`, return `-1`. Otherwise, remove and return `left.poll()`, then balance if `left.size() < right.size()`.

### Step-by-Step Algorithm:
1. Initialize `PriorityQueue<Integer> left = new PriorityQueue<>(Collections.reverseOrder())` and `PriorityQueue<Integer> right = new PriorityQueue<>()`.
2. Initialize an empty integer list `output`.
3. Loop through `operations` with index `i` from `0` to `operations.length - 1`:
   - If `operations[i].equals("add")`:
     - If `right.size() > 0 && values[i] > right.peek()`, add `values[i]` to `right`.
     - Else add `values[i]` to `left`.
     - While `left.size() - right.size() > 1`:
       - Add `left.poll()` to `right`.
     - While `right.size() > left.size()`:
       - Add `right.poll()` to `left`.
   - If `operations[i].equals("peek")`:
     - If `left.size() + right.size() == 0`, add `-1` to `output`.
     - Else add `left.peek()` to `output`.
   - If `operations[i].equals("remove")`:
     - If `left.size() + right.size() == 0`, add `-1` to `output`.
     - Else:
       - Add `left.poll()` to `output`.
       - If `right.size() > left.size()`:
         - Add `right.poll()` to `left`.
4. Convert `output` to an `int[]` array and return.

## Code

```java
public static int[] solve(String[] operations, int[] values) {
    if (operations == null || operations.length == 0) {
        return new int[0];
    }

    PriorityQueue<Integer> left = new PriorityQueue<>(Collections.reverseOrder());
    PriorityQueue<Integer> right = new PriorityQueue<>();
    List<Integer> list = new ArrayList<>();

    for (int i = 0; i < operations.length; i = i + 1) {
        String op = operations[i];
        if (op.equals("add")) {
            int val = values[i];
            if (right.size() > 0 && val > right.peek()) {
                right.add(val);
            } else {
                left.add(val);
            }

            if (left.size() - right.size() > 1) {
                right.add(left.poll());
            } else if (right.size() > left.size()) {
                left.add(right.poll());
            }
        } else if (op.equals("peek")) {
            if (left.size() + right.size() == 0) {
                list.add(-1);
            } else {
                list.add(left.peek());
            }
        } else if (op.equals("remove")) {
            if (left.size() + right.size() == 0) {
                list.add(-1);
            } else {
                list.add(left.poll());
                if (right.size() > left.size()) {
                    left.add(right.poll());
                }
            }
        }
    }

    int[] result = new int[list.size()];
    for (int i = 0; i < list.size(); i = i + 1) {
        result[i] = list.get(i);
    }
    return result;
}
```

## Complexity Analysis

- **Time Complexity:** $O(m \log n)$ where $m$ is the total count of operations and $n$ is the maximum number of elements in the queue. Each heap insertion and deletion operates in $O(\log n)$ time, while `peek` takes $O(1)$.
- **Space Complexity:** $O(n)$ auxiliary space to store elements in the two heaps.
