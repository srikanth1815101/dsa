---
title: "Target Sum Subsets - Solution"
problemUrl: "/problems/target-sum-subsets/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Target Sum Subsets problem explores a binary decision tree at each element:
1. **Include `arr[idx]`**: Add `arr[idx]` to the subset and recursively call with `sum + arr[idx]`.
2. **Exclude `arr[idx]`**: Omit `arr[idx]` and recursively call with current `sum`.

### Algorithm Steps
1. Define a helper recursive function `findSubsets(arr, idx, currentSum, target, currentList, result)`:
   - **Pruning**: If `currentSum > target`, return immediately since elements are positive.
   - **Base Case**: If `idx == arr.length`:
     - If `currentSum == target`: add a copy of `currentList` to `result`.
     - Return.
   - **Include Choice**:
     - Add `arr[idx]` to `currentList`.
     - Recurse: `findSubsets(arr, idx + 1, currentSum + arr[idx], target, currentList, result)`.
     - Backtrack: remove last element of `currentList`.
   - **Exclude Choice**:
     - Recurse: `findSubsets(arr, idx + 1, currentSum, target, currentList, result)`.
2. Return `result` from `solve(arr, target)`.

### Complexity Analysis
- **Time Complexity**: $O(2^n)$, because each element presents 2 recursive branches.
- **Space Complexity**: $O(n)$ recursion call stack space.

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<List<Integer>> solve(int[] arr, int target) {
    List<List<Integer>> result = new ArrayList<>();
    if (arr == null || arr.length == 0) {
        return result;
    }
    findSubsets(arr, 0, 0, target, new ArrayList<>(), result);
    return result;
}

private static void findSubsets(int[] arr, int idx, int sum, int target, List<Integer> current, List<List<Integer>> result) {
    if (sum > target) {
        return;
    }

    if (idx == arr.length) {
        if (sum == target) {
            result.add(new ArrayList<>(current));
        }
        return;
    }

    // Include choice
    current.add(arr[idx]);
    findSubsets(arr, idx + 1, sum + arr[idx], target, current, result);
    current.remove(current.size() - 1);

    // Exclude choice
    findSubsets(arr, idx + 1, sum, target, current, result);
}
```
