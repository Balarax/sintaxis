class carrito {
	constructor() {
		this.listararticulos = new Array();
		this.unidades = 0;
		this.precio = 0;
	}
}

class Articulo {
	constructor() {
		this.nombre = "";
		this.precio = 0;
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

	document.getElementById('mainScreen').innerHTML = "Unidades: " + carritocompra.unidades + "<br>Precio: " + carritocompra.precio+" €";
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

	for ( i in carritocompra.listararticulos) {

		if (document.getElementById(i).checked) {

			preciores = carritocompra.listararticulos[Object.values(i)] //conseguimos los valores del objeto que se encuentra en la posicion i

			console.log(preciores.precio);
			carritocompra.unidades -= 1;
			carritocompra.precio -= preciores.precio; //Le restamos al carrito el precio del objeto que hemos obtenido anteriormente

		carritocompra.listararticulos.splice(i,1);
		}
	}


	var pintar = "";

	var cont = 0;

	pintar += "<h4> Artículos en tu carrito: </h4>";

	carritocompra.listararticulos.forEach(element => {

		pintar += "<input type='radio' name=article id=" + cont + " value=" + cont + ">" + element.nombre + " - " + element.precio + "€<br>";
		cont++;
	});

	document.getElementById('mainScreen').innerHTML = "Unidades: " + carritocompra.unidades + "<br>Precio: " + carritocompra.precio+" €"; //Refrescamos el carrito
	document.getElementById('mostrarcarrito').innerHTML = pintar;
}