const url = 'http://localhost:8080';

const createListTask = ({ nombre, id }) => {
	let options = {
		method: "POST",
		headers:{ 
			"Content-Type": "application/json; charset=utf-8"
		},
		body: JSON.stringify({
			completed: false,
			name: nombre,
			listaid: {
				id: id
			}
		})
	}

	fetch(`${url}/listTasks`, options)
}

const deleteListTask = (id) => {
    fetch(`${url}/listTask/${id}`, { method: "DELETE" })
}

const updateListTask = (tarea) => {
	const {name, completed, id, idLista} = tarea
	
	let options = {
		method: "PUT",
		headers:{ 
			"Content-Type": "application/json; charset=utf-8"
		},
		body: JSON.stringify({
			completed,
			name,
			listaid: {
				id: idLista
			}
		})
	}
	fetch(`${url}/listTask/${id}`, options)
}

export { createListTask, deleteListTask, updateListTask }