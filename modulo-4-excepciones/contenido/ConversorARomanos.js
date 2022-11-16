//Convierte un número de cuatro cifras máximo a números romanos
function cRomano(n)
{
  //Convierto el número en su representación decimal
  var sn = n.toString(10);

  var simb1, simb2, simb3;
  var sAux = "";
  //rotamos por las distintas cifras constituyentes
  for (i=0; i<sn.Length; i++)
  {
	//Se establecen los símbolos en el rango actual
	//(millares, centenas, decenas o unidades)
	switch (sn.length)
	{
	case 4:	//millares
		  simb1 = "M", simb2 = "V" + String.fromCharCode(772), simb3 = "X" + String.fromCharCode(772);
		break;
	case 3:	//centenas
		 simb1 = "C", simb2="D", simb3="M";
		break;
	case 2:	//decenas
		 simb1 = "X", simb2="L", simb3="C";
		break;
	case 1:	//unidades
		 simb1 = "I", simb2="V", simb3="X";
		break;
	}
	//ahora miramos qué números romanos corresponden
	switch (parseInt(sn.substr(i, 1),10))
	{
	  case 1:
		 sAux += simb1;
		 break;
	  case 2:
		 sAux += simb1 + simb1;
		 break;
	  case 3:
		 sAux += simb1 + simb1 + simb1;
		 break;
	  case 4:
		 sAux += simb1 + simb2;
		 break;
	  case 5:
		 sAux += simb2;
		 break;
	  case 6:
		 sAux += simb2 + simb1;
		 break;
	  case 7:
		 sAux += simb2 + simb1 + simb1;
		 break;
	  case 8:
		 sAux += simb2 + simb1 + simb1 + simb1;
		 break;
	  case 9:
		 sAux += simb1 + simb3;
		 break;
	 }
  }
  return sAux;
}