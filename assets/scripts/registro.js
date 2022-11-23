const form2 = document.getElementById("form-registro");

import {
    getAuth,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

form2.addEventListener("submit", (e) => {

  e.preventDefault();

  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const auth = getAuth();

  if(password.length <= 6){
    alert("La contraseña debe de tener mas de 6 caracteres")
    return;
  }

  createUserWithEmailAndPassword(auth, email, password).then((cred) => {
    console.log(cred.user);
    alert("Registro exitoso")
    window.location.href = "http://127.0.0.1:5500/assets/sections/sesion.html";
  },function(){
    alert("Credenciales invalidas");
  });
});

