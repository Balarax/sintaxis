class Carrito {
	constructor(id_carrito, items, cantidades) {

		this.id_carrito = id_carrito;
		this.items = items;
		this.cantidades = cantidades || [];
	}

	get id_carrito() {
		return this._id_carrito;
	}
	set id_carrito(value) {
		this._id_carrito = value;
	}
	get items() {
		return this._items;
	}
	set items(value) {
		this._items = value;
	}
	get cantidades() {
		return this._cantidades;
	}
	set cantidades(value) {
		this._cantidades = value;
	}

	toString() {
		return this.id_carrito.carrito + " " + this.items + " " + this.cantidades;
	}
}

class Producto {
	constructor(num_serie, nombre, precio, iva) {
		this.num_serie = num_serie;
		this.nombre = nombre;
		this.precio = precio || 0;
		this.iva = iva || 0;
	}

	get num_serie() {
		return this._num_serie;
	}
	set num_serie(value) {
		this._num_serie = "S/N:" + value;
	}
	get nombre() {
		return this._nombre;
	}
	set nombre(value) {
		this._nombre = value;
	}
	get precio() {
		return this._precio;
	}
	set precio(value) {
		this._precio = value;
	}
	get iva() {
		return this._iva;
	}
	set iva(value) {
		this._iva = value;
	}

	toString() {
		return this.num_serie + " " + this.nombre + " " + this.precio + " " + this.iva;
	}
}

// Object.defineProperties(Producto, {
// 	"num_serie": { get: function () { return this.num_serie; } },
// 	"num_serie": { set: function (value) { this.num_serie = value; } },
// 	"nombre": { get: function () { return this.nombre; } },
// 	"nombre": { set: function (value) { this.nombre = value; } }
// });

class Camiseta extends Producto {
	constructor(num_serie, nombre, precio, iva, talla, color) {
		super(num_serie, nombre, precio, iva);
		this.talla = talla;
		this.color = color || "";
	}

	get talla() {
		return this._talla;
	}
	set talla(value) {
		this._talla = value;
	}
	get color() {
		return this._color;
	}
	set color(value) {
		this._color = value;
	}

	toString() {
		return this.num_serie + " " + this.nombre + " " + this.precio + " " + this.iva + " " + this.talla + " " + this.color;
	}
}

class Pantalon extends Producto {
	constructor(num_serie, nombre, precio, iva, talla, color, ancho, largo) {
		super(num_serie, nombre, precio, iva);
		this.talla = talla;
		this.color = color || "";
		this.ancho = ancho || 0;
		this.largo = largo || 0;
	}

	get talla() {
		return this._talla;
	}
	set talla(value) {
		this._talla = value;
	}
	get color() {
		return this._color;
	}
	set color(value) {
		this._color = value;
	}
	get ancho() {
		return this._ancho;
	}
	set ancho(value) {
		this._ancho = value;
	}
	get largo() {
		return this._largo;
	}
	set largo(value) {
		this._largo = value;
	}

	toString() {
		return this.num_serie + " " + this.nombre + " " + this.precio + " " + this.iva + " " + this.talla + " " + this.color + " " + this.ancho + " " + this.largo;
	}
}

class Zapatilla extends Producto {
	constructor(num_serie, nombre, precio, iva, numero, tipo) {
		super(num_serie, nombre, precio, iva);
		this.numero = numero;
		this.tipo = tipo;
	}

	get numero() {
		return this._numero;
	}
	set numero(value) {
		this._numero = value;
	}
	get tipo() {
		return this._tipo;
	}
	set tipo(value) {
		this._tipo = value;
	}

	toString() {
		return this.num_serie + " " + this.nombre + " " + this.precio + " " + this.iva + " " + this.numero + " " + this.tipo;
	}
}

var carritocompra = new Carrito(1, [], []);

function Anadir(precio, nombre) {

	precio = parseInt(precio);

	var Article = new Articulo;
	Article.nombre = nombre;
	Article.precio = precio;

	carritocompra.listararticulos.push(Article);

	carritocompra.unidades += 1;
	carritocompra.precio += precio;

	document.getElementById('mainScreen').innerHTML = "Unidades: " + carritocompra.unidades + "<br>Precio: " + carritocompra.precio + " €";
	document.getElementById('mostrarcarrito').innerHTML = "";

}

/*
Funcion para validar los campos Y AÑADIR LOS ARTICULOS
@version 1.0
*/

function ValidarCampos() {

	var tipo = document.getElementById('Selector').value;

	switch (tipo) {
		case 'Camiseta':
			var num_serie = document.getElementById('Num_serie').value;
			var nombre = document.getElementById('Nombre').value;
			var precio = document.getElementById('Precio').value;
			//var iva = document.getElementById('Iva').value;
			var talla = document.getElementById('Talla').value;
			var color = document.getElementById('Color').value;
			var cantidad = document.getElementById('Cantidad').value;


			try {
				var re = new RegExp('^\\d{8}$');
				console.log(re);
				var re1 = new RegExp('^(XS|S|M|L|XL|XXL|XXXL)$');
				console.log(re1);

				if (num_serie == "") {
					throw "ERROR, el numero de serie es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (nombre == "") {
					throw "ERROR, el nombre es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (talla == "") {
					throw "ERROR, la talla es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (!num_serie.match(re)) {
					throw "ERROR, el numero de serie debe contener 8 digitos";
				}

				// if (iva != 10) {
				// 	throw "ERROR, el iva para este articulo solo puede ser 10%";
				// }
				if (!talla.match(re1)) {
					throw "ERROR, las tallas disponibles son: XS | S | M | L | XL | XXL | XXXL";
				}

			} catch (error) {
				document.getElementById('ControlDeErrores').style.color = "red";
				document.getElementById('ControlDeErrores').innerHTML = error;
				break;
			}

			if (precio == "") {
				precio = 0;
			}
			if (cantidad == "") {
				cantidad = 1;
			}

			var Article = new Camiseta;
			Article.num_serie = num_serie;
			Article.nombre = nombre;
			Article.iva = 10;
			Article.precio = precio;
			Article.talla = talla;
			Article.color = color;

			carritocompra.items.push(Article);
			carritocompra.cantidades.push(cantidad);

			document.getElementById('ControlDeErrores').style.color = "green";
			document.getElementById('ControlDeErrores').innerHTML = "Articulo Añadido correctamente";


			break;

		case 'Pantalon':

			var num_serie = document.getElementById('Num_serie').value;
			var nombre = document.getElementById('Nombre').value;
			var precio = document.getElementById('Precio').value;
			// var iva = document.getElementById('Iva').value;
			var talla = document.getElementById('Talla').value;
			var color = document.getElementById('Color').value;
			var ancho = document.getElementById('Ancho').value;
			var largo = document.getElementById('Largo').value;
			var cantidad = document.getElementById('Cantidad').value;

			try {
				var re = new RegExp('^\\d{8}$');
				console.log(re);
				var re1 = new RegExp('^(XS|S|M|L|XL|XXL|XXXL)$');
				console.log(re1);
				var re2 = new RegExp('^([3][2-9]|[4][0-8])$');
				console.log(re2);
				var re3 = new RegExp('^([2][8-9]|[3-4][0-9]|[5][0-4])$');
				console.log(re3);

				if (num_serie == "") {
					throw "ERROR, el numero de serie es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (nombre == "") {
					throw "ERROR, el nombre es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (talla == "") {
					throw "ERROR, la talla es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (!num_serie.match(re)) {
					throw "ERROR, el numero de serie debe contener 8 digitos";
				}

				// if (iva!=10) {
				// 	throw "ERROR, el iva para este articulo solo puede ser 10%";
				// }

				if (!talla.match(re1)) {
					throw "ERROR, las tallas disponibles son: XS | S | M | L | XL | XXL | XXXL";
				}
				if (ancho != "") {

					if (!ancho.match(re2)) {
						throw "ERROR, el ancho debe ser un numero y estar entre 32 y 48";
					}

				}

				if (largo != "") {

					if (!largo.match(re3)) {
						throw "ERROR, el largo debe ser un numero y estar entre 28 y 54";
					}
				}

			} catch (error) {
				document.getElementById('ControlDeErrores').style.color = "red";
				document.getElementById('ControlDeErrores').innerHTML = error;
				break;
			}

			if (precio == "") {
				precio = 0;
			}
			if (ancho == "") {
				ancho = 0;
			}
			if (largo == "") {
				largo = 0;
			}
			if (cantidad == "") {
				cantidad = 1;
			}

			var Article = new Pantalon;
			Article.num_serie = num_serie;
			Article.nombre = nombre;
			Article.iva = 10;
			Article.precio = precio;
			Article.talla = talla;
			Article.color = color;
			Article.ancho = ancho;
			Article.largo = largo;

			carritocompra.items.push(Article);
			carritocompra.cantidades.push(cantidad);

			document.getElementById('ControlDeErrores').style.color = "green";
			document.getElementById('ControlDeErrores').innerHTML = "Articulo Añadido correctamente";

			break;

		case 'Zapatilla':
			var num_serie = document.getElementById('Num_serie').value;
			var nombre = document.getElementById('Nombre').value;
			var precio = document.getElementById('Precio').value;
			// var iva = document.getElementById('Iva').value;
			var numero = document.getElementById('Numero').value;
			var tipo = document.getElementById('Tipo').value;
			var cantidad = document.getElementById('Cantidad').value;

			try {
				var re = new RegExp('^\\d{8}$');
				console.log(re);
				var re1 = new RegExp('^(EU|USA|UK|CM)$');
				console.log(re1);
				var re2 = new RegExp('^([1][6-9]|[2-3][0-9]|[4][0-8])$');
				console.log(re2);

				if (num_serie == "") {
					throw "ERROR, el numero de serie es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (nombre == "") {
					throw "ERROR, el nombre es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (numero == "") {
					throw "ERROR, el numero es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (tipo == "") {
					throw "ERROR, el tipo es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (!num_serie.match(re)) {
					throw "ERROR, el numero de serie debe contener 8 digitos";
				}

				// if (iva!=10) {
				// 	throw "ERROR, el iva para este articulo solo puede ser 10%";
				// }


				if (!numero.match(re2)) {
					throw "ERROR, el numero debe ser un numero y estar entre 16 y 48";
				}

				if (!tipo.match(re1)) {
					throw "ERROR, los tipos disponibles son: EU | USA | UK | CM ";
				}

			} catch (error) {
				document.getElementById('ControlDeErrores').style.color = "red";
				document.getElementById('ControlDeErrores').innerHTML = error;
				break;
			}

			if (precio == "") {
				precio = 0;
			}
			if (cantidad == "") {
				cantidad = 1;
			}

			var Article = new Zapatilla;
			Article.num_serie = num_serie;
			Article.nombre = nombre;
			Article.iva = 4;
			Article.precio = precio;
			Article.numero = numero;
			Article.tipo = tipo;

			carritocompra.items.push(Article);
			carritocompra.cantidades.push(cantidad);

			document.getElementById('ControlDeErrores').style.color = "green";
			document.getElementById('ControlDeErrores').innerHTML = "Articulo Añadido correctamente";
			break;

		case 'Producto':

			var num_serie = document.getElementById('Num_serie').value;
			var nombre = document.getElementById('Nombre').value;
			var precio = document.getElementById('Precio').value;
			var iva = document.getElementById('Iva').value;
			var cantidad = document.getElementById('Cantidad').value;

			try {
				var re = new RegExp('^\\d{8}$');
				console.log(re);
				var re1 = new RegExp('^([0-9]|[1][0-9]|[2][01])$');
				console.log(re1);

				if (num_serie == "") {
					throw "ERROR, el numero de serie es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (nombre == "") {
					throw "ERROR, el nombre es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (!num_serie.match(re)) {
					throw "ERROR, el numero de serie debe contener 8 digitos";
				}
				if (iva != "") {

					if (!iva.match(re1)) {
						throw "ERROR, el iva no puede ser superior al 21%";
					}
				}


			} catch (error) {
				document.getElementById('ControlDeErrores').style.color = "red";
				document.getElementById('ControlDeErrores').innerHTML = error;
				break;
			}

			if (precio == "") {
				precio = 0;
			}

			if (iva == "") {
				iva = 0;
			}

			if (cantidad == "") {
				cantidad = 1;
			}

			var Article = new Producto;
			Article.num_serie = num_serie;
			Article.nombre = nombre;
			Article.iva = iva;
			Article.precio = precio;

			carritocompra.items.push(Article);
			carritocompra.cantidades.push(cantidad);

			document.getElementById('ControlDeErrores').style.color = "green";
			document.getElementById('ControlDeErrores').innerHTML = "Articulo Añadido correctamente";

			break;

		default:

			pintar += "<h4> Por favor, seleccione un articulo </h4>";

			break;
	}

}

/*
Funcion que genera la interfaz según lo que hayamos elegido en el desplegable
@version 1.0
*/
function GenerarCampos(tipo) {

	var div = document.getElementById('MostrarCampos');

	campos = new Array();
	switch (tipo) {
		case 'Camiseta':
			for (let i = 0; i < 6; i++) {  //IMPORTANTE, EL LIMITE DE LA VARIABLE i SERAN EL TOTAL DE CAMPOS QUE TENDRÁ QUE GENERAR

				var paragraph = document.createElement("p");

				var inputtext = document.createElement("input");
				inputtext.setAttribute("type", "text");

				var inputnumber = document.createElement("input");
				inputnumber.setAttribute("type", "number");

				if (i==0) {
					paragraph.appendChild(document.createTextNode("Numero de serie(Obligatorio): "));
					inputtext.setAttribute("id", "Num_serie");
					paragraph.appendChild(inputtext);
				}
				if (i==1) {
					paragraph.appendChild(document.createTextNode("Nombre(Obligatorio): "));
					inputtext.setAttribute("id", "Nombre");
					paragraph.appendChild(inputtext);
				}
				if (i==2) {
					paragraph.appendChild(document.createTextNode("Precio: "));
					inputnumber.setAttribute("id", "Precio");
					paragraph.appendChild(inputnumber);
				}
				if (i==3) {
					paragraph.appendChild(document.createTextNode("Talla(Obligatorio): "));
					inputtext.setAttribute("id", "Talla");
					paragraph.appendChild(inputtext);
				}
				if (i==4) {
					paragraph.appendChild(document.createTextNode("Color: "));
					inputtext.setAttribute("id", "Color");
					paragraph.appendChild(inputtext);
				}
				if (i==5) {
					paragraph.appendChild(document.createTextNode("Cantidad: "));
					inputtext.setAttribute("id", "Cantidad");
					paragraph.appendChild(inputtext);
				}

				div.appendChild(paragraph);
			}

			break;
		case 'Pantalon':
			pintar += "<p>Numero de serie(Obligatorio): <input type='text' id='Num_serie'></p>";
			pintar += "<p>Nombre(Obligatorio): <input type='text' id='Nombre'></p>";
			pintar += "<p>Precio: <input type='number' id='Precio'></p>";
			pintar += "<p>Talla(Obligatorio): <input type='text' id='Talla'></p>";
			pintar += "<p>Color: <input type='text' id='Color'></p>";
			pintar += "<p>Ancho: <input type='text' id='Ancho'></p>";
			pintar += "<p>Largo: <input type='text' id='Largo'></p>";
			pintar += "<p>Cantidad: <input type='text' id='Cantidad'></p>";

			break;
		case 'Zapatilla':
			pintar += "<p>Numero de serie(Obligatorio): <input type='text' id='Num_serie'></p>";
			pintar += "<p>Nombre(Obligatorio): <input type='text' id='Nombre'></p>";
			pintar += "<p>Precio: <input type='number' id='Precio'></p>";
			pintar += "<p>Numero(Obligatorio): <input type='text' id='Numero'></p>";
			pintar += "<p>Tipo(Obligatorio): <input type='text' id='Tipo'></p>";
			pintar += "<p>Cantidad: <input type='text' id='Cantidad'></p>";
			break;
		case 'Producto':
			pintar += "<p>Numero de serie(Obligatorio): <input type='text' id='Num_serie'></p>";
			pintar += "<p>Nombre(Obligatorio): <input type='text' id='Nombre'></p>";
			pintar += "<p>Precio: <input type='number' id='Precio'></p>";
			pintar += "<p>Iva: <input type='number' id='Iva'></p>";
			pintar += "<p>Cantidad: <input type='text' id='Cantidad'></p>";
			break;

		default:

			pintar += "<h4> Por favor, seleccione un articulo </h4>";

			break;
	}

	// document.getElementById('MostrarCampos').innerHTML = pintar;


}

/*
Funcion que muestra los articulos que se han introducido en el carrito
@version 1.0
*/
function MostrarCarrito() {

	var pintar = "";

	var cont = 0;
	var cont1 = 0;
	var cont2 = 0;
	var TotalArticulos = 0;
	var Totalprecio = 0;
	var PrecioSinIva = 0;

	//Con esto mostramos el total de articulos en nuestro carrito.
	for (x of carritocompra.cantidades) {
		x = parseInt(x);
		TotalArticulos += x;
	}

	carritocompra.items.forEach(element => {
		element.precio = parseInt(element.precio);
		Totalprecio += (element.precio * carritocompra.cantidades[cont2]);
		cont2++;
	});

	// Esta parte del codigo es para sacar los precios sin iva
	carritocompra.items.forEach(element => {
		element.precio = parseInt(element.precio);
		element.iva = parseInt(element.iva);
		PrecioSinIva += (element.precio * carritocompra.cantidades[cont1]) - (((element.precio * element.iva) / 100) * carritocompra.cantidades[cont1]);
		cont1++;
	});

	pintar += "<h4> Artículos en tu carrito: " + TotalArticulos + " </h4>";
	pintar += "<h4> Precio sin IVA: " + PrecioSinIva + "€ </h4>";
	pintar += "<h4> Precio total a pagar: " + Totalprecio + "€ </h4>";

	carritocompra.items.forEach(element => {

		pintar += "<input type='radio' name=article id=" + cont + " value=" + cont + ">" + element.num_serie + " - " + element.nombre + " - " + element.precio + "€ -- " + carritocompra.cantidades[cont] + " Unidades <br>";
		cont++;
	});

	document.getElementById('mostrarcarrito').innerHTML = pintar;

}
/*
Funcion que elimina los articulos marcados en el radiobutton generado en la funcion MostrarCarrito(), y a continuacion refresca la pantalla
@version 1.0
*/
function EliminarArticulo() {

	for (let i in carritocompra.items) {

		if (document.getElementById(i).checked) {
			carritocompra.items.splice(i, 1);
			carritocompra.cantidades.splice(i, 1);
		}
	}

	MostrarCarrito();
}

/*
Funcion DE PRUEBA DEL EJERCICIO, no se puede utilizar, a menos que actives el boton test en el html
@version 1.0
*/

function testExercise() {

	console.log(carritocompra.items);
	console.log(carritocompra.cantidades);


}
