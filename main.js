const alumnos = [
    { nombre: "Marco", nota1: 8, nota2: 9, notaFinal: 6 },
    { nombre: "Federico", nota1: 5, nota2: 2, notaFinal: 8 },
    { nombre: "Laura", nota1: 1, nota2: 4, notaFinal: 6 },
    { nombre: "Celeste", nota1: 6, nota2: 5, notaFinal: 7 },
    { nombre: "Maite", nota1: 10, nota2: 9, notaFinal: 8 }
]
const nombresArray = [];

//ofrece la posibilidad de agregar un nuevo alumno a la lista con sus respectivas notas
let agregarAlumno = prompt(`Desea agregar las calificaciones de un alumno mas? Y/N`);
if (agregarAlumno.toUpperCase() === "Y") {
    alumnos.push(
        {
            nombre: prompt(`Ingrese el nombre del alumno:`),
            nota1: prompt(`Ingrese la nota del primer parcial:`),
            nota2: prompt(`Ingrese la nota del segundo parcia:`),
            notaFinal: prompt(`Ingrese la nota de la evaluacion final:`),
        }
    )
}

//rellena un array de nombres para mostrar y pedir que el usuario elija de cual alumno quiere ver el promedio
//concatena los nombres del array y los muestra por pantalla
const concatNombres = (alumnos) => {
    let nombresArray = alumnos.map(objeto => objeto.nombre);
    let nombresConcatenados = nombresArray.join(', ');

    alert(`los alumnos disponibles son: ${nombresConcatenados}`);
}
concatNombres(alumnos);

//busca el nombre del alumno elegido de la lista anterior y muestra sus notas
const encontrarAlumno = (elegirAlumno) => {
    for (const alumno of alumnos) {
        if(alumno.nombre === elegirAlumno) {alert(`el alumno elegido es ${alumno.nombre} y sus notas son: ${alumno.nota1}, ${alumno.nota2}, ${alumno.notaFinal}`)}
    }
}
let elegirAlumno = prompt("Elegir el nombre del alumno a mostrar");
encontrarAlumno(elegirAlumno);

//TODO: agregar funcion para calcular y mostrar el promedio del alumno elegido anteriormente