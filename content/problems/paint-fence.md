---
title: "Paint Fence"
date: 2026-09-27T20:32:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Mathematics", "Arrays"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PaintFence/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PaintFence/engineering"

hints:
  - "For n = 1, there are k ways. For n = 2, posts can share the same color (k ways) or differ (k * (k - 1) ways)."
  - "For post i >= 3, matching post i - 1 requires post i - 1 and i - 2 to have had different colors (newSame = diff), while differing allows (same + diff) * (k - 1)."

youtubeId: ""

solutionUrl: "/solutions/paint-fence-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "n = 3, k = 2"
    output: "6"
    explanation: "Let colors be 0 and 1. Valid colorings: [0, 0, 1], [0, 1, 0], [0, 1, 1], [1, 0, 0], [1, 0, 1], [1, 1, 0]."
  - input: "n = 1, k = 7"
    output: "7"
    explanation: "With 1 post and 7 available colors, there are 7 valid combinations."

constraints:
  - "0 <= n <= 50"
  - "0 <= k <= 100"
  - "The result is guaranteed to fit within a signed 32-bit integer."

realWorld:
  - title: "Traffic Signal Cycle Scheduling"
    description: "Scheduling traffic lights where no single phase may remain active for more than two consecutive intervals."
  - title: "RF Frequency Channel Assignment"
    description: "Allocating cellular transmission frequencies such that consecutive carrier towers avoid adjacent channel interference."
  - title: "Microservice Request Dispatching"
    description: "Preventing queue starvation by limiting consecutive burst traffic assignments to any single worker replica."
---
<!-- All rights reserved to CSRGO DSA -->

You are tasked with painting a fence of `n` posts using `k` distinct colors.

You must adhere to the condition that **no more than two adjacent fence posts can share the same color**.

Compute and return the total number of valid ways to paint the entire fence. If painting is impossible under the constraints, return `0`.
