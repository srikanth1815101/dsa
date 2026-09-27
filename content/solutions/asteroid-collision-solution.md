---
title: "Asteroid Collision - Solution"
problemUrl: "/problems/asteroid-collision/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We simulate asteroid collisions by scanning the array from left to right using a stack to store the currently surviving asteroids.

A collision occurs if and only if:
1. The incoming asteroid `ast` is moving left (`ast < 0`).
2. The asteroid on top of the stack is moving right (`stack.peek() > 0`).

Under this condition:
- If `stack.peek() < Math.abs(ast)`, the top asteroid is smaller, so it is destroyed (popped from the stack). The incoming asteroid continues colliding with previous asteroids in the stack.
- If `stack.peek() == Math.abs(ast)`, both asteroids destroy each other. The top asteroid is popped, and the incoming asteroid is also marked destroyed.
- If `stack.peek() > Math.abs(ast)`, the incoming asteroid is destroyed, and the top asteroid survives.

If the incoming asteroid survives all potential collisions (or if no collision condition existed, such as moving right, or stack top moving left), it is pushed onto the stack.

### Step-by-Step Algorithm:
1. Initialize an integer stack `stack`.
2. For each integer `ast` in `asteroids`:
   - Initialize a boolean `alive = true`.
   - While `alive` and `ast < 0` and `!stack.isEmpty()` and `stack.peek() > 0`:
     - If `stack.peek() < -ast`:
       - `stack.pop()`.
     - Else if `stack.peek() == -ast`:
       - `stack.pop()`.
       - `alive = false`.
     - Else:
       - `alive = false`.
   - If `alive`:
     - `stack.push(ast)`.
3. Construct an integer array of size `stack.size()` and populate it from the stack.
4. Return the constructed array.

## Code

```java
public static int[] solve(int[] asteroids) {
    Stack<Integer> stack = new Stack<>();
    for (int i = 0; i < asteroids.length; i = i + 1) {
        int ast = asteroids[i];
        boolean alive = true;
        while (alive && ast < 0 && !stack.isEmpty() && stack.peek() > 0) {
            if (stack.peek() < -ast) {
                stack.pop();
            } else if (stack.peek() == -ast) {
                stack.pop();
                alive = false;
            } else {
                alive = false;
            }
        }
        if (alive) {
            stack.push(ast);
        }
    }
    int[] result = new int[stack.size()];
    for (int i = result.length - 1; i >= 0; i = i - 1) {
        result[i] = stack.pop();
    }
    return result;
}
```
