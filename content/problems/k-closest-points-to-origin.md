---
title: "K Closest Points to Origin"
date: 2026-10-01T01:59:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Heap", "Quick Select"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/KClosestPointsToOrigin/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/KClosestPointsToOrigin/engineering"

hints:
  - "Use a Max-Heap of size K storing points by Euclidean distance; pop the largest when size exceeds K."
  - "Alternatively, use Quickselect (Hoare's selection algorithm) to partition the array in O(n) average time."

youtubeId: ""

solutionUrl: "/solutions/k-closest-points-to-origin-solution/"

timeComplexity: "O(n log k)"
spaceComplexity: "O(k)"

examples:
  - input: "points = [[1, 3], [-2, 2]], k = 1"
    output: "[[-2, 2]]"
    explanation: "The distance between (1, 3) and the origin is sqrt(1^2 + 3^2) = sqrt(10). The distance between (-2, 2) and the origin is sqrt((-2)^2 + 2^2) = sqrt(8). Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin. We only want the closest k = 1 points, so the answer is [[-2, 2]]."
  - input: "points = [[3, 3], [5, -1], [-2, 4]], k = 2"
    output: "[[-2, 4], [3, 3]]"
    explanation: "The answer [[3, 3], [-2, 4]] would also be accepted."

constraints:
  - "1 <= k <= points.length <= 10^4"
  - "-10^4 <= points[i][0], points[i][1] <= 10^4"
  - "Distance is measured using Euclidean distance sqrt(x^2 + y^2)."
realWorld:
  - title: "Ride-Sharing Driver Dispatch"
    description: "Identifying the K closest available rideshare vehicles to a passenger requesting pickup on a mapping grid."
  - title: "Spatial Geographic Point-of-Interest Search"
    description: "Finding the K nearest charging stations to an electric vehicle's current GPS coordinates."
  - title: "Recommendation Systems KNN Embedding Lookup"
    description: "Locating the K nearest vector embeddings to a query representation in recommendation engines."
weight: 60
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of `points` where `points[i] = [xi, yi]` represents a point on the **X-Y** plane and an integer `k`, return the `k` closest points to the origin `(0, 0)`.

The distance between two points on the **X-Y** plane is the Euclidean distance (i.e., $\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$).

You may return the answer in **any order**. The answer is **guaranteed** to be **unique** (except for the order that it is in).
