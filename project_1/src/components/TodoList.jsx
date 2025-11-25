import { useState, useRef } from "react"

function TodoList() {
	let [tasks, setTasks] = useState([])
	let ref_task_input = useRef(null)

	const event_add_task = (event) => {
		if (ref_task_input.current.value == "") {
			return
		}

		let new_tasks = [...tasks]
		new_tasks.push(ref_task_input.current.value)
		setTasks(new_tasks)
		ref_task_input.current.value = ""
		ref_task_input.current.focus()
	}

	const event_remove_task = (index) => {
		let new_tasks = [...tasks]
		new_tasks.splice(index, 1)
		setTasks(new_tasks)
	}

	function render_tasks() {
		if (tasks.length == 0) {
			return <p>No tasks added yet.</p>
		}

		return (
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>
						<div>
							{task}
							<input type="button" value="Remove" onClick={() => event_remove_task(index)} className="button-remove" />
						</div>
					</li>
				))}
			</ul>
		)
	}

	return (
		<div className="react-component">
			<h2>To-Do List</h2>
			<div className="h-group">
				<input type="text" ref={ref_task_input} placeholder="New task" />
				<input type="button" value="Add Task" onClick={event_add_task} />
			</div>
			{render_tasks()}
		</div>
	)
}

export default TodoList