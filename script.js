function registrarUsuario(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    let puntos = Math.floor(Math.random() * 1000);

    let usuario = {
        nombre: nombre,
        email: email,
        puntos: puntos
    };

    // 🔥 GUARDAR USUARIO
    localStorage.setItem("usuarioActual", JSON.stringify(usuario));

    alert("Usuario registrado correctamente");

    window.location.href = "perfil.html";
}
