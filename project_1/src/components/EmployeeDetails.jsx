import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function EmployeeDetails(props) {

	let tax_rate_function = props.taxFunction
	let [selected_employee, setSelectedEmployee] = useState(null)
	let { empid } = useParams()

	useEffect(fetchEmployeeData, [empid])

	function fetchEmployeeData() {
		let obj = fetch("http://localhost:3000/employees")
		obj.then((response) => {
			response.json().then((data) => {
				if (empid >= 0) {
					data = data.filter((emp) => emp.id == empid)
				}

				if (data.length == 0) {
					setSelectedEmployee(null)
					return
				}

				setSelectedEmployee(data[0])
			})
		})
	}

	return (
		<div className="react-component">
			<h2>Employee Details Component</h2>
			{selected_employee ? (
				<div>
					<p><b>Name:</b> {selected_employee.name}</p>
					<p><b>Salary:</b> £ {selected_employee.salary.toLocaleString()}</p>
					<p><b>Department:</b> {selected_employee.dept}</p>
					<p><b>Tax Bracket:</b> {tax_rate_function(selected_employee.salary) * 100}%</p>
					<p><b>Tax Amount:</b> £ {(selected_employee.salary * tax_rate_function(selected_employee.salary)).toLocaleString()}</p>
				</div>
			) : (
				<p>Employee not found.</p>
			)}
		</div>
	)
}

export default EmployeeDetails