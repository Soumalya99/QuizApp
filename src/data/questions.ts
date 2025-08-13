import type { Question } from "../types/types";

export const QUESTIONS : Question[] = [
  {
    "question": "In React, which hook is used to perform side effects such as data fetching or subscriptions?",
    "options": ["useState", "useReducer", "useEffect", "useCallback"],
    "correct": 2
  },
  {
    "question": "In React, why should you use keys in lists?",
    "options": [
      "To improve rendering performance and correctly identify changed elements",
      "To style list items uniquely",
      "To bind events to each element",
      "To prevent memory leaks"
    ],
    "correct": 0
  },
  {
    "question": "Which of the following statements about React's virtual DOM is true?",
    "options": [
      "It directly manipulates the browser DOM without diffing",
      "It is a lightweight copy of the actual DOM used for efficient updates",
      "It removes the need for reconciliation",
      "It is part of HTML5 specifications"
    ],
    "correct": 1
  },
  {
    "question": "What does 'lifting state up' mean in React?",
    "options": [
      "Moving state from child components to a common ancestor",
      "Using Redux for state management",
      "Moving CSS styles to the root component",
      "Creating global variables for all components"
    ],
    "correct": 0
  },
  {
    "question": "In Node.js, which method is used to import ES modules?",
    "options": ["require()", "import", "module.exports", "exports.default"],
    "correct": 1
  },
  {
    "question": "Which HTTP status code represents 'Created'?",
    "options": ["200", "201", "202", "204"],
    "correct": 1
  },
  {
    "question": "Which of the following best describes middleware in Express.js?",
    "options": [
      "Functions that have access to the request, response, and next middleware in the application’s request-response cycle",
      "Functions that execute only once when the server starts",
      "Built-in Node.js modules for HTTP handling",
      "A tool for creating React components"
    ],
    "correct": 0
  },
  {
    "question": "In MongoDB, which method is used to update multiple documents?",
    "options": ["updateOne()", "updateMany()", "modifyAll()", "replaceMany()"],
    "correct": 1
  },
  {
    "question": "In SQL, which keyword is used to remove duplicate rows from a result set?",
    "options": ["DISTINCT", "GROUP BY", "UNIQUE", "FILTER"],
    "correct": 0
  },
  {
    "question": "What is the purpose of CORS in backend applications?",
    "options": [
      "To enable or restrict resource sharing between different origins",
      "To cache static files",
      "To compress API responses",
      "To encrypt API traffic"
    ],
    "correct": 0
  },
  {
    "question": "Which of the following is NOT a NoSQL database?",
    "options": ["MongoDB", "Cassandra", "PostgreSQL", "Redis"],
    "correct": 2
  },
  {
    "question": "In React, which hook allows you to memoize a function to avoid unnecessary re-renders?",
    "options": ["useMemo", "useReducer", "useCallback", "useRef"],
    "correct": 2
  },
  {
    "question": "In Node.js, which of these modules is used for handling file operations?",
    "options": ["fs", "http", "path", "events"],
    "correct": 0
  },
  {
    "question": "What is the time complexity of inserting a new element into a hash table in average case?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    "correct": 0
  },
  {
    "question": "In microservices architecture, which of the following patterns is used to manage distributed transactions?",
    "options": ["Saga Pattern", "Observer Pattern", "MVC Pattern", "Decorator Pattern"],
    "correct": 0
  }
]

