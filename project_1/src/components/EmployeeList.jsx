import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

function EmployeeList() {

	let { deptid } = useParams()
	let [emplotee_data, setEmployeeData] = useState([])

	useEffect(fetchEmployeeData, [deptid])

	function fetchEmployeeData() {
		let obj = fetch("http://localhost:3000/employees")
		obj.then((response) => {
			response.json().then((data) => {
				if (deptid >= 0) {
					data = data.filter((emp) => emp.deptid == deptid)
				}
				setEmployeeData(data)
			})
		})
	}

	return (
		<div className="react-component">
			<h2>Employee List Component</h2>
			<ul class="link-item">
			{
				emplotee_data.map((emp) => (
					<li>
						<Link to={`/employee_details/${emp.id}`} key={emp.id}>{emp.name}</Link>
					</li>
				))
			}
			</ul>
		</div>
	)
}

export default EmployeeList