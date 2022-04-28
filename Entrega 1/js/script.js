// Nombre de la persona
let nombre=prompt("escribe tu nombre");

// Calculamos el momento del dia
let fecha = new Date(); 
let hora = fecha.getHours();
let buenas = ""
 
  if(hora >= 0 && hora < 12){
    buenas = "Buenos Días";
  }else if(hora >= 12 && hora < 19){
    buenas = "Buenas Tardes";
  }else if(hora >= 19 && hora < 24){
    buenas = "Buenas Noches";
  } 

alert(buenas + " " + nombre);
let pass=0
let x=0
do {
     pass = prompt("escribe tu contraseña");
    if(x===3){
        alert("Tercer intento, bye");
        break;
    }else{
        x++
    }
} while (pass !== "123");
if (pass==="123"){
alert("Gracias por comprobar tu identidad")
}