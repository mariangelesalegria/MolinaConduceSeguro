// IMPORTAR FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyXXXX",
  authDomain: "molina-conduce-seguro.firebaseapp.com",
  projectId: "molina-conduce-seguro",
  storageBucket: "molina-conduce-seguro.appspot.com",
  messagingSenderId: "123456",
  appId: "1:123:web:abc"
};
// INICIAR
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// -------------------
// REGISTRO
// -------------------
window.registrarUsuario = async function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let puntos = Math.floor(Math.random() * 1000);

    await addDoc(collection(db, "usuarios"), {
        nombre: nombre,
        email: email,
        puntos: puntos
    });

    alert("Usuario guardado");

    window.location.href = "ranking.html";
};

// -------------------
// RANKING
// -------------------
window.cargarRanking = async function(){

    const querySnapshot = await getDocs(collection(db, "usuarios"));

    let usuarios = [];

    querySnapshot.forEach((doc) => {
        usuarios.push(doc.data());
    });

    usuarios.sort((a,b) => b.puntos - a.puntos);

    let tabla = document.getElementById("tablaRanking");

    tabla.innerHTML = `
    <tr>
        <th>Usuario</th>
        <th>Puntos</th>
        <th>Nivel</th>
    </tr>
    `;

    usuarios.forEach(u => {

        let nivel = "Bronce";
        if(u.puntos > 1000) nivel = "Oro";
        else if(u.puntos > 500) nivel = "Plata";

        tabla.innerHTML += `
        <tr>
            <td>${u.nombre}</td>
            <td>${u.puntos}</td>
            <td>${nivel}</td>
        </tr>
        `;
    });
};
