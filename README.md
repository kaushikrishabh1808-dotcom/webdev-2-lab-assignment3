# Student Scoreboard
**Web Dev II · Unit 3 · Assignment 3**

A React + Vite student scoreboard with live score editing, pass/fail status, and dynamic stats.

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## Project Structure

```
student-scoreboard/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx          ← root state & layout
    ├── index.css        ← all styles (pure CSS)
    └── components/
        ├── Header.jsx
        ├── StatsBar.jsx
        ├── StudentTable.jsx
        ├── StudentRow.jsx
        ├── AddStudentForm.jsx
        └── Toast.jsx
```

---

## Features
- **View students** in a styled table with rank, name, score, and status
- **Edit scores** inline — bar and badge update instantly
- **Add students** via form with live score preview and validation
- **Pass / Fail** — green badge for ≥ 40, red badge for < 40
- **Stats bar** — total, passed, failed, average score
- **Toast notification** on student add
