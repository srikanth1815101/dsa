---
title: "Daily Temperatures"
date: 2026-09-27T10:16:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Stack", "Monotonic Stack"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DailyTemperatures/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DailyTemperatures/engineering"

hints:
  - "Traverse the array and maintain a monotonic stack of indices with decreasing temperatures."
  - "When the current day is warmer than the temperature at the top index of the stack, pop the index and record the day difference."

youtubeId: ""

solutionUrl: "/solutions/daily-temperatures-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "temperatures = [73, 74, 75, 71, 69, 72, 76, 73]"
    output: "[1, 1, 4, 2, 1, 1, 0, 0]"
    explanation: "For day 0 (73), warmer is day 1 (74) -> wait 1. For day 2 (75), warmer is day 6 (76) -> wait 4."
  - input: "temperatures = [30, 40, 50, 60]"
    output: "[1, 1, 1, 0]"
    explanation: "Each consecutive day is warmer except the last day which has no future days."

constraints:
  - "1 <= temperatures.length <= 10^5"
  - "30 <= temperatures[i] <= 100"
  - "The returned array must have the exact same length as temperatures."

realWorld:
  - title: "Weather Forecasting Advisory Systems"
    description: "Meteorological engines calculate expected waiting intervals until temperatures rise above freezing or heatwave thresholds."
  - title: "Hardware Thermal Throttling Mitigation"
    description: "System kernel thermal managers compute delay offsets until processor core operating temperatures drop beneath safe thresholds."
  - title: "Financial Price Spike Warning"
    description: "Algorithmic trading systems calculate time-to-spike indicators by measuring duration until next price appreciation."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `temperatures` representing daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i-th` day to get a warmer temperature.

If there is no future day for which this is possible, keep `answer[i] == 0` instead.
