
import { useContext } from "react"
import AppContext  from "./Context"
import ContextChildExample from "./ContextChildExample.jsx"

function ContextExample() {

	let context = useContext(AppContext)
	let message = context["message"]
	let { count, setCount } = context["count_state"]

	function handle_click() {
		setCount(count + 1)
	}

	return (
		<div className="react-component">
			<h2>Context Example Component</h2>
			<p>{message}</p>
			<p>{count}</p>
			<input type="button" value="Click Me" onClick={handle_click} />
			<br/>
			<ContextChildExample type="add"/>
			<ContextChildExample type="subtract"/>
		</div>
	)
}

export default ContextExample