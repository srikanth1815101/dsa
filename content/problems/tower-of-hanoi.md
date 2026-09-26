---
title: "Tower of Hanoi"
date: 2026-09-26T20:44:00+05:30
difficulty: "Medium"
topics: ["Recursion", "Divide and Conquer"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/TowerOfHanoi/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/TowerOfHanoi/engineering"

hints:
  - "Break into three steps: move top n - 1 disks from source to helper tower."
  - "Move disk n from source to destination tower."
  - "Finally, move the n - 1 disks from helper to destination tower."

youtubeId: ""

solutionUrl: "/solutions/tower-of-hanoi-solution/"

timeComplexity: "O(2^n)"
spaceComplexity: "O(n)"

examples:
  - input: "n = 1, src = 1, dest = 2, helper = 3"
    output: "[\"1[1 -> 2]\"]"
    explanation: "Move disk 1 directly from tower 1 to tower 2."
  - input: "n = 2, src = 1, dest = 2, helper = 3"
    output: "[\"1[1 -> 3]\", \"2[1 -> 2]\", \"1[3 -> 2]\"]"
    explanation: "Move disk 1 to helper tower 3, disk 2 to dest tower 2, then disk 1 to dest tower 2."

constraints:
  - "1 <= n <= 16"
  - "src, dest, helper are distinct positive integers"

realWorld:
  - title: "Disk Backup and Migration Protocols"
    description: "Multi-tiered storage volume migration under strict non-overwrite staging constraints."
  - title: "Robotic Gantry Arm Scheduling"
    description: "Sequencing container stacking moves without violating payload weight ordering constraints."
  - title: "Recursive State Space Exploration"
    description: "Benchmarking minimum state-transition graphs in formal verification and model checking."
---
<!-- All rights reserved to CSRGO DSA -->

The Tower of Hanoi is a classic mathematical puzzle consisting of three towers and `n` disks of different diameters.

The objective is to move the entire stack of `n` disks from the source tower `src` to the destination tower `dest` using an auxiliary helper tower `helper`, adhering to these rules:
1. Only one disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty tower.
3. No larger disk may be placed on top of a smaller disk.

Format each move as `"<disk>[<src> -> <dest>]"`.

Return a list of strings representing the sequence of moves.
