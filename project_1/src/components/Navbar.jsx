import { NavLink } from "react-router-dom"

function Navbar() {
	return (
		<nav className="navbar">
		<NavLink to="/">Home</NavLink>
		<NavLink to="/about">About</NavLink>
		<NavLink to="/employees">Employees</NavLink>
		<NavLink to="/counter">Counter</NavLink>
		<NavLink to="/array">Array Demo</NavLink>
		<NavLink to="/input">Input Demo</NavLink>
		<NavLink to="/todo">Todo List</NavLink>
		<NavLink to="/promise">API Fetch</NavLink>
		<NavLink to="/api">Employee API</NavLink>
		<NavLink to="/parent">Parent/Child</NavLink>
		<NavLink to="/parameters/5/10">Parameters</NavLink>
		</nav>
	)
}

export default Navbar