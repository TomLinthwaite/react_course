import "./App.css"
import { taxRate } from "./library/financial.jsx"
import EmployeeTable from "./components/EmployeeTable.jsx"
import EventCounter from "./components/EventCounter.jsx"
import EventArray from "./components/EventArray.jsx"
import EventInput from "./components/EventInput.jsx"
import TodoList from "./components/TodoList.jsx"
import Promise from "./components/Promise.jsx"

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
    <>
      <Promise />
      <TodoList />
      <EventInput />
      <EventArray />
      <EventCounter />
      <div className="react-component">
        <h2>Employee Information Systems</h2>
        <EmployeeTable employees={data} taxFunction={taxRate} />
      </div>
    </>
  )
}

export default App
