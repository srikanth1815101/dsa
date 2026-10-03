---
title: "Construct Binary Tree from Preorder and Inorder - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/construct-binary-tree-from-preorder-and-inorder/"
weight: 26
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Given the preorder and inorder traversal sequences of a binary tree with unique values, construct the unique binary tree and output its postorder traversal.



The two traversals provide complementary structural information:
1. **Preorder traversal (`Root -> Left -> Right`)**: The very first element is always the root of the current subtree.
2. **Inorder traversal (`Left -> Root -> Right`)**: Finding the root element splits the array into the left subtree (all elements to the left of the root) and the right subtree (all elements to the right of the root).
3. By looking up the root's position in `inorder` using a hash map in $O(1)$ time, we determine the size of the left subtree, which allows us to partition the `preorder` range into left and right subtrees.
4. We recursively construct the left and right subtrees, and collect the postorder sequence (`Left -> Right -> Root`).

### Step-by-Step Algorithm:
1. Build a hash map `inorderMap` mapping each value in `inorder` to its index.
2. Define a recursive helper function `build(preStart, inStart, inEnd)`:
   - If `preStart > preorder.length - 1` or `inStart > inEnd`, return.
   - The current root value is `rootVal = preorder[preStart]`.
   - Look up `inIndex = inorderMap.get(rootVal)`.
   - Compute `leftSubtreeSize = inIndex - inStart`.
   - Recursively process the left subtree: `build(preStart + 1, inStart, inIndex - 1)`.
   - Recursively process the right subtree: `build(preStart + leftSubtreeSize + 1, inIndex + 1, inEnd)`.
   - Append `rootVal` to the postorder result list.
3. Start the recursion with `preStart = 0`, `inStart = 0`, and `inEnd = inorder.length - 1`.
4. Convert the collected postorder list into an integer array and return it.

## Code

```java
public static int[] solve(int[] preorder, int[] inorder) {
    if (preorder == null || inorder == null || preorder.length == 0) {
        return new int[0];
    }

    Map<Integer, Integer> inMap = new HashMap<>();
    for (int i = 0; i < inorder.length; i = i + 1) {
        inMap.put(inorder[i], i);
    }

    List<Integer> postorder = new ArrayList<>();
    build(0, 0, inorder.length - 1, preorder, inMap, postorder);

    int[] result = new int[postorder.size()];
    for (int i = 0; i < postorder.size(); i = i + 1) {
        result[i] = postorder.get(i);
    }
    return result;
}

private static void build(int preStart, int inStart, int inEnd, int[] preorder, Map<Integer, Integer> inMap, List<Integer> postorder) {
    if (inStart > inEnd || preStart >= preorder.length) {
        return;
    }

    int rootVal = preorder[preStart];
    int inIndex = inMap.get(rootVal);
    int leftTreeSize = inIndex - inStart;

    build(preStart + 1, inStart, inIndex - 1, preorder, inMap, postorder);
    build(preStart + leftTreeSize + 1, inIndex + 1, inEnd, preorder, inMap, postorder);

    postorder.add(rootVal);
}
```
