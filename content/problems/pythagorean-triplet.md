---
title: "Pythagorean Triplet"
date: 2026-04-11T15:45:08+05:30
difficulty: "Easy"
topics: ["Mathematics", "Number Theory", "Two Pointers"]
companies: ["Amazon", "Samsung", "TCS"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PythagoreanTriplet/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PythagoreanTriplet/engineering"

hints:
  - "In a Pythagorean triplet (a, b, c), one number must be the hypotenuse, which is always the largest of the three."
  - "Check the condition a² + b² = c² where c is the maximum value among the three inputs."

youtubeId: ""

solutionUrl: "/solutions/pythagorean-triplet-solution/"

timeComplexity: "O(1)"
spaceComplexity: "O(1)"

examples:
  - input: "a = 3, b = 4, c = 5"
    output: "true"
    explanation: "3² + 4² = 9 + 16 = 25, which is equal to 5²."
  - input: "a = 5, b = 12, c = 7"
    output: "false"
    explanation: "The largest number is 12. 5² + 7² = 25 + 49 = 74, which is not equal to 12² (144)."

constraints:
  - "1 <= a, b, c <= 10^9"
  - "The numbers can be provided in any order."
  - "Expected time complexity is constant."

realWorld:
  - title: "Architecture"
    description: "Ensuring structural integrity by verifying right angles in building foundations using the 3-4-5 rule."
  - title: "Navigation"
    description: "Calculating the shortest distance (displacement) between two points in a 2D coordinate system."
  - title: "Computer Graphics"
    description: "Determining collision detection boundaries and rendering perspectives by solving triangle relationships."
---

<!-- All rights reserved to CSRGO DSA -->

Given three positive integers `a`, `b`, and `c`, your task is to determine if they form a Pythagorean Triplet. A Pythagorean Triplet consists of three positive integers such that the square of the largest number is equal to the sum of the squares of the other two numbers.
