let usuario = localStorage.getItem("usuarioActual");

if(usuario){

    usuario = JSON.parse(usuario);

    document.getElementById("nombre").textContent = usuario.nombre;
    document.getElementById("email").textContent = usuario.email;
    document.getElementById("puntos").textContent = usuario.puntos;

    let nivel = "Bronce";

    if(usuario.puntos > 1000){
        nivel = "Oro";
    } else if(usuario.puntos > 500){
        nivel = "Plata";
    }

    document.getElementById("nivel").textContent = nivel;

} else {
    document.body.innerHTML = "<h2>No hay usuario guardado</h2>";
}
