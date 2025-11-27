import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import { taxRate } from "./library/financial.jsx"
import EmployeeTable from "./components/EmployeeTable.jsx"
import EventCounter from "./components/EventCounter.jsx"
import EventArray from "./components/EventArray.jsx"
import EventInput from "./components/EventInput.jsx"
import TodoList from "./components/TodoList.jsx"
import Promise from "./components/Promise.jsx"
import EmployeeAPI from "./components/EmployeeAPI.jsx"
import Parent from "./components/Parent.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Navbar from "./components/Navbar.jsx"
import PageNotFound from "./components/PageNotFound.jsx"
import Parameters from "./components/Parameters.jsx"
import EmployeeDetails from "./components/EmployeeDetails.jsx"
import EmployeeList from "./components/EmployeeList.jsx"
import DepartmentList from "./components/DepartmentList.jsx"

function App() {
  let data = [
    {
      name: "Alex",
      salary: 32000,
      department: "Engineering"
    },
    {
      name: "Sam",
      salary: 25000,
      department: "Marketing" 
    },
    {
      name: "Jordan",
      salary: 18500,
      department: "Sales"
    },
    {
      name: "Taylor",
      salary: 22000,
      department: "HR"
    },
    {
      name: "Morgan",
      salary: 17000,
      department: "Support"
    }
  ]

  return (
    <BrowserRouter>
      <div className="app-container">
        <h1>React QA Course</h1>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/employees" element={<EmployeeTable employees={data} taxFunction={taxRate} />} />
            <Route path="/counter" element={<EventCounter />} />
            <Route path="/array" element={<EventArray />} />
            <Route path="/input" element={<EventInput />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/promise" element={<Promise />} />
            <Route path="/api" element={<EmployeeAPI />} />
            <Route path="/parent" element={<Parent />} />
            <Route path="/parameters/:param_1/:param_2" element={<Parameters />} />
            <Route path="/department_list" element={<DepartmentList />} />
            <Route path="/employee_list/:deptid" element={<EmployeeList />} />
            <Route path="/employee_details/:empid" element={<EmployeeDetails taxFunction={taxRate} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
