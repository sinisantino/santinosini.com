import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsmEk_m0zMM0N49q7VB5HxpiuvF-iTZh8",
  authDomain: "santinosini-c5fbe.firebaseapp.com",
  projectId: "santinosini-c5fbe",
  storageBucket: "santinosini-c5fbe.firebasestorage.app",
  messagingSenderId: "1084297382774",
  appId: "1:1084297382774:web:26f55cd67d417f74d98857"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("signup").onclick = async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    window.location.href = "/index.html";
  } catch (error) {
    message.textContent = error.message;
  }
};

document.getElementById("open-login").onclick = () => {
    document.getElementById("login-modal").classList.remove("hidden");
};

document.getElementById("close-login").onclick = () => {
    document.getElementById("login-modal").classList.add("hidden");
};

document.getElementById("login").onclick = async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "/index.html";
  } catch (error) {
    console.log(error.code);

    if (error.code === "auth/invalid-email") {
      message.textContent = "Please enter a valid email address.";
    } else if (error.code === "auth/too-many-requests") {
      message.textContent = "Too many attempts. Try again later.";
    } else {
      message.textContent = "Email or password is incorrect.";
    }
  }
};

document.getElementById("google").onclick = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
  window.location.href = "index.html";
};

