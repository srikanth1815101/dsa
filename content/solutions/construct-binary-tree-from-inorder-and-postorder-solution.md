---
title: "Construct Binary Tree from Inorder and Postorder - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/construct-binary-tree-from-inorder-and-postorder/"
weight: 27
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Given the inorder and postorder traversal sequences of a binary tree with unique values, construct the unique binary tree and output its preorder traversal.



The structure of a binary tree can be uniquely determined from its inorder and postorder traversals:
1. **Postorder traversal (`Left -> Right -> Root`)**: The last element of any postorder subarray is the root of that subtree.
2. **Inorder traversal (`Left -> Root -> Right`)**: Finding this root value partitions the inorder array into the left subtree (all elements before the root) and the right subtree (all elements after the root).
3. Using a hash map to look up root indices in $O(1)$ time, we calculate the sizes of the left and right subtrees.
4. We reconstruct the tree by recursively processing subtrees, and generate the preorder sequence (`Root -> Left -> Right`).

### Step-by-Step Algorithm:
1. Build a hash map `inMap` storing the index of each value in `inorder`.
2. Define a recursive helper function `build(inStart, inEnd, postStart, postEnd)`:
   - If `inStart > inEnd` or `postStart > postEnd`, return.
   - The current root value is `rootVal = postorder[postEnd]`.
   - Append `rootVal` to the preorder result list.
   - Look up `inIndex = inMap.get(rootVal)`.
   - Compute `leftTreeSize = inIndex - inStart`.
   - Recursively process the left subtree: `build(inStart, inIndex - 1, postStart, postStart + leftTreeSize - 1)`.
   - Recursively process the right subtree: `build(inIndex + 1, inEnd, postStart + leftTreeSize, postEnd - 1)`.
3. Invoke `build` with initial bounds spanning the entire arrays.
4. Convert the preorder result list into an array of integers and return it.

## Code

```java
public static int[] solve(int[] inorder, int[] postorder) {
    if (inorder == null || postorder == null || inorder.length == 0) {
        return new int[0];
    }

    Map<Integer, Integer> inMap = new HashMap<>();
    for (int i = 0; i < inorder.length; i = i + 1) {
        inMap.put(inorder[i], i);
    }

    List<Integer> preorder = new ArrayList<>();
    build(0, inorder.length - 1, 0, postorder.length - 1, postorder, inMap, preorder);

    int[] result = new int[preorder.size()];
    for (int i = 0; i < preorder.size(); i = i + 1) {
        result[i] = preorder.get(i);
    }
    return result;
}

private static void build(int inStart, int inEnd, int postStart, int postEnd, int[] postorder, Map<Integer, Integer> inMap, List<Integer> preorder) {
    if (inStart > inEnd || postStart > postEnd) {
        return;
    }

    int rootVal = postorder[postEnd];
    preorder.add(rootVal);

    int inIndex = inMap.get(rootVal);
    int leftTreeSize = inIndex - inStart;

    build(inStart, inIndex - 1, postStart, postStart + leftTreeSize - 1, postorder, inMap, preorder);
    build(inIndex + 1, inEnd, postStart + leftTreeSize, postEnd - 1, postorder, inMap, preorder);
}
```
