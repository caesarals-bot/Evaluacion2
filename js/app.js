console.log('hola');
/*
const productosEntrar= $('#productos');
const cantidadProductos = $('#cantidadEntrada');
const productoVentas = $('#productosVentas');
const cantidadVenta = $('#cantidadVenta');
*/
const btnIngresa = $('#agregar');
// const btnVender = $('#vender');

const ingresoProduto = $('#ingresoProduto');


const stock = [

    {
      producto: 'Amonio C',
      id : '01',
      Stock : '1502',
      Precio : 3750
    },

    {
      producto: 'Cloro Gel',
      id : '02',
      Stock : '1025',
      Precio : 1350 
    },

    {
      producto: 'Lisoform',
      id : '03',
      Stock : '327',
      Precio : 2590
    }

];

btnIngresa.click( function () {
  console.log(btnIngresa)
})

function ingresarProductos(){
    var html = ''

    for(let i = 0; i < stock.length; i++){
        html += '<tr>';
        html += '<th scope="row">'+ (i+1) +'</th>';
        html += '<td>'+ stock[i].producto +'</td>';
        html += '<td>'+ stock[i].id +'</td>';
        html += '<td>'+ stock[i].Stock +'</td>';
        html += '<td>'+ stock[i].Precio +'</td>';
        html += '</tr>';
    }
    ingresoProduto.html(html);
    console.log(html);
}
ingresarProductos();




/*

function Productos(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
}

function crearStock(nombre, cantidad) {
    let nuevoProducto = new Productos(productosEntrar.val(), cantidadProductos.val());

    stockEntrada.push(crearStock);
}
*/