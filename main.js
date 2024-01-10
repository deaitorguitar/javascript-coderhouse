function Suma(a, b){ 
    return a + b;
}

let resultado = Suma(5, 20);
console.log(resultado);


let presupuesto = Number(prompt("Ingrese su presupesto"))

if (presupuesto < 7500) { 
    alert("No puedes comprar ningun producto")
}  else if (presupuesto < 30000) { 
    alert("Puedes algunos de nuestros productos") 
}   


let perfil = prompt("Ingresa tu nombre")

while (perfil != "ESC "){ 
    switch (perfil) { 
        case "Aitor":
            alert("Hola Aitor");
            break;

        default:
            alert("No hay datos registrados");
            break;    
    }
}



