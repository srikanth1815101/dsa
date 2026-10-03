---
title: "Accounts Merge - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/accounts-merge/"
weight: 90
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Each account represents a subset of emails belonging to an individual. When two accounts share at least one email, their entire sets of emails must be united.

This can be modeled as finding connected components where each unique email is a node, and every pair of emails appearing in the same account is connected by an edge:
1. Assign each unique email address an integer ID from $0$ to $E - 1$, where $E$ is the total count of distinct emails.
2. Maintain a mapping from each email to its corresponding owner name: `emailToName`.
3. Construct a Disjoint Set Union (DSU) structure of size $E$.
4. For each account, union the ID of its first email with the IDs of all other emails listed in that account.
5. Group all emails by their DSU root representative into a hash map.
6. For each component group:
   - Sort the emails lexicographically.
   - Insert the owner's name at index `0`.
   - Add the resulting list to the final output.
7. Sort the merged accounts deterministically by their owner name and first email.

### Step-by-Step Algorithm:
1. Check for empty or null accounts: if `accounts == null || accounts.size() == 0`, return an empty list.
2. Initialize `emailToId = new HashMap<>()`, `emailToName = new HashMap<>()`, and integer `idCounter = 0`.
3. Loop through `accounts`:
   - Store `name = account.get(0)`.
   - For $j = 1$ to `account.size() - 1`:
     - Let `email = account.get(j)`.
     - If not present in `emailToId`, associate `email` with `idCounter` and increment `idCounter = idCounter + 1`.
     - Put `(email, name)` in `emailToName`.
4. Initialize DSU parent array of size `idCounter` with `parent[i] = i`.
5. For each account:
   - Let `firstId = emailToId.get(account.get(1))`.
   - For $j = 2$ to `account.size() - 1`:
     - Union `firstId` with `emailToId.get(account.get(j))`.
6. Group emails by root:
   - For each email in `emailToId.keySet()`:
     - Find `rootId = find(emailToId.get(email))`.
     - Append `email` to `rootToEmails.get(rootId)`.
7. Assemble output:
   - For each group of emails, sort them alphabetically.
   - Prepend the name (`emailToName.get(firstEmail)`).
   - Add to `mergedAccounts`.
8. Sort `mergedAccounts` deterministically and return.

## Code

```java
private static int find(int[] parent, int i) {
    int root = i;
    while (root != parent[root]) {
        root = parent[root];
    }
    int curr = i;
    while (curr != root) {
        int nxt = parent[curr];
        parent[curr] = root;
        curr = nxt;
    }
    return root;
}

private static void union(int[] parent, int u, int v) {
    int rootU = find(parent, u);
    int rootV = find(parent, v);
    if (rootU != rootV) {
        parent[rootU] = rootV;
    }
}

public static List<List<String>> solve(List<List<String>> accounts) {
    if (accounts == null || accounts.size() == 0) {
        return new ArrayList<>();
    }

    Map<String, Integer> emailToId = new HashMap<>();
    Map<String, String> emailToName = new HashMap<>();
    int idCounter = 0;

    for (int i = 0; i < accounts.size(); i = i + 1) {
        List<String> account = accounts.get(i);
        String name = account.get(0);
        for (int j = 1; j < account.size(); j = j + 1) {
            String email = account.get(j);
            if (!emailToId.containsKey(email)) {
                emailToId.put(email, idCounter);
                idCounter = idCounter + 1;
            }
            emailToName.put(email, name);
        }
    }

    int[] parent = new int[idCounter];
    for (int i = 0; i < idCounter; i = i + 1) {
        parent[i] = i;
    }

    for (int i = 0; i < accounts.size(); i = i + 1) {
        List<String> account = accounts.get(i);
        int firstId = emailToId.get(account.get(1));
        for (int j = 2; j < account.size(); j = j + 1) {
            int nextId = emailToId.get(account.get(j));
            union(parent, firstId, nextId);
        }
    }

    Map<Integer, List<String>> rootToEmails = new HashMap<>();
    for (String email : emailToId.keySet()) {
        int id = emailToId.get(email);
        int root = find(parent, id);
        if (!rootToEmails.containsKey(root)) {
            rootToEmails.put(root, new ArrayList<>());
        }
        rootToEmails.get(root).add(email);
    }

    List<List<String>> results = new ArrayList<>();
    for (List<String> emails : rootToEmails.values()) {
        Collections.sort(emails);
        String name = emailToName.get(emails.get(0));
        List<String> merged = new ArrayList<>();
        merged.add(name);
        merged.addAll(emails);
        results.add(merged);
    }

    Collections.sort(results, (a, b) -> {
        int cmp = a.get(0).compareTo(b.get(0));
        if (cmp != 0) {
            return cmp;
        }
        return a.get(1).compareTo(b.get(1));
    });

    return results;
}
```
