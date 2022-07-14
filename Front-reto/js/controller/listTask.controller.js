import {
	createListTask,
	deleteListTask,
	updateListTask
} from '../service/listTask.service.js'
import { mostrarList } from './list.controller.js'

//Crear SubTarea
const crearSubTarea = async({ nombre, id }) => {
    if (nombre) {
        await createListTask({ nombre, id })
        mostrarList()
    } else {
        alert("Ingrese una subLista porfavor!")
    }
}

//eliminar subTarea
const eliminarSubTarea = async(id) => {
    await deleteListTask(id)
    mostrarList()
}

const editarSubTarea = async(tarea) => {
    await updateListTask(tarea)
    mostrarList()
}

export {
	eliminarSubTarea,
	crearSubTarea,
    editarSubTarea,
}