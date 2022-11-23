const form = document.getElementById("form-login");

import {
    getAuth,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password).then((cred) => {
      console.log(cred.user);
      alert("Inicio de sesion exitoso");
      window.location.href = "http://127.0.0.1:5501/assets/sections/scrabble.html";
    },function(){
      alert("Credenciales invalidas");
    });
});
  