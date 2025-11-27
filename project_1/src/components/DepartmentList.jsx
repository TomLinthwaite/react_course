import { useState, useEffect }	from "react"
import { Link } from "react-router-dom"

function DepartmentList() {

	let [department_data, setDepartmentData] = useState([])

	useEffect(fetchDepartmentData, [])

	function fetchDepartmentData() {
		let obj = fetch("http://localhost:3000/department")
		obj.then((response) => {
			response.json().then((data) => setDepartmentData(data))
		})
	}

	return (
		<div className="react-component">
			<h2>Department List Component</h2>
			<ul class="link-item">
				{
					department_data.map((dept) => (
						<li key={dept.id}>
							<Link to={`/employee_list/${dept.id}`}>
								<b>{dept.deptname}</b> - {dept.location}
							</Link>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default DepartmentList