

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDUiRe56F59WnTkIN0FCu4MxVZzgO3xBmE",
    authDomain: "friendsbook-dadeb.firebaseapp.com",
    databaseURL: "https://friendsbook-dadeb-default-rtdb.firebaseio.com",
    projectId: "friendsbook-dadeb",
    storageBucket: "friendsbook-dadeb.appspot.com",
    messagingSenderId: "857518898896",
    appId: "1:857518898896:web:e9e87237164ad67390e8d5",
    measurementId: "G-T5XPHJ6M87"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

 const auth = firebase.auth();

  function signUp(){

    var email = document.getElementById("email");
     var password = document.getElementById("password");


     const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

         alert("user" + email.value)
  }


 function signIn(){

    var email = document.getElementById("email");
     var password = document.getElementById("password");


     const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
window.location = "home.html";
 var displayName = user.displayName;
        
  }

