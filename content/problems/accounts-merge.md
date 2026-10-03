---
title: "Accounts Merge"
date: 2026-10-01T02:29:00+05:30
difficulty: "Medium"
topics: ["Graph", "Union Find", "Hashing"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/AccountsMerge/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/AccountsMerge/engineering"

hints:
  - "Map each email to an account index or use Union-Find on email addresses directly."
  - "Group emails by their root parent in Union-Find, sort emails lexicographically, and attach the account owner's name."

youtubeId: ""

solutionUrl: "/solutions/accounts-merge-solution/"

timeComplexity: "O(N * K log(NK))"
spaceComplexity: "O(N * K)"

examples:
  - input: "accounts = [ [\"John\", \"johnsmith@mail.com\", \"john_newyork@mail.com\"], [\"John\", \"johnsmith@mail.com\", \"john00@mail.com\"], [\"Mary\", \"mary@mail.com\"], [\"John\", \"johnnybravo@mail.com\"] ]"
    output: "**"
    explanation: "Result is **."
  - input: "accounts = [ [\"Gabe\", \"Gabe0@m.co\", \"Gabe3@m.co\", \"Gabe1@m.co\"], [\"Kevin\", \"Kevin3@m.co\", \"Kevin5@m.co\", \"Kevin0@m.co\"], [\"Ethan\", \"Ethan5@m.co\", \"Ethan4@m.co\", \"Ethan0@m.co\"], [\"Hanzo\", \"Hanzo3@m.co\", \"Hanzo1@m.co\", \"Hanzo0@m.co\"], [\"Fern\", \"Fern5@m.co\", \"Fern1@m.co\", \"Fern0@m.co\"] ]"
    output: "**"
    explanation: "Result is **."

constraints:
  - "0 <= accounts.length <= 1000"
  - "2 <= accounts[i].length <= 10"
  - "1 <= accounts[i][j].length <= 30"
  - "accounts[i][0]` consists of English letters."

realWorld:
  - title: "Customer Identity Resolution in CRM Systems"
    description: "Merging duplicate customer CRM profiles across disparate sales channels based on shared verified email addresses."
  - title: "Fraud Detection Identity Syndicate Linking"
    description: "Linking disparate fraudulent e-commerce accounts that share common payment handles and contact emails."
  - title: "Enterprise SSO Account Consolidation"
    description: "Consolidating multiple directory accounts belonging to the same employee following corporate acquisitions."
weight: 90
---
<!-- All rights reserved to CSRGO DSA -->

Given a list of `accounts` where each element `accounts[i]` is a list of strings:
- The first element `accounts[i][0]` is a person's name.
- The remaining elements `accounts[i][1 ... k]` are email addresses belonging to that account.

Two accounts definitely belong to the same person if there is at least one common email address between them. Note that even if two accounts have the identical name, they may belong to distinct individuals if they do not share any email addresses. Conversely, all accounts of a single person always have the same name.

After merging the accounts, return the merged accounts where:
- The first element is the account name.
- The remaining elements are the unique email addresses belonging to that person in **lexicographical (sorted) order**.
