import { crearList, mostrarList, eliminarList } from "./controller/list.controller.js"
import { eliminarSubTarea, crearSubTarea, editarSubTarea  } from "./controller/listTask.controller.js"

//Declaracion de variables
const d = document,
    $title = d.getElementById("nombre-lista"),
    $crear = d.getElementById("crear"),
    body = d.querySelector('.tbody1'),
    $input = d.getElementById('inputTarea').value

let subtarea = {}


//funcon boton crear , permite guardar en el input el nombre de la nueva lista a crear
$crear.addEventListener('click', e => {
    e.preventDefault()
    crearList(d.getElementById('inputTarea').value)
})

body.addEventListener("click", (e) => {
    if (e.target.classList[0] == "EliminarList") {
        eliminarList(e.target.parentElement.parentElement.id)
    }

    if (e.target.classList[0] == "agregarSubList") {

        let dato = { nombre: e.target.previousElementSibling.value, id: e.path[0].value }
        crearSubTarea(dato)

    }
    
    /**
     * eliminar subtarea
    */
    if (e.target.classList[0] == "eliminar") {
        eliminarSubTarea(e.target.parentElement.parentElement.children[0].textContent)
    }

    /**
     * editar subtarea , al pulsar el boton editar , muestra en el input con nombre de la tare actual
     * me permite 
    */
    if (e.target.classList[0] == "editar") {
        e.preventDefault()
        // console.log(e.path[2].children[2].children[0].checked);

        subtarea.id = e.path[0].value
        subtarea.name = e.path[2].children[1].textContent
        subtarea.idLista = e.path[4].id
        subtarea.completed = e.path[2].children[2].children[0].checked

        let input = e.path[5].children[1]
        let btncrear = d.getElementById('crear' + e.path[4].id)
        let btnActualizar = d.getElementById('Actualizar' + e.path[4].id)

        btncrear.style.display = "none"
        btnActualizar.style.display = ""
        input.value = subtarea.name
    }

    if(e.target.classList[0] == "actualizarSubList"){
        e.preventDefault()
        let input = e.target.parentElement.children[1],
            btncrear = d.getElementById('crear' + subtarea.idLista),
            btnActualizar = e.target

        editarSubTarea({
            id: subtarea.id,
            name: e.target.parentElement.children[1].value,
            completed: subtarea.completed,
            idList: subtarea.idLista
        })

        btncrear.style.display = ""
        btnActualizar.style.display = "none"
        input.value = ""
        subtarea = {}
    }

    /**
     * function validar , verifica el estado del check para cambiar el estado del boton editar
     */
    if (e.target.classList[0] == "validar") {

        subtarea.id = e.path[2].children[3].children[0].value
        subtarea.name = e.path[2].children[1].textContent
        subtarea.idLista = e.target.parentElement.parentElement.parentElement.parentElement.id
        subtarea.completed = d.getElementById('validar' + e.path[2].children[3].children[0].value).checked
        
        let btnEditar = e.path[2].children[3].children[0]

        editarSubTarea({
            id: subtarea.id,
            name: subtarea.name,
            completed: subtarea.completed,
            idList: subtarea.idLista
        })

        if (completed) {
            btnEditar.disabled = true
        } else {
            btnEditar.disabled = false
        }

    }



})

mostrarList()

/**
 * Editar sub lista 
 * @param {*} id1 
 * @param {*} id2 
 * @param {*} nombre 
 */












