// 🔥 IMPORTAR FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔐 CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyXXXX",
  authDomain: "molina-conduce-seguro.firebaseapp.com",
  projectId: "molina-conduce-seguro",
  storageBucket: "molina-conduce-seguro.appspot.com",
  messagingSenderId: "123456",
  appId: "1:123:web:abc"
};

// 🚀 INICIAR
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// =======================
// 🧍 REGISTRO USUARIO
// =======================
window.registrarUsuario = async function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const puntos = Math.floor(Math.random()*1500);

    try {
        // Crear usuario en Firebase Auth
        const cred = await createUserWithEmailAndPassword(auth, email, password);

        const usuario = {
            uid: cred.user.uid,
            nombre,
            email,
            puntos,
            fecha: new Date(),
            foto: "default.png" // foto por defecto
        };

        // Guardar en Firestore
        await addDoc(collection(db,"usuarios"), usuario);

        // Guardar en localStorage (para perfil)
        localStorage.setItem("usuarioActual", JSON.stringify(usuario));

        alert("Registro correcto!");
        window.location.href = "perfil.html";

    } catch(error) {
        alert(error.message);
    }
};

// =======================
// 🔑 LOGIN
// =======================
window.loginUsuario = async function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const cred = await signInWithEmailAndPassword(auth,email,password);

        // Buscar datos en Firestore
        const snapshot = await getDocs(collection(db,"usuarios"));
        let usuario;
        snapshot.forEach(doc=>{
            if(doc.data().uid===cred.user.uid) usuario = doc.data();
        });

        localStorage.setItem("usuarioActual", JSON.stringify(usuario));
        window.location.href="perfil.html";

    } catch(error) {
        alert(error.message);
    }
};

// =======================
// 🏆 RANKING TOP 10 TIEMPO REAL
// =======================
window.cargarRanking = function(){

    const tabla = document.getElementById("tablaRanking");

    onSnapshot(collection(db, "usuarios"), (snapshot) => {

        let usuarios = [];

        snapshot.forEach((doc) => {
            usuarios.push(doc.data());
        });

        // Ordenar por puntos
        usuarios.sort((a,b)=>b.puntos-a.puntos);
        usuarios = usuarios.slice(0,10); // Top 10

        tabla.innerHTML = `
        <tr>
            <th>#</th>
            <th>Usuario</th>
            <th>Puntos</th>
            <th>Nivel</th>
        </tr>
        `;

        usuarios.forEach((u,index)=>{
            let nivel="Bronce", medalla="🥉";
            if(u.puntos>1000){nivel="Oro"; medalla="🥇";}
            else if(u.puntos>500){nivel="Plata"; medalla="🥈";}

            tabla.innerHTML += `
            <tr>
                <td>${index+1} ${medalla}</td>
                <td>${u.nombre}</td>
                <td>${u.puntos}</td>
                <td>${nivel}</td>
            </tr>
            `;
        });

    });
};
