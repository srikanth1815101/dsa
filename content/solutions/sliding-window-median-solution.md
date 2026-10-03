---
title: "Sliding Window Median - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/sliding-window-median/"
weight: 58
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Finding the median of a dynamic collection requires maintaining two balanced partitions:
1. `left`: contains the smaller $\lceil k / 2 \rceil$ elements.
2. `right`: contains the larger $\lfloor k / 2 \rfloor$ elements.

In a sliding window of size $k$, elements are continually added and removed. Using a traditional heap requires $\mathcal{O}(k)$ time to remove an arbitrary element, which degrades performance to $\mathcal{O}(n \cdot k)$.

To achieve an optimal $\mathcal{O}(n \log k)$ runtime, we utilize two balanced binary search trees (`TreeSet<Integer>`). Because values in `nums` may contain duplicates, each `TreeSet` stores the **array index** of the element rather than the value itself. A custom comparator sorts indices by their corresponding values in `nums`, breaking ties by index:
$$\text{compare}(a, b) = \begin{cases} \text{Integer.compare}(\text{nums}[a], \text{nums}[b]) & \text{if } \text{nums}[a] \ne \text{nums}[b] \\ \text{Integer.compare}(a, b) & \text{otherwise} \end{cases}$$

This structure provides $\mathcal{O}(\log k)$ insertion, removal, and extraction of extremums (`left.last()` and `right.first()`).

### Step-by-Step Algorithm:
1. Let $n = \text{nums.length}$. Allocate the result array `medians` of size $n - k + 1$.
2. Define a custom comparator `cmp` that orders index pairs by `nums` value and then by index.
3. Initialize two TreeSets `left` and `right` using `cmp`.
4. Loop through each index $i$ from $0$ to $n - 1$:
   - Add $i$: if `left` is empty or $i$ is smaller than or equal to `left.last()`, add $i$ to `left`; otherwise add $i$ to `right`.
   - Remove out-of-window element: if $i \ge k$, remove $i - k$ from `left` (or from `right` if not in `left`).
   - Rebalance: ensure `left.size() == (k + 1) / 2` by shifting elements between `left` and `right`.
   - Record median: if $i \ge k - 1$:
     - If $k$ is odd, median is `nums[left.last()]`.
     - If $k$ is even, median is `((double) nums[left.last()] + (double) nums[right.first()]) / 2.0`.
5. Return `medians`.

## Code

```java
public static double[] solve(int[] nums, int k) {
    if (nums == null || nums.length == 0 || k <= 0) {
        return new double[0];
    }

    int n = nums.length;
    double[] medians = new double[n - k + 1];

    Comparator<Integer> cmp = new Comparator<Integer>() {
        @Override
        public int compare(Integer a, Integer b) {
            if (nums[a] != nums[b]) {
                return Integer.compare(nums[a], nums[b]);
            }
            return Integer.compare(a, b);
        }
    };

    TreeSet<Integer> left = new TreeSet<>(cmp);
    TreeSet<Integer> right = new TreeSet<>(cmp);

    for (int i = 0; i < n; i = i + 1) {
        if (left.isEmpty() || cmp.compare(i, left.last()) <= 0) {
            left.add(i);
        } else {
            right.add(i);
        }

        if (i >= k) {
            int toRemove = i - k;
            if (!left.remove(toRemove)) {
                right.remove(toRemove);
            }
        }

        int targetLeft = (k + 1) / 2;
        while (left.size() < targetLeft && !right.isEmpty()) {
            left.add(right.pollFirst());
        }
        while (left.size() > targetLeft) {
            right.add(left.pollLast());
        }

        if (i >= k - 1) {
            if (k % 2 == 1) {
                medians[i - k + 1] = nums[left.last()];
            } else {
                double v1 = nums[left.last()];
                double v2 = nums[right.first()];
                medians[i - k + 1] = (v1 + v2) / 2.0;
            }
        }
    }

    return medians;
}
```
