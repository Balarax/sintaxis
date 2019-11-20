"use strict";

function Employee(){
	this.name="";
	this.dept="general";
}

function Manager(){
	Employee.call(this);
	this.reports=[];
}
Manager.prototype = new Employee;

function WorkerBee(){
	Employee.call(this);
	this.proyects=[];
}
WorkerBee.prototype = new Employee;

function SalesPerson(){
	WorkerBee.call(this);
	this.quota=100;
	this.dept="sales";
}
SalesPerson.prototype = new WorkerBee;

function Engineer(){
	WorkerBee.call(this);
	this.machine="";
	this.dept="engineering";
}
Engineer.prototype = new WorkerBee;

Employee.prototype.toString = function () {
	console.log(this);
}

var Empleado = new Employee();
var EmpleadoManager = new Manager();
var EmpleadoSalesperson = new SalesPerson();
var EmpleadoIngeniero = new Engineer();
var EmpleadoTrabajador = new WorkerBee();

Empleado.toString();
EmpleadoManager.toString();
EmpleadoSalesperson.toString();
EmpleadoIngeniero.toString();
EmpleadoTrabajador.toString();