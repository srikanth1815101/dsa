---
title: "Find Median from Data Stream - Solution"
problemUrl: "/problems/find-median-from-data-stream/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To compute the running median after each insertion efficiently:
1. Divide the numbers into two halves:
   - `small`: A max-heap storing the lower half of values.
   - `large`: A min-heap storing the upper half of values.
2. Invariants:
   - Every element in `small` is less than or equal to every element in `large`.
   - `small.size()` is either equal to `large.size()` or `large.size() + 1`.
3. Insertion step for element `num`:
   - If `small.isEmpty() || num <= small.peek()`, add `num` to `small`.
   - Otherwise, add `num` to `large`.
   - Rebalance sizes:
     - If `small.size() > large.size() + 1`, move `small.poll()` to `large`.
     - If `large.size() > small.size()`, move `large.poll()` to `small`.
4. Median calculation:
   - If `small.size() > large.size()`, median is `small.peek() * 1.0`.
   - Otherwise, median is `(small.peek() + large.peek()) / 2.0`.

### Step-by-Step Algorithm:
1. If `stream == null || stream.length == 0`, return `new double[0]`.
2. Initialize `PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder())` and `PriorityQueue<Integer> large = new PriorityQueue<>()`.
3. Initialize `double[] medians = new double[stream.length]`.
4. Loop through `stream` with index `i` from `0` to `stream.length - 1`:
   - If `small.isEmpty() || stream[i] <= small.peek()`:
     - Add `stream[i]` to `small`.
   - Else:
     - Add `stream[i]` to `large`.
   - If `small.size() > large.size() + 1`:
     - Add `small.poll()` to `large`.
   - Else if `large.size() > small.size()`:
     - Add `large.poll()` to `small`.
   - If `small.size() > large.size()`:
     - Set `medians[i] = (double) small.peek()`.
   - Else:
     - Set `medians[i] = ((double) small.peek() + (double) large.peek()) / 2.0`.
5. Return `medians`.

## Code

```java
public static double[] solve(int[] stream) {
    if (stream == null || stream.length == 0) {
        return new double[0];
    }

    PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder());
    PriorityQueue<Integer> large = new PriorityQueue<>();
    double[] medians = new double[stream.length];

    for (int i = 0; i < stream.length; i = i + 1) {
        int num = stream[i];

        if (small.isEmpty() || num <= small.peek()) {
            small.add(num);
        } else {
            large.add(num);
        }

        if (small.size() > large.size() + 1) {
            large.add(small.poll());
        } else if (large.size() > small.size()) {
            small.add(large.poll());
        }

        if (small.size() > large.size()) {
            medians[i] = (double) small.peek();
        } else {
            medians[i] = ((double) small.peek() + (double) large.peek()) / 2.0;
        }
    }

    return medians;
}
```

## Complexity Analysis

- **Time Complexity:** $O(n \log n)$ where $n$ is `stream.length`. Each element insertion and heap balancing operation takes $O(\log n)$ time, and median retrieval takes $O(1)$ time.
- **Space Complexity:** $O(n)$ auxiliary space to store all elements in the two heaps.
