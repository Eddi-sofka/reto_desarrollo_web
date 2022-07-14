import { crearList, mostrarList, eliminarList } from "./controller/list.controller.js"
import { eliminarSubTarea, crearSubTarea, editarSubTarea  } from "./controller/listTask.controller.js"

//Declaracion de variables
const d = document,
    $crear = d.getElementById("crear"),
    body = d.querySelector('.tbody1'),
    $inputLista = d.getElementById('inputLista')

let subtarea = {}

//funcon boton crear , permite guardar en el input el nombre de la nueva lista a crear
$crear.addEventListener('click', e => {
    e.preventDefault()
    crearList($inputLista.value)
    $inputLista.value = ""
})

body.addEventListener("click", (e) => {
    if (e.target.classList[0] == "EliminarList") {
        if (confirm("¿Seguro que quiere eliminar la lista?")) {
            eliminarList(e.target.parentElement.parentElement.id)
        }
    }

    if (e.target.classList[0] == "agregarSubList") {
        e.preventDefault()
        let dato = { nombre: e.target.previousElementSibling.value, id: e.composedPath()[0].value }
        crearSubTarea(dato)
    }
    
    /**
     * eliminar subtarea
    */
    if (e.target.classList[0] == "eliminar") {
        if (confirm("¿Seguro que quiere eliminar la tarea?")) {
            eliminarSubTarea(e.composedPath()[2].children[0].textContent)
        }
    }

    /**
     * editar subtarea , al pulsar el boton editar , muestra en el input con nombre de la tare actual me permite 
    */
    if (e.target.classList[0] == "editar") {
        e.preventDefault()

        subtarea.id = e.composedPath()[0].value
        subtarea.name = e.composedPath()[2].children[1].textContent
        subtarea.idLista = e.composedPath()[4].id
        subtarea.completed = e.composedPath()[2].children[2].children[0].checked

        let input = e.composedPath()[6].children[1].children[0]
        let btncrear = d.getElementById('crear' + e.composedPath()[4].id)
        let btnActualizar = d.getElementById('Actualizar' + e.composedPath()[4].id)

        btncrear.style.display = "none"
        btnActualizar.style.display = ""
        input.value = subtarea.name
    }

    /**
     * Actualizar subtarea, envia los datos nuevos a la api y actualiza la bd
     */
    if(e.target.classList[0] == "actualizarSubList"){
        e.preventDefault()
        
        let input = e.target.parentElement.children[0],
            btncrear = d.getElementById('crear' + subtarea.idLista),
            btnActualizar = e.target,
            tarea = { ...subtarea, name: input.value }
        
        editarSubTarea(tarea)

        btncrear.style.display = ""
        btnActualizar.style.display = "none"
        input.value = ""
        subtarea = {}
    }

    /**
     * function validar , verifica el estado del check para cambiar el estado del boton editar
     */
    if (e.target.classList[0] == "validar") {

        subtarea.id = e.composedPath()[2].children[3].children[0].value
        subtarea.name = e.composedPath()[2].children[1].textContent
        subtarea.idLista =  e.composedPath()[4].id
        subtarea.completed = d.getElementById('validar' + e.composedPath()[2].children[3].children[0].value).checked
        
        let btnEditar = e.composedPath()[2].children[3].children[0]

        editarSubTarea(subtarea)

        if (subtarea.completed) {
            btnEditar.disabled = true
        } else {
            btnEditar.disabled = false
        }

    }

})

mostrarList()
