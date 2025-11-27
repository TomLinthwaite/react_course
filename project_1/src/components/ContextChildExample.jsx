import { useContext } from "react"
import AppContext from "./Context"

function ContextChildExample(props) {

	let context = useContext(AppContext)
	let { count, setCount } = context["count_state"]
	let type = props.type

	function handle_click() {
		let addition = (type === "add") ? 1 : -1
		setCount(count + addition)
	}

	return (
		<div className="react-component">
			<h2>Context Child Example Component</h2>
			<input type="button" value="Click Me" className={(type === "add") ? "" : "button-remove"} onClick={handle_click} />
		</div>
	)
}

export default ContextChildExample