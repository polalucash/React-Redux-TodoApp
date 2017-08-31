export const getTasks = () => {
	return fetch('http://localhost:8080/tasks')
	.then(res => res.json() )
};

export const createTask = (name) => {
	return fetch('http://localhost:8080/tasks', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-type': 'application/json'
		},
		body: JSON.stringify({name: name, isComplete: false})
	})
	.then(res => res.json() )
};

export const updateTask = (task) => {
	return fetch(`http://localhost:8080/tasks/${task.id}`, {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-type': 'application/json'
		},
		body: JSON.stringify(task)
	})
	.then(res => res.json() )
};

export const destroyTask = (id) => {
	return fetch(`http://localhost:8080/tasks/${id}`, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-type': 'application/json'
		}
	})
};