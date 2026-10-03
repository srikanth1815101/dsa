---
title: "Bar Chart"
date: 2026-09-25T22:06:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Sorting"]
companies: ["Amazon", "TCS", "Infosys"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/BarChart/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/BarChart/engineering"

hints:
  - "Find the maximum height in the array to determine the total number of floors (rows) in the chart."
  - "Iterate downward from max floor to 1; for each element, print a star with tab (*\\t) if its height is greater than or equal to the floor, else print a tab (\\t)."

youtubeId: ""

solutionUrl: "/solutions/bar-chart-solution/"

timeComplexity: "O(n * max(arr))"
spaceComplexity: "O(n * max(arr))"

examples:
  - input: "arr = [3, 1, 0, 7, 5]"
    output: "            *\n            *\n            *   *\n            *   *\n*           *   *\n*           *   *\n*   *       *   *"
    explanation: "Maximum height is 7. Floor 7 and 6 only contain a star at index 3. Lower floors contain stars where array heights reach or exceed that floor level."
  - input: "arr = [2, 3, 1]"
    output: "    *\n*   *\n*   *   *"
    explanation: "Maximum height is 3. Row 3 has a star at index 1. Row 2 has stars at indices 0 and 1. Row 1 has stars at all indices."

constraints:
  - "1 <= arr.length <= 100"
  - "0 <= arr[i] <= 100"
  - "Each star column is followed by a tab (\\t), empty columns contain a tab (\\t), and each floor ends with a newline (\\n)."

realWorld:
  - title: "CLI Analytics Dashboard"
    description: "Rendering text-based historical traffic and CPU utilization histograms in DevOps command-line interfaces."
  - title: "Audio Equalizer Spectrum Visualizer"
    description: "Displaying frequency band power bar charts in terminal-based media players and audio hardware monitors."
  - title: "Financial Volume Profile Display"
    description: "Constructing vertical volume histograms across discrete price bins in algorithmic trading terminal screens."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of non-negative integers `arr` representing bar heights, generate a vertical text-based **bar chart** representing the values of the array from top to bottom.
