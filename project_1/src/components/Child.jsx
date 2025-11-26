import { useRef } from "react";

function Child({ onSendMessage}) {
	let input_ref = useRef()

	function send_message() {
		onSendMessage(input_ref.current.value)
		input_ref.current.focus()
		input_ref.current.value = ""
	}

	return (
		<div className="sub-component">
			<h4>Child Component</h4>
			<input type="text" placeholder="Type a message..." ref={input_ref} />
			<input type="button" value="Send message" onClick={send_message} />
		</div>
	)
}

export default Child;