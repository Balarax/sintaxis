"use strict";

class Person {
	constructor(nombre, apellido1, apellido2, dni, fechadenacimiento, sexo) {
		this.nombre = nombre || "";
		this.apellido1 = apellido1 || "";
		this.apellido2 = apellido2 || "";
		this.dni = dni || "";
		this.fechadenacimiento = fechadenacimiento || "";
		this.sexo = sexo || "";
	}
	fullName() {
		return this.nombre + " " + this.apellido1 + " " + this.apellido2;
	}
	toString() {
		return "Nombre: " + this.nombre + " Apellidos: " + this.apellido1 + " " + this.apellido2 + " Dni: " + this.dni + " Fecha de nacimiento: " + this.fechadenacimiento + " Sexo:" + this.sexo;
	}

	get nombre() {
		return this._nombre;
	}
	set nombre(value) {
		this._nombre = value;
	}
	get apellido1() {
		return this._apellido1;
	}
	set apellido1(value) {
		this._apellido1 = value;
	}
	get apellido2() {
		return this._apellido2;
	}
	set apellido2(value) {
		this._apellido2 = value;
	}
	get dni() {
		return this._dni;
	}
	set dni(value) {
		this._dni = value;
	}
	get fechadenacimiento() {
		return this._dni;
	}
	set fechadenacimiento(value) {
		this._fechadenacimiento = value;
	}
	get sexo() {
		return this._sexo;
	}
	set sexo(value) {
		this._sexo = value;
	}

}

function testExercise() {

	var Personita = new Person('Chimuelo', 'Fernandez', 'Achus', '05764323k', '06-12-1990', 'H');

	console.log(Personita);

	console.log(Personita.nombre = "Loco");
	console.log(Personita.apellido1 = "Gutierrez");
	console.log(Personita.apellido2 = "Gomez");
	console.log(Personita.dni = "05664373k");
	console.log(Personita.fechadenacimiento = "20-11-1997");
	console.log(Personita.sexo = "M");
	
	console.log(Personita);

	var pintar = document.getElementById("pintar");
	pintar.innerHTML = Personita.fullName() + "<br>" + Personita.toString();

}