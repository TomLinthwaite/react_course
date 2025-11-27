import { useState } from "react"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
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
import AppContext from "./components/Context.jsx"
import ContextExample from "./components/ContextExample.jsx"
import ProtectedComponent from "./components/ProtectedComponent.jsx"


function Layout() {
  const [count, setCount] = useState(0)
  const context_data = {
    app_name: "React QA Course",
    message: "Welcome to the React QA Course Application! This message is provided via Context.",
    count_state: { count, setCount }
  }

  return (
    <AppContext.Provider value={context_data}>
      <div className="app-container">
        <h1>{context_data["app_name"]}</h1>
        <Navbar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </AppContext.Provider>
  )
}

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <ProtectedComponent component={About} />
        },
        {
          path: "employees",
          element: <ProtectedComponent component={() => <EmployeeTable employees={data} taxFunction={taxRate} />} />
        },
        {
          path: "counter",
          element: <ProtectedComponent component={EventCounter} />
        },
        {
          path: "array",
          element: <ProtectedComponent component={EventArray} />
        },
        {
          path: "input",
          element: <ProtectedComponent component={EventInput} />
        },
        {
          path: "todo",
          element: <ProtectedComponent component={TodoList} />
        },
        {
          path: "promise",
          element: <ProtectedComponent component={Promise} />
        },
        {
          path: "api",
          element: <ProtectedComponent component={EmployeeAPI} />
        },
        {
          path: "parent",
          element: <ProtectedComponent component={Parent} />
        },
        {
          path: "parameters/:param_1/:param_2",
          element: <ProtectedComponent component={Parameters} />
        },
        {
          path: "department_list",
          element: <ProtectedComponent component={DepartmentList} />
        },
        {
          path: "employee_list/:deptid",
          element: <ProtectedComponent component={EmployeeList} />
        },
        {
          path: "employee_details/:empid",
          element: <ProtectedComponent component={() => <EmployeeDetails taxFunction={taxRate} />} />
        },
        {
          path: "context_example",
          element: <ProtectedComponent component={ContextExample} />
        },
        {
          path: "*",
          element: <PageNotFound />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App