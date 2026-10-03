---
title: "Reconstruct Itinerary"
date: 2026-10-01T01:45:00+05:30
difficulty: "Hard"
topics: ["Graph", "DFS", "Eulerian Path"]
companies: ["Google", "Uber", "Amazon"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ReconstructItinerary/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ReconstructItinerary/engineering"

hints:
  - "Represent the flight tickets as an adjacency list with Min-Heaps (PriorityQueues) to ensure lexicographical traversal."
  - "Apply Hierholzer's algorithm for finding an Eulerian path using post-order DFS and reverse the accumulated path."

youtubeId: ""

solutionUrl: "/solutions/reconstruct-itinerary-solution/"

timeComplexity: "O(E log E)"
spaceComplexity: "O(V + E)"

examples:
  - input: "tickets = [[\"MUC\", \"LHR\"], [\"JFK\", \"MUC\"], [\"SFO\", \"SJC\"], [\"LHR\", \"SFO\"]]"
    output: "[\"JFK\", \"MUC\", \"LHR\", \"SFO\", \"SJC\"]"
    explanation: "Result is [\"JFK\", \"MUC\", \"LHR\", \"SFO\", \"SJC\"]."
  - input: "tickets = [[\"JFK\", \"SFO\"], [\"JFK\", \"ATL\"], [\"SFO\", \"ATL\"], [\"ATL\", \"JFK\"], [\"ATL\", \"SFO\"]]"
    output: "[\"JFK\", \"ATL\", \"JFK\", \"SFO\", \"ATL\", \"SFO\"]"
    explanation: "Another possible reconstruction is [\"JFK\", \"SFO\", \"ATL\", \"JFK\", \"ATL\", \"SFO\"] but it is larger in lexical order."

constraints:
  - "1 <= tickets.length <= 300"
  - "tickets[i].length == 2"
  - "fromi.length == 3"
  - "toi.length == 3"

realWorld:
  - title: "Airline Crew Rostering Sequences"
    description: "Generating complete valid flight rotation itineraries utilizing all assigned legs without deadhead flights."
  - title: "Drone Surveillance Route Planning"
    description: "Planning flight paths that traverse every defined patrol sector boundary exactly once before landing."
  - title: "Supply Chain Cargo Vessel Circulation"
    description: "Routing container ships through all chartered transit links in minimum port fee order."
weight: 46
---
<!-- All rights reserved to CSRGO DSA -->

You are given a list of airline tickets where `tickets[i] = [fromi, toi]` represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

All of the tickets belong to a traveler who departs from `"JFK"`, thus, the itinerary must begin with `"JFK"`. If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

- For example, the itinerary `["JFK", "LGA"]` has a smaller lexical order than `["JFK", "LGB"]`.

You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.
