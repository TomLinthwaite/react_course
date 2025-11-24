import "./App.css"
import { taxRate } from "./library/financial.jsx"
import EmployeeTable from "./components/EmployeeTable.jsx"
import EventCounter from "./components/EventCounter.jsx"

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
		  <div className="react-component">
        <h2>Employee Information Systems</h2>
        <EmployeeTable employees={data} taxFunction={taxRate}/>
      </div>
      <EventCounter />
    </>
  )
}

export default App
