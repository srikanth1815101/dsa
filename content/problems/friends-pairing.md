---
title: "Friends Pairing"
date: 2026-09-27T20:33:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Mathematics", "Recursion"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/FriendsPairing/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/FriendsPairing/engineering"

hints:
  - "The n-th friend can either remain single or pair up with one of the (n - 1) other friends."
  - "If single, f(n - 1) subproblem remains; if paired, (n - 1) * f(n - 2) combinations are formed."

youtubeId: ""

solutionUrl: "/solutions/friends-pairing-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "n = 3"
    output: "4"
    explanation: "{1}, {2}, {3} (all single); {1}, {2, 3}; {2}, {1, 3}; {3}, {1, 2}. Total = 4 ways."
  - input: "n = 4"
    output: "10"
    explanation: "1 way with all single, 6 ways with 1 pair, and 3 ways with 2 pairs. Total = 10 ways."

constraints:
  - "0 <= n <= 30"
  - "Each friend can be paired at most once."
  - "The return type must support 64-bit integer values (long)."

realWorld:
  - title: "Tournament Bracket Matching"
    description: "Configuring tournament rounds where athletes can either compete in pairs or receive single-round byes."
  - title: "Cluster Node Direct Tunneling"
    description: "Pairing peer nodes for reciprocal mutual-failover heartbeats while letting independent master nodes operate solo."
  - title: "Dual-Bus Hardware Routing"
    description: "Assigning circuit pins as either single-ended control lines or paired differential signaling channels."
---
<!-- All rights reserved to CSRGO DSA -->

Given `n` friends, each person can either remain single or be paired up with exactly one other friend. Each friend can be paired at most once.

Your task is to compute the total number of distinct ways in which `n` friends can remain single or be paired up.

If `n = 0`, return `0`.
