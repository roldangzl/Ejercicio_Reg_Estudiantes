const readlineSync = require('readline-sync');
const {mostrarEstudiantes} = require('./mostrar_estudiantes')

function registroEstudiantes () {
    let cantidadEstudiantes = readlineSync.question("Escribir cantidad de estudiantes: ");
    let estudiantes = [];
    
    for(let i=0; i<cantidadEstudiantes; i++){
        let estudiante = {
            Nombre:"",
            Apellido:"",
            Edad:""
        }
        
        estudiante.Nombre = readlineSync.question("Escriba nombre del estudiante " + (i+1) + ":");
        estudiante.Apellido = readlineSync.question("Escriba apellido del estudiante " + (i+1) + ":");
        estudiante.Edad = readlineSync.question("Escriba edad del estudiante " + (i+1) + ":");

        estudiantes.push(estudiante);
        //estudianteActual = estudiantes[i];
        //console.log("Nombre: " + estudianteActual.Nombre);
    }
    
    return estudiantes;
}

let estudiantesRegistrados = registroEstudiantes();
mostrarEstudiantes(estudiantesRegistrados);