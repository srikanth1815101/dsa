---
title: "Best Time to Buy and Sell Stock - Solution"
problemUrl: "/problems/best-time-to-buy-and-sell-stock/"
---

## Explanation

The key insight is that we want to find the **smallest valley** followed by the **largest peak**. We can do this in one pass by tracking the minimum price seen so far and calculating the potential profit at each step.

**Algorithm:**
1. Initialize `minPrice` to infinity and `maxProfit` to 0
2. For each price, if it's less than `minPrice`, update `minPrice`
3. Otherwise, calculate profit (`price - minPrice`) and update `maxProfit` if it's larger
4. Return `maxProfit`

## Code

```java
class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else {
                maxProfit = Math.max(maxProfit, price - minPrice);
            }
        }
        return maxProfit;
    }
}
```
