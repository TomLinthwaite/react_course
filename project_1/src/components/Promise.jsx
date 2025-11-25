import { useState } from "react"

function Promise() {

	let api_url = "https://jsonplaceholder.typicode.com/todos/"
	let [api_data, setApiData] = useState([])

	function process_response(response) {
		// Callback function to handle the response
		let data_promise = response.json()  // Parse JSON data
		data_promise.then((data) => setApiData(data))
	}

	function get_data() {
		let obj = fetch(api_url) // Does not send the request yet
		obj.then(process_response) // Sends the request
	}

	function generate_table_header() {
		if (api_data.length == 0) {
			return <></>
		}
		
		let first_item = api_data[0]
		let headers = Object.keys(first_item)
		return (
			<tr>
				{
					headers.map((header, index) => 
						<th key={index}>{header}</th>
				)}
			</tr>
		)
	}

	function generate_table_rows(data) {
		if (data.length == 0) {
			return <></>
		}

		// let display_data = data.slice(0, 5) // First 5 rows
		let display_data = [] // Get 5 random items to display
		let used_indices = new Set()
		while (display_data.length < 5) {
			let rand_index = Math.floor(Math.random() * data.length)
			if (!used_indices.has(rand_index)) {
				used_indices.add(rand_index)
				display_data.push(data[rand_index])
			}
		}

		return display_data.map((item, row_index) => (
			<tr key={row_index}>
				{
					Object.values(item).map((value, col_index) => 
						<td key={col_index}>{value.toString()}</td>
				)}
			</tr>
		))
	}

	return (
		<div className="react-component">
			<h2>Promise Component</h2>
			<input type="button" value="Fetch Data" onClick={get_data} />
			<table>
				<thead>
					{generate_table_header()}
				</thead>
				<tbody>
					{generate_table_rows(api_data)}
				</tbody>
			</table>
		</div>
	)
}

export default Promise