import { useState } from "react"
import Child from "./Child.jsx"

function Parent() {
	const [message, setMessage] = useState("")

	function handleMessageFromChild(message) {
		setMessage(message)
	}

	return (
		<div className="react-component">
			<h2>Parent Component</h2>
			<p>Message from child: {message}</p>
			<Child onSendMessage={handleMessageFromChild} />
		</div>
	)
}

export default Parent