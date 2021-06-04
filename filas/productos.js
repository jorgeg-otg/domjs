let productos = new Array(5);
productos[0] = {id: 1, nombre: 'Mouse', precio: 29.9};
productos[1] = {id: 2, nombre: 'Teclado', precio: 75.9};
productos[2] = {id: 3, nombre: 'Monitor', precio: 299.9};
productos[3] = {id: 4, nombre: 'Audífonos', precio: 55.9};
productos[4] = {id: 5, nombre: 'Smartphone', precio: 355.9};

let tablaProducto = document.getElementById('productos');
let cuerpoTabla = document.createElement('tbody');

productos.forEach(p => {
    console.log(p.id);
    let fila = document.createElement('tr');
    
    let td = document.createElement('td');
    td.innerText = p.id;
    fila.appendChild(td);

    td = document.createElement('td');
    td.innerText = p.nombre;
    fila.appendChild(td);

    td = document.createElement('td');
    td.innerText = p.precio;
    fila.appendChild(td);

    cuerpoTabla.appendChild(fila);
});

tablaProducto.appendChild(cuerpoTabla);