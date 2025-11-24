### Training Notes

#### Day 1 - React Fundamentals & Setup

**Core Concepts:**

A React application is a collection of components (or objects).
Uses the single page application principle which refreshes components independently.

**Key elements:**
- Variable (properties/fields/attributes etc...) stores data
- Function contains the code to execute
- Event created by user or browser (and others...)

**Setting up a React project:**
1. Ensure node is installed
2. Run command: `npm create vite@latest [app_name]`
3. Navigate to project: `cd [app_name]`
4. Install dependencies: `npm install`
5. Start dev server: `npm run dev`
6. Open `http://localhost:5173` in browser to view application

**React app folder structure:**
- src 
    - App.jsx - contains first component
    - main.jsx - entry point
    - App.css - styling

**Components and Props:**
- Components accept `props` to pass data from parent to child
- Props are read-only and flow downward
- Access props using `props.propertyName`
- Can pass both data and functions as props

**State Management with useState:**
```javascript
import { useState } from "react"
let [count, setCount] = useState(0)  // [value, setter function]
```
- Creates reactive state variables that trigger re-renders
- Use setter function to update state

**Event Handling:**
- Use `onClick={eventHandler}` to attach event handlers
- Handler functions execute when user interacts with elements

**Formatting & Best Practices:**
- Use `toLocaleString()` to format numbers with commas
- Convert strings to numbers: `Number(value)`
- Use `className` instead of `class` in JSX
- Import CSS: `import './App.css'`