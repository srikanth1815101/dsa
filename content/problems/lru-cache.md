---
title: "LRU Cache"
date: 2026-09-27T10:14:00+05:30
difficulty: "Medium"
topics: ["Linked List", "Hashing", "Design"]
companies: ["Amazon", "Google", "Uber"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LRUCache/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/LRUCache/engineering"

hints:
  - "Use a hash map to achieve O(1) key lookups alongside a doubly linked list to maintain access order in O(1) time."
  - "When a key is accessed or updated, move its node to the head of the list; when capacity is exceeded during insertion, remove the node at the tail."

youtubeId: ""

solutionUrl: "/solutions/lru-cache-solution/"

timeComplexity: "O(1) per operation"
spaceComplexity: "O(capacity)"

examples:
  - input: "capacity = 2, operations = [\"put 1 1\", \"put 2 2\", \"get 1\", \"put 3 3\", \"get 2\", \"put 4 4\", \"get 1\", \"get 3\", \"get 4\"]"
    output: "[null, null, 1, null, -1, null, -1, 3, 4]"
    explanation: "After put(1, 1) and put(2, 2), get(1) returns 1 and marks 1 most recently used. put(3, 3) evicts key 2. get(2) returns -1."
  - input: "capacity = 1, operations = [\"put 2 1\", \"get 2\", \"put 3 2\", \"get 2\", \"get 3\"]"
    output: "[null, 1, null, -1, 2]"
    explanation: "Capacity 1 evicts key 2 when key 3 is added."

constraints:
  - "1 <= capacity <= 3000"
  - "0 <= key <= 10^4"
  - "0 <= value <= 10^5"
  - "At most 2 * 10^5 calls will be made to get and put."

realWorld:
  - title: "Web Application In-Memory Caching"
    description: "Redis and Memcached evict the least recently accessed objects when cache memory limits are reached."
  - title: "Database Buffer Pool Management"
    description: "Database engines cache disk pages in RAM using LRU variants to minimize slow secondary storage I/O."
  - title: "CPU Hardware Cache Replacement"
    description: "Multi-level processor caches (L1/L2/L3) evict least recently fetched memory lines to optimize hit rates."
---
<!-- All rights reserved to CSRGO DSA -->

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

The cache is initialized with a positive `capacity` and supports the following operations:
- `"get key"`: Return the value of the `key` if the key exists, otherwise return `-1`. Accessing a key marks it as most recently used.
- `"put key value"`: Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, evict the least recently used key.

Given `capacity` and an array of `operations`, execute each operation and return a list of outputs corresponding to each operation (`null` for put operations, integer value for get operations).
