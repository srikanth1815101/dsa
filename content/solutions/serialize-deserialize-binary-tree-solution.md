---
title: "Serialize and Deserialize Binary Tree - Solution"
problemUrl: "/problems/serialize-deserialize-binary-tree/"
---

## Explanation

We use **preorder DFS** with null markers. The preorder sequence uniquely identifies a tree when null children are explicitly recorded.

**Serialize:** Traverse the tree in preorder, appending each value (or "null" for null nodes) to a comma-separated string.

**Deserialize:** Split the string into tokens, then recursively build the tree by consuming tokens in order.

## Code

```java
public class Codec {
    
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        serializeHelper(root, sb);
        return sb.toString();
    }
    
    private void serializeHelper(TreeNode node, StringBuilder sb) {
        if (node == null) {
            sb.append("null,");
            return;
        }
        sb.append(node.val).append(",");
        serializeHelper(node.left, sb);
        serializeHelper(node.right, sb);
    }
    
    public TreeNode deserialize(String data) {
        Queue<String> queue = new LinkedList<>(Arrays.asList(data.split(",")));
        return deserializeHelper(queue);
    }
    
    private TreeNode deserializeHelper(Queue<String> queue) {
        String val = queue.poll();
        if (val.equals("null")) return null;
        
        TreeNode node = new TreeNode(Integer.parseInt(val));
        node.left = deserializeHelper(queue);
        node.right = deserializeHelper(queue);
        return node;
    }
}
```
