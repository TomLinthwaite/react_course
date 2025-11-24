import EmployeeTableRow from "./EmployeeTableRow.jsx"

export default function EmployeeTable(props) {
	let employees = props.employees
	let taxFunction = props.taxFunction
	return (
		<>
		<table>
			<tr>
			<th>Name</th>
			<th>Department</th>
			<th>Salary</th>
			<th>Tax</th>
			<th>Tax %</th>
			</tr>
			{
				employees.map((emp) => (
					<EmployeeTableRow data={emp} taxFunction={taxFunction}/>
				))
			}
		</table>
		</>
	)
}