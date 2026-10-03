---
title: "Corporate Flight Bookings - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/corporate-flight-bookings/"
weight: 86
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Applying each booking directly by iterating across the range `[first, last]` takes $\mathcal{O}(n)$ per booking, leading to $\mathcal{O}(n \cdot \text{bookings.length})$ overall.

Using a **Difference Array (Sweep-line prefix sum)**, each range update can be performed in $\mathcal{O}(1)$ time:
1. Initialize an array `diff` of size `n`.
2. For each booking `[first, last, seats]`:
   - Flights are 1-indexed, corresponding to 0-indexed range `[first - 1, last - 1]`.
   - Add `seats` at start index `first - 1`: `diff[first - 1] = diff[first - 1] + seats`.
   - Subtract `seats` just beyond the range at index `last` (if `last < n`): `diff[last] = diff[last] - seats`.
3. Compute the running prefix sum across `diff`. Each element `diff[i]` then reflects the net accumulated bookings for flight `i + 1`.

### Step-by-Step Algorithm:
1. Handle edge cases: if `n <= 0`, return `new int[0]`.
2. Allocate an integer array `res` of length `n`.
3. If `bookings == null || bookings.length == 0`, return `res`.
4. Iterate through each `booking` in `bookings`:
   - Let `first = booking[0] - 1`.
   - Let `last = booking[1]`.
   - Let `seats = booking[2]`.
   - Update `res[first] = res[first] + seats`.
   - If `last < n`, update `res[last] = res[last] - seats`.
5. Iterate from index `1` to `n - 1`:
   - Compute `res[i] = res[i] + res[i - 1]`.
6. Return `res`.

## Code

```java
public static int[] solve(int[][] bookings, int n) {
    if (n <= 0) {
        return new int[0];
    }

    int[] res = new int[n];
    if (bookings == null || bookings.length == 0) {
        return res;
    }

    for (int i = 0; i < bookings.length; i = i + 1) {
        int first = bookings[i][0] - 1;
        int last = bookings[i][1];
        int seats = bookings[i][2];

        res[first] = res[first] + seats;
        if (last < n) {
            res[last] = res[last] - seats;
        }
    }

    for (int i = 1; i < n; i = i + 1) {
        res[i] = res[i] + res[i - 1];
    }

    return res;
}
```
