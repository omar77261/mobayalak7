
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// تكوين Firebase الخاص بك
const firebaseConfig = {
  apiKey: "AIzaSyBHKWSQyL8O3FJ3eA3BVovpHS6LUaM06UI",
  authDomain: "mobayalak.firebaseapp.com",
  projectId: "mobayalak",
  storageBucket: "mobayalak.firebasestorage.app",
  messagingSenderId: "1089189178876",
  appId: "1:1089189178876:web:f05ad415187b6038c4d679",
  measurementId: "G-X5C5CJ7RV9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "admin.html";
    })
    .catch(() => {
      document.getElementById("message").innerText = "فشل في تسجيل الدخول. تحقق من البيانات.";
    });
});
