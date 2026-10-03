---
title: "Range Sum Query (Mutable) - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/range-sum-query-mutable/"
weight: 83
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

When an array undergoes frequent element updates alongside range sum queries, standard prefix sums take $\mathcal{O}(n)$ per update, while direct iteration takes $\mathcal{O}(n)$ per query. A **Binary Indexed Tree (Fenwick Tree)** balances both operations to $\mathcal{O}(\log n)$ time.

A Fenwick Tree of size $n + 1$ uses 1-based indexing where the lowest set bit $i \ \& \ (-i)$ governs the range of indices each node is responsible for:
1. **Point Update (`add(i, delta)`):**
   Add `delta` to `tree[i]`, and propagate to ancestors by adding the lowest set bit: $i = i + (i \ \& \ (-i))$.
2. **Prefix Query (`query(i)`):**
   Accumulate `tree[i]`, and jump to the parent range by stripping the lowest set bit: $i = i - (i \ \& \ (-i))$.
3. **Range Sum (`sumRange(left, right)`):**
   The sum of elements in `nums[left ... right]` is $\text{query}(right + 1) - \text{query}(left)$.
4. **Value Update (`update(index, val)`):**
   Compute $\text{delta} = val - nums[index]$, assign $nums[index] = val$, and invoke $\text{add}(index + 1, \text{delta})$.

### Step-by-Step Algorithm:
1. Handle empty inputs: if `operations == null || operations.length == 0 || nums == null || nums.length == 0`, return `new int[0]`.
2. Let $n$ be `nums.length`. Create a Fenwick tree array `tree` of size $n + 1$.
3. Populate `tree`: for each index $i$ from $0$ to $n - 1$, call `add(tree, n, i + 1, nums[i])`.
4. Count the number of type `2` operations to allocate the exact result array size.
5. Process each operation `op`:
   - If `op[0] == 1`: compute `delta = op[2] - nums[op[1]]`, update `nums[op[1]] = op[2]`, and call `add(tree, n, op[1] + 1, delta)`.
   - If `op[0] == 2`: query `sum = query(tree, op[2] + 1) - query(tree, op[1])`, and record `sum` in `results`.
6. Return `results`.

## Code

```java
private static void add(int[] tree, int n, int index, int delta) {
    int i = index;
    while (i <= n) {
        tree[i] = tree[i] + delta;
        i = i + (i & (-i));
    }
}

private static int query(int[] tree, int index) {
    int sum = 0;
    int i = index;
    while (i > 0) {
        sum = sum + tree[i];
        i = i - (i & (-i));
    }
    return sum;
}

public static int[] solve(int[] nums, int[][] operations) {
    if (operations == null || operations.length == 0 || nums == null || nums.length == 0) {
        return new int[0];
    }

    int n = nums.length;
    int[] tree = new int[n + 1];

    for (int i = 0; i < n; i = i + 1) {
        add(tree, n, i + 1, nums[i]);
    }

    int queryCount = 0;
    for (int i = 0; i < operations.length; i = i + 1) {
        if (operations[i][0] == 2) {
            queryCount = queryCount + 1;
        }
    }

    int[] results = new int[queryCount];
    int resultIndex = 0;

    for (int i = 0; i < operations.length; i = i + 1) {
        int type = operations[i][0];
        if (type == 1) {
            int index = operations[i][1];
            int val = operations[i][2];
            int delta = val - nums[index];
            nums[index] = val;
            add(tree, n, index + 1, delta);
        } else if (type == 2) {
            int left = operations[i][1];
            int right = operations[i][2];
            int sum = query(tree, right + 1) - query(tree, left);
            results[resultIndex] = sum;
            resultIndex = resultIndex + 1;
        }
    }

    return results;
}
```
