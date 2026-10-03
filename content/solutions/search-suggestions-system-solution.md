---
title: "Search Suggestions System - Solution"
problemUrl: "/problems/search-suggestions-system/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

1. Sort the `products` array in lexicographical order. Sorting upfront ensures that whenever we identify a matching prefix range, the first available products are automatically the lexicographical minimums.
2. Maintain two pointers: `left` initialized to 0 and `right` initialized to `products.length - 1`.
3. For each prefix character `searchWord[i]`, narrow the range: advance `left` while `products[left]` is too short or has a mismatch at index `i`, and decrement `right` while `products[right]` is too short or has a mismatch at index `i`.
4. Take at most 3 items starting from `left` up to `min(left + 3, right + 1)` and add to results.

### Step-by-Step Algorithm:
1. Sort the `products` array lexicographically.
2. Initialize two pointers: `left = 0` and `right = products.length - 1`.
3. Iterate `i` from `0` to `searchWord.length() - 1`: character `c = searchWord.charAt(i)`.
4. Advance `left` while `left <= right` and (`products[left].length() <= i` or `products[left].charAt(i) != c`).
5. Decrement `right` while `left <= right` and (`products[right].length() <= i` or `products[right].charAt(i) != c`).
6. Collect up to 3 elements from index `left` to `min(left + 3, right + 1)` and append to the list of suggestions.
7. Return the list of suggestions.

## Code

```java
public static List<List<String>> solve(String[] products, String searchWord) {
    Arrays.sort(products);
    List<List<String>> result = new ArrayList<>();
    int left = 0;
    int right = products.length - 1;

    for (int i = 0; i < searchWord.length(); i = i + 1) {
        char c = searchWord.charAt(i);

        while (left <= right && (products[left].length() <= i || products[left].charAt(i) != c)) {
            left = left + 1;
        }

        while (left <= right && (products[right].length() <= i || products[right].charAt(i) != c)) {
            right = right - 1;
        }

        List<String> suggested = new ArrayList<>();
        int count = Math.min(left + 3, right + 1);
        for (int j = left; j < count; j = j + 1) {
            suggested.add(products[j]);
        }
        result.add(suggested);
    }

    return result;
}
```
