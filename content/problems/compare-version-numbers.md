---
title: "Compare Version Numbers"
date: 2026-10-01T01:15:00+05:30
difficulty: "Medium"
topics: ["Strings", "Two Pointers"]
companies: ["Amazon", "Apple", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CompareVersionNumbers/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CompareVersionNumbers/engineering"

hints:
  - "Split version strings by '.' or parse chunks between dots sequentially using two pointers."
  - "Treat omitted revision levels as 0 when comparing versions of differing lengths (e.g., '1.0' equals '1.0.0')."

youtubeId: ""

solutionUrl: "/solutions/compare-version-numbers-solution/"

timeComplexity: "O(max(n, m))"
spaceComplexity: "O(1)"

examples:
  - input: "version1 = \"1.2\", version2 = \"1.10\""
    output: "-1"
    explanation: "version1's second revision is 2 and version2's second revision is 10: 2 < 10, so version1 < version2."
  - input: "version1 = \"1.01\", version2 = \"1.001\""
    output: "0"
    explanation: "Ignoring leading zeroes, both \"01\" and \"001\" represent integer 1."

constraints:
  - "1 <= version1.length, version2.length <= 500"
  - "version1 and version2 only contain digits and '.'"
  - "version1 and version2 are valid version numbers"
  - "All the given revisions in version1 and version2 can be stored in a 32-bit integer"

realWorld:
  - title: "Package Manager Dependency Resolution"
    description: "Determining SemVer package upgrade eligibility and compatibility constraints in package managers like npm and Maven."
  - title: "Firmware Rollout Eligibility Checking"
    description: "Comparing device firmware build revisions to gate OTA update installation on edge IoT devices."
  - title: "API Gateway Deprecation Gating"
    description: "Routing client HTTP requests to appropriate backends based on semver header version specifications."
weight: 16
---
<!-- All rights reserved to CSRGO DSA -->

Given two **version strings**, `version1` and `version2`, compare them. A version string consists of **revisions** separated by dots `'.'`. The **value of the revision** is its **integer conversion** ignoring leading zeros.

To compare version strings, compare their revision values in **left-to-right order**. If one of the version strings has fewer revisions, treat the missing revision values as `0`.

Return the following:
- If `version1 < version2`, return `-1`.
- If `version1 > version2`, return `1`.
- Otherwise, return `0`.
