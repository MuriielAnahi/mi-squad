function Misquad(nombre, edad, hobbies){
	this.nombre=nombre;
	this.edad=edad;
	this.hobbies=hobbies;
}

var may = new Misquad("Maybet", 15, "Juegos de RPG, leer, andar en bici")
var mostrarmay = document.getElementById("may");
mostrarmay.innerHTML="<b>Nombre: </b>"+may.nombre+"<br> <b>Edad: </b>"+may.edad+"<br><b>Hobbies :</b>"+"<li>"+may.hobbies+"</li>"+"<br>";

var dul = new Misquad("Dulce", 18, "Cocinar, leer, subir montañas")
var mostrardul = document.getElementById("dul");
mostrardul.innerHTML="<b>Nombre: </b>"+dul.nombre+"<br> <b>Edad: </b>"+dul.edad+"<br><b>Hobbies :</b>"+"<li>"+dul.hobbies+"</li>"+"<br>";

var nan = new Misquad("Anayn", 27, "Dibujar, pasteleria, andar en bici")
var mostrarnan = document.getElementById("nan");
mostrarnan.innerHTML="<b>Nombre: </b>"+nan.nombre+"<br> <b>Edad: </b>"+nan.edad+"<br><b>Hobbies :</b>"+"<li>"+nan.hobbies+"</li>"+"<br>";

