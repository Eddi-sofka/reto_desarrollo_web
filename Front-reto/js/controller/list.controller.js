import {
    getList,
    createList,
    deleteList
} from '../service/list.service.js'

let resultado = ''
let resultadoSub = ''

//Muesta la lista creada mediante 2 busquedas para mostra
const mostrar = (listas) => {
    listas.forEach(lista => {
        resultadoSub = ''
        lista.listTask.forEach(sub => {
            resultadoSub += ` <tr>
                <td class="id">${sub.id}</td>
                <td class="Tarea">${sub.name}</td>
                <td class="completado">
                    <input class="validar form-check-input" id="validar${sub.id}" type="checkbox" id="flexSwitchCheckDefault" ${sub.completed? "checked" : ""}>
                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                </td>
                <td class="opciones">
                    <button class="editar btn btn-info" value="${sub.id}" type="button" id="editar${sub.id}" class="editar btn btn-secondary" ${sub.completed? "disabled" : ""}>Editar</button>
                    <button class="eliminar btn btn-danger" type="button" id="eliminar${sub.id}" >Eliminar</button>
                </td>
            </tr>`
        })
        resultado += ` <hr>
        <div  id="${lista.id}">
            <div class="input-group " id = "${lista.id}">
                <h3 id="nombre-lista">Tarea : ${lista.name}</h3>
                <button class="EliminarList btn btn-danger" type="submit" id="borrar ${lista.id}" ">Eliminar</button>
            </div>
            <input class="form-control me-sm-2" type="text" id="inputTarea${lista.id}" placeholder="¿Que piensas hacer?">
            <button class="agregarSubList btn btn-success my-2 my-sm-0" type="submit" id="crear${lista.id}" value="${lista.id}">Crear</button>
            <button style="display:none;" class="actualizarSubList btn btn-success my-2 my-sm-0" type="submit" id="Actualizar${lista.id}" value="${lista.id}">Actualizar</button>
            <br>
            <table class="table" id="${lista.id}">
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
const mostrarList = () => {
    setTimeout(async() => mostrar(await getList()), 500)
}

//funcion eliminar , recibe como parametro el ID
const eliminarList = async(id) => {
    await deleteList(id)
    mostrarList()
}


export { crearList, mostrarList, eliminarList }