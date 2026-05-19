# 🚀 Coodley — Complete Platform Development Guide
### India's Full Stack & Software Development Learning Portal
> *From a 10th grader to a Job-Ready Developer — Everything. Here. Real.*

**Version: 2.1 — Updated: 2026**

🌐 **Live Site:** [https://raunakkarn555.github.io/coodley](https://raunakkarn555.github.io/coodley)
📧 **Contact:** raunakkarn555@gmail.com
❤️ **Donate:** [https://raunakkarn555.github.io/coodley/donate.html](https://raunakkarn555.github.io/coodley/donate.html)

---

## 📋 TABLE OF CONTENTS

1. [Platform Vision & Philosophy](#1-platform-vision--philosophy)
2. [Project Structure & File Architecture](#2-project-structure--file-architecture)
3. [Every Page — Full Details](#3-every-page--full-details)
4. [Color System & Design Language](#4-color-system--design-language)
5. [AI Awareness Section — Core Message](#5-ai-awareness-section--core-message)
6. [Full Curriculum — All Topics & Correct Sequence](#6-full-curriculum--all-topics--correct-sequence)
7. [Community & Environment Design](#7-community--environment-design)
8. [GitHub Hosting Guide (Free)](#8-github-hosting-guide-free)
9. [How to Add New Pages](#9-how-to-add-new-pages)
10. [Legal Pages — Terms, Privacy, Guidelines](#10-legal-pages--terms-privacy-guidelines)
11. [Claude Prompt Guide — Building Each Section](#11-claude-prompt-guide--building-each-section)
12. [Phase-wise Launch Roadmap](#12-phase-wise-launch-roadmap)
13. [Icon System — Lucide CDN](#13-icon-system--lucide-cdn)

---

## 1. PLATFORM VISION & PHILOSOPHY

### Platform Name
**Coodley** *(final choice)*

### Core Promise (always visible, never fake)
> "Ek 10th pass baccha bhi yahan se Full Stack Developer ban sakta hai. Step by step. Free. Real. No shortcuts."

### Three Pillars
| Pillar | Description |
|--------|-------------|
| **Learn** | CS + Programming Languages + Web Dev + DSA + System Design — correct sequence |
| **Survive AI** | Honest AI threat awareness + how to stay relevant in 2026 |
| **Community** | Safe, real, supportive Indian developer community |

### Design Philosophy
- **No clickbait** — every page title = exactly what's inside
- **No fake certificates** that mean nothing
- **No paywalls** on core content
- **Mobile + Desktop** both work perfectly
- **Hindi + English** mixed (Hinglish) where it helps understanding
- **Professional icons** from Lucide CDN — consistent, clean, open source
- **Copyright © 2026 Coodley | [https://raunakkarn555.github.io/coodley](https://raunakkarn555.github.io/coodley)**

---

## 2. PROJECT STRUCTURE & FILE ARCHITECTURE

```
coodley/
│
├── index.html                      ← Homepage (Landing Page)
├── about.html                      ← About the Platform
├── donate.html                     ← Support the Platform ❤️
│
├── learn/
│   ├── index.html                  ← Learning Hub (All Courses)
│   ├── roadmap.html                ← Visual Roadmap
│   │
│   ├── computer-science/
│   │   ├── index.html              ← CS Fundamentals Hub
│   │   ├── how-computers-work.html
│   │   ├── binary-and-data.html
│   │   ├── operating-systems.html
│   │   └── networking-basics.html
│   │
│   ├── terminal-git/               ← MOVED EARLY — before coding
│   │   ├── index.html
│   │   ├── terminal-basics.html
│   │   ├── git-fundamentals.html
│   │   └── github-workflow.html
│   │
│   ├── cpp/                        ← NEW: C++ Programming
│   │   ├── index.html
│   │   ├── cpp-basics.html
│   │   ├── control-flow.html
│   │   ├── functions.html
│   │   ├── arrays-strings.html
│   │   ├── pointers-memory.html
│   │   ├── oop-cpp.html
│   │   ├── stl-basics.html
│   │   ├── file-io.html
│   │   └── competitive-programming-intro.html
│   │
│   ├── java/                       ← NEW: Java Programming
│   │   ├── index.html
│   │   ├── java-basics.html
│   │   ├── control-flow-java.html
│   │   ├── oop-java.html
│   │   ├── collections-framework.html
│   │   ├── exception-handling.html
│   │   ├── file-io-java.html
│   │   └── java-8-features.html
│   │
│   ├── python/                     ← NEW: Python Programming
│   │   ├── index.html
│   │   ├── python-basics.html
│   │   ├── data-structures-python.html
│   │   ├── functions-python.html
│   │   ├── oop-python.html
│   │   ├── file-handling.html
│   │   ├── modules-pip.html
│   │   └── python-for-automation.html
│   │
│   ├── dsa/                        ← NEW: Data Structures & Algorithms
│   │   ├── index.html
│   │   ├── big-o-notation.html
│   │   ├── arrays-and-strings.html
│   │   ├── linked-lists.html
│   │   ├── stacks-queues.html
│   │   ├── trees-binary-trees.html
│   │   ├── bst.html
│   │   ├── graphs.html
│   │   ├── recursion-backtracking.html
│   │   ├── sorting-algorithms.html
│   │   ├── binary-search.html
│   │   ├── hashing.html
│   │   ├── dynamic-programming.html
│   │   └── leetcode-guide.html
│   │
│   ├── html-css/
│   │   ├── index.html
│   │   ├── what-is-html.html
│   │   ├── tags-elements.html
│   │   ├── semantic-html.html
│   │   ├── forms-inputs.html
│   │   ├── css-basics.html
│   │   ├── box-model.html
│   │   ├── flexbox.html
│   │   ├── grid.html
│   │   ├── responsive-design.html
│   │   ├── css-variables.html
│   │   ├── css-animations.html
│   │   └── bootstrap5.html
│   │
│   ├── javascript/
│   │   ├── index.html
│   │   ├── variables-and-types.html
│   │   ├── functions.html
│   │   ├── arrays-objects.html
│   │   ├── dom-manipulation.html
│   │   ├── events.html
│   │   ├── async-js.html
│   │   ├── fetch-api.html
│   │   └── es6-plus.html
│   │
│   ├── react/
│   │   ├── index.html
│   │   ├── what-is-react.html
│   │   ├── components-jsx.html
│   │   ├── props-state.html
│   │   ├── hooks.html
│   │   ├── event-handling.html
│   │   ├── react-router.html
│   │   ├── context-api.html
│   │   └── vite-setup.html
│   │
│   ├── bootstrap/
│   │   └── index.html
│   │
│   ├── backend/
│   │   ├── index.html
│   │   ├── how-servers-work.html
│   │   ├── nodejs-basics.html
│   │   ├── express-framework.html
│   │   ├── ejs-templating.html
│   │   ├── rest-apis.html
│   │   ├── authentication.html
│   │   └── error-handling.html
│   │
│   ├── databases/
│   │   ├── index.html
│   │   ├── what-is-a-database.html
│   │   ├── sql-mysql.html
│   │   ├── mongodb.html
│   │   ├── mongoose.html
│   │   ├── database-design.html
│   │   └── nosql-vs-sql.html
│   │
│   ├── devops/
│   │   ├── index.html
│   │   ├── vscode-mastery.html
│   │   ├── cloud-basics.html
│   │   ├── deployment.html
│   │   ├── docker-basics.html
│   │   └── cicd-basics.html
│   │
│   ├── system-design/             ← NEW: System Design
│   │   ├── index.html
│   │   ├── what-is-system-design.html
│   │   ├── scalability.html
│   │   ├── load-balancing.html
│   │   ├── caching-redis.html
│   │   ├── databases-at-scale.html
│   │   ├── microservices-intro.html
│   │   └── case-studies.html
│   │
│   └── ai-tools/
│       ├── index.html
│       ├── prompt-engineering.html
│       ├── github-copilot.html
│       └── ai-for-developers.html
│
├── ai-reality/
│   ├── index.html                  ← AI Threat Reality Hub
│   ├── what-ai-can-do.html
│   ├── what-ai-cannot-do.html
│   ├── jobs-at-risk.html
│   ├── how-to-survive.html
│   └── future-skills.html
│
├── community/
│   ├── index.html                  ← Community Hub
│   ├── rules.html
│   └── projects.html
│
├── tools/
│   ├── index.html
│   ├── roadmap-generator.html
│   └── progress-tracker.html
│
├── legal/
│   ├── terms.html
│   ├── privacy.html
│   └── cookie-policy.html
│
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   ├── components.css
│   │   ├── layout.css
│   │   └── dark-mode.css
│   ├── js/
│   │   ├── main.js               ← Includes: lucide.createIcons() call
│   │   ├── lesson.js
│   │   └── progress.js
│   ├── images/
│   │   ├── logo.svg
│   │   ├── og-image.png
│   │   └── icons/
│   └── fonts/
│
├── 404.html
├── sitemap.xml
├── robots.txt
└── README.md
```

---

## 3. EVERY PAGE — FULL DETAILS

### 3.1 HOMEPAGE (`index.html`)

**Purpose:** Make someone stay in 5 seconds. Show them this is real and made for them.

**Sections (top to bottom):**
```
[NAVBAR]
- Logo (Coodley + </> mark)
- Nav links with Lucide icons: Learn | Roadmap | Community | Tools | ⚠ AI Reality
- Dark mode toggle (Lucide sun/moon icon)
- "Start Learning →" CTA button

[HERO SECTION]
- Badge: "India's most honest developer learning platform" (pulsing dot)
- Bold headline: "Ek jagah. Poora stack."
- Sub: step-by-step, detail mein, bilkul free
- Two CTAs: "Start from Zero →" | "See Full Roadmap ↗"
- Terminal widget showing: journey.sh with unlock messages
- Trust bar: No clickbait · No fake promises · No hidden fees · Mobile friendly

[AI AWARENESS AMBER BANNER]
- Orange/amber strip
- "AI job threat is real. Yahan tujhe sachchi picture milegi..."
- Link: "Read the AI Reality Report →"

[PHASE-BY-PHASE ROADMAP SECTION]
- Timeline layout (NOT horizontal scroll cards — vertical detailed phases)
- Each phase has: node number, icon, title, badges, description, topic pills, meta info
- Fork note explaining Web path vs Software Engineer path
- All 12 phases clearly shown with real 2026 industry sequence

[WHY COODLEY]
- 6-column grid of feature cards with Lucide icons

[STATS BAR]
- 80+ lessons | 14 modules | ₹0 cost | 3 language tracks

[AI REALITY SECTION]
- Two-column: text + quadrant grid (AI can vs AI cannot)

[CURRICULUM PREVIEW]
- Full 15-row list of all modules with icons and badges

[COMMUNITY SECTION]
- Values pills with icons | Join cards (Discord, GitHub, Projects)

[TESTIMONIALS]
- 3 cards

[CTA SECTION]
- "Aaj se shuru kar. Kal mat chhod."

[FOOTER]
- 5-column footer: Brand + Learn + Languages&DSA + Platform + Legal
- Social links (GitHub, Discord, Twitter)
- © 2026 Coodley | [https://raunakkarn555.github.io/coodley](https://raunakkarn555.github.io/coodley)
```

---

### 3.2 LEARNING HUB (`learn/index.html`)

**Updated to include new sections:**
- C++ Programming track
- Java Programming track
- Python Programming track
- DSA track (flagged as "Interview Critical")
- System Design track (flagged as "Senior Level")

---

### 3.3 INDIVIDUAL LESSON PAGE (Template)

Same structure as v1.0 — see section 9 for the template.

---

### 3.4 NEW: C++ SECTION (`learn/cpp/index.html`)

**Purpose:** Teach C++ from absolute scratch for beginners who want to do DSA or competitive programming.

**Why C++ first?**
- Best performance among common languages
- Pointers teach memory understanding — invaluable for all future work
- STL provides ready-to-use data structures for DSA
- Used in 80%+ of competitive programming solutions
- Required by IIT/NIT placement prep

**Curriculum:**
```
1. Why C++ — jab Python easier lagti hai toh C++ kyun?
2. Setup: g++ compiler, VSCode, Hello World
3. Variables, data types, input/output
4. Control flow (if/else, loops, switch)
5. Functions, scope, recursion
6. Arrays and strings (char arrays vs string class)
7. Pointers and memory — the most important lesson
8. Object-Oriented Programming in C++
9. STL: vector, map, set, pair, stack, queue
10. File I/O
11. Intro to Competitive Programming (CP) with C++
```

---

### 3.5 NEW: JAVA SECTION (`learn/java/index.html`)

**Purpose:** Teach Java for students targeting enterprise/product companies (TCS, Infosys, Wipro, startups).

**Why Java?**
- Most enterprise software is written in Java or Kotlin (Android)
- Spring Boot is the #1 backend framework in Indian IT companies
- Strong OOP teaches fundamentals applicable everywhere
- Most asked language in campus placements

**Curriculum:**
```
1. Why Java in 2026 — still relevant?
2. JVM, JDK, JRE — what you actually need to install
3. Variables, types, operators
4. Control flow, loops
5. OOP: Classes, Objects, Inheritance, Polymorphism, Abstraction, Encapsulation
6. Collections Framework: ArrayList, HashMap, HashSet, LinkedList
7. Exception Handling
8. File I/O
9. Java 8+ features: Lambdas, Streams, Optional
10. Intro to Spring Boot (what it is, why it matters)
```

---

### 3.6 NEW: PYTHON SECTION (`learn/python/index.html`)

**Purpose:** Teach Python for beginners (easiest first language), automation, AI/ML intro, scripting.

**Why Python?**
- Simplest syntax — best for absolute beginners
- #1 language for AI/ML, data science
- Automation scripts, web scraping — highly practical
- Rapidly growing demand in Indian startups

**Curriculum:**
```
1. Why Python — best beginner language?
2. Setup: Python 3, pip, VSCode
3. Variables, types, print, input
4. Strings and string methods
5. Lists, tuples, dictionaries, sets
6. Functions — def, args, kwargs, lambda
7. OOP in Python — classes, inheritance
8. File handling (read/write files)
9. Modules and pip packages
10. Automation: rename files, send emails, web scraping with requests/BeautifulSoup
11. Intro to NumPy and Pandas (what they are)
```

---

### 3.7 NEW: DSA SECTION (`learn/dsa/index.html`)

**Purpose:** The most critical section for getting jobs at good companies.

**TONE — Be honest:**
> "DSA boring lagta hai. Sab jaante hain. But bina iske Amazon, Google, Microsoft, Flipkart, Swiggy mein interview nahi doge. Yeh harsh reality hai. Jitna pehle shuru karo, utna better."

**Recommended prerequisite:** Either C++ or Java (Python bhi chalega but C++ fastest hai for DSA)

**Curriculum:**
```
1. Why DSA — brutal honesty
2. Big-O Notation — time & space complexity
3. Arrays and Strings (most common in interviews)
4. Linked Lists — singly, doubly, circular
5. Stacks and Queues
6. Trees — binary trees, traversals
7. Binary Search Trees (BST)
8. Graphs — BFS, DFS, shortest path
9. Recursion and Backtracking
10. Sorting — bubble, selection, insertion, merge, quick
11. Binary Search — and its variations
12. Hashing and HashMaps
13. Dynamic Programming — 0/1 knapsack, LCS, coin change
14. LeetCode + Codeforces strategy guide
```

**Design:** Red accent theme (different from main green) — serious section.

---

### 3.8 NEW: SYSTEM DESIGN SECTION (`learn/system-design/index.html`)

**Purpose:** For mid-senior level interviews and understanding how real products work at scale.

**Prerequisite:** Backend + Databases sections completed.

**Curriculum:**
```
1. What is System Design — kab zaroori hai?
2. Scalability — vertical vs horizontal scaling
3. Load Balancing — what, why, how
4. Caching — in-memory, Redis, CDN
5. Database scaling — sharding, replication, read replicas
6. Microservices vs Monolith — trade-offs
7. REST vs GraphQL — when to use which
8. Message queues (Kafka, RabbitMQ concepts)
9. Case Studies: Design Twitter, Design URL Shortener, Design WhatsApp
```

---

### 3.9 AI REALITY HUB (`ai-reality/index.html`)

Same philosophy as v1.0. See section 5 for tone guide.

---

## 4. COLOR SYSTEM & DESIGN LANGUAGE

### Updated Color Palette (v2.0)

```css
:root {
  /* Backgrounds */
  --bg:      #07090f;
  --bg2:     #0c0f1a;
  --bg3:     #111827;
  --bg4:     #1a2235;
  --surface: rgba(255,255,255,0.04);

  /* Borders */
  --border:  rgba(255,255,255,0.08);
  --border2: rgba(255,255,255,0.13);
  --border-glow: rgba(61,232,176,0.35);

  /* Text */
  --text:    #e8edf5;
  --text2:   #8899b0;
  --text3:   #4d5e72;

  /* Primary Accent — Electric Teal */
  --accent:  #3de8b0;
  --accent2: #00c98a;
  --accent-dim: rgba(61,232,176,0.12);

  /* Amber — AI / Warning content */
  --amber:        #f4a942;
  --amber-bg:     rgba(244,169,66,0.07);
  --amber-border: rgba(244,169,66,0.22);

  /* Blue — Intermediate content */
  --blue:    #5ba4f5;
  --blue-bg: rgba(91,164,245,0.08);

  /* Purple — Language tracks (C++, Java, Python) */
  --purple:  #9d7cf5;

  /* Red — DSA / Interview Critical */
  --red:     #f56565;

  /* Fonts */
  --font-head: 'Bricolage Grotesque', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

[data-theme="light"] {
  --bg:      #f3f5f9;
  --bg2:     #e8ecf4;
  --bg3:     #dde3ef;
  --bg4:     #cfd7e8;
  --surface: rgba(0,0,0,0.03);
  --border:  rgba(0,0,0,0.08);
  --text:    #0c1220;
  --text2:   #3d4f64;
  --text3:   #7a8fa6;
  --accent:  #00a876;
  --accent2: #008f62;
}
```

### Typography

```
Heading: Bricolage Grotesque (strong, editorial, modern)
Body:    DM Sans (highly readable, friendly)
Code:    JetBrains Mono
```

Import via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

### Color Meanings (Consistent across all pages)
| Color | Meaning | Used for |
|-------|---------|----------|
| Teal/Green | Core content, beginner, success | Main nav, CTAs, beginner badges |
| Blue | Intermediate content, essential | Intermediate badges, tools |
| Purple | Language tracks | C++, Java, Python sections |
| Red | Critical / Interview | DSA section, interview-critical badges |
| Amber | Warning / AI content | AI Reality, fork notes |

---

## 5. AI AWARENESS SECTION — CORE MESSAGE

### The Exact Tone to Strike
**NOT:** "AI will take your job! Learn or die!" ❌
**NOT:** "Don't worry, AI is just a tool, haha!" ❌
**YES:** "Here is exactly what AI can and cannot do in 2026. Here is what the data says. Here is your specific action plan." ✅

### Key Messages
1. **AI threat is real but specific** — it replaces *tasks*, not entire *careers* (yet)
2. **Developers who use AI are beating developers who don't** — become an AI-native dev
3. **Skills AI cannot replace:** problem solving, system design, human judgment, creativity, team leadership
4. **Prompt Engineering is now a real, valuable skill** — teach it seriously
5. **DSA + System Design = AI-proof** — these reasoning skills are hardest to automate
6. **Stay curious, keep building** — your portfolio and problem-solving ability is your shield

---

## 6. FULL CURRICULUM — ALL TOPICS & CORRECT SEQUENCE

### ⚠️ THE CORRECT LEARNING SEQUENCE (2026 Reality)

This is the most important thing in this guide. Many platforms teach in the wrong order. Here is the industry-correct sequence:

```
STEP 0: CS Foundations
  → How computers work, internet, HTTP, DNS

STEP 1: Terminal & Git
  → BEFORE any coding — this is a common mistake when skipped
  → GitHub profile setup, first commit

FORK POINT: Choose your primary path

PATH A — WEB DEVELOPER
  STEP 2A: HTML & CSS
  STEP 3A: JavaScript
  STEP 4A: React + Vite
  STEP 5A: Node.js + Express
  STEP 6A: Databases (MySQL + MongoDB)

PATH B — SOFTWARE ENGINEER / DSA
  STEP 2B: Pick ONE language (C++, Java, or Python)
  STEP 3B: DSA (continuously, parallel to everything else)
  → Then join web path from Step 2A or go Backend in your chosen language

BOTH PATHS CONVERGE AT:
  → VSCode Mastery + Dev Setup
  → DevOps & Cloud
  → System Design
  → AI Tools & Prompt Engineering
```

### PHASE 0: Computer Science Foundations
- How computers work (binary, CPU, RAM, storage)
- What is the internet — how does it actually work?
- Client vs Server model
- HTTP / HTTPS basics
- IP address, DNS, how browsers work
- What is a programming language?

### PHASE 1: Terminal & Git (EARLY — before coding)
- What is a terminal / command line and why developers use it
- Essential commands (ls, cd, mkdir, rm, mv, cp, cat, grep)
- What is Git and why version control exists
- git init, add, commit, push, pull, clone
- Branches and merging
- GitHub — profile setup, repos, README, stars
- GitHub Pages (deploy for free — first live project)
- .gitignore
- Resolving merge conflicts

### PHASE 2B: C++ Programming (Software Engineer Path)
- Why C++ in 2026 — speed + DSA + competitive programming
- Setup: g++ compiler, first program
- Variables, cin/cout, data types
- Control flow: if/else, switch, for, while
- Functions: declaration, definition, recursion, scope
- Arrays: 1D, 2D, character arrays
- Strings: string class vs char arrays
- **Pointers and Memory — the most important concept**
  - What is a pointer
  - Stack vs heap
  - new and delete
  - Common pointer mistakes
- Object-Oriented Programming
  - Classes and objects
  - Constructors, destructors
  - Inheritance (single, multiple)
  - Polymorphism, virtual functions
  - Abstraction and encapsulation
- STL (Standard Template Library)
  - vector, deque, list
  - stack, queue, priority_queue
  - map, unordered_map
  - set, unordered_set
  - pair, tuple
  - Iterators
- File I/O
- Introduction to Competitive Programming

### PHASE 2B (alt): Java Programming (Software Engineer Path)
- Why Java in 2026 — enterprise + Android + placements
- JVM/JDK/JRE — what to install
- Variables, System.out, Scanner
- Control flow
- OOP in Java (more strict than Python, cleaner than C++)
  - Classes, Objects
  - Constructors
  - Inheritance (extends)
  - Interfaces and Abstract classes
  - Polymorphism
  - Encapsulation (getters/setters)
- Collections Framework
  - ArrayList, LinkedList
  - HashMap, LinkedHashMap, TreeMap
  - HashSet, TreeSet
  - Iterator, for-each
- Exception Handling (try/catch/finally, custom exceptions)
- File I/O
- Java 8+ features
  - Lambda expressions
  - Streams API
  - Optional
  - Method references
- Introduction to Spring Boot

### PHASE 2B (alt): Python Programming (Beginner Path / AI/ML Path)
- Why Python in 2026 — easiest + AI/ML + automation
- Setup: Python 3, pip, virtual environments
- Variables, print, input, type conversion
- String methods and f-strings
- Lists, tuples, sets, dictionaries
- Control flow (if/elif/else, for, while)
- Functions: def, *args, **kwargs, default params
- Lambda, map, filter, list comprehensions
- OOP in Python
  - Classes, __init__, self
  - Inheritance, super()
  - Dunder methods (__str__, __len__, etc.)
- File Handling (open, read, write, with statement)
- Modules, packages, pip
- Virtual environments (venv)
- Error handling (try/except/finally)
- Automation projects:
  - Rename files in bulk
  - Web scraping with requests + BeautifulSoup
  - Send automated emails
- Brief intro to NumPy, Pandas, Matplotlib

### PHASE 3: DSA — Data Structures & Algorithms
> **Do this throughout your journey — not as a one-time thing**

- **Big-O Notation** — Time and Space complexity
  - O(1), O(log n), O(n), O(n log n), O(n²)
  - Best/worst/average case
  - How to calculate complexity
- **Arrays and Strings** (most interview questions)
  - Two pointer technique
  - Sliding window
  - Prefix sums
- **Linked Lists**
  - Singly linked list: create, insert, delete, reverse
  - Doubly linked list
  - Circular linked list
  - Floyd's cycle detection
- **Stacks and Queues**
  - Implementation using arrays/linked lists
  - Monotonic stack
  - Queue using two stacks
- **Trees**
  - Binary tree: creation, traversals (inorder, preorder, postorder, level-order)
  - Height, diameter, mirror
  - Binary Search Tree: insert, search, delete
  - AVL trees (conceptual)
  - Heap (min-heap, max-heap)
- **Graphs**
  - Representation: adjacency matrix, adjacency list
  - BFS (Breadth-First Search)
  - DFS (Depth-First Search)
  - Shortest path: Dijkstra's algorithm
  - Topological sort
  - Union-Find (Disjoint Set Union)
- **Recursion and Backtracking**
  - How recursion actually works (call stack)
  - Classic problems: N-Queens, Sudoku solver, Rat in a maze
- **Sorting Algorithms**
  - Bubble, Selection, Insertion (O(n²))
  - Merge Sort, Quick Sort (O(n log n))
  - Counting Sort, Radix Sort
- **Binary Search**
  - Standard binary search
  - Search in rotated sorted array
  - Binary search on answer
- **Hashing**
  - Hash functions, collision handling
  - HashMap problems
  - Two sum, four sum patterns
- **Dynamic Programming**
  - What is memoization vs tabulation
  - Classic problems:
    - Fibonacci (starter)
    - 0/1 Knapsack
    - Longest Common Subsequence
    - Longest Increasing Subsequence
    - Coin Change
    - Edit Distance
    - Matrix Chain Multiplication
- **Greedy Algorithms**
  - Activity selection
  - Huffman coding (conceptual)
  - Interval scheduling
- **LeetCode & Practice Guide**
  - How to use LeetCode
  - Easy → Medium → Hard progression
  - Topic-wise practice order
  - Mock interview prep

### PHASE 2A: HTML & CSS
- What is HTML, structure of a webpage
- All important HTML tags
- Semantic HTML (why it matters for SEO + accessibility)
- Forms and inputs (very important for web apps)
- What is CSS, how it connects to HTML
- Selectors, specificity, cascade
- Box model (margin, border, padding, content)
- Flexbox — complete, with every property
- CSS Grid — complete
- Responsive design, media queries
- CSS variables (custom properties)
- Animations and transitions
- Pseudo-classes and pseudo-elements
- Bootstrap 5 — utility classes, grid system, components

### PHASE 3A (after HTML/CSS): JavaScript
- Variables (let, const, var — differences matter)
- Data types and type coercion
- Functions, arrow functions
- Arrays & Objects — methods deep dive
- Loops, conditions, switch
- DOM manipulation — what the DOM is, selecting elements, changing content
- Events — addEventListener, event bubbling, delegation
- Fetch API / AJAX — how to call an API
- Promises & async/await — why this confuses everyone and how to actually get it
- ES6+ features: spread, rest, destructuring, template literals, optional chaining
- Error handling (try/catch)
- Local Storage & Session Storage
- Modules (import/export)

### PHASE 4A: React + Vite
- Why React — what problem it solves vs vanilla JS
- Create React app with Vite — why Vite instead of CRA
- Components — function components
- JSX syntax — it's not HTML, it's JavaScript
- Props — passing data down
- State — useState hook
- Side effects — useEffect hook
- Event handling in React
- Lists and keys — why keys matter
- Conditional rendering
- React Router — SPA navigation
- Context API — avoid prop drilling
- Custom hooks — reusable logic
- Calling APIs in React (useEffect + fetch)
- Building and deploying to Vercel

### PHASE 5A: Backend — Node.js + Express
- What happens on the server side
- What is Node.js — JavaScript outside the browser
- npm and package.json — dependency management
- Module system (require/import)
- Express basics — what is a framework
- Routes, route params, query params
- Middleware — what it is, how it works, writing your own
- Request and Response objects
- EJS templating — server-side rendering
- Building a REST API from scratch
- Authentication basics
  - Sessions + cookies
  - JWT (JSON Web Tokens) — what they are, how to use
- Environment variables (.env) — NEVER hardcode secrets
- Error handling in Express
- CORS — what it is and how to fix it

### PHASE 6A: Databases
- What is a database — why not just use files
- Relational vs Non-relational
- **SQL / MySQL**
  - Setup MySQL locally
  - CREATE, INSERT, SELECT, UPDATE, DELETE
  - WHERE, ORDER BY, LIMIT, GROUP BY
  - JOINS — INNER, LEFT, RIGHT, FULL
  - Transactions and ACID properties
  - Indexes — what they are, when to use
- **MongoDB**
  - Documents and Collections concept
  - CRUD in MongoDB shell
  - Connecting to Node.js with Mongoose
  - Schema, Model
  - Queries: find, findOne, updateOne, deleteOne
  - Population (like JOINs in SQL)
- SQL vs NoSQL — real-world when to use which
- Database design basics — normalization, relationships, ER diagrams

### PHASE 7: VSCode Mastery & Dev Setup
- Installation and setup
- Themes and fonts
- Extensions that matter (ESLint, Prettier, GitLens, Thunder Client, etc.)
- Shortcuts that save time (multi-cursor, rename symbol, go to definition)
- Integrated terminal
- Debugging with breakpoints
- Settings sync across machines
- Workspace settings vs global settings

### PHASE 8: DevOps & Cloud
- What is DevOps — mindset, not just tools
- Deployment — what does "going live" actually mean
- **Free Hosting options:**
  - Vercel (best for React)
  - Railway (best for Node.js backend)
  - Render (full-stack apps)
  - MongoDB Atlas (free cloud database)
- Environment variables in production
- Domain names and DNS setup
- Basics of CI/CD — GitHub Actions intro
- What is Docker — why it exists, basic concepts
  - Dockerfile, docker build, docker run
  - Docker Compose intro
- Linux basics for working with servers
  - SSH into a VPS
  - Basic server commands
- Cloud providers overview
  - AWS: EC2, S3, RDS, Lambda (what each does)
  - GCP and Azure (conceptual overview)

### PHASE 9: System Design
- What is System Design — and when do interviews ask it
- Scalability concepts — vertical vs horizontal
- Load Balancing — what it is, how it works
- Caching strategies — in-memory, Redis, CDN caching
- Database at scale — sharding, replication, read replicas
- Microservices vs Monolith — real trade-offs, not buzzwords
- REST vs GraphQL — concrete comparison
- Message queues — Kafka, RabbitMQ (conceptual)
- API design best practices
- Real-world case study designs:
  - Design a URL Shortener (like bit.ly)
  - Design Twitter's timeline
  - Design WhatsApp messaging
  - Design a file storage service (like Google Drive)

### PHASE 10: AI Tools & Prompt Engineering
- What is Prompt Engineering — why it's a real skill
- How to use ChatGPT / Claude effectively as a developer
  - Debugging with AI
  - Code review
  - Architecture questions
  - Documentation writing
  - Learning new concepts faster
- GitHub Copilot — effective usage
  - When to accept suggestions
  - When Copilot is wrong (important!)
  - Inline completions vs chat
- AI for writing tests
- Limitations of AI coding tools — why you still need to understand code
- Building responsibly in the AI era
- AI APIs — making your first call to an AI API
- What is RAG (Retrieval Augmented Generation) — conceptual intro

---

## 7. COMMUNITY & ENVIRONMENT DESIGN

### Rules for the Community
```
1. Koi bhi sawal chota nahi hota — no question shaming
2. Hindi, English, Hinglish — sab welcome
3. Real help only — no copy-paste without explanation
4. No self-promotion spam
5. Give credit when sharing others' work
6. Constructive feedback only — "yeh theek karo" + reason
7. No politics, no religion — only code
8. Mentors and beginners are equal members
9. No gatekeeping — "yeh toh basic hai" mat kaho
10. Celebrate others' progress
```

### Discord Channels
```
#welcome-and-intro
#help-cs-basics
#help-cpp
#help-java
#help-python
#help-dsa
#help-html-css
#help-javascript
#help-react
#help-backend
#help-databases
#help-devops
#help-system-design
#project-showcase
#ai-discussion
#jobs-and-internships
#competitive-programming
#weekly-challenge
#resources
#off-topic
```

---

## 8. GITHUB HOSTING GUIDE (FREE)

### Step 1: Create Repository
```bash
# On GitHub.com:
# Click "New Repository"
# Name: coodley (or your chosen name)
# Make it PUBLIC
# Don't initialize with README (we'll push ours)
```

### Step 2: Initialize and Push
```bash
git init
git add .
git commit -m "Initial commit: platform launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/coodley.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
```
1. Repo → Settings → Pages (sidebar)
2. Source: "Deploy from a branch"
3. Branch: main | Folder: / (root)
4. Save → wait ~2 min
5. Live at: https://YOUR_USERNAME.github.io/coodley/
```

### Step 4: Custom Domain (Optional)
```
1. Buy domain (e.g., coodley.in — ~₹800/year)
2. GitHub Pages settings → Custom domain → enter domain
3. DNS records at registrar:
   A → 185.199.108.153
   A → 185.199.109.153
   A → 185.199.110.153
   A → 185.199.111.153
   CNAME → YOUR_USERNAME.github.io
4. Wait up to 24 hours
5. Enable "Enforce HTTPS"
```

### Step 5: Update Workflow
```bash
git add .
git commit -m "Describe what changed"
git push origin main
# Auto-deploys in ~60 seconds
```

---

## 9. HOW TO ADD NEW PAGES

### Adding a New Lesson Page

**Step 1: Create the file**
```bash
# Example: Adding C++ Pointers lesson
touch learn/cpp/pointers-memory.html
```

**Step 2: Use the lesson template**
```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pointers & Memory — C++ | Coodley</title>
  <meta name="description" content="C++ pointers aur memory management seedha sikhte hain...">
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
  <link rel="stylesheet" href="../../assets/css/global.css">
  <link rel="stylesheet" href="../../assets/css/lesson.css">
</head>
<body>
  <!-- Navbar: copy from index.html -->
  
  <main class="lesson-container">
    <nav class="breadcrumb">
      <a href="/">Home</a> › 
      <a href="/learn/">Learn</a> › 
      <a href="/learn/cpp/">C++</a> › 
      Pointers & Memory
    </nav>
    
    <header class="lesson-header">
      <h1>Pointers &amp; Memory</h1>
      <div class="lesson-meta">
        <span class="badge badge-purple">C++</span>
        <span class="badge badge-blue">Intermediate</span>
        <span>~35 minutes</span>
      </div>
    </header>
    
    <aside class="toc"><!-- Table of contents --></aside>
    
    <article class="lesson-content">
      <!-- Write lesson here -->
      <!-- Use Prism.js for code highlighting -->
      <!-- Use real analogies like: "pointer ek address hai, jaise ghar ka address" -->
    </article>
    
    <section class="exercises"><!-- 3-5 exercises --></section>
    
    <nav class="lesson-nav">
      <a href="./arrays-strings.html">← Previous: Arrays & Strings</a>
      <a href="./oop-cpp.html">Next: OOP in C++ →</a>
    </nav>
  </main>
  
  <!-- Footer: copy from index.html -->
  <script>lucide.createIcons();</script>
  <script src="../../assets/js/main.js"></script>
</body>
</html>
```

**Step 3: Add to navigation**
- Open the section hub (e.g., `learn/cpp/index.html`)
- Add a card for the new lesson

**Step 4: Update sitemap.xml**

**Step 5: Commit and push**
```bash
git add .
git commit -m "Add C++ Pointers lesson"
git push origin main
```

---

### Adding a New Language Section

If you want to add a new language (e.g., Rust, Go):
1. Create folder: `learn/rust/`
2. Create `learn/rust/index.html`
3. Add individual lesson files
4. Add section card to `learn/index.html`
5. Add to navbar dropdown if it's a primary section
6. Add footer link under "Languages & DSA"
7. Update `sitemap.xml`
8. Push to GitHub

---

## 10. LEGAL PAGES — TERMS, PRIVACY, GUIDELINES

### `legal/terms.html` — Terms of Service (v2 - 2026)

Key sections:
```
1. Acceptance of Terms
2. What We Provide — free educational content, community, tools
3. What You Agree To
   - Not copy/resell content
   - Treat community members respectfully
   - Use tools for learning only
4. Intellectual Property
   - Our content is ours; your projects are yours
5. No Guarantees (IMPORTANT — stay honest)
   - We don't guarantee jobs
   - Content accuracy maintained but we're human
6. Account Termination
   - Can remove community access for violations
7. Contact: raunakkarn555@gmail.com
8. © 2026 Coodley | [https://raunakkarn555.github.io/coodley](https://raunakkarn555.github.io/coodley)
```

### `legal/privacy.html` — Privacy Policy

```
1. What Data We Collect
   - No login: nothing (localStorage only)
   - Community: email, username only
2. What We Do NOT Collect
   - No tracking pixels
   - No data selling
   - No unnecessary cookies
3. Analytics: anonymous page views only (Plausible, not Google Analytics)
4. Third-Party Links
5. Data Deletion: email us anytime
6. Contact: raunakkarn555@gmail.com
7. © 2026 Coodley | [https://raunakkarn555.github.io/coodley](https://raunakkarn555.github.io/coodley)
```

---

## 11. CLAUDE PROMPT GUIDE — BUILDING EACH SECTION

### Building the Homepage
```
"Create a complete homepage for Coodley, an Indian full-stack and software 
development learning platform. Use Lucide icons via CDN 
(https://unpkg.com/lucide@latest/dist/umd/lucide.js) for all icons.
Include: dark navbar with logo, hero with terminal widget, amber AI banner,
vertical phase-by-phase roadmap timeline, why section, AI reality section,
community section, and detailed footer.
Color scheme: dark navy bg, electric teal accent, amber for AI/warnings, 
purple for language tracks (C++/Java/Python), red for DSA.
Fonts: Bricolage Grotesque + DM Sans + JetBrains Mono via Google Fonts.
Copyright: © 2026 Coodley | [https://raunakkarn555.github.io/coodley](https://raunakkarn555.github.io/coodley)."
```

### Building a C++ Lesson
```
"Write a complete lesson on [TOPIC] for C++ beginners on Coodley platform.
Style: explain like talking to a friend, use Hinglish where helpful, 
include memory diagrams as ASCII art, code examples with comments,
real-world analogies. Target: 12th grader or 1st year college student.
Include: what is it, why it matters, syntax, examples, common mistakes, 
3 practice exercises with show/hide solutions.
Format: full HTML with Prism.js code highlighting, purple accent theme."
```

### Building the DSA Section Hub
```
"Create the DSA (Data Structures & Algorithms) section hub page for Coodley.
Be honest about why DSA is hard but necessary. List all topics in order:
complexity → arrays → linked lists → stacks → trees → graphs → DP.
Use red accent theme (different from main green). Include a 'how to study DSA'
guide section. Show estimated timeline per topic.
Prerequisite warning: complete C++ or Java first."
```

### Building the AI Reality Page
```
"Create the AI Reality section for Coodley (2026).
Tone: honest, not scary, not dismissive. Show real data on:
- Which dev tasks AI can do in 2026
- Which tasks still need humans
- Why DSA + System Design = most AI-proof skills
- How developers use AI as a superpower
- Specific action plan for staying relevant
Design: amber warning color theme, data-driven, cite sources."
```

### Adding System Design Content
```
"Write a system design lesson on [TOPIC] for intermediate developers.
Include: what problem this solves, how it works with a simple diagram (ASCII),
real-world examples (mention Indian companies like Swiggy, Zomato, Flipkart),
trade-offs, when to use this pattern, interview tips.
Difficulty: Advanced. Use blue accent theme."
```

---

## 12. PHASE-WISE LAUNCH ROADMAP

### Phase 1 — Foundation (Week 1-2)
- [ ] GitHub repo setup
- [ ] Folder structure created (all new folders: cpp, java, python, dsa, system-design)
- [ ] Global CSS with color variables
- [ ] Navbar and footer with Lucide icons
- [ ] Homepage (index.html) — updated v2
- [ ] Learning Hub with new sections
- [ ] Deploy to GitHub Pages

### Phase 2 — Core Web Content (Week 3-6)
- [ ] CS Fundamentals lessons
- [ ] Terminal & Git section (before HTML/CSS)
- [ ] HTML & CSS complete
- [ ] JavaScript complete
- [ ] AI Reality Hub (all 5 pages)

### Phase 3 — Language Tracks (Week 7-10)
- [ ] C++ section (10 lessons)
- [ ] Java section (8 lessons)
- [ ] Python section (8 lessons)
- [ ] DSA section (first 6 topics)

### Phase 4 — Advanced Content (Week 11-16)
- [ ] React + Vite
- [ ] Node.js + Express + Authentication
- [ ] Databases (MySQL + MongoDB)
- [ ] DSA remaining topics (DP, Graphs)
- [ ] Lesson interactivity (embedded code editors)
- [ ] Progress tracking (localStorage)

### Phase 5 — Pro Content (Week 17-22)
- [ ] DevOps & Cloud section
- [ ] System Design section (all lessons)
- [ ] AI Tools section
- [ ] Community pages + Discord setup
- [ ] Legal pages
- [ ] Tools (Roadmap Generator, Progress Tracker)

### Phase 6 — Polish & Growth (Month 6+)
- [ ] SEO (meta tags, sitemap, robots.txt, OG images)
- [ ] Performance optimization
- [ ] Mobile testing on real devices
- [ ] Weekly challenges feature
- [ ] Project showcase gallery
- [ ] Custom domain (coodley.in)
- [ ] Social media presence
- [ ] Donate page (donate.html) for supporter contributions

---

## 13. ICON SYSTEM — LUCIDE CDN

All icons come from Lucide. Load via CDN in every HTML file:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
```

Always call after the DOM loads (or at end of body):
```javascript
lucide.createIcons();
```

### Icon Reference Table

| Context | Lucide Icon | Usage |
|---------|------------|-------|
| Logo | `code-2` | `<i data-lucide="code-2">` |
| Learn section | `book-open` | Nav link |
| Roadmap | `map` | Nav link |
| Community | `users` | Nav link |
| Tools | `wrench` | Nav link |
| AI Reality | `alert-triangle` | Nav link (amber) |
| CS Basics | `cpu` | Section icon |
| Terminal | `terminal` | Section icon |
| C++ | `code` | Language track |
| Java | `coffee` | Language track |
| Python | `sparkles` | Language track |
| DSA | `brain` | Critical section |
| HTML/CSS | `globe` | Web track |
| JavaScript | `zap` | Web track |
| React | `atom` | Framework |
| Node.js | `server` | Backend |
| Database | `database` | DB section |
| DevOps | `cloud` | Cloud section |
| System Design | `layout-dashboard` | Advanced |
| AI Tools | `bot` | Future skills |
| GitHub | `github` | Community |
| Discord | `message-square` | Community |
| Terms | `file-text` | Legal |
| Privacy | `lock` | Legal |
| Cookie | `cookie` | Legal |
| Sun/Moon | `sun` / `moon` | Theme toggle |
| Arrow right | `arrow-right` | CTA buttons |
| Arrow up-right | `arrow-up-right` | External links |
| Rocket | `rocket` | Start CTA |
| Check circle | `check-circle` | Progress |
| Git branch | `git-branch` | Fork notes |
| Clock | `clock` | Time estimates |
| Book | `book` | Lesson count |
| Shield | `shield` | Community rules |
| Star | `star` | Beginner status |
| Mail | `mail` | Contact |
| Info | `info` | About |
| Folder | `folder-open` | Projects |
| Settings | `settings` | VSCode/config |

---

## QUICK REFERENCE CHEATSHEET (Updated v2.0)

| What | Where | Claude Prompt Starter |
|------|-------|----------------------|
| New lesson page | `learn/[category]/[name].html` | "Write a lesson on X for Indian beginners. Use Lucide icons..." |
| New C++ lesson | `learn/cpp/[topic].html` | "Write C++ lesson on X with Hinglish explanations..." |
| New Java lesson | `learn/java/[topic].html` | "Write Java lesson on X with OOP focus..." |
| New Python lesson | `learn/python/[topic].html` | "Write Python lesson on X for beginners..." |
| New DSA lesson | `learn/dsa/[topic].html` | "Write DSA lesson on X with time complexity analysis..." |
| System Design lesson | `learn/system-design/[topic].html` | "Write system design lesson on X with Indian company examples..." |
| Homepage update | `index.html` | "Update homepage to add [feature], use Lucide CDN..." |
| AI content | `ai-reality/*.html` | "Write honest AI reality content about [topic] for 2026..." |
| Legal page | `legal/*.html` | "Write [terms/privacy] for an Indian ed-tech platform, © 2026 Coodley | [https://raunakkarn555.github.io/coodley](https://raunakkarn555.github.io/coodley)..." |
| CSS update | `assets/css/global.css` | "Add CSS variables for the DSA section (red theme)..." |
| Footer update | `index.html` footer section | "Update footer to add [new section] links..." |
| Donate page | `donate.html` | "Create a donation/support page for Coodley..." |

---

*Guide Version: 2.0 — Updated: 2026*
*Platform: Coodley | © 2026 Coodley | [https://raunakkarn555.github.io/coodley](https://raunakkarn555.github.io/coodley)*

*This guide grows with the platform. After adding 5+ new pages, prompt Claude:*
*"Update my Coodley platform development guide to reflect these new additions: [list them]"*
