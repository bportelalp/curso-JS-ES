<%
	Dim items
	Select Case LCase(Request("tipo"))
		Case "revistas"
			items = Array("PC World", "MSDN Magazine", "CodeProject")
		Case "blogs"
			items = Array("www.campusmvp.com", "www.jasoft.org", "jmalarcon.es")
		Case "empresas"
			items = Array("Krasis [www.krasis.com]", "Microsoft [www.microsoft.com]", "Plain Concepts [www.plainconcepts.com]")
		Case "libros"
			items = Array("Crimen y castigo", "Cien años de soledad", "El Quijote")
	End Select
	
	'Se devuelve como XML
	Response.ContentType = "text/xml"
	'Se evita que haya caché de este contenido devuelto
	Response.AddHeader "cache-control", "no-cache"
	Response.Expires = -1

	'Se devuelve el XML
	Response.Write DevuelveMatriz(items)

'Esta función se encarga decrear el XML apropiado
Function DevuelveMatriz(arrItems)
	Dim sRes
	sRes = "<?xml version=""1.0"" encoding=""ISO-8859-1"" ?>" & vbCrLf & "<items>"
	
	If IsArray(arrItems) Then
		'Se recorre la matriz para construir el XML
		For Each item In arrItems
			sRes = sRes + "<item>" + item + "</item>"
		Next
	Else
		sRes = sRes + "<item>[Sin elementos]</item>"
	End If
	
	sRes = sRes + "</items>"
	
	DevuelveMatriz = sRes
End Function
%>