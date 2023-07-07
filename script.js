// Eliminar cookies
function eliminarCookies(){
    cookie = document.querySelector(".cookies");
    cookie.remove()
}

// Buscar pelicula
function alertaPelicula(event){
    event.preventDefault();
    let texto = document.querySelector(".pelicula").value;
    console.log(texto);
    alert("Estas buscando la pelicula " + texto)
}

let buscar = document.querySelector('.buscar');
buscar.addEventListener('click', alertaPelicula);



