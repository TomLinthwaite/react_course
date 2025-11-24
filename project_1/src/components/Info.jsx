function taxRate(salary) {
	if (salary > 2000) {
		return 0.21
	}
	return 0.15
}

function Info(props) {
	let name = props.ename
	let salary = Number(props.salary)
	let tax = salary * taxRate()
	
	return (
		<div class="employee_info">
			<div class="employee_info_field">
				<div>Name</div>
				<div>{name}</div>
			</div>
			<div class="employee_info_field">
				<div>Salary</div>
				<div>£ {salary.toLocaleString()}</div>
			</div>
			<div class="employee_info_field">
				<div>Tax</div>
				<div>£ {tax.toLocaleString()}</div>
			</div>
		</div>
	)
}

export default Info