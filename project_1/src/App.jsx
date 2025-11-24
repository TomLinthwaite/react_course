import "./App.css"
import EmployeeTable from "./components/EmployeeTable.jsx"
import { taxRate } from "./library/financial.jsx"

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
			<h1>Employee Information Systems</h1>
      <EmployeeTable employees={data} taxFunction={taxRate}/>
    </>
  )
}

export default App
