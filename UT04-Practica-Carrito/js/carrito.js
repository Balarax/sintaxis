class carrito {
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
		this._num_serie = value;
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

// 	"num_serie":{get: function(){ return this.num_serie;}}
	
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

var carritocompra = new carrito;

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

function MostrarCarrito() {

	var pintar = "";

	var cont = 0;

	pintar += "<h4> Artículos en tu carrito: </h4>";

	carritocompra.listararticulos.forEach(element => {

		pintar += "<input type='radio' name=article id=" + cont + " value=" + cont + ">" + element.nombre + " - " + element.precio + "€<br>";
		cont++;
	});

	document.getElementById('mostrarcarrito').innerHTML = pintar;

}

function EliminarArticulo() {

	for (let i in carritocompra.listararticulos) {

		if (document.getElementById(i).checked) {

			var preciores = carritocompra.listararticulos[Object.values(i)] //conseguimos los valores del objeto que se encuentra en la posicion i

			console.log(preciores.precio);
			carritocompra.unidades -= 1;
			carritocompra.precio -= preciores.precio; //Le restamos al carrito el precio del objeto que hemos obtenido anteriormente

			carritocompra.listararticulos.splice(i, 1);
		}
	}


	var pintar = "";

	var cont = 0;

	pintar += "<h4> Artículos en tu carrito: </h4>";

	carritocompra.listararticulos.forEach(element => {

		pintar += "<input type='radio' name=article id=" + cont + " value=" + cont + ">" + element.nombre + " - " + element.precio + "€<br>";
		cont++;
	});

	document.getElementById('mainScreen').innerHTML = "Unidades: " + carritocompra.unidades + "<br>Precio: " + carritocompra.precio + " €"; //Refrescamos el carrito
	document.getElementById('mostrarcarrito').innerHTML = pintar;
}

function testExercise() {

	var num_serie = 32423, nombre = "yoquese", precio = 23, iva = 21, talla = "XL", color = "azul";


	var camiseta = new Producto(num_serie, nombre, precio, iva);

	//Validar(camiseta);

	console.log(camiseta);


	 var pintar = document.getElementById("pintar");
	 pintar.innerHTML = camiseta.toString();

}

// function Validar(objeto) {
// 	try {

// 		if (condition) {

// 		}

// 	} catch (error) {

// 	}
// }