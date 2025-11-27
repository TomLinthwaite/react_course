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

---

#### Day 3 - React Router & Navigation

**React Router Setup:**
```bash
npm install react-router-dom
```

**Basic Routing Structure:**
```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Navbar />  {/* Visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />  {/* 404 fallback */}
      </Routes>
    </BrowserRouter>
  )
}
```

**Key Routing Concepts:**
- **BrowserRouter**: Wraps entire app to enable routing
- **Routes**: Container for all route definitions
- **Route**: Maps URL path to component
- **Single Page Application**: URL changes but page never reloads - React swaps components

**Navigation with Links:**
```javascript
import { Link, NavLink } from "react-router-dom"

// Basic link
<Link to="/about">About</Link>

// NavLink automatically adds "active" class to current page
<NavLink to="/home">Home</NavLink>
```

**URL Parameters (useParams):**
```javascript
import { useParams } from "react-router-dom"

function EmployeeDetails() {
  let { empid } = useParams()  // Extract parameter from URL
  
  useEffect(() => {
    fetchEmployee(empid)
  }, [empid])  // Re-fetch when parameter changes
  
  return <div>Employee ID: {empid}</div>
}

// Route definition
<Route path="/employee/:empid" element={<EmployeeDetails />} />

// Link to parameterized route
<Link to={`/employee/${employee.id}`}>View Details</Link>
```

**Multiple Parameters:**
```javascript
function Parameters() {
  let { param_1, param_2 } = useParams()
  return <p>Sum: {parseInt(param_1) + parseInt(param_2)}</p>
}

// Route: /parameters/:param_1/:param_2
<Link to="/parameters/5/10">Calculate</Link>
```

**Programmatic Navigation:**
```javascript
import { useNavigate } from "react-router-dom"

function Component() {
  let navigate = useNavigate()
  
  const handleClick = () => {
    navigate('/employee/123')  // Navigate programmatically
  }
  
  return <button onClick={handleClick}>Go to Employee</button>
}
```

**Master-Detail Pattern:**
```javascript
// Master List - displays all items with links
function DepartmentList() {
  let [departments, setDepartments] = useState([])
  
  return (
    <ul>
      {departments.map(dept => (
        <li key={dept.id}>
          <Link to={`/employee_list/${dept.id}`}>
            {dept.deptname}
          </Link>
        </li>
      ))}
    </ul>
  )
}

// Detail View - shows items filtered by parameter
function EmployeeList() {
  let { deptid } = useParams()
  let [employees, setEmployees] = useState([])
  
  useEffect(() => {
    fetch('/api/employees')
      .then(res => res.json())
      .then(data => {
        let filtered = data.filter(emp => emp.deptid == deptid)
        setEmployees(filtered)
      })
  }, [deptid])  // Re-filter when department changes
  
  return (
    <ul>
      {employees.map(emp => (
        <li key={emp.id}>
          <Link to={`/employee_details/${emp.id}`}>
            {emp.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
```

**Common Routing Patterns:**
1. **Static routes**: `/about`, `/home`
2. **Parameterized routes**: `/employee/:id`, `/product/:category/:id`
3. **Optional parameters**: Pass `-1` or empty value for "show all"
4. **Nested navigation**: Department → Employees → Employee Details
5. **404 fallback**: `<Route path="*" element={<PageNotFound />} />`

**Important useEffect Patterns with Routing:**
```javascript
// ❌ WRONG - infinite loop, no dependency array
useEffect(() => {
  fetchData()
})

// ✅ CORRECT - runs once on mount
useEffect(() => {
  fetchData()
}, [])

// ✅ CORRECT - runs when URL parameter changes
useEffect(() => {
  fetchData(paramId)
}, [paramId])
```

**Routing Best Practices:**
- Place `BrowserRouter` at root level in `App.jsx`
- Keep `Navbar` outside `Routes` to show on all pages
- Use `NavLink` for navigation menus (shows active state)
- Use `Link` for general navigation
- Always add dependency arrays to `useEffect` with parameters
- Use `key` prop on list items (place on `<li>`, not `<Link>`)
- Handle loading states while fetching data
- Provide fallback UI when data is not found