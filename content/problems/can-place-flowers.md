---
title: "Can Place Flowers"
date: 2026-10-01T02:46:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Greedy"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CanPlaceFlowers/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CanPlaceFlowers/engineering"

hints:
  - "A flower can be planted at plot i if plot i is empty, and both plot i - 1 and plot i + 1 are either empty or out of bounds."
  - "Whenever you plant a flower at index i, update flowerbed[i] = 1 and decrement n immediately."

youtubeId: ""

solutionUrl: "/solutions/can-place-flowers-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "flowerbed = [1,0,0,0,1], n = 1"
    output: "true"
    explanation: "Planting a flower at index 2 results in [1,0,1,0,1], which satisfies the no-adjacent-flowers rule."
  - input: "flowerbed = [1,0,0,0,1], n = 2"
    output: "false"
    explanation: "Only one flower can be planted at index 2 without violating adjacency rules, so n = 2 is impossible."

constraints:
  - "1 <= flowerbed.length <= 2 * 10^4"
  - "flowerbed[i] is 0 or 1."
  - "There are no two adjacent flowers in flowerbed initially."
  - "0 <= n <= flowerbed.length"

realWorld:
  - title: "Cell Tower Interference Zoning"
    description: "Placing radio frequency transmitters such that no two adjacent suburban zone cells cause signal crosstalk."
  - title: "Social Distancing Seating Allocation"
    description: "Allocating auditorium seats with mandatory empty buffer seats between booked attendees."
  - title: "Server Rack Power Distribution"
    description: "Distributing high-density blade servers avoiding adjacent chassis overheating thresholds."
weight: 107
---
<!-- All rights reserved to CSRGO DSA -->

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in **adjacent** plots.

Given an integer array `flowerbed` containing `0`'s and `1`'s, where `0` means empty and `1` means not empty, and an integer `n`, return `true` *if* `n` *new flowers can be planted in the* `flowerbed` *without violating the no-adjacent-flowers rule and* `false` *otherwise*.
