import {
    getList,
    createList,
    deleteList
} from '../service/list.service.js'

//Muesta la lista creada mediante 2 busquedas para mostra
const mostrar = (listas) => {
    let resultado = ''
    let resultadoSub = ''

    listas.forEach(lista => {
        resultadoSub = ''
        lista.listTask.forEach(tarea => {
            resultadoSub += ` 
                <tr>
                    <td class="id">${tarea.id}</td>
                    <td class="Tarea">${tarea.name}</td>
                    <td class="completado">
                        <input class="validar form-check-input" id="validar${tarea.id}" type="checkbox" id="flexSwitchCheckDefault" ${tarea.completed ? "checked" : ""}>
                        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                    </td>
                    <td class="opciones">
                        <button class="editar btn btn-info" value="${tarea.id}" type="button" id="editar${tarea.id}" class="editar btn btn-secondary" ${tarea.completed? "disabled" : ""}>Editar</button>
                        <button class="eliminar btn btn-danger" type="button" id="eliminar${tarea.id}" >Eliminar</button>
                    </td>
                </tr>
            `
        })
        
        resultado += `
            <div id="${lista.id}">
                <div class="titleTask" >
                    <h3 id="nombre-lista">Tarea : ${lista.name}</h3>
                    <button class="EliminarList btn btn-danger" type="submit" id="borrar ${lista.id}" ">Eliminar</button>
                </div>
                <form class="input-group">
                    <input class="form-control me-sm-2" type="text" id="inputTarea${lista.id}" placeholder="¿Que piensas hacer?" maxlength="15">
                    <button class="agregarSubList btn btn-success my-2 my-sm-0" type="submit" id="crear${lista.id}" value="${lista.id}">Crear</button>
                    <button style="display:none;" class="actualizarSubList btn btn-success my-2 my-sm-0" type="submit" id="Actualizar${lista.id}" value="${lista.id}">Actualizar</button>
                </form>
                <div class="table">
                    <table id=${lista.id}>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Tarea</th>
                            <th>¿completado?</th>
                            <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${resultadoSub}
                        </tbody>
                    </table>
                </div>
            </div>
        `
    })
    document.querySelector('.tbody1').innerHTML = resultado;
    resultado = "";
}


//Funcion crear lista , consulta la ruta del fetch y realiza el metodo post con los datos 
const crearList = async(lista) => {
    if (lista) {
        await createList(lista)
        mostrarList()
    } else {
        alert("ingrese una tarea por favor!")
    }
}

//muestra las listas en la BD
const mostrarList = async() => {
    setTimeout(async() => mostrar(await getList()), 500)
    // mostrar(await getList())
}

//funcion eliminar , recibe como parametro el ID
const eliminarList = async(id) => {
    await deleteList(id)
    mostrarList()
}


export { crearList, mostrarList, eliminarList }