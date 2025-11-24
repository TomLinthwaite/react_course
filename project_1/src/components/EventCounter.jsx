import { useState } from "react"

const EventCounter = () => {
	let [count, setCount] = useState(0)
	let event_handler = () => setCount(count + 1)

	return (
		<div className="react-component">
				<h2>Event Handling Example</h2>
				<p>Button clicked {count} times.</p>
				<input type="button" value="Click me!" onClick={event_handler} />
		</div>
	)
}

export default EventCounter