
import { useContext } from "react"
import AppContext  from "./Context"

function ContextExample() {

	let context = useContext(AppContext)
	let message = context["message"]

	return (
		<div className="react-component">
			<h2>Context Example Component</h2>
			<p>{message}</p>
		</div>
	)
}

export default ContextExample