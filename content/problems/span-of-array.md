---
title: "Span of Array"
date: 2026-09-25T21:59:00+05:30
difficulty: "Easy"
topics: ["Arrays"]
companies: ["Amazon", "Microsoft", "TCS"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SpanOfArray/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SpanOfArray/engineering"

hints:
  - "Traverse the array in a single pass while tracking the running maximum and running minimum values."
  - "Initialize both max and min with the first element of the array, then compute (max - min) at the end."

youtubeId: ""

solutionUrl: "/solutions/span-of-array-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [15, 30, 40, 4, 11, 9]"
    output: "36"
    explanation: "The maximum value in the array is 40 and the minimum value is 4. The span is 40 - 4 = 36."
  - input: "arr = [6, 6, 6, 6]"
    output: "0"
    explanation: "All elements are identical, so maximum is 6 and minimum is 6. The span is 6 - 6 = 0."

constraints:
  - "1 <= arr.length <= 10^5"
  - "-10^9 <= arr[i] <= 10^9"
  - "The span value fits within a standard 32-bit signed integer."

realWorld:
  - title: "Signal Dynamic Range Calculation"
    description: "Determining peak-to-peak amplitude spans in digital audio processing to prevent amplifier clipping."
  - title: "Stock Volatility Analysis"
    description: "Calculating intraday price ranges (High - Low) to determine day-trading volatility metrics."
  - title: "Sensor Range Calibration"
    description: "Measuring maximum variance in environmental temperature and humidity sensors during diagnostic baseline scans."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr`, determine the **span** of the array. The span is defined as the difference between the maximum element and the minimum element ($max - min$).
