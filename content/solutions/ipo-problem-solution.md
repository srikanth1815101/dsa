---
title: "IPO Problem - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/ipo-problem/"
weight: 62
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To maximize total capital after completing at most $k$ projects, we should always make the greedy choice: at any point, from among all projects whose minimum capital requirement is $\le w$, choose the project that yields the **maximum profit**.

Because completing a project adds to our capital without consuming it, any project that becomes affordable at capital $w$ remains affordable throughout all subsequent steps.
Hence:
1. Sort all projects in ascending order of their required `capital`.
2. Maintain a Max-Heap of profits for all projects that have become affordable (i.e., `project.capital <= w`).
3. For each of the $k$ steps:
   - Advance through the sorted projects, transferring all newly affordable projects into the Max-Heap.
   - If the Max-Heap is empty, no further projects can be afforded, so terminate early.
   - Poll the highest profit from the Max-Heap and add it to $w$.

### Step-by-Step Algorithm:
1. Create a helper class `Project` holding `capital` and `profit`.
2. Construct an array of `Project` objects of length $n$ and sort them ascending by `capital`.
3. Initialize a Max-Heap `PriorityQueue<Integer>` for storing available project profits.
4. Maintain a pointer `index = 0` representing the next project to consider in the sorted array.
5. Loop $k$ times:
   - While `index < n` and `projects[index].capital <= w`:
     - Add `projects[index].profit` to the Max-Heap.
     - Increment `index`.
   - If the Max-Heap is empty:
     - Break out of the loop as no more projects can be started.
   - Extract the maximum profit from the Max-Heap:
     - Update `w = w + maxProfit`.
6. Return `w`.

## Code

```java
static class Project {
    int cap;
    int pro;

    Project(int cap, int pro) {
        this.cap = cap;
        this.pro = pro;
    }
}

public static int solve(int k, int w, int[] profits, int[] capital) {
    if (profits == null || profits.length == 0 || k <= 0) {
        return w;
    }

    int n = profits.length;
    Project[] projects = new Project[n];
    for (int i = 0; i < n; i = i + 1) {
        projects[i] = new Project(capital[i], profits[i]);
    }

    Arrays.sort(projects, new Comparator<Project>() {
        @Override
        public int compare(Project a, Project b) {
            return Integer.compare(a.cap, b.cap);
        }
    });

    PriorityQueue<Integer> maxProfit = new PriorityQueue<>(Collections.reverseOrder());
    int projectIndex = 0;

    for (int step = 0; step < k; step = step + 1) {
        while (projectIndex < n && projects[projectIndex].cap <= w) {
            maxProfit.offer(projects[projectIndex].pro);
            projectIndex = projectIndex + 1;
        }

        if (maxProfit.isEmpty()) {
            break;
        }

        int bestProfit = maxProfit.poll();
        w = w + bestProfit;
    }

    return w;
}
```
