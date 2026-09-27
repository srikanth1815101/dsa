---
title: "Asteroid Collision"
date: 2026-09-27T10:17:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Stack", "Simulation"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AsteroidCollision/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/AsteroidCollision/engineering"

hints:
  - "Use a stack to simulate asteroids moving from left to right."
  - "A collision occurs only when an asteroid moving left (negative) encounters an asteroid moving right (positive) at the top of the stack."

youtubeId: ""

solutionUrl: "/solutions/asteroid-collision-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "asteroids = [5, 10, -5]"
    output: "[5, 10]"
    explanation: "10 and -5 collide resulting in 10. 5 and 10 never collide because they move in the same direction."
  - input: "asteroids = [8, -8]"
    output: "[]"
    explanation: "8 and -8 collide and destroy each other completely."

constraints:
  - "2 <= asteroids.length <= 10^4"
  - "-1000 <= asteroids[i] <= 1000"
  - "asteroids[i] != 0"

realWorld:
  - title: "Particle Physics Collision Simulation"
    description: "Computational physics engines simulate opposing charged particle annihilations in particle accelerator beams."
  - title: "Network Routing Packet Priority Resolution"
    description: "QoS packet scheduling queues resolve opposing bidirectional packet collisions based on payload priority weights."
  - title: "Traffic Stream Merge Simulation"
    description: "Highway traffic modeling systems resolve vehicle merge conflicts and automated deceleration queues."
---
<!-- All rights reserved to CSRGO DSA -->

We are given an array `asteroids` of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find the state of the asteroids after all collisions:
- If two asteroids meet, the smaller one explodes.
- If both are the same size, both explode.
- Two asteroids moving in the same direction will never meet.
- A collision only occurs when an asteroid moving right meets an asteroid moving left.

Return an array representing the remaining asteroids in order.
