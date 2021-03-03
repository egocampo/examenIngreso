/*****************************************
| ALUMNO: OCAMPO GABRIEL
| DIVISION: 1°G
| FECHA: 03/03/2021
| EXAMEN INGRESO: PROGRAMACION INICIAL
| EJERCICIO 02
******************************************
Enunciado:
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota
*/
function mostrar()
{
	var nombre;
	var tipoCursada; // "libre";"presencial";"remota"
	var cantidadMaterias; // mas de cero y menos de 8
	var sexo; // femenino , masculino , no binario
	var notaPromedio; // entre 0 y 10
	var edad;
	var continuar;
	var promedioMejorPromedioNoMasculino;
	var nombreMejorPromedioNoMasculino;
	var flagMejorPromedioNoMasculino=true;
	var edadMasJovenLibre;
	var nombreMasJovenLibre;
	var flagMasJovenLibre=true;
	var acumuladorNotaMasculino=0;
	var contadorMasculino=0;
	var acumuladorNotaFemenino=0;
	var contadorFemenino=0;
	var acumuladorNotaNoBinario=0;
	var contadorNoBinario=0;
	var promedioNotaMasculino;
	var promedioNotaFemenino;
	var promedioNotaNoBinario;
	var stringPuntoD="d) El promedio de nota por sexo es: </BR>";
	var cantidadMateriasMasMateriasNoRemotas;
	var edadMasMateriasNoRemotas;
	var nombreMasMateriasNoRemotas;
	var flagMasMateriasNoRemotas=true;

	do
	{
		nombre=prompt("Ingrese el nombre");
		while(!(isNaN(nombre)))
		{
			nombre=prompt("Nombre no válido. Ingrese el nombre");
		}
		tipoCursada=prompt("Ingrese el tipo de cursada (libre, presencial, remota)")
		while(tipoCursada!="libre" && tipoCursada!="presencial" && tipoCursada!="remota")
		{
			tipoCursada=prompt("Tipo no válido. Ingrese el tipo de cursada (libre, presencial, remota)")
		}
		cantidadMaterias=parseInt(prompt("Ingrese la cantidad de materias (entre 1 y 7)"));
		while(isNaN(cantidadMaterias) || cantidadMaterias<1 || cantidadMaterias>7)
		{
			cantidadMaterias=parseInt(prompt("Cantidad no válida. Ingrese la cantidad de materias (entre 1 y 7)"));
		}
		sexo=prompt("Ingrese el sexo (masculino, femenino, no binario");
		while(sexo!="masculino" && sexo!="femenino" && sexo!="no binario")
		{
			sexo=prompt("Ingrese el sexo (masculino, femenino, no binario");
		}
		notaPromedio=parseFloat(prompt("Ingrese la nota promedio (entre 0 y 10)"));
		while(isNaN(notaPromedio) || notaPromedio<0 || notaPromedio>10)
		{
			notaPromedio=parseFloat(prompt("Ingrese la nota promedio (entre 0 y 10)"));
		}
		edad=parseInt(prompt("Ingrese la edad"));
		while(isNaN(edad) || edad<1 || edad>120)
		{
			edad=parseInt(prompt("Edad no válida. Ingrese la edad"));
		}
		if((flagMejorPromedioNoMasculino && sexo!="masculino") || (notaPromedio>promedioMejorPromedioNoMasculino && sexo!="masculino"))
		{
			promedioMejorPromedioNoMasculino=notaPromedio;
			nombreMejorPromedioNoMasculino=nombre;
			flagMejorPromedioNoMasculino=false;
		}
		if((flagMasJovenLibre && tipoCursada=="libre") || (edad<edadMasJovenLibre && tipoCursada=="libre"))
		{
			edadMasJovenLibre=edad;
			nombreMasJovenLibre=nombre;
			flagMasJovenLibre=false;
		}
		if(sexo=="masculino")
		{
			acumuladorNotaMasculino+=notaPromedio;
			contadorMasculino++;
		}
		else if(sexo=="femenino")
		{
			acumuladorNotaFemenino+=notaPromedio;
			contadorFemenino++;
		}
		else
		{
			acumuladorNotaNoBinario+=notaPromedio;
			contadorNoBinario++;
		}

		if((flagMasMateriasNoRemotas && tipoCursada!="remota") || (cantidadMaterias>cantidadMateriasMasMateriasNoRemotas && tipoCursada!="remota"))
		{
			cantidadMateriasMasMateriasNoRemotas=cantidadMaterias;
			edadMasMateriasNoRemotas=edad;
			nombreMasMateriasNoRemotas=nombre;
			flagMasMateriasNoRemotas=false;
		}

		continuar=confirm("¿Desea ingresar otro alumno?");
	}while(continuar);

	if(contadorMasculino!=0)
	{
		promedioNotaMasculino=acumuladorNotaMasculino/contadorMasculino;
		stringPuntoD+="* masculino: "+promedioNotaMasculino+"</BR>";
	}
	if(contadorFemenino!=0)
	{
		promedioNotaFemenino=acumuladorNotaFemenino/contadorFemenino;
		stringPuntoD+="* femenino: "+promedioNotaFemenino+"</BR>";
	}
	if(contadorNoBinario!=0)
	{
		promedioNotaNoBinario=acumuladorNotaNoBinario/contadorNoBinario;
		stringPuntoD+="* no binario: "+promedioNotaNoBinario+"</BR>";
	}


	if(!(flagMejorPromedioNoMasculino))
	{
		document.write("a) El nombre del mejor promedio que no sea masculino es: "+nombreMejorPromedioNoMasculino+"</BR>");
	}
	else
	{
		document.write("a) Todos los alumnos ingresados son masculinos. </BR>");
	}
	if(!(flagMasJovenLibre))
	{
		document.write("b) El nombre del mas joven de los alumnos entre los que la dan libre es: "+nombreMasJovenLibre+"</BR>");
	}
	else
	{
		document.write("b) Ningún alumno rinde libre. </BR>");
	}
	document.write(stringPuntoD);
	if(!(flagMasMateriasNoRemotas))
	{
		document.write("f) El alumno que cursa mas materias que no sean en forma remota es: "+nombreMasMateriasNoRemotas+", y tiene "+edadMasMateriasNoRemotas+" años.</BR>");
	}
	else
	{
		document.write("f) Todos los alumnos cursan las materias en forma remota. </BR>");
	}
}