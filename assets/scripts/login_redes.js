const btnGoogle = document.getElementById("btn-google");
const btnFacebook = document.getElementById("btn-facebook");
const btnGithub = document.getElementById("btn-github");

import {
    getAuth,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

btnGoogle.addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user);
      alert("Inicio de sesion exitoso")
      window.location.href = "http://127.0.0.1:5501/assets/sections/scrabble.html";
    },function(){
      alert("Inicio fallido intentalo de nuevo")
    });
  });
  
  btnFacebook.addEventListener("click", () => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user);
      alert("Inicio de sesion exitoso")
      window.location.href = "http://127.0.0.1:5501/assets/sections/scrabble.html";
    },function(){
      alert("Inicio fallido intentalo de nuevo")
    });
  });

  btnGithub.addEventListener("click", () => {
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user);
      alert("Inicio de sesion exitoso")
      window.location.href = "http://127.0.0.1:5501/assets/sections/scrabble.html";
    },function(){
      alert("Inicio fallido intentalo de nuevo")
    });
  });