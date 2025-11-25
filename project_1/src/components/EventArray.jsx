import { useState } from "react"

const EventArray = () => {

	let [counter, setCounter] = useState(0)
	let [numbers, setData] = useState([])

	let event_handler = () => {
		setCounter(counter + 1)
		let new_numbers = [...numbers]
		new_numbers.push(counter)
		setData(new_numbers)
	}

	var numbers_string = numbers.join(", ")

	if (numbers.length == 0) {
		numbers_string = "-"
	}

	return (
		<div className="react-component">
			<h2>Event Handling with Arrays</h2>
			<p>Numbers: {numbers_string}</p>
			<input type="button" value="Add to collection" onClick={event_handler} />
		</div>
	)
}

export default EventArray