// function Suma(a, b){ 
//     return a + b;
// }

// let resultado = Suma(5, 20);
// console.log(resultado);


// const subproductos = [ 'minibrownie', 'cafe', 'tortitas' ]

// console.log( subproductos.indexOf('minibrownie'))
// console.log( subproductos.indexOf('cafe'))
// console.log( subproductos.indexOf('tortitas'))

// let usuario = prompt("Ingresa tu nombre")

// if(usuario = "Aitor"){
//     alert("Bienvenido de vuelta Aitor")
// }


// const productos = [
//     { id: 1, nombre: "Brownie", precio: 10000 },
//     { id: 2, nombre: "Caja de snacks", precio: 7000 },
//     { id: 3, nombre: "Tortas", precio: 12000 },
// ];

// let producto = prompt("Ingrese el producto que desea buscar")
// let productoEncontrado = productos.find((item) => item.nombre === producto);

// if(productoEncontrado) {
//     alert(`
//      Id: ${productoEncontrado.id}
//      Nombre: ${productoEncontrado.nombre}
//      Precio: ${productoEncontrado.precio}
//     `);
// } else {
//     alert("Producto no disponible");
// }
    



let cardtitle = document.getElementById("titulo-tarjeta")
cardtitle.innerHTML = "Brownies";

let cardtitle2 = document.getElementById("titulo-tarjeta2")
cardtitle2.innerHTML = "Productos";

let cardtitle3 = document.getElementById("titulo-tarjeta3")
cardtitle3.innerHTML = "Tortas";

const usuario = {
    nombre: "Aitor",
    Edad: 18
}


const JSONuser = JSON.stringify(usuario);
localStorage.setItem("usuario", JSONuser);

if(usuario.nombre = "Aitor"){
    alert("Bienvenido de vuelta Aitor")
}

const button = document.querySelector(".boton-tarjeta")
button.addEventListener("click", function () {
    alert("Se agrego correctamente")
})