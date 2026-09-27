---
title: "Top K Frequent Elements - Solution"
problemUrl: "/problems/top-k-frequent-elements/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the $k$ most frequent elements in an array:
1. Construct a frequency map storing the occurrence count of each distinct number in `nums`.
2. Maintain a min-heap of capacity $k$ ordered by element frequency:
   - For each unique key in the frequency map, add it to the min-heap.
   - If the size of the heap exceeds $k$, remove the element with the lowest frequency (`minHeap.poll()`).
3. After processing all keys, the heap holds the $k$ most frequent elements.
4. Extract the elements into an array and sort them in ascending numerical order for deterministic results.

### Step-by-Step Algorithm:
1. If `nums == null || nums.length == 0 || k <= 0`, return `new int[0]`.
2. Initialize `Map<Integer, Integer> freqMap = new HashMap<>()`.
3. Loop through `nums` from `0` to `nums.length - 1` and populate counts in `freqMap`.
4. Initialize a min-heap `PriorityQueue<Integer> minHeap = new PriorityQueue<>((a, b) -> Integer.compare(freqMap.get(a), freqMap.get(b)))`.
5. For each key `num` in `freqMap.keySet()`:
   - Add `num` to `minHeap`.
   - If `minHeap.size() > k`:
     - Poll root: `minHeap.poll()`.
6. Initialize an array `result` of size `k`.
7. Loop from `0` to `k - 1`:
   - Set `result[i] = minHeap.poll()`.
8. Sort `result` in ascending numerical order using `Arrays.sort(result)`.
9. Return `result`.

## Code

```java
public static int[] solve(int[] nums, int k) {
    if (nums == null || nums.length == 0 || k <= 0) {
        return new int[0];
    }

    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i = i + 1) {
        int count = map.getOrDefault(nums[i], 0) + 1;
        map.put(nums[i], count);
    }

    PriorityQueue<Integer> minHeap = new PriorityQueue<>((a, b) -> Integer.compare(map.get(a), map.get(b)));

    for (int key : map.keySet()) {
        minHeap.add(key);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }

    int[] result = new int[k];
    for (int i = 0; i < k; i = i + 1) {
        result[i] = minHeap.poll();
    }

    Arrays.sort(result);
    return result;
}
```

## Complexity Analysis

- **Time Complexity:** $O(n \log k)$ where $n$ is `nums.length`. Building the frequency map takes $O(n)$ time. The min-heap contains at most $k + 1$ elements, making each push and poll operation $O(\log k)$ for each distinct key. Sorting the final $k$ elements takes $O(k \log k)$.
- **Space Complexity:** $O(n)$ auxiliary space to store unique numbers in the frequency map and min-heap.
