import { useState }	from "react"

function EmployeeAPI() {
	let api_urls = {
		"departments": "http://localhost:3000/department",
		"employees": "http://localhost:3000/employees"
	}
	let [employee_data, setEmployeeData] = useState([])
	let [department_data, setDepartmentData] = useState([])
	let [department_name, setDepartmentName] = useState("")

    function fetchEmployeeData(department_id, department_name) {
        fetch(api_urls["employees"]).then((response) => {
            response.json().then((data) => {
                data = data.filter((emp) => emp.deptid == department_id)
                setEmployeeData(data)
                setDepartmentName(department_name)
            })
        })
    }

	function fetchDepartmentData() {
		let obj = fetch(api_urls["departments"])
		obj.then((response) => {
			response.json().then((data) => setDepartmentData(data))
		})
	}

	function addDepartmentData() {
		let new_department = {
			"deptname": "New Dept ",
			"location": "Location "
		}

		fetch(api_urls["departments"], {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(new_department)
		})
		.then((response) => {
			if (response.ok) {
				fetchDepartmentData() // Refresh department list
			}
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
									<input type="button" value="Fetch employees" onClick={() => fetchEmployeeData(dept.id, dept.deptname)} />
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
			return (
				<>
					<h3>Employees</h3>
					<p>No employess selected.</p>
				</>
			)
		}

		return (
			<>
			<h3>Employees in {department_name}</h3>
			<table>
				<thead>
					<tr>
						{/* <th>ID</th> */}
						<th>Employee No.</th>
						<th>Name</th>
						{/* <th>Department</th> */}
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					{
						data.map((emp, index) => (
							<tr key={index}>
								{/* <td>{emp.id}</td> */}
								<td>{emp.empno}</td>
								<td>{emp.name}</td>
								{/* <td>{emp.deptid}</td> */}
								<td>£ {parseInt(emp.salary).toLocaleString()}</td>
							</tr>
						))
					}
				</tbody>
			</table>
			</>
		)
	}

	return (
		<div className="react-component">
			<h2>Employee API Component</h2>
			<div className="h-group">
				<input type="button" value="Fetch departments" onClick={fetchDepartmentData} />
				<input type="button" value="Add department" onClick={addDepartmentData} className="button-option" />
			</div>
			<br />
			<h3>Departments</h3>
			{generateDepartmentTable(department_data)}
			<br />
			{generateEmployeeTable(employee_data)}
		</div>
	)
}

export default EmployeeAPI