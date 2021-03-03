/**
Para un censo municipal debemos cargar los datos de <b>TODAS</b> las mascotas de nuestra veterinaria:</p>
necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos) </br>
el tipo de pelaje (corto, largo , sin pelo),</br>
la edad de la mascota (edad validada);</br>
el nombre (una palabra) </br>
la raza  (una palabra) </br>
el peso (peso validado) </br>
el estadoClinico (enfermo,internado o adopcion)</br>
la temperaruta corporal</br></br>
y nos piden informar solo si existe</br>
a)El perro mas pesado</br>
b)El porcentaje de enfermos sobre el total de mascotas</br>
c)El nombre de la ultima mascota de tipo "otra cosa"</br>
d)El animal sin pelo con menor temperatura corporal</br>
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal</br>
f)Sumando gatos y perros que porcentaje del total de mascotas son?</br>
g)Que estado clinico tiene la menor cantidad de mascotas       </br>
H)Cual es el promedio de kilos de peso de tomando todas las mascotas </br>
i)El nombre y raza del gato sin pelos mas liviano</br>
 */
function probarEjercicio()
{
	var tipoAnimal; // gato, perro, otra cosa
	var tipoPelaje; // corto, largo, sin pelo
	var edadAnimal; // mayor a 0
	var nombreAnimal; // una palabra
	var razaAnimal; // una palabra
	var pesoAnimal; // mas de 0
	var estadoClinico // enfermo, internado, adopcion
	var temperaturaAnimal; // mas de 0
	var perroMasPesado=0;
	var flagPerroMasPesado=true;
	var contadorEnfermos=0;
	var porcentajeEnfermos;
	var contadorTotalMascotas=0;
	var contadorGatos=0;
	var contadorPerros=0;
	var contadorOtraCosa=0;
	var nombreUltimaOtraCosa="";
	var sinPeloMenorTemperaturaCorporal;
	var sinPeloMenorTemperaturaCorporalTipo;
	var flagSinPeloMenorTemperaturaCorporal=true;
	var acumuladorTemperaturaGatos=0;
	var acumuladorTemperaturaPerros=0;
	var acumuladorTemperaturaOtraCosa=0;
	var promedioTemperaturaGatos=0;
	var promedioTemperaturaPerros=0;
	var promedioTemperaturaOtraCosa=0;
	var tipoMascotaMayorPromedioTemperaturaCorporal="";
	var cantidadGatosYPerros;
	var porcentajeGatosYPerros;
	var contadorInternados=0;
	var contadorAdopcion=0;
	var estadoClinicoMenorCantidadMascotas="";
	var acumuladorPesos=0;
	var promedioPesos;
	var gatoSinPelosMasLivianoNombre="";
	var gatoSinPelosMasLivianoRaza="";
	var gatoSinPelosMasLivianoPeso;
	var flagGatoSinPelosMasLiviano=true;

	do
	{
		tipoAnimal=prompt("Ingrese el tipo de animal (gato, perro, otra cosa)");
		while(tipoAnimal!="gato" && tipoAnimal != "perro" && tipoAnimal!="otra cosa")
		{
			tipoAnimal=prompt("Tipo no válido. Ingrese el tipo de animal (gato, perro, otra cosa)");
		}
		tipoPelaje=prompt("Ingrese el tipo de pelaje del animal (corto, largo, sin pelo)");
		while(tipoPelaje!="corto" && tipoPelaje!="largo" && tipoPelaje!="sin pelo")
		{
			tipoPelaje=prompt("Tipo de pelaje no válido. Ingrese el tipo de pelaje del animal (corto, largo, sin pelo)");
		}
		edadAnimal=parseInt(prompt("Ingrese la edad del animal"));
		while(isNaN(edadAnimal) || edadAnimal<0)
		{
			edadAnimal=parseInt(prompt("Edad no válida. Ingrese la edad del animal"));
		}
		nombreAnimal=prompt("Ingrese el nombre del animal");
		while(!(isNaN(nombreAnimal)))
		{
			nombreAnimal=prompt("Nombre no válido. Ingrese el nombre del animal");
		}
		razaAnimal=prompt("Ingrese la raza del animal");
		while(!(isNaN(razaAnimal)))
		{
			razaAnimal=prompt("Raza no válida. Ingrese la raza del animal");
		}
		pesoAnimal=parseInt(prompt("Ingrese el peso del animal"));
		while(isNaN(pesoAnimal) || pesoAnimal<0)
		{
			pesoAnimal=parseInt(prompt("Peso no válido. Ingrese el peso del animal"));
		}
		estadoClinico=prompt("Ingrese el estado clínico (enfermo, internado, adopcion)");
		while(estadoClinico!="enfermo" && estadoClinico!="internado" && estadoClinico!="adopcion")
		{
			estadoClinico=prompt("Estado clínico no válido. Ingrese el estado clínico (enfermo, internado, adopcion)");
		}
		temperaturaAnimal=parseInt(prompt("Ingrese la temperatura corporal"));
		while(isNaN(temperaturaAnimal) || temperaturaAnimal<20 || temperaturaAnimal>50)
		{
			temperaturaAnimal=parseInt(prompt("Temperatura no válida. Ingrese la temperatura corporal"));
		}
		continuar=confirm("¿Desea agregar otra mascota?");
		contadorTotalMascotas++;

		switch(tipoAnimal)
		{
			case "gato":
				acumuladorTemperaturaGatos+=temperaturaAnimal;
				contadorGatos++;
				if(flagGatoSinPelosMasLiviano || pesoAnimal<gatoSinPelosMasLivianoPeso)
				{
					gatoSinPelosMasLivianoPeso=pesoAnimal;
					gatoSinPelosMasLivianoNombre=nombreAnimal;
					gatoSinPelosMasLivianoRaza=razaAnimal;
					flagGatoSinPelosMasLiviano=false;
				}
				break;
			case "perro":
				acumuladorTemperaturaPerros+=temperaturaAnimal;
				contadorPerros++;
			case "otra cosa":
				nombreUltimaOtraCosa=nombreAnimal; // PUNTO C
				acumuladorTemperaturaOtraCosa+=temperaturaAnimal;
				contadorOtraCosa++;
				break;
		}

		if(flagPerroMasPesado || pesoAnimal>perroMasPesado) // PUNTO A
		{
			perroMasPesado=pesoAnimal;
			flagPerroMasPesado=false;
		}

		if(estadoClinico=="enfermo") // PUNTO B Y G
		{
			contadorEnfermos++;
		}
		else if(estadoClinico=="internado")
		{
			contadorInternados++;
		}
		else
		{
			contadorAdopcion++;
		}

		if(flagSinPeloMenorTemperaturaCorporal || (temperaturaAnimal<sinPeloMenorTemperaturaCorporal && tipoPelaje=="sin pelo")) // PUNTO D
		{
			sinPeloMenorTemperaturaCorporal=temperaturaAnimal;
			sinPeloMenorTemperaturaCorporalTipo=tipoAnimal;
			flagSinPeloMenorTemperaturaCorporal=false;
		}

		acumuladorPesos+=pesoAnimal; // PUNTO H
		promedioPesos=acumuladorPesos/contadorTotalMascotas;

	}while(continuar)

	if(contadorGatos!=0) // PUNTO E
	{
		promedioTemperaturaGatos=acumuladorTemperaturaGatos/contadorGatos;
	}
	if(contadorPerros!=0)
	{
		promedioTemperaturaPerros=acumuladorTemperaturaPerros/contadorPerros;
	}
	if(contadorOtraCosa!=0)
	{
		promedioTemperaturaOtraCosa=acumuladorTemperaturaOtraCosa/contadorOtraCosa;
	}
	if(promedioTemperaturaGatos>promedioTemperaturaPerros && promedioTemperaturaGatos>promedioTemperaturaOtraCosa)
	{
		tipoMascotaMayorPromedioTemperaturaCorporal="gato";
	}
	else if(promedioTemperaturaPerros>promedioTemperaturaGatos && promedioTemperaturaPerros>promedioTemperaturaOtraCosa)
	{
		tipoMascotaMayorPromedioTemperaturaCorporal="perros";
	}
	else if(promedioTemperaturaOtraCosa>promedioTemperaturaGatos && promedioTemperaturaOtraCosa>promedioTemperaturaPerros)
	{
		tipoMascotaMayorPromedioTemperaturaCorporal="otra cosa";
	}

	cantidadGatosYPerros=contadorGatos+contadorPerros; // PUNTO F
	porcentajeGatosYPerros=cantidadGatosYPerros*100/contadorTotalMascotas;

	if(contadorEnfermos<contadorInternados && contadorEnfermos<contadorAdopcion) // PUNTO G
	{
		estadoClinicoMenorCantidadMascotas="enfermos";
	}
	else if(contadorInternados<contadorEnfermos && contadorInternados<contadorAdopcion)
	{
		estadoClinicoMenorCantidadMascotas="internados";
	}
	else if(contadorAdopcion<contadorEnfermos && contadorAdopcion<contadorInternados)
	{
		estadoClinicoMenorCantidadMascotas="adopcion";
	}

	// MUESTRA DE RESULTADOS

	if(perroMasPesado!=0)
	{
		document.write("a) El perro mas pesado pesa: "+perroMasPesado+" kilos </BR>");
	}
	else
	{
		document.write("a) No se ingresaron perros. </BR>");
	}

	if(contadorEnfermos!=0)
	{
		porcentajeEnfermos=contadorEnfermos*100/contadorTotalMascotas;
		document.write("b) El porcentaje de enfermos sobre el total de mascotas es: "+porcentajeEnfermos+"% </BR>");
	}
	else
	{
		document.write("b) No hay mascotas enfermas. </BR>");
	}

	if(nombreUltimaOtraCosa!="")
	{
		document.write("c) El nombre de la ultima mascota de tipo \"otra cosa\" es: "+nombreUltimaOtraCosa+" </BR>");
	}
	else
	{
		document.write("c) No se ingresaron mascotas de tipo \"otra cosa\". </BR>");
	}

	if(!(flagSinPeloMenorTemperaturaCorporal))
	{
		document.write("d) El animal sin pelo con menor temperatura corporal es: "+sinPeloMenorTemperaturaCorporalTipo+" con una temperatura de: "+sinPeloMenorTemperaturaCorporal+"°C. </BR>");
	}
	else
	{
		document.write("d) No se ingresaron animales sin pelo. </BR>");
	}

	if(tipoMascotaMayorPromedioTemperaturaCorporal!="")
	{
		document.write("e) El tipo de mascota que tiene el mayor promedio de temperatura corporal es: "+tipoMascotaMayorPromedioTemperaturaCorporal+" </BR>");
	}
	else
	{
		document.write("e) Ningún tipo de mascota tiene mayor promedio de temperatura corporal que los demás. </BR>");
	}

	document.write("f) Sumando gatos y perros ¿Que porcentaje del total de mascotas son? "+porcentajeGatosYPerros+"% </BR>");

	if(estadoClinicoMenorCantidadMascotas!="")
	{
		document.write("g) El estado clinico que tiene la menor cantidad de mascotas es: "+estadoClinicoMenorCantidadMascotas+" </BR>");
	}
	else
	{
		document.write("g) Ningún estado clinico tiene menor cantidad de mascotas respecto a los demás. </BR>");
	}

	document.write("H) El promedio de kilos de peso de tomando todas las mascotas es de: "+promedioPesos+" kilos </BR>");

	if(gatoSinPelosMasLivianoNombre!="")
	{
		document.write("i) El nombre del gato sin pelos mas liviano es : "+gatoSinPelosMasLivianoNombre+" y raza es: "+gatoSinPelosMasLivianoRaza+". </BR>");
	}
	else
	{
		document.write("i) No se ingresaron gatos sin pelos. </BR>");
	}

}