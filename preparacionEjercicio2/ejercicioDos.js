/**
Realizar el algoritmo que permita ingresar 5 paises: </br>
el continente (validar entre america , asia , europa ,africa y oceania) </br>
el nombre del país, </br>
cantidad de habitantes en millones entre 1 y 7000 (validar)</br>
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)  </br> 
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  </br>
a)La cantidad de temperaturas pares.</br>
b)la cantidad de temperaturas impares de europa</br>
c)El nombre del pais con menos habitantes</br>
d)la cantidad de paises que superan los 40 grados.</br>
e)la cantidad de paises de america que tienen menos de 0 grados .</br>
f)el promedio de habitantes entre los paises ingresados .</br>
g)el promedio de habitantes entre los paises que superan los 40 grados  </br>      
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. </br>
i) que continente tiene mas habitantes.</br>
 */
function probarEjercicio()
{
	var continenteIngresado; //(validar entre america , asia , europa ,africa y oceania)
	var nombrePais;
	var cantidadHabitantes; //en millones entre 1 y 7000 (validar)
	var nivelPobreza; // (pobre, rico , muy rico) en europa no hay paises pobre(validar)
	var temperaturaMinima; //(entre -50 y 50)
	var contadorTemperaturasPares=0;
	var contadorTemperaturasImparesEuropa=0;
	var paisMenosHabitantesCantidad=0;
	var paisMenosHabitantesNombre="";
	var flagPaisMenosHabitantes=true;
	var contadorPaisesSuperan40Grados=0;
	var contadorPaisesAmericaMenos0Grados=0;
	var acumuladorHabitantes=0;
	var promedioHabitantes;
	var acumuladorHabitantesSuperan40Grados=0;
	var promedioHabitantesSuperan40Grados;
	var flagPaisMenorTemperatura=true;
	var temperaturaPaisMenorTemperatura;
	var nombrePaisMenorTemperatura;
	var acumuladorHabitantesAmerica=0;
	var acumuladorHabitantesAsia=0;
	var acumuladorHabitantesEuropa=0;
	var acumuladorHabitantesAfrica=0;
	var acumuladorHabitantesOceania=0;
	var continenteMasHabitantes;
	var continenteMasHabitantesCantidad=0;
	var contadorTotalPaises=0;

	for(var i=0;i<5;i++)
	{
		continenteIngresado=prompt("Ingrese el continente (america, asia , europa, africa, oceania)");
		while(continenteIngresado!="america" && continenteIngresado!="asia" && continenteIngresado!="europa" && continenteIngresado!="africa" && continenteIngresado!="oceania")
		{
			continenteIngresado=prompt("El continente ingresado no es válido. Ingrese el continente (america, asia , europa, africa, oceania)");
		}
		nombrePais=prompt("Ingrese el nombre del país");
		while(!(isNaN(nombrePais)))
		{
			nombrePais=prompt("El nombre ingresado no es válido. Ingrese el nombre del país");
		}
		cantidadHabitantes=parseInt(prompt("Ingrese la cantidad de habitantes en millones (entre 1 y 7000)"));
		while(isNaN(cantidadHabitantes) || cantidadHabitantes<1 || cantidadHabitantes>7000)
		{
			cantidadHabitantes=parseInt(prompt("Cantidad no válida. Ingrese la cantidad de habitantes en millones (entre 1 y 7000)"));
		}
		nivelPobreza=prompt("Ingrese el nivel de pobreza (pobre, rico, muy rico)");
		while(nivelPobreza!="pobre" && nivelPobreza!="rico" && nivelPobreza!="muy rico")
		{
			nivelPobreza=prompt("Nivel no válido. Ingrese el nivel de pobreza (pobre, rico, muy rico)");
		}
		while(nivelPobreza=="pobre" && continenteIngresado=="europa")
		{
			nivelPobreza=prompt("En Europa no hay países pobres. Ingrese el nivel de pobreza (rico, muy rico)");
		}
		temperaturaMinima=parseInt(prompt("Ingrese la temperatura mínima (entre -50°C y 50°C)"));
		while(isNaN(temperaturaMinima) || temperaturaMinima<-50 || temperaturaMinima>50)
		{
			temperaturaMinima=parseInt(prompt("Temperatura no válida. Ingrese la temperatura mínima (entre -50°C y 50°C)"));
		}

		if(temperaturaMinima%2==0) // PUNTO A
		{
			contadorTemperaturasPares++;
		}

		switch(continenteIngresado)
		{
			case "america":
				acumuladorHabitantesAmerica+=cantidadHabitantes;
				if(temperaturaMinima<0) // PUNTO E
				{
					contadorPaisesAmericaMenos0Grados++;
				}
				break;
			case "asia":
				acumuladorHabitantesAsia+=cantidadHabitantes;
				break;
			case "europa":
				acumuladorHabitantesEuropa+=cantidadHabitantes;
				if(!(temperaturaMinima%2==0)) // PUNTO B
				{
					contadorTemperaturasImparesEuropa++;
				}
				break;
			case "africa":
				acumuladorHabitantesAfrica+=cantidadHabitantes;
				break;
			case "oceania":
				acumuladorHabitantesOceania+=cantidadHabitantes;
				break;
		}

		if(flagPaisMenosHabitantes || cantidadHabitantes<paisMenosHabitantesCantidad) // PUNTO C
		{
			paisMenosHabitantesCantidad=cantidadHabitantes;
			paisMenosHabitantesNombre=nombrePais;
			flagPaisMenosHabitantes=false;
		}

		if(temperaturaMinima>40) 
		{
			contadorPaisesSuperan40Grados++; // PUNTO D
			acumuladorHabitantesSuperan40Grados+=cantidadHabitantes; // PUNTO G
		}

		acumuladorHabitantes+=cantidadHabitantes // PUNTO F
		contadorTotalPaises++;

		if(flagPaisMenorTemperatura || temperaturaMinima<temperaturaPaisMenorTemperatura)
		{
			temperaturaPaisMenorTemperatura=temperaturaMinima;
			nombrePaisMenorTemperatura=nombrePais;
			flagPaisMenorTemperatura=false;
		}
	}

	promedioHabitantes=acumuladorHabitantes/5; // PUNTO F

	//validar entre america , asia , europa ,africa y oceania)
	if(acumuladorHabitantesAmerica>acumuladorHabitantesAsia && acumuladorHabitantesAmerica>acumuladorHabitantesEuropa && acumuladorHabitantesAmerica>acumuladorHabitantesAfrica && acumuladorHabitantesAmerica>acumuladorHabitantesOceania)
	{
		continenteMasHabitantes="america";
		continenteMasHabitantesCantidad=acumuladorHabitantesAmerica;
	}
	else if(acumuladorHabitantesAsia>acumuladorHabitantesAmerica && acumuladorHabitantesAsia>acumuladorHabitantesEuropa && acumuladorHabitantesAsia>acumuladorHabitantesAfrica && acumuladorHabitantesAsia>acumuladorHabitantesOceania)
	{
		continenteMasHabitantes="asia";
		continenteMasHabitantesCantidad=acumuladorHabitantesAsia;
	}
	else if(acumuladorHabitantesEuropa>acumuladorHabitantesAmerica && acumuladorHabitantesEuropa>acumuladorHabitantesAsia && acumuladorHabitantesEuropa>acumuladorHabitantesAfrica && acumuladorHabitantesEuropa>acumuladorHabitantesOceania)
	{
		continenteMasHabitantes="europa";
		continenteMasHabitantesCantidad=acumuladorHabitantesEuropa;
	}
	else if(acumuladorHabitantesAfrica>acumuladorHabitantesAsia && acumuladorHabitantesAfrica>acumuladorHabitantesEuropa && acumuladorHabitantesAfrica>acumuladorHabitantesAmerica && acumuladorHabitantesAfrica>acumuladorHabitantesOceania)
	{
		continenteMasHabitantes="africa";
		continenteMasHabitantesCantidad=acumuladorHabitantesAfrica;
	}
	else if(acumuladorHabitantesOceania>acumuladorHabitantesAsia && acumuladorHabitantesOceania>acumuladorHabitantesEuropa && acumuladorHabitantesOceania>acumuladorHabitantesAmerica && acumuladorHabitantesOceania>acumuladorHabitantesAfrica)
	{
		continenteMasHabitantes="oceania";
		continenteMasHabitantesCantidad=acumuladorHabitantesOceania;
	}


	// MUESTRA DE RESULTADOS
	document.write("a) La cantidad de temperaturas pares es: "+contadorTemperaturasPares+"</BR>");
	document.write("b) La cantidad de temperaturas impares de europa es: "+contadorTemperaturasImparesEuropa+"</BR>");
	document.write("c) El nombre del pais con menos habitantes es: "+paisMenosHabitantesNombre+"</BR>");
	if(contadorPaisesSuperan40Grados!=0)
	{
		document.write("d) La cantidad de paises que superan los 40 grados es: "+contadorPaisesSuperan40Grados+"</BR>");
	}
	else
	{
		document.write("d) Ningún pais ingresado supera los 40 grados. </BR>");
	}
	if(contadorPaisesAmericaMenos0Grados!=0)
	{
		document.write("e) La cantidad de paises de america que tienen menos de 0 grados es: "+contadorPaisesAmericaMenos0Grados+"</BR>");
	}
	else
	{
		document.write("e) Ningún pais ingresado en america tiene menos de 0 grados. </BR>");
	}
	document.write("f) El promedio de habitantes entre los paises ingresados es: "+promedioHabitantes+"</BR>");
	if(acumuladorHabitantesSuperan40Grados!=0)
	{
		promedioHabitantesSuperan40Grados=acumuladorHabitantesSuperan40Grados/5;
		document.write("g) El promedio de habitantes entre los paises que superan los 40 grados es: "+promedioHabitantesSuperan40Grados+"</BR>");
	}
	else
	{
		document.write("g) Ningún pais ingresado supera los 40 grados. </BR>");
	}
	document.write("h) La temperatura mínima ingresada es: "+temperaturaPaisMenorTemperatura+" y se registró en el pais: "+nombrePaisMenorTemperatura+"</BR>");
	if(continenteMasHabitantesCantidad!=0)
	{
		document.write("i) El continente que tiene mas habitantes es: "+continenteMasHabitantes+"</BR>");
	}
	else
	{
		document.write("i) Ningún continente tiene mas habitantes que los demas. </BR>");
	}

}