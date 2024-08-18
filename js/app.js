
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
//   import {getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyDpPBaYVkaHrRql257LEHhWWgKkEzN_8yA",
//     authDomain: "creativetutorial-faf35.firebaseapp.com",
//     projectId: "creativetutorial-faf35",
//     storageBucket: "creativetutorial-faf35.appspot.com",
//     messagingSenderId: "442417908264",
//     appId: "1:442417908264:web:a1bb8390505bf8ec85031d"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//  //get ref to database service
 
//  const db = getDatabase(app);

//  document.getElementById("submit").addEventListener("click", function(e){

//     set(ref(db, 'user/' + document.getElementById("username").value),{

//         username: document.getElementById("username").value,
//         email: document.getElementById("email").value,
//         PhoneNumber: document.getElementById("phone").value

//     });

//     alert("Login Sucessfull  !")
//  })