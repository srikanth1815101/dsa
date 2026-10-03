---
title: "Design Hit Counter - Solution"
problemUrl: "/problems/design-hit-counter/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Using circular arrays of fixed size `300` allows `O(1)` hit recording and `O(1)` space:
- `times[300]`: stores the latest timestamp that updated this circular slot.
- `hits[300]`: stores the number of hits recorded at that timestamp.

1. **`hit(timestamp)`**:
   - `idx = timestamp % 300`.
   - If `times[idx] != timestamp`, a new second has arrived at this bucket: set `times[idx] = timestamp` and reset `hits[idx] = 1`.
   - If `times[idx] == timestamp`, increment `hits[idx] = hits[idx] + 1`.

2. **`getHits(timestamp)`**:
   - Iterate through all `300` buckets.
   - If `timestamp - times[i] < 300`, add `hits[i]` to `total`.
   - Return `total`.

### Step-by-Step Algorithm:
1. Initialize arrays `times = new int[300]` and `hits = new int[300]`.
2. Count the number of `getHits` operations to allocate the return array `ans`.
3. Iterate through operations: for `"hit"`, update circular bucket `timestamp % 300`.
4. For `"getHits"`, iterate all 300 buckets and accumulate `hits[i]` where `timestamp - times[i] < 300`.
5. Store result into `ans` and return `ans`.

## Code

```java
public static int[] solve(String[] operations, int[] timestamps) {
    int[] times = new int[300];
    int[] hits = new int[300];

    int queryCount = 0;
    for (int i = 0; i < operations.length; i = i + 1) {
        if ("getHits".equals(operations[i])) {
            queryCount = queryCount + 1;
        }
    }

    int[] result = new int[queryCount];
    int resIdx = 0;

    for (int i = 0; i < operations.length; i = i + 1) {
        String op = operations[i];
        int t = timestamps[i];

        if ("hit".equals(op)) {
            int idx = t % 300;
            if (times[idx] != t) {
                times[idx] = t;
                hits[idx] = 1;
            } else {
                hits[idx] = hits[idx] + 1;
            }
        } else if ("getHits".equals(op)) {
            int total = 0;
            for (int k = 0; k < 300; k = k + 1) {
                if (t - times[k] < 300) {
                    total = total + hits[k];
                }
            }
            result[resIdx] = total;
            resIdx = resIdx + 1;
        }
    }

    return result;
}
```
