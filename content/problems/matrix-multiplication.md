---
title: "Matrix Multiplication"
date: 2026-09-26T19:12:00+05:30
difficulty: "Medium"
topics: ["Matrix", "Mathematics"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MatrixMultiplication/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MatrixMultiplication/engineering"

hints:
  - "Verify dimension compatibility: multiplication is valid if and only if the number of columns in mat1 equals the number of rows in mat2 (c1 == r2)."
  - "The resulting product matrix has dimensions r1 x c2. For each cell (i, j), compute the dot product of row i from mat1 and column j from mat2."

youtubeId: ""

solutionUrl: "/solutions/matrix-multiplication-solution/"

timeComplexity: "O(r1 * c1 * c2)"
spaceComplexity: "O(1)"

examples:
  - input: "mat1 = [[1, 2], [3, 4]], mat2 = [[1, 0], [0, 1]]"
    output: "[[1, 2], [3, 4]]"
    explanation: "Multiplying any matrix by the identity matrix yields the original matrix."
  - input: "mat1 = [[1, 2, 3], [4, 5, 6]], mat2 = [[7, 8], [9, 1], [2, 3]]"
    output: "[[31, 19], [85, 55]]"
    explanation: "Cell (0, 0) is 1*7 + 2*9 + 3*2 = 31. Cell (0, 1) is 1*8 + 2*1 + 3*3 = 19. Cell (1, 0) is 4*7 + 5*9 + 6*2 = 85. Cell (1, 1) is 4*8 + 5*1 + 6*3 = 55."

constraints:
  - "1 <= r1, c1, r2, c2 <= 100"
  - "-100 <= mat1[i][j], mat2[i][j] <= 100"
  - "If c1 != r2, return new int[0][0]"

realWorld:
  - title: "3D Graphics Model-View-Projection Transforms"
    description: "Combining translation, rotation, and perspective projection transformations into a unified pipeline matrix for vertex shaders."
  - title: "Neural Network Dense Layer Computation"
    description: "Evaluating batch input feature vectors against weight matrices to compute pre-activation hidden layer representations."
  - title: "Markov Chain Transition Dynamics"
    description: "Propagating discrete multi-step probability distributions across system states using powered transition probability matrices."
---
<!-- All rights reserved to CSRGO DSA -->

Given two 2D integer matrices `mat1` of dimensions $r_1 \times c_1$ and `mat2` of dimensions $r_2 \times c_2$, return their matrix product.

Matrix multiplication is defined if and only if the number of columns in `mat1` equals the number of rows in `mat2` ($c_1 == r_2$). The resulting product matrix $C$ has dimensions $r_1 \times c_2$, where each cell is calculated as:
$$C[i][j] = \sum_{k=0}^{c_1-1} \text{mat1}[i][k] \times \text{mat2}[k][j]$$

If the matrices cannot be multiplied ($c_1 \ne r_2$), return an empty 2D array `new int[0][0]`.
