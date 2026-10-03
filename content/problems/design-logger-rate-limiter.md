---
title: "Design Logger Rate Limiter"
date: 2026-10-01T02:49:00+05:30
difficulty: "Easy"
topics: ["Design", "Hashing", "Queue"]
companies: ["Amazon", "Google", "Dropbox"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DesignLoggerRateLimiter/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DesignLoggerRateLimiter/engineering"

hints:
  - "Use a Hash Map to store the last allowed timestamp for each distinct message."
  - "If the message has never been seen or current timestamp - lastTimestamp >= 10, print the message and update the map."

youtubeId: ""

solutionUrl: "/solutions/design-logger-rate-limiter-solution/"

timeComplexity: "O(1) per message"
spaceComplexity: "O(M) unique messages"

examples:
  - input: "timestamps = [1, 2, 3, 8, 10, 11], messages = [\"foo\", \"bar\", \"foo\", \"bar\", \"foo\", \"foo\"]"
    output: "[true, true, false, false, false, true]"
    explanation: "foo at t=1 is accepted. foo at t=3 is rejected (3 < 1+10). foo at t=11 is accepted (11 >= 1+10)."
  - input: "timestamps = [1, 11], messages = [\"test\", \"test\"]"
    output: "[true, true]"
    explanation: "The second 'test' arrives at t=11 which is exactly 10 seconds later, so it is accepted."

constraints:
  - "1 <= timestamps.length == messages.length <= 10^4"
  - "0 <= timestamps[i] <= 10^9"
  - "timestamps are in non-decreasing order."
  - "1 <= messages[i].length <= 30"

realWorld:
  - title: "Distributed Logging Coalescing"
    description: "Suppressing redundant server error logs from flooding central Elasticsearch clusters during network partitions."
  - title: "SMS One-Time Password Cooldown"
    description: "Enforcing 10-second wait times between OTP verification resend requests per phone number."
  - title: "IoT Alert Notification Throttling"
    description: "Preventing repetitive sensor threshold breach notifications from overwhelming operations staff."
weight: 110
---
<!-- All rights reserved to CSRGO DSA -->

Design a logger system that receives a stream of messages along with their timestamps. Each unique message should only be printed **at most once every 10 seconds** (i.e. a message printed at timestamp `t` will prevent other identical messages from being printed until timestamp `t + 10`).

All messages arrive in chronological order. Several messages may arrive at the same timestamp.

Implement the `solve` function that processes `timestamps` and `messages`, and returns a boolean array where the `i`-th element is `true` if message `i` should be printed, and `false` otherwise.
