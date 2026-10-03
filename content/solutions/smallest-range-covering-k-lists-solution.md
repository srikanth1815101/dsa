---
title: "Smallest Range Covering K Lists - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/smallest-range-covering-k-lists/"
weight: 61
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To cover at least one element from every list, any candidate range must contain one element from each of the $k$ lists.
If we know the minimum element `minVal` among the current elements chosen from all $k$ lists, and the maximum element `maxVal` among them, then the range `[minVal, maxVal]` covers all $k$ lists. The span of this range is `maxVal - minVal`.

To find a smaller range, increasing `minVal` is the only viable step, because decreasing `maxVal` while keeping `minVal` unchanged would exclude the element that produced `maxVal`.
Therefore, we:
1. Maintain a min-heap holding the current element from each of the $k$ lists.
2. Maintain a running variable `currentMax` tracking the maximum element currently in the heap.
3. At each step, extract the smallest element `curr` from the min-heap. The current range `[curr.val, currentMax]` covers all $k$ lists.
4. If this range is narrower than our best recorded range, we update our best range.
5. Advance to the next element in the same list from which `curr` originated, insert it into the min-heap, and update `currentMax`.
6. If the list that contributed `curr` has no more elements, we stop: any further range could not cover that exhausted list.

### Step-by-Step Algorithm:
1. Create a min-heap storing tuples `(val, listIndex, elementIndex)` ordered by `val`.
2. Initialize `currentMax = -∞`.
3. For each list $i$ from $0$ to $k - 1$:
   - Insert `(nums[i][0], i, 0)` into the min-heap.
   - Update `currentMax = Math.max(currentMax, nums[i][0])`.
4. Initialize `startRange = -1000000` and `endRange = 1000000`.
5. While the min-heap contains $k$ elements:
   - Poll `curr` from the min-heap.
   - If `currentMax - curr.val < endRange - startRange`:
     - Update `startRange = curr.val`.
     - Update `endRange = currentMax`.
   - If `curr.elementIndex + 1 < nums[curr.listIndex].length`:
     - Retrieve `nextVal = nums[curr.listIndex][curr.elementIndex + 1]`.
     - Insert `(nextVal, curr.listIndex, curr.elementIndex + 1)` into the min-heap.
     - Update `currentMax = Math.max(currentMax, nextVal)`.
   - Else:
     - Terminate the loop because one list has been exhausted.
6. Return `new int[]{startRange, endRange}`.

## Code

```java
static class Element {
    int val;
    int listIndex;
    int elemIndex;

    Element(int val, int listIndex, int elemIndex) {
        this.val = val;
        this.listIndex = listIndex;
        this.elemIndex = elemIndex;
    }
}

public static int[] solve(int[][] nums) {
    if (nums == null || nums.length == 0) {
        return new int[0];
    }

    PriorityQueue<Element> pq = new PriorityQueue<>(new Comparator<Element>() {
        @Override
        public int compare(Element a, Element b) {
            return Integer.compare(a.val, b.val);
        }
    });

    int currentMax = Integer.MIN_VALUE;

    for (int i = 0; i < nums.length; i = i + 1) {
        pq.offer(new Element(nums[i][0], i, 0));
        currentMax = Math.max(currentMax, nums[i][0]);
    }

    int startRange = -1000000;
    int endRange = 1000000;

    while (pq.size() == nums.length) {
        Element curr = pq.poll();

        if (currentMax - curr.val < endRange - startRange) {
            startRange = curr.val;
            endRange = currentMax;
        }

        if (curr.elemIndex + 1 < nums[curr.listIndex].length) {
            int nextVal = nums[curr.listIndex][curr.elemIndex + 1];
            pq.offer(new Element(nextVal, curr.listIndex, curr.elemIndex + 1));
            currentMax = Math.max(currentMax, nextVal);
        }
    }

    return new int[]{startRange, endRange};
}
```
