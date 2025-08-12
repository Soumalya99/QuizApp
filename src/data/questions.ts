import type { Question } from "../types/types";

export const QUESTIONS : Question[] = [
  {
    "question": "In React, what is the primary purpose of the useEffect hook?",
    "options": [
      "To directly manipulate the DOM",
      "To perform side effects in function components",
      "To define new state variables",
      "To handle form submissions"
    ],
    "correct": 1
  },
  {
    "question": "Which of the following is true about React keys in lists?",
    "options": [
      "Keys must be unique globally across the entire app",
      "Keys help React identify which items have changed",
      "Keys are only needed for arrays longer than 5 items",
      "Keys can be duplicated as long as they are numbers"
    ],
    "correct": 1
  },
  {
    "question": "In Node.js, which module is used to create a server?",
    "options": [
      "http",
      "fs",
      "url",
      "net"
    ],
    "correct": 0
  },
  {
    "question": "In Express.js, which method is used to handle HTTP POST requests?",
    "options": [
      "app.post()",
      "app.get()",
      "app.send()",
      "app.use()"
    ],
    "correct": 0
  },
  {
    "question": "In React, what is the correct way to update state based on the previous state?",
    "options": [
      "setCount(count + 1)",
      "setCount(prev => prev + 1)",
      "count++",
      "count = count + 1"
    ],
    "correct": 1
  },
  {
    "question": "Which HTTP status code indicates that a resource was not found?",
    "options": [
      "200",
      "301",
      "404",
      "500"
    ],
    "correct": 2
  },
  {
    "question": "In React, which hook is used to create state variables in functional components?",
    "options": [
      "useState",
      "useEffect",
      "useReducer",
      "useMemo"
    ],
    "correct": 0
  },
  {
    "question": "Which of these is a NoSQL database?",
    "options": [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite"
    ],
    "correct": 2
  },
  {
    "question": "In React, props are:",
    "options": [
      "Mutable data passed between components",
      "Immutable data passed to components",
      "Functions for updating state",
      "Variables defined only in class components"
    ],
    "correct": 1
  },
  {
    "question": "Which of the following is a valid HTTP method?",
    "options": [
      "SEND",
      "FETCH",
      "PATCH",
      "RUN"
    ],
    "correct": 2
  }
]
