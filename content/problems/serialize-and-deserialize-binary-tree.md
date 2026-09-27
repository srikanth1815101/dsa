---
title: "Serialize and Deserialize Binary Tree"
date: 2026-09-27T11:07:00+05:30
difficulty: "Hard"
topics: ["Binary Tree", "BFS", "DFS"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/SerializeAndDeserializeBinaryTree/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/SerializeAndDeserializeBinaryTree/engineering"

hints:
  - "Use pre-order traversal with a special token such as 'null' to record empty child pointers unambiguously."
  - "Deserialization can process tokens sequentially using a queue, where each call consumes the next token and constructs left then right subtrees."

youtubeId: ""

solutionUrl: "/solutions/serialize-and-deserialize-binary-tree-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "data = \"1,2,null,null,3,4,null,null,5,null,null\""
    output: "\"1,2,null,null,3,4,null,null,5,null,null\""
    explanation: "The input string is deserialized into the binary tree with root 1, reconstructed faithfully, and serialized back to its identical canonical form."
  - input: "data = \"null\""
    output: "\"null\""
    explanation: "An empty tree serializes to and deserializes from the literal token 'null'."

constraints:
  - "The number of nodes in the tree is in the range [0, 10^4]."
  - "-1000 <= Node.val <= 1000"
  - "data is guaranteed to be a valid serialization string."

realWorld:
  - title: "Distributed Object Remote Procedure Calls (RPC)"
    description: "Marshalling and unmarshalling complex hierarchical tree payloads across network boundaries in microservice architectures."
  - title: "Document Database JSON/BSON Serialization"
    description: "Encoding hierarchical abstract syntax documents into flat byte sequences for efficient disk persistence and query deserialization."
  - title: "Game Engine State Checkpointing"
    description: "Streaming entity scene graphs to compact string formats for network synchronization and game save states."
---
<!-- All rights reserved to CSRGO DSA -->

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work; you just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Given a string `data` representing a comma-separated pre-order binary tree serialization with `"null"` representing null pointers, deserialize the string into a binary tree data structure, and then re-serialize the tree back into its canonical comma-separated string representation.
