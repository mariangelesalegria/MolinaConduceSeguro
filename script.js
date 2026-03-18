function registrarUsuario(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    let puntos = Math.floor(Math.random() * 1000);

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let nuevoUsuario = {
        nombre: nombre,
        email: email,
        puntos: puntos
    };

    usuarios.push(nuevoUsuario);

    // GUARDAR LISTA
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // GUARDAR USUARIO ACTUAL
    localStorage.setItem("usuarioActual", JSON.stringify(nuevoUsuario));

    console.log("Usuarios guardados:", usuarios); // 👈 para comprobar

    alert("Registro guardado correctamente");

    window.location.href = "perfil.html";
}

