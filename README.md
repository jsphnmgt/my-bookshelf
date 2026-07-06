# Module 3 - Activity 3 - In-Lab Practical Quiz (100 points)

[![Made with Claude](https://img.shields.io/badge/Made_with-Claude-D97757?logo=anthropic&logoColor=white)](https://tjakoen.github.io/notes/ten-times-zero)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white)

> **This is a proctored, closed-resource lab quiz.** It pulls together
> everything in 6APSI so far: JavaScript fundamentals (Module 1), React
> (Module 2), and styling (Module 3). You have **3 hours**.

## Exam rules

During the quiz you may have open **only**:

- **GitHub** (this repository) and
- **VS Code** (or your Codespace).

You **may**:

- read **your own code** from earlier 6APSI activities,
- run `npm run dev` and `npm test` as much as you like.

You **may not**:

- use any **AI** tool (Copilot, ChatGPT, Claude, etc. - turn Copilot off),
- **search the web**, use Google, Stack Overflow, MDN, or any other site,
- talk to or message anyone.

Everything you need was covered in class. Read the requirement, recall the
concept, and write it yourself.

## How it is graded

The quiz is **100 points, fully automated**: your score is the share of the test
suite that passes, scaled to 100. Every test is independent, so you get
**partial credit** for every part you finish. Do the parts you are sure of
first, then come back to the harder ones.

```bash
npm test             # run the whole suite once; the summary shows N / N passed
npm run test:watch   # re-run automatically as you save (recommended)
```

## What you build

Eleven small parts, in any order. Each source file states its exact
requirement and shows example input -> output. **Write your code only in
`src/`**; do not edit the files in `test/`.

| # | File | Concepts (module) |
| --- | --- | --- |
| 1 | [`src/js/fundamentals.js`](src/js/fundamentals.js) | strings, arrays (`map`/`filter`/`reduce`/`find`), objects/spread, closures (M1) |
| 2 | [`src/js/library.js`](src/js/library.js) | classes, `extends`/`super`, `async`/`await`, `throw` + `try/catch` (M1) |
| 3 | [`src/components/BookCard.jsx`](src/components/BookCard.jsx) | props + conditional rendering (M2) |
| 4 | [`src/components/BookList.jsx`](src/components/BookList.jsx) | lists + `key`s + empty state (M2) |
| 5 | [`src/components/AddBookForm.jsx`](src/components/AddBookForm.jsx) | controlled inputs, a form, validation, lifting state (M2) |
| 6 | [`src/components/Bookshelf.jsx`](src/components/Bookshelf.jsx) | `useState` + events + immutable updates, tying it together (M2) |
| 7 | [`src/hooks/useReadingGoal.js`](src/hooks/useReadingGoal.js) | a custom hook (M2) |
| 8 | [`src/components/ThemeContext.jsx`](src/components/ThemeContext.jsx) | Context + `useContext` (M2) |
| 9 | [`src/components/PageTitle.jsx`](src/components/PageTitle.jsx) | `useEffect` (M2) |
| 10 | [`src/components/Pages.jsx`](src/components/Pages.jsx) | routing with React Router (M2) |
| 11 | [`src/App.jsx`](src/App.jsx) | assemble the page, semantic structure, **a real styling approach** (M2/M3) |

## Setup

1. **Use this template -> Create a new repository**, owner **`HAU-6APSI`**.
2. Name it `m3a3-<classcode>-yourname`, **Private**.
3. Open it in your Codespace (or clone and open in VS Code), then:

```bash
npm install          # installs React, React Router, and the test tools
npm run dev          # see your app at http://localhost:5173
npm test             # run the graded checks
```

Fill in every field in [`student.json`](student.json) (1 point).

## Submit

Pushing is submitting. Push **before time is called**:

```bash
git add -A
git commit -m "✅ Module 3 Activity 3 - lab quiz"
git push
```

Then open the **Actions** tab and confirm the **N / N tests passed** summary on
the latest run.

---
📚 **These materials were authored by [tjakoen](https://github.com/tjakoen), built with Claude.** I use AI in the open, and I expect you to use it to learn the material, not to skip the learning. [How I actually work with AI →](https://tjakoen.github.io/notes/ten-times-zero)
