


class carrito {
	constructor() {
		this.nombre = "";
		this.unidades = 0;
		this.precio = 0;
	}
}
;

var carritocompra = new carrito;

function Anadir(precio) {

	precio = parseInt(precio);

	carritocompra.unidades += 1;
	carritocompra.precio += precio;

	document.getElementById('mainScreen').innerHTML = "Unidades: " + carritocompra.unidades + "<br>Precio:" + carritocompra.precio;

}
