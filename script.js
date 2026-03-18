function registrarUsuario(e){
    e.preventDefault();

    let nombre = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;
    let puntos = Math.floor(Math.random() * 1000);

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let nuevoUsuario = {
        nombre: nombre,
        email: email,
        puntos: puntos
    };

    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // GUARDAMOS EL USUARIO ACTUAL
    localStorage.setItem("usuarioActual", JSON.stringify(nuevoUsuario));

    alert("Usuario registrado correctamente");

    window.location.href = "perfil.html"; // ahora va al perfil
}

