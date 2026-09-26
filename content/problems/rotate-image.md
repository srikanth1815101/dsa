---
title: "Rotate Image"
date: 2026-09-26T19:42:00+05:30
difficulty: "Medium"
topics: ["Matrix", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Facebook"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/RotateImage/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/RotateImage/engineering"

hints:
  - "To rotate an n x n matrix 90 degrees counter-clockwise (anti-clockwise) in place, break the geometric transformation into two operations: transposition and vertical reflection."
  - "First, transpose the matrix by swapping mat[i][j] with mat[j][i] for all i < j. Then, reverse each column vertically by swapping elements between top and bottom rows."

youtubeId: ""

solutionUrl: "/solutions/rotate-image-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(1)"

examples:
  - input: "mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]"
    output: "[[3, 6, 9], [2, 5, 8], [1, 4, 7]]"
    explanation: "Transposing yields [[1, 4, 7], [2, 5, 8], [3, 6, 9]]. Reversing each column vertically produces [[3, 6, 9], [2, 5, 8], [1, 4, 7]]."
  - input: "mat = [[1, 2], [3, 4]]"
    output: "[[2, 4], [1, 3]]"
    explanation: "90-degree counter-clockwise rotation of 2x2 matrix."

constraints:
  - "n == mat.length == mat[i].length"
  - "1 <= n <= 500"
  - "-1000 <= mat[i][j] <= 1000"

realWorld:
  - title: "Camera Sensor Counter-Clockwise Portrait Mode"
    description: "Reorienting raw CMOS/CCD image sensor frames counter-clockwise 90 degrees when holding a mobile device in reverse landscape orientation."
  - title: "Medical Radiography Scan Reorientation"
    description: "Aligning cranial CT scan slices counter-clockwise into radiological reference coordinates without allocating auxiliary frame memory."
  - title: "CAD Vector Blueprint Orientation"
    description: "Applying 90-degree counter-clockwise architectural blueprint rotations in-place for construction site floor layout viewers."
---
<!-- All rights reserved to CSRGO DSA -->

Given an $n \times n$ 2D integer matrix `mat` representing an image, rotate the image by **90 degrees counter-clockwise (anti-clockwise)** in-place.

You must rotate the input matrix directly in memory without allocating another full 2D matrix, and return the modified matrix `mat`.
