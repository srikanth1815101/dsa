---
title: "Sliding Window Maximum"
date: 2024-01-25T00:00:00Z
difficulty: "Hard"
topics: ["Array", "Queue", "Sliding Window", "Monotonic Queue"]
companies: ["Amazon", "Google", "Microsoft"]
path: "Mastery"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/sliding-window-maximum"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/sliding-window-maximum"
hints:
  - "Use a monotonic decreasing deque to track potential maximums."
  - "Remove elements from front when they're outside the window."
youtubeId: "DfljaUwZsOk"
solutionUrl: "/solutions/sliding-window-maximum-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(k)"
examples:
  - input: "nums = [1,3,-1,-3,5,3,6,7], k = 3"
    output: "[3,3,5,5,6,7]"
    explanation: "Windows: [1,3,-1]→3, [3,-1,-3]→3, [-1,-3,5]→5, [-3,5,3]→5, [5,3,6]→6, [3,6,7]→7"
  - input: "nums = [1], k = 1"
    output: "[1]"
    explanation: "Single element window, max is 1."
constraints:
  - "1 <= nums.length <= 10^5"
  - "-10^4 <= nums[i] <= 10^4"
  - "1 <= k <= nums.length"
realWorld:
  - title: "Stock Analysis"
    description: "Finding maximum price in rolling time windows."
  - title: "Network Monitoring"
    description: "Tracking peak traffic in sliding time intervals."
  - title: "Sensor Data Processing"
    description: "Finding maximum readings in moving observation windows."
---

You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

Return the **max** sliding window.
