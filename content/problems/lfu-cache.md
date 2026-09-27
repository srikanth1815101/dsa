---
title: "LFU Cache"
date: 2026-09-27T10:15:00+05:30
difficulty: "Hard"
topics: ["Linked List", "Hashing", "Design"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LFUCache/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LFUCache/engineering"

hints:
  - "Maintain key-to-node mapping alongside frequency-to-doubly-linked-list mapping to achieve O(1) time complexity."
  - "Keep track of minFrequency; when a node's frequency increases, move it to the next frequency list and update minFrequency if the old list becomes empty."

youtubeId: ""

solutionUrl: "/solutions/lfu-cache-solution/"

timeComplexity: "O(1) per operation"
spaceComplexity: "O(capacity)"

examples:
  - input: "capacity = 2, operations = [\"put 1 1\", \"put 2 2\", \"get 1\", \"put 3 3\", \"get 2\", \"get 3\", \"put 4 4\", \"get 1\", \"get 3\", \"get 4\"]"
    output: "[null, null, 1, null, -1, 3, null, -1, 3, 4]"
    explanation: "put(1, 1) and put(2, 2) set count=1. get(1) increments key 1 count to 2. put(3, 3) evicts key 2 (least frequently used). get(2) returns -1."
  - input: "capacity = 0, operations = [\"put 0 0\", \"get 0\"]"
    output: "[null, -1]"
    explanation: "Zero capacity cache stores no items."

constraints:
  - "0 <= capacity <= 10^4"
  - "0 <= key <= 10^5"
  - "0 <= value <= 10^9"
  - "At most 2 * 10^5 calls will be made to get and put."

realWorld:
  - title: "CDN Edge Asset Eviction"
    description: "Content delivery networks cache global assets prioritizing popularity frequency over transient spikes."
  - title: "Database Query Plan Caching"
    description: "RDBMS query optimizers retain hot prepared execution plans that are queried heavily over long running periods."
  - title: "Search Engine Autocomplete Hotlists"
    description: "Autocomplete query suggest microservices evict rarely searched prefixes to retain historically top-ranked search keywords."
---
<!-- All rights reserved to CSRGO DSA -->

Design and implement a data structure for a Least Frequently Used (LFU) cache.

The cache is initialized with a given `capacity` and supports the following operations:
- `"get key"`: Gets the value of the `key` if the `key` exists in the cache. Otherwise, returns `-1`. The use counter for the key is incremented.
- `"put key value"`: Update the value of the `key` if present, or inserts the `key` if not already present. When the cache reaches its `capacity`, it should invalidate and remove the least frequently used key before inserting a new item. If there is a tie in minimum frequency, the least recently used key among them is evicted.

Given `capacity` and an array of `operations`, execute each operation and return a list of outputs corresponding to each operation (`null` for put operations, integer value for get operations).
