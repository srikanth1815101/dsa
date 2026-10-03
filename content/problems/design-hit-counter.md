---
title: "Design Hit Counter"
date: 2026-10-01T02:48:00+05:30
difficulty: "Medium"
topics: ["Design", "Queue", "Binary Search"]
companies: ["Amazon", "Twitter", "Dropbox"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DesignHitCounter/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DesignHitCounter/engineering"

hints:
  - "Because hits arrive chronologically, a circular array of size 300 can track timestamps and hit counts for each second."
  - "When getting hits at timestamp t, sum counts for all slots where t - slotTimestamp < 300."

youtubeId: ""

solutionUrl: "/solutions/design-hit-counter-solution/"

timeComplexity: "O(1) per hit, O(s) per getHits"
spaceComplexity: "O(s)"

examples:
  - input: "operations = [\"hit\", \"hit\", \"hit\", \"getHits\", \"hit\", \"getHits\", \"getHits\"], timestamps = [1, 2, 3, 4, 300, 300, 301]"
    output: "[3, 4, 3]"
    explanation: "At t=4 hits in range (4-300, 4] are at t=1,2,3 (3 hits). At t=300 hits are 1,2,3,300 (4 hits). At t=301 t=1 is excluded leaving 2,3,300 (3 hits)."
  - input: "operations = [\"hit\", \"getHits\"], timestamps = [1, 300]"
    output: "[1]"
    explanation: "At t=300, hit at t=1 is inside the 300s window (300 - 1 < 300)."

constraints:
  - "1 <= operations.length <= 10^4"
  - "operations[i] is either 'hit' or 'getHits'."
  - "1 <= timestamps[i] <= 2 * 10^9"
  - "All calls are made with strictly non-decreasing timestamps."

realWorld:
  - title: "API Rate Limiting Metrics"
    description: "Monitoring incoming API request volume over rolling 5-minute windows to enforce server throttling policies."
  - title: "Web Analytics Pageview Counting"
    description: "Recording real-time live visitor click counts across rolling telemetry reporting windows."
  - title: "DDoS Threat Burst Detection"
    description: "Tracking packet reception frequency to trigger automated firewall mitigation rules."
weight: 109
---
<!-- All rights reserved to CSRGO DSA -->

Design a hit counter which counts the number of hits received in the past **5 minutes** (i.e., the past **300 seconds**).

Implement the `solve` function that processes a sequence of `operations` (`"hit"` or `"getHits"`) with corresponding `timestamps` (in seconds in chronological order), and returns an integer array containing the results of all `getHits` operations.
