import EmployeeTableRow from "./EmployeeTableRow.jsx"

export default function EmployeeTable(props) {
	let employees = props.employees
	let taxFunction = props.taxFunction
	return (
		<table>
			<thead>
				<tr>
				<th>Name</th>
				<th>Department</th>
				<th>Salary</th>
				<th>Tax</th>
				<th>Tax %</th>
				</tr>
			</thead>
			<tbody>
			{
				employees.map((emp, index) => (
					<EmployeeTableRow key={index} data={emp} taxFunction={taxFunction}/>
				))
			}
			</tbody>
		</table>
	)
}