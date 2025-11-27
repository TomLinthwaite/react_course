import { useNavigate } from "react-router-dom"

function Home() {

	let logged_in = localStorage.getItem("logged_in")
	const navigate = useNavigate()

	function handle_login() {
		localStorage.setItem("logged_in", "true")
		navigate("/")
	}

	function handle_logout() {
		localStorage.removeItem("logged_in")
		navigate("/")
	}

	return (
		<div className="react-component">
			<h2>Home Component</h2>
			<p>You will need to log in before viewing any other pages.</p>
			{
				logged_in ?
					<input type="button" value="Log out" className="button-remove" onClick={handle_logout} /> :
					<input type="button" value="Login" onClick={handle_login} />
			}
		</div>
	)
}

export default Home