var firebaseConfig = {
    apiKey: "AIzaSyDMNhy40Szsz8TUss1cBLPap7Ov9N9-Zn0",
    authDomain: "kwitter-website-a78b0.firebaseapp.com",
    databaseURL: "https://kwitter-website-a78b0-default-rtdb.firebaseio.com",
    projectId: "kwitter-website-a78b0",
    storageBucket: "kwitter-website-a78b0.appspot.com",
    messagingSenderId: "177989244477",
    appId: "1:177989244477:web:33afa3c2e977bab1ee3c54"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
  function addUser() {
  
    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  
  