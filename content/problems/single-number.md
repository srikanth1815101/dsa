---
title: "Single Number"
date: 2026-10-01T02:07:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Bit Manipulation"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SingleNumber/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SingleNumber/engineering"

hints:
  - "Exploit the XOR bitwise properties: x ^ x = 0 and x ^ 0 = x."
  - "XOR all numbers in the array together; pairs cancel out to 0, leaving only the unique number."

youtubeId: ""

solutionUrl: "/solutions/single-number-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [2,2,1]"
    output: "** `1`"
    explanation: "Result is ** `1`."
  - input: "nums = [4,1,2,1,2]"
    output: "** `4`"
    explanation: "Result is ** `4`."

constraints:
  - "1 <= nums.length <= 3 * 10^4"
  - "-3 * 10^4 <= nums[i] <= 3 * 10^4"
  - "Each element in the array appears twice except for one element which appears only once."

realWorld:
  - title: "Hardware Parity Check and Packet Validation"
    description: "Detecting missing or unmatched signal transitions in high-speed serializer/deserializer bus lines."
  - title: "Database Transaction Reconciliation"
    description: "Identifying unpaired debit or credit transaction records in double-entry bookkeeping ledgers."
  - title: "RFID Warehouse Scanning Inventory Check"
    description: "Locating an un-paired item badge during automated checkout tunnel radio scans."
weight: 68
---
<!-- All rights reserved to CSRGO DSA -->

Given a **non-empty** array of integers `nums`, every element appears *twice* except for one. Find that single one.

You must implement a solution with a linear runtime complexity $\mathcal{O}(n)$ and use only constant extra space $\mathcal{O}(1)$.
