/*****************************************
| ALUMNO: OCAMPO GABRIEL
| DIVISION: 1°G
| FECHA: 03/03/2021
| EXAMEN INGRESO: PROGRAMACION INICIAL
| EJERCICIO 03
******************************************
Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas,
de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/
function mostrar()
{
	var nombre;
	var estadoCivil;
	var edad;
	var temperaturaCorporal;
	var sexo;
	var precioPorPasajero=600;
	var contadorViudosMayores60=0;
	var nombreMujerSolteraMasJoven;
	var edadMujerSolteraMasJoven;
	var flagMujerSolteraMasJoven=true;
	var precioViajeTotalSinDescuento;
	var contadorMayores60=0;
	var promedioMayores60;
	var descuentoOpcional=25;
	var precioViajeTotalConDescuento=0;
	var contadorPasajeros=0;

	do
	{
		nombre=prompt("Ingrese el nombre del pasajero");
		while(!(isNaN(nombre)))
		{
			nombre=prompt("Nombre no válido. Ingrese el nombre del pasajero");
		}
		estadoCivil=prompt("Ingrese el estado civil (soltero, casado, viudo)");
		while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("Estado civil no válido. Ingrese el estado civil (soltero, casado, viudo)");
		}
		edad=parseInt(prompt("Ingrese la edad (sólo mayores de edad)"));
		while(isNaN(edad) || edad<18 || edad>130)
		{
			edad=parseInt(prompt("Edad no válida. Ingrese la edad (sólo mayores de edad)"));
		}
		temperaturaCorporal=parseFloat(prompt("Ingrese la temperatura corporal"));
		while(isNaN(temperaturaCorporal) || temperaturaCorporal<20 || temperaturaCorporal>50)
		{
			temperaturaCorporal=parseFloat(prompt("Temperatura no válida. Ingrese la temperatura corporal"));
		}
		sexo=prompt("Ingrese el sexo (masculino, femenino)");
		while(sexo!="masculino" && sexo!="femenino")
		{
			sexo=prompt("Sexo no válido. Ingrese el sexo (masculino, femenino)");
		}
		continuar=confirm("¿Desea ingresar otro pasajero?");

		if(edad>60)
		{
			contadorMayores60++; // PUNTO D
			if(estadoCivil=="viudo")
			{
				contadorViudosMayores60++; // PUNTO A
			}
		}
		if((flagMujerSolteraMasJoven && sexo=="femenino" && estadoCivil=="soltero") || (edad<edadMujerSolteraMasJoven && sexo=="femenino" && estadoCivil=="soltero"))
		{
			edadMujerSolteraMasJoven=edad;
			nombreMujerSolteraMasJoven=nombre;
			flagMujerSolteraMasJoven=false;
		}

		contadorPasajeros++;
	}while(continuar);
	
	precioViajeTotalSinDescuento=contadorPasajeros*precioPorPasajero;
	promedioMayores60=contadorMayores60/contadorPasajeros;
	if(promedioMayores60>=(contadorPasajeros/2))
	{
		precioViajeTotalConDescuento=precioViajeTotalSinDescuento-(precioViajeTotalSinDescuento*descuentoOpcional/100)
	}

	if(contadorViudosMayores60!=0)
	{
		document.write("a) La cantidad de personas con estado \"viudo\" de mas de 60 años es: "+contadorViudosMayores60+". </BR>");
	}
	else
	{
		document.write("a) No se ingresaron personas con estado \"viudo\" de mas de 60 años. </BR>");
	}
	if(!(flagMujerSolteraMasJoven))
	{
		document.write("b) La mujer soltera mas joven se llama "+nombreMujerSolteraMasJoven+" y tiene "+edadMujerSolteraMasJoven+" años. </BR>");
	}
	else
	{
		document.write("b) No se ingresó ninguna mujer soltera. </BR>");
	}
	document.write("c) El viaje total sin descuento cuesta: $"+precioViajeTotalSinDescuento+" pesos.</BR>");
	if(precioViajeTotalConDescuento!=0)
	{
		document.write("d) El viaje total con descuento cuesta: $"+precioViajeTotalConDescuento+" pesos.</BR>");
	}
	else
	{
		document.write("d) No aplica para descuento. </BR>");
	}
}