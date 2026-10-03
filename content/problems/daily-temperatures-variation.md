---
title: "Daily Temperatures (Variation)"
date: 2026-10-01T02:39:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Stack", "Monotonic Stack"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DailyTemperaturesVariation/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DailyTemperaturesVariation/engineering"

hints:
  - "Because the array is circular, consider traversing the array twice up to index 2 * n - 1."
  - "Use a monotonic decreasing stack storing indices modulo n; when a warmer temperature is encountered, calculate distance as (currIndex - stackIndex) modulo n."

youtubeId: ""

solutionUrl: "/solutions/daily-temperatures-variation-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "temperatures = [73, 74, 75, 71, 69, 72, 76, 73]"
    output: "[1, 1, 4, 2, 1, 1, 0, 2]"
    explanation: "Because day 7 (73) wraps circularly to day 0 (73) then day 1 (74), day 7 waits 2 days."
  - input: "temperatures = [30, 40, 50, 60]"
    output: "[1, 1, 1, 0]"
    explanation: "No day is warmer than 60 even after circular traversal, so the last day's answer is 0."

constraints:
  - "1 <= temperatures.length <= 10^5"
  - "30 <= temperatures[i] <= 100"
  - "The array is circular, meaning index 0 follows index temperatures.length - 1."
  - "The returned array must have the exact same length as temperatures."

realWorld:
  - title: "Cyclic Agricultural Frost Forecasting"
    description: "Predicting elapsed days until next warming event across repeating annual meteorological cycles."
  - title: "Automotive Engine Thermal Duty Cycles"
    description: "Monitoring delay before temperature elevation across continuous circular test duty cycles."
  - title: "Data Center HVAC Cyclic Modulation"
    description: "Scheduling pre-cooling cycles based on circular diurnal server rack heat profiles."
weight: 100
---
<!-- All rights reserved to CSRGO DSA -->

Given a circular array of daily temperatures `temperatures` where the weather pattern repeats cyclically (the next day after `temperatures[n - 1]` is `temperatures[0]`), return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i-th` day to experience a warmer temperature.

If no future day is warmer even after traversing the circular cycle, set `answer[i] = 0`.
