import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function ProtectedComponent({ component: Component }) {
	const navigate = useNavigate()
	const logged_in = localStorage.getItem("logged_in")

	useEffect(() => {
		if (!logged_in) {
			navigate("/")
		}
	}, [logged_in, navigate])

	if (!logged_in) {
		return (
			<div className="react-component">
				<h2>Access Denied - Please Log In</h2>
			</div>
		)
	}

	return <Component />
}

export default ProtectedComponent