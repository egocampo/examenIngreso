/*****************************************
| ALUMNO: OCAMPO GABRIEL
| DIVISION: 1°G
| FECHA: 03/03/2021
| EXAMEN INGRESO: PROGRAMACION INICIAL
| EJERCICIO 01
******************************************
Enunciado:
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/

function mostrar()
{
	var nombreProducto;
	var tipoProducto; // (validar "ALCOHOL", "IAC" o "QUAT")
	var precioProducto; // (validar entre 100 y 300)
	var cantidadUnidadesProducto; // (no puede ser 0 o negativo y no debe superar las 1000 unidades)
	var tipoInflamableProducto; // ("ignífugo", "combustible", "explosivo" )
	var marcaProducto;
	var acumuladorAlcohol=0;
	var acumuladorIac=0;
	var acumuladorQuat=0;
	var acumuladorTotalCantidadUnidades=0;
	var promedioAlcohol;
	var promedioIac;
	var promedioQuat;
	var stringPuntoA="a) El promedio de cantidad por tipo de producto es: ";
	var acumuladorIacPrecioMenor200=0;
	var flagProductoMasCaro=true;
	var precioProductoMasCaro;
	var marcaProductoMasCaro;
	var tipoProductoMasCaro;
	var acumuladorIgnifugo=0;
	var acumuladorCombustible=0;
	var acumuladorExplosivo=0;
	var stringPuntoB="b) No se ingresaron productos Inflamables. </BR>"
	
	for(var i=0;i<5;i++)
	{
		nombreProducto=prompt("Ingrese el nombre del producto");
		while(!(isNaN(nombreProducto)))
		{
			nombreProducto=prompt("Nombre no váldo. Ingrese el nombre del producto");
		}
		tipoProducto=prompt("Ingrese el tipo del producto (alcohol, iac, quat)");
		while(tipoProducto!="alcohol" && tipoProducto!="iac" && tipoProducto!="quat")
		{
			tipoProducto=prompt("Tipo no válido. Ingrese el tipo del producto (alcohol, iac, quat)");
		}
		precioProducto=parseFloat(prompt("Ingrese el precio del producto (entre 100 y 300)"));
		while(isNaN(precioProducto) || precioProducto<100 || precioProducto>300)
		{
			precioProducto=parseFloat(prompt("Precio no válido. Ingrese el precio del producto (entre 100 y 300)"));
		}
		cantidadUnidadesProducto=parseInt(prompt("Ingrese la cantidad de unidades del producto (entre 1 y 1000)"));
		while(isNaN(cantidadUnidadesProducto) || cantidadUnidadesProducto<1 || cantidadUnidadesProducto>1000)
		{
			cantidadUnidadesProducto=parseInt(prompt("Cantidad no válida. Ingrese la cantidad de unidades del producto (entre 1 y 1000)"));
		}
		tipoInflamableProducto=prompt("Ingrese el tipo de inflamable (ignifugo, combustible, explosivo)");
		while(tipoInflamableProducto!="ignifugo" && tipoInflamableProducto!="combustible" && tipoInflamableProducto!="explosivo")
		{
			tipoInflamableProducto=prompt("Tipo de inflamable no válido. Ingrese el tipo de inflamable (ignifugo, combustible, explosivo)");
		}
		marcaProducto=prompt("Ingrese la marca del producto");
		while(!(isNaN(marcaProducto)))
		{
			marcaProducto=prompt("Marca no válida. Ingrese la marca del producto");
		}
		
		// COMIENZO DE LOS CALCULOS
		acumuladorTotalCantidadUnidades+=cantidadUnidadesProducto; // PUNTO A
		switch(tipoProducto)
		{
			case "alcohol":
				acumuladorAlcohol+=cantidadUnidadesProducto;
				break;
			case "iac":
				acumuladorIac+=cantidadUnidadesProducto;
				if(precioProducto<=200)
				{
					acumuladorIacPrecioMenor200+=cantidadUnidadesProducto;
				}
				break;
			case "quat":
				acumuladorQuat+=cantidadUnidadesProducto;
				break;
		}
		if(flagProductoMasCaro || precioProducto>precioProductoMasCaro)
		{
			precioProductoMasCaro=precioProducto;
			marcaProductoMasCaro=nombreProducto;
			tipoProductoMasCaro=tipoProducto;
		}
		if(tipoInflamableProducto=="ignifugo")
		{
			acumuladorIgnifugo+=cantidadUnidadesProducto;
		}
		else if(tipoInflamableProducto=="combustible")
		{
			acumuladorCombustible+=cantidadUnidadesProducto;
		}
		else
		{
			acumuladorExplosivo+=cantidadUnidadesProducto;
		}

	}
	
	promedioAlcohol=acumuladorAlcohol/acumuladorTotalCantidadUnidades;
	promedioIac=acumuladorIac/acumuladorTotalCantidadUnidades;
	promedioQuat=acumuladorQuat/acumuladorTotalCantidadUnidades;
	stringPuntoA+=promedioAlcohol+" unidades de alcohol, "+promedioIac+" unidades de iac y "+promedioQuat+" unidades de quat. </BR>";

	if((acumuladorIgnifugo+acumuladorCombustible+acumuladorExplosivo)!=0)
	{
		stringPuntoB="b) El tipo de inflamable con más cantidad de unidades en total de la compra es: ";
		if(acumuladorIgnifugo>acumuladorCombustible && acumuladorIgnifugo>acumuladorExplosivo)
		{
			stringPuntoB+="ignifugo. </BR>";
		}
		else if(acumuladorCombustible>acumuladorIgnifugo && acumuladorCombustible>acumuladorExplosivo)
		{
			stringPuntoB+="combustible. </BR>";
		}
		else if(acumuladorExplosivo>acumuladorIgnifugo && acumuladorExplosivo>acumuladorCombustible)
		{
			stringPuntoB+="explosivo. </BR>";
		}
		else
		{
			stringPuntoB="b) Ningún inflamable sólo tiene más unidades que otro. </BR>"
		}
	}	

	document.write(stringPuntoA);
	document.write(stringPuntoB);
	if(acumuladorIacPrecioMenor200!=0)
	{
		document.write("c) Se compraron "+acumuladorIacPrecioMenor200+" unidades de IAC con precios menos a 200 (inclusive). </BR>");
	}
	else
	{
		document.write("c) No se compraron unidades de IAC con precios menos a 200 (inclusive). </BR>");
	}
	document.write("d) El más caro de los productos es de la marca: "+marcaProductoMasCaro+" y del tipo: "+tipoProductoMasCaro+"</BR>")
}