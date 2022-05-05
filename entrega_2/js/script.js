// Nombre de la persona
let nombre= "Vanina" //prompt("escribe tu nombre");

// Calculamos el momento del dia
let fecha = new Date(); 
let hora = fecha.getHours();
let buenas 

if(hora >= 0 && hora < 12){
  buenas = "Buenos días";
}else if(hora >= 12 && hora < 19){
  buenas = "Buenas tardes";
}else if(hora >= 19 && hora < 24){
  buenas = "Buenas noches";
} 
alert(buenas + " " + nombre);
console.log(buenas + " " + nombre);

// Hagamoslo incluyente
let genero=prompt("Favor indicar como prefiere que me dirija a ud \n ( M-masculino, F-femenino y N-no definido ) ");

if(genero=="F"||genero=="f"){
      genero="a"
  }else if (genero=="M"||genero=="m"){
      genero="o"
  }else{
      genero="e"
  }

// Comprobamos el password
  let pass
  let x=0
  do {
    if(x===3){
      bye("Strike: 3, OUT!!!");
      break;
    }else{
      if(x>0){console.log("Strike: "+x);}
      x++
    }
    pass = prompt("escribe tu contraseña");
    
    // Borrar esto antes de entregarlo 
    if (pass===""){
      console.log("esto es trampa!! ¬.¬")
      break;
    }

  } while (pass !== "123");
  if (pass==="123"){
    console.log("Hola "+ nombre +", "+"bienvenid"+genero+ " a Papeleria Alfa ")
  }

  // Comienza el catalogo
  let respProducto
  inicioCuestionario();
  function inicioCuestionario (){
    let respCategorias = parseInt(prompt("Categorias: \n 1: Papelería \n 2: Cafetería  \n 3: Limpieza"));
    categorias(respCategorias);
  }
  // este se encargara de resolver las categorias
  function categorias(respuesta){
    if(respuesta===1){
      respProducto=respuesta + "." + parseInt(prompt("Escoge que poducto de Papelería quieres que te muestre: \n 1: Boligrafo \n 2: Goma \n 3: Sacapuntas  "));
      detalleProducto(parseFloat(respProducto));
    }else if(respuesta==2){
      respProducto=respuesta + "." +parseInt(prompt("Escoge que poducto de Cafetería quieres que te muestre: \n 1: Cafe soluble \n 2: Té o Infusiones\n 3: Cafe en grano"));
      detalleProducto(parseFloat(respProducto));
    }else if(respuesta==3){
      respProducto=respuesta + "." +parseInt(prompt("Escoge que poducto de Limpieza quieres que te muestre: \n 1: Sanitas\n 2: Papel higienico\n 3: Jabon liquido"));
      detalleProducto(parseFloat(respProducto));
    }   
  }
  // este se encargara de resolver los productos
  function detalleProducto(respuesta){
    
    if(respuesta===1.1){
    Articulo = "Boligrafo"
    Modelo = "BIC-BOL-M250CA"
    Precio = 12
    iva=Precio*0.16
    inventario = 40
   
  }else if(respuesta===1.2){
    Articulo = "Goma"
    Modelo = "AZO-GOM-6590"
    Precio = 21.35
    iva=Precio*0.16
    inventario = 15
    
  }else if(respuesta===1.3){
    Articulo = "Sacapuntas"
    Modelo = "ACO-SAC-P3888"
    Precio =785.79
    iva=Precio*0.16
    inventario = 3
  // }else if(respuesta===){
  //   Articulo = ""
  //   Modelo = ""
  //   Precio =
  //   iva=Precio*0.16
  //   inventario =
  // }else if(respuesta===){
  //   Articulo = ""
  //   Modelo = ""
  //   Precio =
  //   iva=Precio*0.16
  //   inventario =
  // }else if(respuesta===){
  //   Articulo = ""
  //   Modelo = ""
  //   Precio =
  //   iva=Precio*0.16
  //   inventario =
  // }else if(respuesta===){
  //   Articulo = ""
  //   Modelo = ""
  //   Precio =
  //   iva=Precio*0.16
  //   inventario =
  // }else if(respuesta===){
  //   Articulo = ""
  //   Modelo = ""
  //   Precio =
  //   iva=Precio*0.16
  //   inventario =
  // }else if(respuesta===){
  //   Articulo = ""
  //   Modelo = ""
  //   Precio =
  //   iva=Precio*0.16
  //   inventario =
  }
  
 fichaTecnica(Articulo,Modelo,Precio,iva,inventario);
}

function fichaTecnica(art,mod,costo,iva,existencias){
  console.log(" Articulo:   "+art+"\n Modelo:     "+mod+"\n Precio:     $"+costo+" ( + $"+ iva +" de I.V.A ) \n Inventario: "+existencias+ " piezas")
  sleep(3000);
  respuesta=prompt("Quieres ver otro articulo? \n S=Sí N=No");
  if(respuesta==="si"||respuesta==="Si"||respuesta==="sí"||respuesta==="Sí"||respuesta==="s"||respuesta==="S"){
    inicioCuestionario();
  }else{
    bye("Bye "+ nombre + ", hasta pronto!");
  }
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function bye(mensaje){
  console.log(mensaje);
}
// }else{
//   console.log("Nos vemos pronto")
