---
title: "Rotate Matrix"
date: 2026-09-26T19:16:00+05:30
difficulty: "Medium"
topics: ["Matrix", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/RotateMatrix/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/RotateMatrix/engineering"

hints:
  - "A 90-degree clockwise rotation can be achieved through two elementary linear algebra operations: matrix transposition followed by horizontal reflection."
  - "First, transpose the matrix by swapping mat[i][j] with mat[j][i] for all i < j. Then, reverse each row using a two-pointer swap from left to right."

youtubeId: ""

solutionUrl: "/solutions/rotate-matrix-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(1)"

examples:
  - input: "mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]"
    output: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]"
    explanation: "Transposing gives [[1,4,7],[2,5,8],[3,6,9]]. Reversing each row gives [[7,4,1],[8,5,2],[9,6,3]]."
  - input: "mat = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]"
    output: "[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]"
    explanation: "Clockwise 90-degree in-place rotation of the 4x4 matrix."

constraints:
  - "n == mat.length == mat[i].length"
  - "1 <= n <= 500"
  - "-1000 <= mat[i][j] <= 1000"

realWorld:
  - title: "Mobile Device Framebuffer Orientation"
    description: "Rotating GPU raw pixel framebuffers 90 degrees in-place when flipping display orientation between portrait and landscape modes."
  - title: "Geospatial Aerial Orthorectification"
    description: "Aligning raw drone and satellite raster imagery grids clockwise with standardized North-facing projection coordinate systems."
  - title: "Clinical MRI Plane Reorientation"
    description: "Transforming 2D axial magnetic resonance scan slices into standard coronal or sagittal diagnostic view orientations."
---
<!-- All rights reserved to CSRGO DSA -->

Given an $n \times n$ 2D integer matrix `mat` representing an image, rotate the image by **90 degrees clockwise** in-place.

You must rotate the input matrix directly in memory without allocating another full 2D matrix, and return the modified matrix `mat`.
