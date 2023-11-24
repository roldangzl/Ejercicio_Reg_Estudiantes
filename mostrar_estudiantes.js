function mostrarEstudiantes(estudiantes){
    console.log("Lista de estudiantes registrados:");
    for (let i = 0; i < estudiantes.length; i++){
        let estudianteActual = estudiantes[i];
        console.log("Nombre: " + estudianteActual.Nombre);
        console.log("Apellido: " + estudianteActual.Apellido);
        console.log("Edad: " + estudianteActual.Edad);
    }
}

module.exports = {mostrarEstudiantes};