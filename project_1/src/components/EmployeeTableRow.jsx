export default function EmployeeTableRow(props) {
	let employee_data = props.data
	let taxFunction = props.taxFunction

	let name = employee_data.name
	let salary = Number(employee_data.salary)
	let department = employee_data.department
	let tax_rate = taxFunction(salary)
	let tax = salary * tax_rate
	
	return (
		<tr>
			<td>{name}</td>
			<td>{department}</td>
			<td>£ {salary.toLocaleString()}</td>
			<td>£ {tax.toLocaleString()}</td>
			<td>{tax_rate * 100}%</td>
		</tr>
	)
}