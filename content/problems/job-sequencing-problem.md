---
title: "Job Sequencing Problem"
date: 2026-10-01T01:33:00+05:30
difficulty: "Medium"
topics: ["Heap", "Greedy", "Sorting"]
companies: ["Amazon", "Microsoft", "Flipkart"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/JobSequencingProblem/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/JobSequencingProblem/engineering"

hints:
  - "Sort jobs in descending order of profit to greedily schedule high-value jobs first."
  - "Assign each job to its latest possible available time slot prior to its deadline using a slot array or Disjoint Set Union."

youtubeId: ""

solutionUrl: "/solutions/job-sequencing-problem-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(n)"

examples:
  - input: "jobs = [[1, 4, 20], [2, 1, 10], [3, 1, 40], [4, 1, 30]]"
    output: "** `[2, 60]` **"
    explanation: "** - Job 3 (profit 40) is scheduled in slot 1 (time 0-1). - Job 1 (profit 20) is scheduled in slot 4 (or available slot <= 4$). Total jobs done = 2, total profit = 40 + 20 = 60."
  - input: "jobs = [[1, 2, 100], [2, 1, 19], [3, 2, 27], [4, 1, 25], [5, 1, 15]]"
    output: "** `[2, 127]` **"
    explanation: "** - Job 1 is scheduled in slot 2. - Job 3 is scheduled in slot 1. Total jobs done = 2, total profit = 100 + 27 = 127."

constraints:
  - "1 <= jobs.length <= 10^5"
  - "1 <= deadline <= 1000"
  - "1 <= profit <= 10^5"

realWorld:
  - title: "Cloud Server Workload Schedulers"
    description: "Maximizing revenue by dispatching high-paying computing batch jobs before client SLA deadlines."
  - title: "Automated Satellite Downlink Scheduling"
    description: "Allocating satellite communication windows to highest-value imagery tasks before visibility windows expire."
  - title: "Industrial Assembly Line Task Dispatch"
    description: "Assigning maintenance work orders to available manufacturing bays to maximize shift bonuses."
weight: 34
---
<!-- All rights reserved to CSRGO DSA -->

Given a set of `n` jobs where each job `i` has a unique ID, a deadline, and a profit associated with it. Each job takes `1` unit of time to complete and only one job can be scheduled at any time slot. We earn the profit associated with a job if and only if the job is completed by or before its deadline.

Find the number of jobs scheduled and the maximum total profit that can be earned.

In the input, jobs are represented as a 2D array where each row represents `[id, deadline, profit]`. Return an array of size `2` containing `[countOfJobs, maxProfit]`.
