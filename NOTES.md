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

---

#### Day 2 - Advanced React Concepts

**Working with Arrays (Spread Operator):**
```javascript
let new_array = [...old_array]  // Creates a copy
new_array.push(item)  // Modify the copy
setState(new_array)  // Update state with new array
```
- Use spread operator `...` to create array copies
- React requires new arrays/objects for state updates (not mutations)
- `array.splice(index, 1)` removes an item at specific index

**useRef Hook:**
```javascript
import { useRef } from "react"
let input_ref = useRef(null)

<input type="text" ref={input_ref} />
input_ref.current.value  // Access the input value
```
- Creates a reference to DOM elements
- Access with `.current` property
- Useful for form inputs and direct DOM manipulation
- Does not trigger re-renders when changed

**Rendering Lists with Keys:**
```javascript
{items.map((item, index) => (
  <Component key={index} data={item} />
))}
```
- Each list item needs a unique `key` prop
- Helps React track which items changed/added/removed
- Use unique IDs when available, otherwise use index
- Keys must be unique among siblings

**Asynchronous Data Fetching (Promises):**
```javascript
fetch(url)
  .then(response => response.json())
  .then(data => setData(data))
  .catch(error => console.error(error))
```
- `fetch()` returns a Promise for HTTP requests
- `.then()` chains handle successful responses
- `.catch()` handles errors
- `response.json()` parses JSON response

**useEffect Hook:**
```javascript
import { useEffect } from "react"

useEffect(() => {
  fetchData()
}, [])  // Dependency array
```
- Runs side effects (data fetching, subscriptions, etc.)
- Empty array `[]` = runs once on mount
- `[variable]` = runs when variable changes
- No array = runs on every render (avoid this)

**API Integration Patterns:**
- Use `useEffect` with empty dependency array to fetch data on mount
- Filter data with `.filter()` method
- POST requests: include method, headers, and body
- DELETE requests: append ID to URL and use DELETE method
- Refresh data after mutations by calling fetch functions

**Parent-Child Communication:**
```javascript
// Parent passes function as prop
<Child onSendMessage={handleMessage} />

// Child calls the function
function Child({ onSendMessage }) {
  onSendMessage(data)  // Sends data to parent
}
```
- Props flow down (parent → child)
- Callbacks flow up (child → parent)
- Parent passes functions to child via props
- Child invokes those functions to send data back

**CSS Specificity:**
- More specific selectors override less specific ones
- `tr.selectable` targets `<tr>` with class `selectable`
- `.selectable tr` targets `<tr>` inside `.selectable` parent
- Use specific selectors instead of `!important` when possible