function taxRate(salary) {
	if (salary > 20000) {
		return 0.21
	}
	return 0.15
}

export { taxRate }