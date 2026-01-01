---
title: "Climbing Stairs"
date: 2024-01-07T10:00:00Z
difficulty: "Easy"
topics: ["Dynamic Programming", "Math"]
datastructures: ["Array"]
companies: ["Amazon", "Google", "Adobe"]
starterCode: "/dsa/files/ClimbingStairs.java"
hints:
  - "Since you can only take 1 or 2 steps, ways(n) = ways(n-1) + ways(n-2)."
  - "This relates to the Fibonacci sequence."
youtubeId: "Y0lT9FckDqQ"
solutionUrl: "/solutions/climbing-stairs-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(1)"
examples:
  - input: "n = 2"
    output: "2"
    explanation: "There are two ways to climb to the top: 1. 1 step + 1 step, 2. 2 steps"
  - input: "n = 3"
    output: "3"
    explanation: "There are three ways: 1. 1+1+1, 2. 1+2, 3. 2+1"
constraints:
  - "1 <= n <= 45"
javaTemplate: |
  public class Solution {
      public int climbStairs(int n) {
          // Your code here
          return 0;
      }
  }
---

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

## Approach

This is a Fibonacci sequence problem. The number of ways to reach step n is the sum of ways to reach step n-1 and n-2.
