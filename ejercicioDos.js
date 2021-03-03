/**
 * Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
i) que continente tiene mas habitantes.
 */

function probarEjercicio()
{
	var i;
	var continente;
	var nombrePais;
	var cantidadHabitantes;
	var nivelPobreza;
	var temperaturaMinima;

	var paisConMenosHabitantes;
	var cantidadMenosHabitantes;
	var acumuladorPaisesCalurosos =0;
	var habitantesPaisesCalurosos;
	var acumuladorPaisesFriosAmer =0;
	var cantidadHabitantesTotal;
	var promedioHabitantes;
	var promedioHabitantesPCalurosos;
	var temperaturaMinimaPais;
	var paisMasFrio;
	
	for (i = 0; i < 5; i++)
	{
		continente = prompt("Ingresar el continente: america, asia, europa, africa u oceania");

		while (!(continente == "america" || continente == "asia" || continente == "europa" || continente == "africa" || continente == "oceania"))
		{
			alert("Ingresaste un continente no valido");
			continente = prompt("Ingresar el continente: america, asia, europa, africa u oceania");
		}

		nombrePais = prompt("Ingrese el nombre del pais");

		cantidadHabitantes = prompt("Ingrese la cantidad de habitantes en millones: de 1 a 7000");

		while (cantidadHabitantes<1 || cantidadHabitantes >7000)
		{
			alert("Ingresaste una cantidad de habitantes no valida");
			cantidadHabitantes = prompt("Ingrese la cantidad de habitantes en millones: de 1 a 7000");
		}

		nivelPobreza = prompt("Ingrese el nivel de pobreza: pobre, rico, muy rico");
		
		if (continente == "europa")
		{
			while (nivelPobreza == "pobre")
			{
				alert("En europa no hay paises pobres");
				nivelPobreza = prompt("Ingrese el nivel de pobreza: pobre, rico, muy rico");
			}	
		}

		temperaturaMinima = prompt("Ingrese la temperatura minima del pais: entre -50 y 50");

		while (!(temperaturaMinima>-51 && temperaturaMinima <50))
		{
			alert("La temperatura ingresada no es valida");
			temperaturaMinima = prompt("Ingrese la temperatura minima del pais: entre -50 y 50");
		}

		//C

		cantidadMenosHabitantes = cantidadHabitantes;

		if (cantidadHabitantes < cantidadMenosHabitantes)
		{
			cantidadMenosHabitantes = cantidadHabitantes;
			paisConMenosHabitantes = nombrePais;
		}

		//D

		if (temperaturaMinima > 40)
		{
			acumuladorPaisesCalurosos = acumuladorPaisesCalurosos +1;
			habitantesPaisesCalurosos = cantidadHabitantes;

			if (habitantesPaisesCalurosos != cantidadHabitantes)
			{
				habitantesPaisesCalurosos = (habitantesPaisesCalurosos + cantidadHabitantes);
			}
		}

		//E

		switch (continente)
		{
			case "america":
				
					if (temperaturaMinima <0)
					{
						acumuladorPaisesFriosAmer = acumuladorPaisesFriosAmer +1;
					}
			
				break;
		
		}

		//F

		cantidadHabitantesTotal = cantidadHabitantes;

		if (cantidadHabitantesTotal != cantidadHabitantes)
		{
			cantidadHabitantesTotal = (cantidadHabitantesTotal + cantidadHabitantes);
		}

		//H

		temperaturaMinimaPais = temperaturaMinima;

		if (temperaturaMinima < temperaturaMinimaPais)
		{
			temperaturaMinimaPais = temperaturaMinima;
			paisMasFrio = nombrePais;
		}
	}

	//C

	alert ("El nombre del pais con menos habitantes es "+ paisConMenosHabitantes);

	//D

	if (acumuladorPaisesCalurosos != 0)
	{
		alert("La cantidad de paises calurosos es de "+ acumuladorPaisesCalurosos);
	}

	//E

	if (acumuladorPaisesFriosAmer != 0)
	{
		alert("La cantidad de paises de america que tienen menos de 0 grados son "+ acumuladorPaisesFriosAmer);
	}

	//F

	promedioHabitantes = cantidadHabitantesTotal /5;

	alert("El promedio de habitantes entre los paises ingresados es de "+ promedioHabitantes +" habitantes");

	//G

	promedioHabitantesPCalurosos = habitantesPaisesCalurosos / acumuladorPaisesCalurosos;

	if (acumuladorPaisesCalurosos != 0)
	{
		alert("El promedio de habitantes entre los paises que superan los 40 grados es de "+ promedioHabitantesPCalurosos + " habitantes");

	}

	//H

	alert("la temperatura mínima ingresada fue de "+ temperaturaMinimaPais + " y el del pais que registro esa temperatura es "+ paisMasFrio);
}