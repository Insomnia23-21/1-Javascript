let precio = 400000;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

//agregar funcionalidad a los botones de cantidad.

let cantidad = 0;

function sumarUno() {
  cantidad++;
  actualizarCantidad();
}

function restarUno() {
  if (cantidad > 0) {
    cantidad--;
    actualizarCantidad();
  }
}

function actualizarCantidad() {
  let cantidadSpan = document.querySelector(".cantidad");
  cantidadSpan.innerHTML = cantidad;
}

document.getElementById("sumar").addEventListener("click", sumarUno);
document.getElementById("restar").addEventListener("click", restarUno);

//Actualizar precio total a "cantidad * precioInicial"

function actualizarTotal() {
  let cantidad = parseInt(document.querySelector(".cantidad").innerHTML);
  let precioInicial = parseInt(
    document.querySelector(".precio-inicial").innerHTML
  );

  let total = cantidad * precioInicial;

  let valorTotalSpan = document.querySelector(".valor-total");
  valorTotalSpan.innerHTML = total;
}

window.addEventListener("load", actualizarTotal);

document.getElementById("sumar").addEventListener("click", function () {
  actualizarTotal();
});

document.getElementById("restar").addEventListener("click", function () {
  actualizarTotal();
});
