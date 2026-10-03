---
title: "Design Parking System"
date: 2026-10-01T02:51:00+05:30
difficulty: "Easy"
topics: ["Design", "Arrays"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DesignParkingSystem/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DesignParkingSystem/engineering"

hints:
  - "Maintain an array of available slots of size 3 representing big (1), medium (2), and small (3)."
  - "When a car of type t arrives, check if slots[t - 1] > 0; if so, decrement and return true, otherwise return false."

youtubeId: ""

solutionUrl: "/solutions/design-parking-system-solution/"

timeComplexity: "O(1) per car"
spaceComplexity: "O(1)"

examples:
  - input: "big = 1, medium = 1, small = 0, carType = [1, 2, 3, 1]"
    output: "[true, true, false, false]"
    explanation: "Car 1 parks in big slot (0 left). Car 2 parks in medium slot (0 left). Car 3 cannot park (0 small slots). Car 1 cannot park (0 big slots left)."
  - input: "big = 2, medium = 0, small = 1, carType = [1, 1, 1, 3]"
    output: "[true, true, false, true]"
    explanation: "First two big cars park successfully, third big car is rejected. Small car parks in available small slot."

constraints:
  - "0 <= big, medium, small <= 1000"
  - "carType is 1, 2, or 3 (1 = big, 2 = medium, 3 = small)."
  - "1 <= carType.length <= 1000"
  - "At most 1000 calls will be made to addCar."

realWorld:
  - title: "Automated Smart Parking Garage Entry"
    description: "Directing arriving vehicles to appropriate size bays and updating barrier gate digital counters."
  - title: "Cloud Server VM Sizing Allocation"
    description: "Allocating physical host hypervisor slots to small, medium, and large cloud container instances."
  - title: "Warehouse Pallet Storage Management"
    description: "Assigning standard pallet racking positions according to package height tiers."
weight: 112
---
<!-- All rights reserved to CSRGO DSA -->

Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: **big**, **medium**, and **small**, with a fixed number of slots for each size.

Implement the `solve` function:
Given initial capacities `big`, `medium`, `small` and an array of incoming car requests `carType` (where `1` = big, `2` = medium, and `3` = small), return a boolean array where the `i`-th element is `true` if the `i`-th car was successfully parked in an available slot of its type, and `false` otherwise.
