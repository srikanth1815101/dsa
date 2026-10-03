---
title: "Corporate Flight Bookings"
date: 2026-10-01T02:25:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Prefix Sum"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CorporateFlightBookings/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CorporateFlightBookings/engineering"

hints:
  - "Use the difference array technique: for a booking [first, last, seats], add seats at first-1 and subtract seats at last."
  - "Compute the running prefix sum of the difference array to obtain the final seat counts for all flights in O(n) time."

youtubeId: ""

solutionUrl: "/solutions/corporate-flight-bookings-solution/"

timeComplexity: "O(n + bookings.length)"
spaceComplexity: "O(n)"

examples:
  - input: "bookings = [[1, 2, 10], [2, 3, 20], [2, 5, 25]]`, `n = 5"
    output: "** `[10, 55, 45, 25, 25]` **"
    explanation: "** Flight labels: 1 2 3 4 5 Booking 1: 10 10 Booking 2: 20 20 Booking 3: 25 25 25 25 Total seats: 10 55 45 25 25"
  - input: "bookings = [[1, 2, 10], [2, 2, 15]]`, `n = 2"
    output: "** `[10, 25]` **"
    explanation: "** Flight labels: 1 2 Booking 1: 10 10 Booking 2: 15 Total seats: 10 25"

constraints:
  - "1 <= n <= 2 * 10^4"
  - "0 <= bookings.length <= 2 * 10^4"
  - "bookings[i].length == 3"
  - "1 <= first_i <= last_i <= n"

realWorld:
  - title: "Airline Flight Seat Reservation Tracking"
    description: "Applying bulk travel agency seat allocations across contiguous flight legs with linear-time aggregation."
  - title: "Hotel Room Block Availability Engine"
    description: "Reserving conference hotel room blocks across multi-day calendar windows without quadratic cell updates."
  - title: "Cloud Server Virtual CPU Reservation"
    description: "Allocating reserved compute capacity across contiguous time slots for scheduled batch cluster workloads."
weight: 86
---
<!-- All rights reserved to CSRGO DSA -->

There are `n` flights labeled from `1` to `n`.

You are given an array of flight bookings `bookings`, where `bookings[i] = [first_i, last_i, seats_i]` represents a booking for each flight from `first_i` to `last_i` (inclusive) with `seats_i` seats reserved for each flight.

Return an array `answer` of length `n`, where `answer[i]` is the total number of seats reserved for flight `i + 1`.
