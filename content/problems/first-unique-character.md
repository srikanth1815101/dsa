---
title: "First Unique Character in a String First Unique Character in a String"
date: 2024-01-10T10:00:00Z
difficulty: "Easy"
topics: ["String", "Hash Table"]
datastructures: ["HashMap"]
companies: ["Amazon", "Google", "Microsoft"]
path: "Basic"
starterCode: "/dsa/files/FirstUnique.java"
hints:
  - "Count the frequency of all letters first."
  - "Iterate through the string again to find the first letter with count 1."
youtubeId: "5co5Gvp_-S0"
solutionUrl: "/solutions/first-unique-character-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(1)"
examples:
  - input: "s = \"leetcode\""
    output: "0"
    explanation: "The first unique character is 'l' at index 0"
  - input: "s = \"loveleetcode\""
    output: "2"
    explanation: "The first unique character is 'v' at index 2"

constraints:
  - "1 <= s.length <= 10^5"
  - "s consists of only lowercase English letters"
javaTemplate: |
  public class Solution {
      public int firstUniqChar(String s) {
          // Your code here
          return -1;
      }
  }
---

Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`.

## Approach

Use a HashMap to count the frequency of each character. Then iterate through the string again to find the first character with frequency 1.
