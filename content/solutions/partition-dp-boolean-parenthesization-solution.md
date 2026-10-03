---
title: "Partition DP (Boolean Parenthesization) - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/partition-dp-boolean-parenthesization/"
weight: 57
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the number of parenthesizations of a boolean expression that evaluate to true. Because any binary operator can serve as the top-level (outermost) split point, this problem possesses the optimal substructure of Matrix Chain Multiplication (Partition DP).

Let $N$ be the number of boolean symbols in $s$. We separate symbols and operators:
- Symbols: `symbols[0...N - 1]`
- Operators: `ops[0...N - 2]`

For each sub-expression spanning symbols from index $i$ to $j$:
- `T[i][j]` = number of parenthesizations evaluating to **true**.
- `F[i][j]` = number of parenthesizations evaluating to **false**.

To compute `T[i][j]` and `F[i][j]`, we partition at every operator index $k$ ($i \le k < j$):
- Left operand yields `(T[i][k], F[i][k])`.
- Right operand yields `(T[k + 1][j], F[k + 1][j])`.
- Total left combinations $TL = T[i][k] + F[i][k]$.
- Total right combinations $TR = T[k + 1][j] + F[k + 1][j]$.
- Total combinations $Total = TL \times TR$.

Based on the operator `ops[k]`:
1. **AND (`&`):**
   - True: $T[i][k] \times T[k + 1][j]$
   - False: $Total - True$
2. **OR (`|`):**
   - False: $F[i][k] \times F[k + 1][j]$
   - True: $Total - False$
3. **XOR (`^`):**
   - True: $T[i][k] \times F[k + 1][j] + F[i][k] \times T[k + 1][j]$
   - False: $T[i][k] \times T[k + 1][j] + F[i][k] \times F[k + 1][j]$

All additions and multiplications are performed modulo $1003$.

### Step-by-Step Algorithm:
1. Extract symbols and operators into separate character arrays `symbols` and `ops`.
2. Initialize two 2D tables `T` and `F` of size $N \times N$.
3. For base cases ($i = j$):
   - If `symbols[i] == 'T'`, set `T[i][i] = 1` and `F[i][i] = 0`.
   - If `symbols[i] == 'F'`, set `T[i][i] = 0` and `F[i][i] = 1`.
4. Loop through sub-expression lengths `len` from $2$ to $N$:
   - For each start index $i$ from $0$ to $N - len$:
     - Let $j = i + len - 1$.
     - Iterate through split points $k$ from $i$ to $j - 1$:
       - Calculate true and false contributions using the operator rules.
       - Accumulate into `T[i][j]` and `F[i][j]` modulo $1003$.
5. Return `T[0][N - 1]`.

## Code

```java
private static final int MOD = 1003;

public static int solve(String s) {
    if (s == null || s.length() == 0) {
        return 0;
    }

    int n = s.length();
    int numSymbols = (n + 1) / 2;
    char[] symbols = new char[numSymbols];
    char[] ops = new char[numSymbols - 1];

    int symIdx = 0;
    int opIdx = 0;
    for (int i = 0; i < n; i = i + 1) {
        if (i % 2 == 0) {
            symbols[symIdx] = s.charAt(i);
            symIdx = symIdx + 1;
        } else {
            ops[opIdx] = s.charAt(i);
            opIdx = opIdx + 1;
        }
    }

    int[][] tTable = new int[numSymbols][numSymbols];
    int[][] fTable = new int[numSymbols][numSymbols];

    for (int i = 0; i < numSymbols; i = i + 1) {
        if (symbols[i] == 'T') {
            tTable[i][i] = 1;
            fTable[i][i] = 0;
        } else {
            tTable[i][i] = 0;
            fTable[i][i] = 1;
        }
    }

    for (int len = 2; len <= numSymbols; len = len + 1) {
        for (int i = 0; i <= numSymbols - len; i = i + 1) {
            int j = i + len - 1;
            tTable[i][j] = 0;
            fTable[i][j] = 0;

            for (int k = i; k < j; k = k + 1) {
                char op = ops[k];
                int totalLeft = (tTable[i][k] + fTable[i][k]) % MOD;
                int totalRight = (tTable[k + 1][j] + fTable[k + 1][j]) % MOD;
                int total = (totalLeft * totalRight) % MOD;

                if (op == '&') {
                    int trueWays = (tTable[i][k] * tTable[k + 1][j]) % MOD;
                    tTable[i][j] = (tTable[i][j] + trueWays) % MOD;
                    fTable[i][j] = (fTable[i][j] + total - trueWays + MOD) % MOD;
                } else if (op == '|') {
                    int falseWays = (fTable[i][k] * fTable[k + 1][j]) % MOD;
                    fTable[i][j] = (fTable[i][j] + falseWays) % MOD;
                    tTable[i][j] = (tTable[i][j] + total - falseWays + MOD) % MOD;
                } else if (op == '^') {
                    int trueWays = (tTable[i][k] * fTable[k + 1][j] + fTable[i][k] * tTable[k + 1][j]) % MOD;
                    int falseWays = (tTable[i][k] * tTable[k + 1][j] + fTable[i][k] * fTable[k + 1][j]) % MOD;
                    tTable[i][j] = (tTable[i][j] + trueWays) % MOD;
                    fTable[i][j] = (fTable[i][j] + falseWays) % MOD;
                }
            }
        }
    }

    return tTable[0][numSymbols - 1];
}
```
