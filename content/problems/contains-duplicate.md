---
title: "Contains Duplicate"
date: 2024-01-10T00:00:00Z
difficulty: "Easy"
topics: ["Array", "Hash Table", "Sorting"]
companies: ["Google", "Amazon", "Apple"]
path: "Basic"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/contains-duplicate"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/contains-duplicate"
hints:
  - "Use a HashSet to track elements you've seen."
  - "If you encounter an element already in the set, return true."
youtubeId: "3OamzN90kPg"
solutionUrl: "/solutions/contains-duplicate-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(n)"
examples:
  - input: "nums = [1,2,3,1]"
    output: "true"
    explanation: "The element 1 appears twice at indices 0 and 3."
  - input: "nums = [1,2,3,4]"
    output: "false"
    explanation: "All elements are distinct."
constraints:
  - "1 <= nums.length <= 10^5"
  - "-10^9 <= nums[i] <= 10^9"
realWorld:
  - title: "Data Validation"
    description: "Checking for duplicate entries in user registrations or form submissions."
  - title: "Inventory Management"
    description: "Detecting duplicate product IDs in inventory systems."
  - title: "Email Deduplication"
    description: "Filtering out duplicate email addresses from mailing lists."
---

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.
