const url = 'http://localhost:8080';

const getList = () => {
	return fetch(`${url}/list`)
		.then(res => { return res.json()})
		.then(data => { return data })
		.catch(error => console.log(error))
}

const createList = (lista) => {
	let options = {
		method: "POST",
		headers: { "Content-Type": "application/json; charset=utf-8" },
		body: JSON.stringify({
			name: lista
		})
	}

	fetch(`${url}/list`, options)
}

const deleteList = (id) => {
	let options = {
        method: "DELETE",
        headers: { "Content-Type": "application/json; charset=utf-8" },
    }
    fetch(`${url}/list/${id}`, options)
}

export { getList, createList, deleteList }