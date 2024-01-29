const alumnos = [
    { nombre: "Marco", nota1: 8, nota2: 9, notaFinal: 6},
    { nombre: "Federico", nota1: 5, nota2: 2, notaFinal: 8},
    { nombre: "Laura", nota1: 1, nota2: 4, notaFinal: 6},
    { nombre: "Celeste", nota1: 6, nota2: 5, notaFinal: 7},
    { nombre: "Maite", nota1: 10, nota2: 9, notaFinal: 8}
]

let agregarAlumno = prompt(`Desea agregar las calificaciones de un alumno mas?`);

if (agregarAlumno.toUpperCase() == "Y") {
    console.log("hasta aca funciona");
    alumnos.push(
        {
            nombre: prompt(`Ingrese el nombre del alumno:`),
            nota1: prompt(`Ingrese la nota del primer parcial:`),
            nota2: prompt(`Ingrese la nota del segundo parcia:`),
            notaFinal: prompt(`Ingrese la nota de la evaluacion final:`),
        }
    )
}

const mostrarPromedio = (nombre) => {
    let indice = alumnos.indexOf(nombre);

    if(indice != -1){
        
        alert(`El alumno elegido es ${alumnos(nombre)}`);
        alert(`su promedio es: `)
    }
}

// console.log(alumnos);
let elegirAlumno = prompt(`Elegir el nombre del alumno a mostrar`);
mostrarPromedio(elegirAlumno);