---
title: "Job Sequencing Problem - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/job-sequencing-problem/"
weight: 34
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Given $N$ jobs each having a deadline and a profit, and requiring 1 unit of time, we want to maximize the total profit earned by scheduling jobs within their respective deadlines.



To maximize profit:
1. We should greedily prioritize jobs that offer the highest profit.
2. Sort all jobs in descending order of profit.
3. For each job, schedule it as late as possible (at or just before its deadline). Delaying a job's execution leaves earlier time slots free for jobs with tighter deadlines.
4. Maintain a boolean array or Disjoint Set Union (DSU) to track occupied time slots.
5. If an open slot $\le$ deadline is available, assign the job to that slot, increment the count of scheduled jobs, and accumulate its profit.

### Step-by-Step Algorithm:
1. If the jobs array is null or empty, return `new int[]{0, 0}`.
2. Determine the maximum deadline `maxDeadline` among all jobs.
3. Sort the jobs array in descending order of profit (`jobs[i][2]`).
4. Initialize a boolean array `slot` of size `maxDeadline + 1` filled with `false`.
5. Initialize `count = 0` and `totalProfit = 0`.
6. For each job `[id, deadline, profit]` in the sorted list:
   - Search backward from `slotIdx = deadline` down to `1`:
     - If `!slot[slotIdx]`:
       - Mark `slot[slotIdx] = true`.
       - Increment `count = count + 1`.
       - Add profit: `totalProfit = totalProfit + profit`.
       - Break and continue with the next job.
7. Return `new int[]{count, totalProfit}`.

## Code

```java
public static int[] solve(int[][] jobs) {
    if (jobs == null || jobs.length == 0) {
        return new int[]{0, 0};
    }

    int maxDeadline = 0;
    for (int i = 0; i < jobs.length; i = i + 1) {
        maxDeadline = Math.max(maxDeadline, jobs[i][1]);
    }

    Arrays.sort(jobs, (a, b) -> Integer.compare(b[2], a[2]));

    boolean[] slot = new boolean[maxDeadline + 1];
    int count = 0;
    int totalProfit = 0;

    for (int i = 0; i < jobs.length; i = i + 1) {
        int deadline = jobs[i][1];
        int profit = jobs[i][2];

        for (int s = deadline; s >= 1; s = s - 1) {
            if (!slot[s]) {
                slot[s] = true;
                count = count + 1;
                totalProfit = totalProfit + profit;
                break;
            }
        }
    }

    return new int[]{count, totalProfit};
}
```
