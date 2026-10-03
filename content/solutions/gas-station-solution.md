---
title: "Gas Station - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/gas-station/"
weight: 38
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Given two integer arrays `gas` and `cost` of length $N$, find a starting station index from which a car can complete a full clockwise circuit, or return `-1` if no such station exists.



This problem can be resolved using two fundamental observations:
1. **Total Deficit Invariant:** If the sum of all gas available is strictly less than the sum of all costs, it is mathematically impossible to complete the circuit regardless of starting station: $\sum gas[i] < \sum cost[i] \implies -1$.
2. **Greedy Start Reset:** If starting from station `start` leads to a negative tank balance at station `i`, then no station between `start` and `i` (inclusive) can serve as a viable starting point. Why? Because the car arrived at each intermediate station with non-negative fuel; if starting with bonus fuel still resulted in failure at `i`, starting with empty fuel at any intermediate station will also fail at or before `i`.
3. Therefore, whenever `currentTank < 0`, we greedily reset `start = i + 1` and reset `currentTank = 0`.
4. If the overall total fuel exceeds or equals total cost, the final `start` candidate is guaranteed to be the valid solution.

### Step-by-Step Algorithm:
1. Initialize `totalGas = 0`, `totalCost = 0`, `currentTank = 0`, and `startIndex = 0`.
2. Iterate `i` from `0` to `n - 1`:
   - `totalGas = totalGas + gas[i]`.
   - `totalCost = totalCost + cost[i]`.
   - `currentTank = currentTank + gas[i] - cost[i]`.
   - If `currentTank < 0`:
     - Reset starting candidate: `startIndex = i + 1`.
     - Reset `currentTank = 0`.
3. After the loop, if `totalGas < totalCost`, return `-1`.
4. Otherwise, return `startIndex`.

## Code

```java
public static int solve(int[] gas, int[] cost) {
    if (gas == null || cost == null || gas.length == 0) {
        return -1;
    }

    int totalGas = 0;
    int totalCost = 0;
    int currentTank = 0;
    int startIndex = 0;

    for (int i = 0; i < gas.length; i = i + 1) {
        totalGas = totalGas + gas[i];
        totalCost = totalCost + cost[i];
        currentTank = currentTank + gas[i] - cost[i];

        if (currentTank < 0) {
            startIndex = i + 1;
            currentTank = 0;
        }
    }

    if (totalGas < totalCost) {
        return -1;
    }

    return startIndex;
}
```
