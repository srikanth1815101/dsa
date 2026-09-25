---
title: "Best Time to Buy and Sell Stock - Solution"
problemUrl: "/problems/best-time-to-buy-and-sell-stock/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine the maximum possible profit in a single pass, we can use a **Greedy / One-Pass Running Minimum** approach:

1. **State Tracking**:
   - `minPrice`: Stores the lowest stock purchase price encountered up to the current day. Initialize to `Integer.MAX_VALUE`.
   - `maxProfit`: Stores the maximum profit encountered so far. Initialize to `0`.

2. **Iterative Evaluation**:
   For each price on day $i$:
   - If $\text{price} < \text{minPrice}$, we update our lowest buying point:
     $$\text{minPrice} = \text{price}$$
   - Otherwise, selling on day $i$ yields a profit of $\text{price} - \text{minPrice}$. We check if this profit exceeds $\text{maxProfit}$:
     $$\text{maxProfit} = \max(\text{maxProfit}, \text{price} - \text{minPrice})$$

3. **Return**:
   - After traversing all days, `maxProfit` contains the optimal profit (which remains `0` if prices only decline).

### Complexity Analysis
- **Time Complexity**: $O(n)$, iterating through the `prices` array exactly once.
- **Space Complexity**: $O(1)$, using only two scalar variables.

---

## Code

```java
public static int solve(int[] prices) {
    if (prices == null || prices.length <= 1) {
        return 0;
    }

    int minPrice = Integer.MAX_VALUE;
    int maxProfit = 0;

    for (int i = 0; i < prices.length; i++) {
        int currentPrice = prices[i];

        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        } else if (currentPrice - minPrice > maxProfit) {
            maxProfit = currentPrice - minPrice;
        }
    }

    return maxProfit;
}
```
