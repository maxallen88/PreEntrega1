
		function calcularNota() {
			// Obtener los valores de entrada del usuario
			let nota1 = parseFloat(document.getElementById("nota1").value);
			let nota2 = parseFloat(document.getElementById("nota2").value);
			let nota3 = parseFloat(document.getElementById("nota3").value);

			// Calcular la nota promedio del alumno
			let notaPromedio = (nota1 + nota2 + nota3) / 3;

			// Determinar si el alumno aprobó o reprobó
			let mensaje;
			if (notaPromedio >= 5) {
				mensaje = "El alumno aprobó con una nota de " + notaPromedio.toFixed(2);
			} else {
				mensaje = "El alumno reprobó con una nota de " + notaPromedio.toFixed(2);
			}

			// Mostrar el resultado al usuario
			document.getElementById("resultado").innerHTML = mensaje;
		}
