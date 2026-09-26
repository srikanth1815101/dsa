---
title: "Shell Rotate"
date: 2026-09-26T19:23:00+05:30
difficulty: "Medium"
topics: ["Matrix", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ShellRotate/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ShellRotate/engineering"

hints:
  - "Decompose the problem into three decoupled phases: extract the shell elements into a 1D array, rotate the 1D array by r positions, and write the rotated elements back into the shell."
  - "Traverse the shell perimeter in order: left wall (down), bottom wall (right), right wall (up), and top wall (left). To rotate the 1D array by r, normalize r = ((r % sz) + sz) % sz, then reverse parts using the three-reversal rotation algorithm."

youtubeId: ""

solutionUrl: "/solutions/shell-rotate-solution/"

timeComplexity: "O(m + n)"
spaceComplexity: "O(m + n)"

examples:
  - input: "mat = [[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]], s = 1, r = 1"
    output: "[[12, 13, 14, 24], [11, 22, 23, 34], [21, 32, 33, 44], [31, 41, 42, 43]]"
    explanation: "Shell 1 is the outer ring. Rotating by 1 advances each perimeter element one step forward along the traversal path."
  - input: "mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], s = 1, r = 2"
    output: "[[3, 6, 9], [2, 5, 8], [1, 4, 7]]"
    explanation: "Rotating outer shell of 3x3 matrix by 2 positions."

constraints:
  - "1 <= mat.length, mat[0].length <= 500"
  - "1 <= s <= min(mat.length, mat[0].length) / 2"
  - "-10^5 <= r <= 10^5"

realWorld:
  - title: "Concentric Carousel UI Animations"
    description: "Cycling multi-tier concentric dashboard ribbons independently without disturbing adjacent ring widgets."
  - title: "Mechanical Roller Bearing Circulation"
    description: "Simulating angular displacement of bearing rollers circulating within outer and inner concentric bearing raceways."
  - title: "Concentric Steganography Layer Shifting"
    description: "Cyclically shifting independent concentric pixel perimeters to scramble and decrypt watermarked cryptographic layers."
---
<!-- All rights reserved to CSRGO DSA -->

Given a 2D integer matrix `mat` of dimensions $n \times m$, a 1-indexed shell number `s`, and an integer `r` representing rotation steps.

A **shell** $s$ is a concentric rectangular ring within the matrix defined by:
- `minRow = s - 1`, `minCol = s - 1`
- `maxRow = n - s`, `maxCol = m - s`

Traversing shell $s$ in perimeter order:
1. **Left wall**: top to bottom, from `(minRow, minCol)` to `(maxRow, minCol)`
2. **Bottom wall**: left to right, from `(maxRow, minCol + 1)` to `(maxRow, maxCol)`
3. **Right wall**: bottom to top, from `(maxRow - 1, maxCol)` to `(minRow, maxCol)`
4. **Top wall**: right to left, from `(minRow, maxCol - 1)` to `(minRow, minCol + 1)`

Rotate the elements of shell `s` by `r` positions along this perimeter path (positive `r` shifts elements forward/to the right by `r` steps), and write the rotated elements back into `mat`.

Return the modified matrix `mat`.
