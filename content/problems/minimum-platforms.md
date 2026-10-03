---
title: "Minimum Platforms"
date: 2026-10-01T01:36:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Sorting", "Greedy"]
companies: ["Amazon", "Google", "Atlassian"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MinimumPlatforms/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MinimumPlatforms/engineering"

hints:
  - "Sort arrival times and departure times in ascending order as two separate lists."
  - "Use two pointers: when arrival <= departure, increment platform count; otherwise decrement platform count and advance departure pointer."

youtubeId: ""

solutionUrl: "/solutions/minimum-platforms-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [900, 940, 950, 1100, 1500, 1800]`, `dep = [910, 1200, 1120, 1130, 1900, 2000]"
    output: "** `3` **"
    explanation: "** Between 9:40 and 11:10, a maximum of 3 trains are at the station simultaneously (trains 2, 3, and 4), requiring 3 platforms."
  - input: "arr = [900, 1235, 1100]`, `dep = [1000, 1240, 1200]"
    output: "** `1` **"
    explanation: "** No two trains overlap in their timings at the station, so 1 platform is sufficient."

constraints:
  - "1 <= arr.length <= 5 * 10^4"
  - "dep.length == arr.length"
  - "0 <= arr[i] <= dep[i] <= 2359"

realWorld:
  - title: "Airport Gate Allocation Management"
    description: "Determining the minimum physical boarding gates required to handle flight arrivals and departures without delays."
  - title: "Cloud Instance Peak Concurrency Sizing"
    description: "Calculating maximum concurrent compute instances needed during overlapping batch container lifecycles."
  - title: "Database Connection Pool Capacity Planning"
    description: "Estimating peak active database connections required during concurrent transaction spikes."
weight: 37
---
<!-- All rights reserved to CSRGO DSA -->

Given the arrival and departure times of all trains that reach a railway station, find the minimum number of platforms required for the railway station so that no train is kept waiting.

Consider that all trains arrive and depart on the same day. At any given instance of time, the same platform cannot be used for both departure and arrival simultaneously. If a train arrives at the same time another train departs, an additional platform is required.
