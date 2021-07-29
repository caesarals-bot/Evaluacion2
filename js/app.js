console.log('hola');

const productosEntrar= $('#productos');
const cantidadProductos = $('#cantidadEntrada');
const productoVentas = $('#productosVentas');
const cantidadVenta = $('#cantidadVenta');

const btnIngresa = $('#ingresar');
const btnVender = $('#vender');



console.log(ingresar);
const stockEntrada = [];

btnIngresa.click(function () {
    crearStock();
    console.log(stockEntrada);
    console.log(productosEntrar.val());
})


function Productos(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
}

function crearStock(nombre, cantidad) {
    let nuevoProducto = new Productos(productosEntrar.val(), cantidadProductos.val());

    stockEntrada.push(crearStock);
}