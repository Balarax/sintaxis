"use strict"

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

/*VARIABLES GLOBALES:*/

var TotalArticulos = 0;

/*FUNCIONES QUE SE VAN A EJECUTAR AL INICIAR LA PÁGINA:*/

window.onload = function(){
	MostrarContadores();
	load();
}

/*
Funcion para validar los campos
Esta funcion esta diseñada para que se ejecute de dos maneras:
-Con un evento blur, para que se verifiquen en tiempo real los campos pero sin llamar a la funcion anadir() (debemos pasarle el parametro 1)
-Con un evento clic(normalmente asociado a un boton), que este si añadirá los articulos.
@version 1.0
*/

function ValidarCampos(modo) {

	var tipo = document.getElementById('Selector').value;
	var div = document.getElementById("ControlDeErrores");

	console.log(tipo);
	switch (tipo) {
		case 'Camiseta':
			var num_serie = document.getElementById('Num_serie').value;
			var nombre = document.getElementById('Nombre').value;
			//var iva = document.getElementById('Iva').value;
			var talla = document.getElementById('Talla').value.toUpperCase();


			try {
				var re = new RegExp('^\\d{8}$');
				console.log(re);
				var re1 = new RegExp('^(XS|S|M|L|XL|XXL|XXXL)$');
				console.log(re1);

				if (num_serie == "" && modo == 1) {
					throw "ERROR, el numero de serie es un campo OBLIGATORIO y no puede estar vacío";
				}
				if (num_serie != "") {
					if (!num_serie.match(re)) {
						throw "ERROR, el numero de serie debe contener 8 digitos";
					}
				}
				if (nombre == "" && modo == 1) {
					throw "ERROR, el nombre es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (talla == "" && modo == 1) {
					throw "ERROR, la talla es un campo OBLIGATORIO y no puede estar vacío";
				}

				// if (iva != 10) {
				// 	throw "ERROR, el iva para este articulo solo puede ser 10%";
				// }
				if (talla != "") {
					if (!talla.match(re1)) {
						throw "ERROR, las tallas disponibles son: XS | S | M | L | XL | XXL | XXXL";
					}
				}

			} catch (error) {
				div.innerHTML = "";
				div.style.color = "red";
				div.appendChild(document.createTextNode(error));
				break;
			}
			div.innerHTML = "";
			if (modo == 1) {
				Anadir("Camiseta", 1);
			}

			break;

		case 'Pantalon':

			var num_serie = document.getElementById('Num_serie').value;
			var nombre = document.getElementById('Nombre').value;
			var precio = document.getElementById('Precio').value;
			// var iva = document.getElementById('Iva').value;
			var talla = document.getElementById('Talla').value.toUpperCase();
			var ancho = document.getElementById('Ancho').value;
			var largo = document.getElementById('Largo').value;


			try {
				var re = new RegExp('^\\d{8}$');
				console.log(re);
				var re1 = new RegExp('^(XS|S|M|L|XL|XXL|XXXL)$');
				console.log(re1);
				var re2 = new RegExp('^([3][2-9]|[4][0-8])$');
				console.log(re2);
				var re3 = new RegExp('^([2][8-9]|[3-4][0-9]|[5][0-4])$');
				console.log(re3);

				if (num_serie == "" && modo == 1) {
					throw "ERROR, el numero de serie es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (num_serie != "") {
					if (!num_serie.match(re)) {
						throw "ERROR, el numero de serie debe contener 8 digitos";
					}
				}
				if (nombre == "" && modo == 1) {
					throw "ERROR, el nombre es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (talla == "" && modo == 1) {
					throw "ERROR, la talla es un campo OBLIGATORIO y no puede estar vacío";
				}

				// if (iva!=10) {
				// 	throw "ERROR, el iva para este articulo solo puede ser 10%";
				// }
				if (talla != "") {
					if (!talla.match(re1)) {
						throw "ERROR, las tallas disponibles son: XS | S | M | L | XL | XXL | XXXL";
					}
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
				div.innerHTML = "";
				div.style.color = "red";
				div.appendChild(document.createTextNode(error));
				break;
			}
			div.innerHTML = "";
			if (modo == 1) {
				Anadir("Pantalon", 1);
			}

			break;

		case 'Zapatilla':
			var num_serie = document.getElementById('Num_serie').value;
			var nombre = document.getElementById('Nombre').value;
			// var iva = document.getElementById('Iva').value;
			var numero = document.getElementById('Numero').value;
			var tipo = document.getElementById('Tipo').value.toUpperCase();


			try {
				var re = new RegExp('^\\d{8}$');
				console.log(re);
				var re1 = new RegExp('^(EU|USA|UK|CM)$');
				console.log(re1);
				var re2 = new RegExp('^([1][6-9]|[2-3][0-9]|[4][0-8])$');
				console.log(re2);

				if (num_serie == "" && modo == 1) {
					throw "ERROR, el numero de serie es un campo OBLIGATORIO y no puede estar vacío";
				}
				if (num_serie != "") {
					if (!num_serie.match(re)) {
						throw "ERROR, el numero de serie debe contener 8 digitos";
					}
				}
				if (nombre == "" && modo == 1) {
					throw "ERROR, el nombre es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (numero == "" && modo == 1) {
					throw "ERROR, el numero es un campo OBLIGATORIO y no puede estar vacío";
				}
				if (numero != "") {
					if (!numero.match(re2)) {
						throw "ERROR, el numero debe ser un numero y estar entre 16 y 48";
					}
				}
				if (tipo == "" && modo == 1) {
					throw "ERROR, el tipo es un campo OBLIGATORIO y no puede estar vacío";
				}

				// if (iva!=10) {
				// 	throw "ERROR, el iva para este articulo solo puede ser 10%";
				// }
				if (tipo != "") {
					if (!tipo.match(re1)) {
						throw "ERROR, los tipos disponibles son: EU | USA | UK | CM ";
					}
				}

			} catch (error) {
				div.innerHTML = "";
				div.style.color = "red";
				div.appendChild(document.createTextNode(error));
				break;
			}
			div.innerHTML = "";
			if (modo == 1) {
				Anadir("Zapatilla", 1);
			}

			break;

		case 'Producto':

			var num_serie = document.getElementById('Num_serie').value;
			var nombre = document.getElementById('Nombre').value;
			var iva = document.getElementById('Iva').value;

			try {
				var re = new RegExp('^\\d{8}$');
				console.log(re);
				var re1 = new RegExp('^([0-9]|[1][0-9]|[2][01])$');
				console.log(re1);

				if (num_serie == "" && modo == 1) {
					throw "ERROR, el numero de serie es un campo OBLIGATORIO y no puede estar vacío";
				}
				if (num_serie != "") {
					if (!num_serie.match(re)) {
						throw "ERROR, el numero de serie debe contener 8 digitos";
					}
				}

				if (nombre == "" && modo == 1) {
					throw "ERROR, el nombre es un campo OBLIGATORIO y no puede estar vacío";
				}

				if (iva != "") {
					if (!iva.match(re1)) {
						throw "ERROR, el iva no puede ser superior al 21%";
					}
				}

			} catch (error) {
				div.innerHTML = "";
				div.style.color = "red";
				div.appendChild(document.createTextNode(error));
				break;
			}
			div.innerHTML = "";
			if (modo == 1) {
				Anadir("Producto", 1);
			}

			break;
	}

}

/*
Funcion que añade objetos al carrito
@version 2.0
*/

function Anadir(producto, confirmacion) {

	var div = document.getElementById("ControlDeErrores");

	switch (producto) {
		case 'Camiseta':
			if (confirmacion == 1) {
				var num_serie = document.getElementById('Num_serie').value;
				var nombre = document.getElementById('Nombre').value;
				var precio = document.getElementById('Precio').value;
				var talla = document.getElementById('Talla').value.toUpperCase();
				var color = document.getElementById('Color').value;
				var cantidad = document.getElementById('Cantidad').value;

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

				div.innerHTML = "";
				div.style.color = "green";
				div.appendChild(document.createTextNode("Articulo Añadido correctamente"));
				MostrarContadores();

			} else {
				div.innerHTML = "";
				div.style.color = "red";
				div.appendChild(document.createTextNode("Ha ocurrido un error inesperado, no se ha podido añadir su producto"));
			}
			break;
		case 'Pantalon':
			if (confirmacion == 1) {
				var num_serie = document.getElementById('Num_serie').value;
				var nombre = document.getElementById('Nombre').value;
				var precio = document.getElementById('Precio').value;
				// var iva = document.getElementById('Iva').value;
				var talla = document.getElementById('Talla').value.toUpperCase();
				var color = document.getElementById('Color').value;
				var ancho = document.getElementById('Ancho').value;
				var largo = document.getElementById('Largo').value;
				var cantidad = document.getElementById('Cantidad').value;

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

				div.innerHTML = "";
				div.style.color = "green";
				div.appendChild(document.createTextNode("Articulo Añadido correctamente"));
				MostrarContadores();

			} else {
				div.innerHTML = "";
				div.style.color = "red";
				div.appendChild(document.createTextNode("Ha ocurrido un error inesperado, no se ha podido añadir su producto"));
			}
			break;
		case 'Zapatilla':
			if (confirmacion == 1) {
				var num_serie = document.getElementById('Num_serie').value;
				var nombre = document.getElementById('Nombre').value;
				var precio = document.getElementById('Precio').value;
				// var iva = document.getElementById('Iva').value;
				var numero = document.getElementById('Numero').value;
				var tipo = document.getElementById('Tipo').value.toUpperCase();
				var cantidad = document.getElementById('Cantidad').value;

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
				MostrarContadores();

			} else {
				div.innerHTML = "";
				div.style.color = "red";
				div.appendChild(document.createTextNode("Ha ocurrido un error inesperado, no se ha podido añadir su producto"));
			}
			break;
		case 'Producto':

			if (confirmacion == 1) {

				var num_serie = document.getElementById('Num_serie').value;
				var nombre = document.getElementById('Nombre').value;
				var precio = document.getElementById('Precio').value;
				var iva = document.getElementById('Iva').value;
				var cantidad = document.getElementById('Cantidad').value;

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

				div.innerHTML = "";
				div.style.color = "green";
				div.appendChild(document.createTextNode("Articulo Añadido correctamente"));
				MostrarContadores();

			} else {
				div.innerHTML = "";
				div.style.color = "red";
				div.appendChild(document.createTextNode("Ha ocurrido un error inesperado, no se ha podido añadir su producto"));
			}
			break;
	}

}

/*
Funcion que genera los campos del formulario del articulo a añadir
@version 2.0
*/

function GenerarCampos(tipo) {

	var div = document.getElementById('MostrarCampos');
	var Selector = document.getElementById('Selector'); //Esto servirá para meter el tipo de objeto en este campo oculto para luego mandarle la informacion a la funcion validar

	var confirmbutton = document.createElement("button");
	confirmbutton.setAttribute("class", "btn btn-secondary"); //Atributo para mejorar apariencia con boostrap
	confirmbutton.appendChild(document.createTextNode("Confirmar"));
	confirmbutton.addEventListener("click", function () {  //Importantisimo, en el boton, cuando llamamos a la funcion, esta tiene que ejecutarse en "modo 1" para que añada articulos
		ValidarCampos(1);
	});

	var campos = new Array();

	switch (tipo) {
		case 'Camiseta':
			div.innerHTML = "";
			Selector.value = "";
			Selector.value = "Camiseta";

			var divbootstrap = document.createElement("div");
			divbootstrap.setAttribute("class", "col-sm-3 my-2");

			var paragraph = document.createElement("p");
			paragraph.appendChild(document.createTextNode("  Has seleccionado camiseta, por favor, introduce los datos del producto: "));
			div.appendChild(paragraph);

			for (let i = 0; i < 6; i++) {  //IMPORTANTE, EL LIMITE DE LA VARIABLE i SERAN EL TOTAL DE CAMPOS QUE TENDRÁ QUE GENERAR

				var br = document.createElement("br");

				var inputtext = document.createElement("input");
				inputtext.setAttribute("type", "text");
				inputtext.setAttribute("class", "form-control"); //BOOTSTRAP
				inputtext.addEventListener("blur", function () {  //Importantisimo, los campos, cuando llamamos a la funcion, esta tiene que ejecutarse en "modo 0" para que NO AÑADA ARTICULOS
					ValidarCampos(0);
				});

				var inputnumber = document.createElement("input");
				inputnumber.setAttribute("type", "number");
				inputnumber.setAttribute("class", "form-control"); //BOOTSTRAP
				inputnumber.addEventListener("blur", function () {  //Importantisimo, los campos, cuando llamamos a la funcion, esta tiene que ejecutarse en "modo 0" para que NO AÑADA ARTICULOS
					ValidarCampos(0);
				});

				if (i == 0) {
					// paragraph.appendChild(document.createTextNode("Numero de serie(Obligatorio): "));
					inputtext.setAttribute("placeholder", "Numero de serie(Obligatorio)");
					inputtext.setAttribute("id", "Num_serie");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 1) {
					inputtext.setAttribute("placeholder", "Nombre(Obligatorio) ");
					inputtext.setAttribute("id", "Nombre");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 2) {
					inputnumber.setAttribute("placeholder", "Precio ");
					inputnumber.setAttribute("id", "Precio");
					divbootstrap.appendChild(inputnumber);
					divbootstrap.appendChild(br);
				}
				if (i == 3) {
					inputtext.setAttribute("placeholder", "Talla(Obligatorio) ");
					inputtext.setAttribute("id", "Talla");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 4) {
					inputtext.setAttribute("placeholder", "Color ");
					inputtext.setAttribute("id", "Color");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 5) {
					inputtext.setAttribute("placeholder", "Cantidad ");
					inputtext.setAttribute("id", "Cantidad");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}

				div.appendChild(divbootstrap);
			}

			divbootstrap.appendChild(confirmbutton);

			break;

		case 'Pantalon':
			div.innerHTML = "";
			Selector.value = "";
			Selector.value = "Pantalon";

			var divbootstrap = document.createElement("div");
			divbootstrap.setAttribute("class", "col-sm-3 my-2");

			var paragraph = document.createElement("p");
			paragraph.appendChild(document.createTextNode("  Has seleccionado pantalón, por favor, introduce los datos del producto: "));
			div.appendChild(paragraph);

			for (let i = 0; i < 8; i++) {  //IMPORTANTE, EL LIMITE DE LA VARIABLE i SERAN EL TOTAL DE CAMPOS QUE TENDRÁ QUE GENERAR

				var br = document.createElement("br");

				var inputtext = document.createElement("input");
				inputtext.setAttribute("type", "text");
				inputtext.setAttribute("class", "form-control"); //BOOTSTRAP
				inputtext.addEventListener("blur", function () {  //Importantisimo, los campos, cuando llamamos a la funcion, esta tiene que ejecutarse en "modo 0" para que NO AÑADA ARTICULOS
					ValidarCampos(0);
				});

				var inputnumber = document.createElement("input");
				inputnumber.setAttribute("type", "number");
				inputnumber.setAttribute("class", "form-control"); //BOOTSTRAP
				inputnumber.addEventListener("blur", function () {  //Importantisimo, los campos, cuando llamamos a la funcion, esta tiene que ejecutarse en "modo 0" para que NO AÑADA ARTICULOS
					ValidarCampos(0);
				});

				if (i == 0) {
					inputtext.setAttribute("placeholder", "Numero de serie(Obligatorio)");
					inputtext.setAttribute("id", "Num_serie");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 1) {
					inputtext.setAttribute("placeholder", "Nombre(Obligatorio)");
					inputtext.setAttribute("id", "Nombre");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 2) {
					inputnumber.setAttribute("placeholder", "Precio");
					inputnumber.setAttribute("id", "Precio");
					divbootstrap.appendChild(inputnumber);
					divbootstrap.appendChild(br);
				}
				if (i == 3) {
					inputtext.setAttribute("placeholder", "Talla(Obligatorio)");
					inputtext.setAttribute("id", "Talla");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 4) {
					inputtext.setAttribute("placeholder", "Color ");
					inputtext.setAttribute("id", "Color");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 5) {
					inputtext.setAttribute("placeholder", "Ancho");
					inputtext.setAttribute("id", "Ancho");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 6) {
					inputtext.setAttribute("placeholder", "Largo ");
					inputtext.setAttribute("id", "Largo");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 7) {
					inputtext.setAttribute("placeholder", "Cantidad ");
					inputtext.setAttribute("id", "Cantidad");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}

				div.appendChild(divbootstrap);
			}

			divbootstrap.appendChild(confirmbutton);

			break;

		case 'Zapatilla':

			div.innerHTML = "";
			Selector.value = "";
			Selector.value = "Zapatilla";

			var divbootstrap = document.createElement("div");
			divbootstrap.setAttribute("class", "col-sm-3 my-2");

			var paragraph = document.createElement("p");
			paragraph.appendChild(document.createTextNode("  Has seleccionado zapatilla, por favor, introduce los datos del producto: "));
			div.appendChild(paragraph);

			for (let i = 0; i < 6; i++) {  //IMPORTANTE, EL LIMITE DE LA VARIABLE i SERAN EL TOTAL DE CAMPOS QUE TENDRÁ QUE GENERAR

				var br = document.createElement("br");

				var inputtext = document.createElement("input");
				inputtext.setAttribute("type", "text");
				inputtext.setAttribute("class", "form-control"); //BOOTSTRAP
				inputtext.addEventListener("blur", function () {  //Importantisimo, los campos, cuando llamamos a la funcion, esta tiene que ejecutarse en "modo 0" para que NO AÑADA ARTICULOS
					ValidarCampos(0);
				});

				var inputnumber = document.createElement("input");
				inputnumber.setAttribute("type", "number");
				inputnumber.setAttribute("class", "form-control"); //BOOTSTRAP
				inputnumber.addEventListener("blur", function () {  //Importantisimo, los campos, cuando llamamos a la funcion, esta tiene que ejecutarse en "modo 0" para que NO AÑADA ARTICULOS
					ValidarCampos(0);
				});

				if (i == 0) {
					inputtext.setAttribute("placeholder", "Numero de serie(Obligatorio) ");
					inputtext.setAttribute("id", "Num_serie");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 1) {
					inputtext.setAttribute("placeholder", "Nombre(Obligatorio) ");
					inputtext.setAttribute("id", "Nombre");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 2) {
					inputnumber.setAttribute("placeholder", "Precio ");
					inputnumber.setAttribute("id", "Precio");
					divbootstrap.appendChild(inputnumber);
					divbootstrap.appendChild(br);
				}
				if (i == 3) {
					inputtext.setAttribute("placeholder", "Numero(Obligatorio) ");
					inputtext.setAttribute("id", "Numero");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 4) {
					inputtext.setAttribute("placeholder", "Tipo(Obligatorio) ");
					inputtext.setAttribute("id", "Tipo");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 5) {
					inputtext.setAttribute("placeholder", "Cantidad ");
					inputtext.setAttribute("id", "Cantidad");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}

				div.appendChild(divbootstrap);
			}

			divbootstrap.appendChild(confirmbutton);

			break;

		case 'Producto':

			div.innerHTML = "";
			Selector.value = "";
			Selector.value = "Producto";

			var divbootstrap = document.createElement("div");
			divbootstrap.setAttribute("class", "col-sm-3 my-2");

			var paragraph = document.createElement("p");
			paragraph.appendChild(document.createTextNode("  Has seleccionado otro producto, por favor, introduce los datos del producto: "));
			div.appendChild(paragraph);

			for (let i = 0; i < 5; i++) {  //IMPORTANTE, EL LIMITE DE LA VARIABLE i SERAN EL TOTAL DE CAMPOS QUE TENDRÁ QUE GENERAR

				var br = document.createElement("br");

				var inputtext = document.createElement("input");
				inputtext.setAttribute("type", "text");
				inputtext.setAttribute("class", "form-control"); //BOOTSTRAP
				inputtext.addEventListener("blur", function () {  //Importantisimo, los campos, cuando llamamos a la funcion, esta tiene que ejecutarse en "modo 0" para que NO AÑADA ARTICULOS
					ValidarCampos(0);
				});

				var inputnumber = document.createElement("input");
				inputnumber.setAttribute("type", "number");
				inputnumber.setAttribute("class", "form-control"); //BOOTSTRAP
				inputnumber.addEventListener("blur", function () {  //Importantisimo, los campos, cuando llamamos a la funcion, esta tiene que ejecutarse en "modo 0" para que NO AÑADA ARTICULOS
					ValidarCampos(0);
				});

				if (i == 0) {
					inputtext.setAttribute("placeholder", "Numer de serie(Obligatorio) ");
					inputtext.setAttribute("id", "Num_serie");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 1) {
					inputtext.setAttribute("placeholder", "Nombre(Obligatorio) ");
					inputtext.setAttribute("id", "Nombre");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}
				if (i == 2) {
					inputnumber.setAttribute("placeholder", "Precio ");
					inputnumber.setAttribute("id", "Precio");
					divbootstrap.appendChild(inputnumber);
					divbootstrap.appendChild(br);
				}
				if (i == 3) {
					inputtext.setAttribute("placeholder", "Iva ");
					inputtext.setAttribute("id", "Iva");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}

				if (i == 4) {
					inputtext.setAttribute("placeholder", "Cantidad ");
					inputtext.setAttribute("id", "Cantidad");
					divbootstrap.appendChild(inputtext);
					divbootstrap.appendChild(br);
				}

				div.appendChild(divbootstrap);
			}

			divbootstrap.appendChild(confirmbutton);

			break;

		default:

			//NUNCA SE VA A MOSTRAR ESTA OPCIÓN, PERO POR SI ACASO LO DEJAMOS PARA MAS SOLIDEZ DEL CÓDIGO

			titulo = createElement("h4");
			div.appendChild(titulo.createTextNode("Por favor, seleccione un articulo"));

			break;
	}
}

/*
Funcion que muestra los articulos que se han introducido en el carrito
@version 2.0
*/

function MostrarCarrito() {


	var div = document.getElementById("mostrarcarrito");
	div.innerHTML = "";

	var Title = document.createElement("h2");
	Title.appendChild(document.createTextNode("Listado:"));
	var Articlelist = document.createElement("ul");

	var cont = 0;

	carritocompra.items.forEach(element => {

		var Article = document.createElement("li");
		Article.appendChild(document.createTextNode(element.num_serie + " - " + element.nombre + " - " + element.precio + "€ -- " + carritocompra.cantidades[cont] + " Unidades"));
		Articlelist.appendChild(Article);
		cont++;
	});

	div.appendChild(Title);
	div.appendChild(Articlelist);

}

/*
Funcion que muestra los contadores de articulos, precio total y precio sin iva
@version 2.0
*/

function MostrarContadores() {
	var div = document.getElementById("mostrarcontador");
	div.innerHTML = "";

	var TitleTotalArticles = document.createElement("h4");
	var TitlePriceWithoutIVA = document.createElement("h4");
	var TitleTotalPrice = document.createElement("h4");

	var cont1 = 0;
	var cont2 = 0;
	TotalArticulos = 0;
	var Totalprecio = 0;
	var PrecioSinIva = 0;

	//Con esto mostramos el total de articulos en nuestro carrito.
	for (let x of carritocompra.cantidades) {
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

	TitleTotalArticles.appendChild(document.createTextNode("Artículos en tu carrito: " + TotalArticulos));
	TitlePriceWithoutIVA.appendChild(document.createTextNode("Precio sin IVA: " + PrecioSinIva + "€"));
	TitleTotalPrice.appendChild(document.createTextNode("Precio total a pagar: " + Totalprecio + "€"));

	div.appendChild(TitleTotalArticles);
	div.appendChild(TitlePriceWithoutIVA);
	div.appendChild(TitleTotalPrice);
}

/*
Funcion para eliminar el ultimo producto añadido al carrito o todos.
@version 2.0
*/

function EliminarArticulo(opcion) {
	var div = document.getElementById("mostrarcarrito");

	switch (opcion) {
		case 1:
			carritocompra.items.pop();
			carritocompra.cantidades.pop();
			MostrarCarrito();
			MostrarContadores();
			break;

		case 2:
			div.innerHTML = "";
			carritocompra.items = [];
			carritocompra.cantidades = [];
			// MostrarCarrito();
			MostrarContadores();
			break;
		default:
			break;
	}
}

/*
Funcion para Crear el boton de ayuda.
Al pulsar sobre él se abrirá una nueva ventana con las siguientes dimensiones 
alto:300px, ancho:500px.
.El título debe ser “Información Carrito”. 
Si la ventana existe ya debes pasarle el foco pero no volver a crearla. 
También debe contener un botón para cerrarla.
La información que debe mostrar es:
- Hora actual, actualizándose en cada segundo mostrando el tiempo real.
- Versión del Carrito (V3)
- Nombre de usuario
- Número de productos añadidos al carrito

@version 3.0
*/

var mywindow;

function load() {
	
	var botonayuda = document.getElementById("botonayuda");

	botonayuda.addEventListener("click", function () {
		openWindow();
	})
};


function openWindow() {

	if (!mywindow || mywindow.closed) {
		mywindow = window.open("", "myWindow", "width=500,height=300,top=200,left=200, toolbar=no, menubar=no, titlebar=yes");
		mywindow.document.title = "Información Carrito";

		var mywindowbody = mywindow.document.getElementsByTagName("body")[0];


		var reloj = document.createElement("div");
		reloj.setAttribute("id", "reloj");

		mywindowbody.appendChild(reloj);

		mywindow.onload = Reloj;


		var br = document.createElement("br");
		mywindowbody.appendChild(br);


		var version = document.createElement("div");
		version.appendChild(document.createTextNode("Versión 3.0"));

		mywindowbody.appendChild(version);

		var br = document.createElement("br");
		mywindowbody.appendChild(br);
		var br = document.createElement("br");
		mywindowbody.appendChild(br);

		// var nombreusuario = document.createElement("div");
		// nombreusuario.appendChild(document.createTextNode("Versión 3.0"));

		// mywindowbody.appendChild(nombreusuario);

		var ArticulosEncarrito = document.createElement("div");
		ArticulosEncarrito.appendChild(document.createTextNode("Articulos en su carrito:" + TotalArticulos));

		mywindowbody.appendChild(ArticulosEncarrito);


	} else {
		mywindow.focus();
	}
	/*
	Funcion para Crear un reloj que muestra la hora actual, actualizándose en cada segundo mostrando el tiempo real
	@version 3.0
	*/

	function Reloj() {
		if (mywindow != null) {
			var Factual = new Date();
			var horas = Factual.getHours();
			var minutos = Factual.getMinutes();
			var segundos = Factual.getSeconds();

			horas = anadircero(horas);
			minutos = anadircero(minutos);
			segundos = anadircero(segundos);

			if (typeof reloj !== 'undefined') {
				reloj.innerHTML = horas + " : " + minutos + " : " + segundos;
			}
		}
	}


	function anadircero(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}

	setInterval(function () { Reloj() }, 1000);

}