// // la info se obtiene por medio del dom y ID
// //campos en comun
// const nombres = document.getElementById("nombres")
// const apellidos  = document.getElementById("apellidos")
// const cedula  = document.getElementById("cedula")
// const telefono  = document.getElementById("telefono")
// const especialidad  = document.getElementById("especialidad")

// // campo propio de los medicos
// const consultorio  = document.getElementById("consultorio")
// const correo  = document.getElementById("correo")

// //campo propios pacientes
// const edad = document.getElementById("edad")

// //---------llamado formularios---------
// const formularioMedicos = document.getElementById("registro-medicos-form")
// const formularioPacientes = document.getElementById("registro-pacientes-form")


// class usuario {
//     constructor(nombres, apellidos, cedula, telefono, especialidad){
//         this. nombres=nombres
//         this. apellidos=apellidos
//         this. cedula=cedula
//         this. telefono=telefono
//         this. especialidad=especialidad
//     }
// }

// //evento para enviar datos por submit
// formularioMedicos.addEventListener("submit", function(event){
//     // previene que la pagina se recargue antes del addEventListener
//     event.preventDefault()

//     let valorNombres = nombres.value
//     let valorApellidos = apellidos.value
//     let valorCedula = cedula.value
//     let valorConsultorio = consultorio.value
//     let valorTelefono = telefono.value
//     let valorCorreo = correo.value
//     let valorEspecialidad = especialidad.value

//     const medico= new usuario(valorNombres, valorApellidos, valorCedula, valorTelefono, valorEspecialidad)

//     medicos.consultorio=valorConsultorio
//     medicos.correo=valorCorreo

//     let medicos =[]

//     let localMedicos =localStorage.getItem("medicos")
//     // si localmedicos no esta vacio lo convierte en un objeto para hacer push 
//     if(localMedicos){
//         medicos=JSON.parse(localMedicos)
//     }
//     medicos.push(medico)
//     localStorage.setItem("medicos", JSON.stringify(medicos))
//     alert("Medico registrado")

// })

// const mostrarMedicos =function(){
//     let medicos = []
//     let cuerpoTabla= document.getElementById("cuerpo-tabla-medicos")
//     let localMedicos = localStorage.getItem("medicos")
//     if (localMedicos){
//         medicos = JSON.parse(localMedicos)
//     }
//     medicos.forEach(medico=>{
//         let fila = document.createElement("tr")
//         // se crea la celda y dom tiene metodod de insertCell() 
//         let celdaNombres = fila.insertCell
//         let celdaApellidos = fila.insertCell
//         let celdaCedula = fila.insertCell
//         let celdaConsultorio = fila.insertCell
//         let celdaTelefono = fila.insertCell
//         let celdaCorreo = fila.insertCell
//         let celdaEspecialidad = fila.insertCell
//         let celdaPaciente = fila.insertCell

//         celdaNombres.textContent = medico.nombres
//         celdaApellidos.textContent = medico.apellidos
//         celdaCedula.textContent= medico.cedula
//         celdaConsultorio.textContent= medico.consultorio
//         celdaTelefono.textContent = medico.telefono
//         celdaCorreo.textContent = medico.correo
//         celdaEspecialidad.textContent = medico.especialidad
//         celdaPaciente.textContent = "sin asignar"

//         cuerpoTabla.appendChild(fila)
        
//     })
// }



//-----------------------------------------------------------------------
