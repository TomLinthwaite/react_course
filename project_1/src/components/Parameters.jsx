import { useParams } from "react-router-dom"

function Parameters() {

	let { param_1, param_2 } = useParams()

	return (
		<div className="react-component">
			<h2>Use Parameters</h2>
			<p>Parameter 1: {param_1}</p>
			<p>Parameter 2: {param_2}</p>
			<p>Result: {parseInt(param_1) + parseInt(param_2)}</p>
		</div>
	)
}

export default Parameters