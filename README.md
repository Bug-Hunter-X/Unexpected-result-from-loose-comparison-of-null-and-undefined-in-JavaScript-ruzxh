# JavaScript Loose Comparison Bug

This repository demonstrates a common JavaScript bug related to loose comparison (==) between null and undefined. The function `foo` intends to handle null, negative numbers, and positive numbers differently but produces an unexpected result due to the way loose equality compares null and undefined. 

## Bug Description:

The `foo` function uses loose comparison (`==`) to check for null. However, this leads to an unexpected result when the input is `undefined`.  `undefined == null` evaluates to true in JavaScript's loose comparison, resulting in the function returning 1 instead of 0 or -1 as intended.

## Solution:

The solution involves using strict equality (`===`) to correctly compare the input with null and undefined. Strict equality avoids type coercion, leading to more predictable results.