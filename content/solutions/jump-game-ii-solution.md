---
title: "Jump Game II - Solution"
problemUrl: "/problems/jump-game-ii/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We use a greedy BFS approach where we track the current jump window `[curStart, curEnd]`.

We maintain:
- `jumps`: total jumps made so far.
- `curEnd`: the furthest index reached by the current number of jumps.
- `curFarthest`: the furthest index reachable by making one more jump from any index within `[0, curEnd]`.

As we iterate `i` from `0` to `n - 2`:
1. Update `curFarthest = Math.max(curFarthest, i + nums[i])`.
2. When we reach `curEnd`, we must take another jump: increment `jumps = jumps + 1` and update `curEnd = curFarthest`.
3. If `curEnd >= n - 1`, we can break early.

This processes the array in `O(n)` time using `O(1)` space.

### Step-by-Step Algorithm:
1. If `nums.length <= 1`, return `0`.
2. Initialize `jumps = 0`, `curEnd = 0`, and `curFarthest = 0`.
3. Iterate `i` from `0` to `nums.length - 2`.
4. Update `curFarthest = Math.max(curFarthest, i + nums[i])`.
5. If `i == curEnd`, increment `jumps = jumps + 1` and set `curEnd = curFarthest`.
6. If `curEnd >= nums.length - 1`, break.
7. Return `jumps`.

## Code

```java
public static int solve(int[] nums) {
    if (nums.length <= 1) {
        return 0;
    }

    int jumps = 0;
    int curEnd = 0;
    int curFarthest = 0;
    int n = nums.length;

    for (int i = 0; i < n - 1; i = i + 1) {
        curFarthest = Math.max(curFarthest, i + nums[i]);
        if (i == curEnd) {
            jumps = jumps + 1;
            curEnd = curFarthest;
            if (curEnd >= n - 1) {
                break;
            }
        }
    }

    return jumps;
}
```
