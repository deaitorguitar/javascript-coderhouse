const subproductos = [ 'minibrownie', 'cafe', 'tortitas' ]

console.log( subproductos.indexOf('minibrownie'))
console.log( subproductos.indexOf('cafe'))
console.log( subproductos.indexOf('tortitas'))



const productos = [
    { id: 1, nombre: "Brownie", precio: 10000 },
    { id: 2, nombre: "Caja de snacks", precio: 7000 },
    { id: 3, nombre: "Tortas", precio: 12000 },
];

let producto = prompt("Ingrese el producto que desea buscar")
let productoEncontrado = productos.find((item) => item.nombre === producto);

if(productoEncontrado) {
    alert(`
     Id: ${productoEncontrado.id}
     Nombre: ${productoEncontrado.nombre}
     Precio: ${productoEncontrado.precio}
    `);
} else {
    alert("Producto no disponible");
}
    

