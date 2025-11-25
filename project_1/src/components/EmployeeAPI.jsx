import { useState }	from "react"

function EmployeeAPI() {
	let api_urls = {
		"departments": "http://localhost:3000/department",
		"employees": "http://localhost:3000/employees"
	}
	let [employee_data, setEmployeeData] = useState([])
	let [department_data, setDepartmentData] = useState([])

	function fetchEmployeeData(department_id) {
		let obj = fetch(api_urls["employees"])
		obj.then((response) => {
			let data_promise = response.json()
			data_promise.then((data) => (
				data = data.filter((emp) => emp.deptid == department_id),
				setEmployeeData(data)
			))
		})
	}

	function fetchDepartmentData() {
		let obj = fetch(api_urls["departments"])
		obj.then((response) => {
			let data_promise = response.json()
			data_promise.then((data) => setDepartmentData(data))
		})
	}

	function generateDepartmentTable(data) {
		if (data.length == 0) {
			return <p>No departments loaded.</p>
		}

		return (
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Location</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{
						data.map((dept, index) => (
							<tr key={index}>
								<td>{dept.id}</td>
								<td>{dept.deptname}</td>
								<td>{dept.location}</td>
								<td>
									<input type="button" value="Fetch employees" onClick={() => fetchEmployeeData(dept.id)} />
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		)
	}

	function generateEmployeeTable(data) {
		if (data.length == 0) {
			return <p>No employess selected.</p>
		}

		return (
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Employee No.</th>
						<th>Name</th>
						<th>Department</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					{
						data.map((emp, index) => (
							<tr key={index}>
								<td>{emp.id}</td>
								<td>{emp.empno}</td>
								<td>{emp.name}</td>
								<td>{emp.deptid}</td>
								<td>{emp.salary}</td>
							</tr>
						))
					}
				</tbody>
			</table>
		)
	}

	return (
		<div className="react-component">
			<h2>Employee API Component</h2>
			<input type="button" value="Fetch departments" onClick={fetchDepartmentData} />
			<br />
			<h3>Departments</h3>
			{generateDepartmentTable(department_data)}
			<br />
			<h3>Employees in selected department</h3>
			{generateEmployeeTable(employee_data)}
		</div>
	)
}

export default EmployeeAPI