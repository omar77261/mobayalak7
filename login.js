// login.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHKWSQyL8O3FJ3eA3BVovpHS6LUaM06UI",
  authDomain: "mobayalak.firebaseapp.com",
  projectId: "mobayalak",
  storageBucket: "mobayalak.appspot.com",
  messagingSenderId: "1089189178876",
  appId: "1:1089189178876:web:f05ad415187b6038c4d679"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.email === "hadelyosefghabra@gmail.com") {
        window.location.href = "admin.html";
      } else {
        document.getElementById("message").textContent = "هذا الحساب ليس مشرفاً.";
      }
    })
    .catch((error) => {
      document.getElementById("message").textContent = "فشل تسجيل الدخول: " + error.message;
    });
});