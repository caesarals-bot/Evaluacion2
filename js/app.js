

const nombreProducto = $('#nombreProducto');
const rut = $('#rut');
const fechaVenta = $('#fechaVenta');
const unidadesVendidas = $('#unidadesVendidas');
const nombreCliente = $('#nombreCliente');


const btnIngresa = $('#agregar');
// const btnVender = $('#vender');

const ingresoProduto = $('#ingresoProduto');
const imprimeVenta = $('#imprimeVenta');
const mostrarUf = $('#mostrarUf');

let ventas = [];

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
  
  crearVenta();
  
});
/*
btnIngresa.click( function () {
  console.log(btnIngresa);
  crearVenta();
  
});
*/
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
  
};

ingresarProductos();

function Venta() {
  this.producto = '';
  this.cantidad = 0;
  this.cliente = '';
  
}

//funcion que agrega una nueva venta
function crearVenta() {
  //variable que instancia una Venta
  let venta = new Venta();
  //se recogen los valores ingresados en el formulario
  venta.producto = nombreProducto.val();
  venta.cantidad = parseInt(unidadesVendidas.val());
  venta.cliente = nombreCliente.val();
  //venta.total = ;
  
  //se llena la lista de productos
  ventas.push(venta);
  //se imprime la venta en la tabla
  
  
  imprimirVentas()
/*
  contarVentas();

  imprimirTotalVentas();

  imprimirValorTotalVentas();
   
  limpiaFormulario();
  */
}

//funcion que itera los registros contenidos en el arreglo listaVentas y las muestra en la tabla
function imprimirVentas() {
  //variable que arma la fila con sus columnas para mostrar en la tabla 
  let html = "";

  /*iterar sobre el arreglo*/
  
  let idVenta = 0;
  total = 0;

  for (let i = 0; i < ventas.length; i++) {
      let precio = parseInt(costeProductos(ventas[i].producto));
      let cantidad = parseInt(ventas[i].cantidad);
      idVenta += 1;
      html += 
        "<tr> <th>" + idVenta + "</th> <td>" + ventas[i].producto + "</td> <td>" + ventas[i].cantidad + "</td> <td>" + ventas[i].cliente + "</td> <td>" + '$ ' + precio * cantidad + "</td> </tr>";

      //sumarVentas(listaVentas[i].precio)     
  }

  //se envian la fila con sus columnas para mostrar en la tabla 
  imprimeVenta.html(html);

}
// Accediendo a la api
function requetsUF() {

  var req = new XMLHttpRequest();

  req.onreadystatechange = function () {
      if(req.readyState === 4 && req.status === 200){
          
          var responseJSON = JSON.parse(req.responseText);
  
          var res = responseJSON.UFs[0].Valor;//dos datos fecha y valor
   
          //formateamos el valor de la uf
          
          var numero = res.replace('.', '');
          numero = numero.replace(',', '.');

          mostrarUf.html(numero);
          
      }
  }
  req.open("GET", "https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=0b918912656eeabcfd5312c27e619891238b881b&formato=json")

  req.send();
}

requetsUF()

$( function() {
  $( "#fechaVenta" ).datepicker();
} );

function costeProductos(nombre) {
  for(let i = 0; i < stock.length; i++ ){
    if(nombre == stock[i].producto){
      
      return stock[i].Precio;
    }
    console.log('funciona')
  }
}

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