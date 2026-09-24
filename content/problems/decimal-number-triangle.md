---
title: "Decimal Number Triangle"
date: 2026-09-24T23:14:20+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Infosys", "Accenture"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DecimalNumberTriangle/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DecimalNumberTriangle/engineering"

hints:
  - "Maintain a running counter starting at 1 that increments after placing each number."
  - "Row i contains exactly i numbers separated by a tab character."

youtubeId: ""

solutionUrl: "/solutions/decimal-number-triangle-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 4"
    output: "1\n2\t3\n4\t5\t6\n7\t8\t9\t10\n"
    explanation: "For n = 4, numbers increment sequentially from 1 to 10 across 4 rows with tab separators."
  - input: "n = 3"
    output: "1\n2\t3\n4\t5\t6\n"
    explanation: "For n = 3, row 1 contains 1, row 2 contains 2 and 3, and row 3 contains 4, 5, and 6."

constraints:
  - "1 <= n <= 50"
  - "Numbers on each row must be separated by a tab character (`\\t`)."
  - "Each row must end with a newline character (`\\n`) without trailing tabs."

realWorld:
  - title: "Sequential Ticket Allocation"
    description: "Assigning monotonically increasing identifiers into tiered or batch processing stages in ticketing and event registration systems."
  - title: "Memory Block Indexing"
    description: "Partitioning sequential memory addresses into triangular heap blocks or contiguous segment buffers in systems programming."
  - title: "Paginated Table Partitioning"
    description: "Grouping sequential record IDs into expanding batches across hierarchical audit logs and database sharding simulations."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, construct a right-angled triangle pattern consisting of continuously increasing decimal numbers starting from `1` across `n` rows (often referred to as Floyd's Triangle).

### Pattern Rules
1. The first row contains a single number: `1`.
2. Each subsequent row `i` (from `1` to `n`) contains exactly `i` consecutive numbers continuing from where the previous row ended.
3. Numbers within the same row are separated by a tab character (`\t`).
4. Each row concludes immediately with a newline character (`\n`) without any trailing tab characters.
