import { useRef } from "react"

function EventInput(props) {
	let ref_text_input_a = useRef(null)
	let ref_text_input_b = useRef(null)
	let ref_text_input_result = useRef(null)

	const event_calculate = (event) => {
		let a = parseInt(ref_text_input_a.current.value)
		let b = parseInt(ref_text_input_b.current.value)
		let result = a + b
		ref_text_input_result.current.value = result
	}

	const event_reset = (event) => {
		ref_text_input_a.current.value = ""
		ref_text_input_b.current.value = ""
		ref_text_input_result.current.value = ""
	}

	return (
		<div className="react-component">
			<h2>Event Input</h2>
			<input type="text" ref={ref_text_input_a} placeholder="input number" />
			<input type="text" ref={ref_text_input_b} placeholder="input number" />
			<div className="h-group">
				<input type="button" value="Calculate" onClick={event_calculate} />
				<input type="button" value="Reset" onClick={event_reset} className="button-clear" />
			</div>
			<input type="text" ref={ref_text_input_result} placeholder="-" readOnly />
		</div>
	)
}

export default EventInput