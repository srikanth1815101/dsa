---
title: "Multiplication Table Pattern"
date: 2026-09-24T23:31:00+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Wipro", "Accenture"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MultiplicationTablePattern/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MultiplicationTablePattern/engineering"

hints:
  - "Iterate a loop variable i from 1 to 10 inclusive."
  - "Format each line as 'n * i = result' followed by a newline character."

youtubeId: ""

solutionUrl: "/solutions/multiplication-table-pattern-solution/"

timeComplexity: "O(1)"
spaceComplexity: "O(1)"

examples:
  - input: "n = 5"
    output: "5 * 1 = 5\n5 * 2 = 10\n5 * 3 = 15\n5 * 4 = 20\n5 * 5 = 25\n5 * 6 = 30\n5 * 7 = 35\n5 * 8 = 40\n5 * 9 = 45\n5 * 10 = 50\n"
    explanation: "Prints the standard multiplication table for 5 from 1 through 10."
  - input: "n = 2"
    output: "2 * 1 = 2\n2 * 2 = 4\n2 * 3 = 6\n2 * 4 = 8\n2 * 5 = 10\n2 * 6 = 12\n2 * 7 = 14\n2 * 8 = 16\n2 * 9 = 18\n2 * 10 = 20\n"
    explanation: "Prints the multiples of 2 from 1 through 10."

constraints:
  - "1 <= n <= 1000"
  - "Each line must strictly follow the format: `<n> * <i> = <n * i>`."
  - "Each line must conclude with a newline character (`\\n`)."

realWorld:
  - title: "Linear Scale Calibration"
    description: "Generating tabular multiplication benchmarks for sensor calibration curves and analog-to-digital signal conversion."
  - title: "Financial Amortization Intervals"
    description: "Producing tabular payment and interest multipliers across stepped billing intervals and financial schedules."
  - title: "Batch Processing Worker Splitting"
    description: "Displaying partition stride boundaries and chunk multipliers for parallel batch data ingestion pipelines."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, generate its standard multiplication table from `1` to `10`.

### Pattern Rules
1. For each multiplier `i` from `1` to `10`, produce a line formatted as:
   `n * i = result`
2. Single space characters must separate the operands, the multiplication symbol (`*`), and the equals sign (`=`).
3. Every line must end with a newline character (`\n`).
