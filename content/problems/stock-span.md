---
title: "Stock Span"
date: 2026-09-27T10:04:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Stack", "Monotonic Stack"]
companies: ["Amazon", "Goldman Sachs", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/StockSpan/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/StockSpan/engineering"

hints:
  - "The span is determined by finding the nearest day to the left with a price strictly greater than today's price."
  - "Store indices of prices in a monotonic stack where prices at these indices are strictly decreasing."

youtubeId: ""

solutionUrl: "/solutions/stock-span-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "prices = [100, 80, 60, 70, 60, 75, 85]"
    output: "[1, 1, 1, 2, 1, 4, 6]"
    explanation: "For 100 span is 1. For 80 span is 1. For 60 span is 1. For 70 span is 2 (70, 60). For 60 span is 1. For 75 span is 4 (75, 60, 70, 60). For 85 span is 6."
  - input: "prices = [10, 4, 5, 90, 120, 80]"
    output: "[1, 1, 2, 4, 5, 1]"
    explanation: "For 10 span is 1. For 4 span is 1. For 5 span is 2. For 90 span is 4. For 120 span is 5. For 80 span is 1."

constraints:
  - "1 <= prices.length <= 10^5"
  - "1 <= prices[i] <= 10^9"
  - "The returned array must match the length of prices."

realWorld:
  - title: "High-Frequency Trading Momentum Gauges"
    description: "Quantitative trading systems calculate consecutive rally or dip spans to trigger automated market buy or sell orders."
  - title: "Financial Risk Profiling"
    description: "Risk assessment modules measure asset volatility duration by tracking the continuity of downward or upward trends."
  - title: "Energy Grid Load Monitoring"
    description: "Smart power distribution grids calculate how long power consumption has remained sustained beneath baseline peaks."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `prices` where `prices[i]` represents the price of a given stock on day `i`, calculate the span of the stock's price for each day.

The span of the stock's price on day `i` is defined as the maximum number of consecutive days (starting from day `i` and moving backwards towards day `0`) for which the stock price was less than or equal to `prices[i]`.

Return an array `span` of the same length where `span[i]` is the stock span for day `i`.
