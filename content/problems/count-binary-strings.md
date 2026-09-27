---
title: "Count Binary Strings"
date: 2026-09-27T20:27:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Strings"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CountBinaryStrings/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CountBinaryStrings/engineering"

hints:
  - "Maintain two state variables tracking the count of valid binary strings ending in '0' and ending in '1'."
  - "A '0' can only append to a string that previously ended in '1', whereas a '1' can append to strings ending in either '0' or '1'."

youtubeId: ""

solutionUrl: "/solutions/count-binary-strings-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "n = 2"
    output: "3"
    explanation: "The valid binary strings of length 2 with no consecutive 0s are \"01\", \"10\", and \"11\"."
  - input: "n = 3"
    output: "5"
    explanation: "The 5 valid binary strings of length 3 are \"010\", \"011\", \"101\", \"110\", and \"111\"."

constraints:
  - "1 <= n <= 45"
  - "Total count fits within standard 32-bit signed integer limits"
  - "Strings consist purely of characters '0' and '1'"

realWorld:
  - title: "Signal Pulse Run-Length Modulation"
    description: "Generating Run-Length Limited (RLL) communication stream codewords where consecutive low-voltage line states are restricted."
  - title: "Hardware Clock Gating Sequence Verification"
    description: "Validating microchip sleep-cycle clock gating sequences to ensure consecutive idle power cycles do not breach capacitor retention."
  - title: "Distributed Consensus Quorum Heartbeats"
    description: "Analyzing valid peer heartbeat schedules where consecutive missed polls trigger automated node failovers."
---
<!-- All rights reserved to CSRGO DSA -->

Given a positive integer `n`, find the number of distinct binary strings of length `n` that contain **no consecutive `0`s**.

Return the total count of valid binary strings.
