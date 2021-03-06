 var server = "http://localhost:5000";
// server = "https://sacjudge-d22dc.firebaseapp.com";
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;
  //  var userId = user.uid;
    var cashierNumber;
    window.location.href = "../dashboard/";

    if(user != null){

      console.log("user identified");
      var userId = firebase.auth().currentUser.uid;
      return firebase.database().ref('/user/' + userId+'/cashier_number').once('value').then(function(snapshot) {
      localStorage.cashiernumber = snapshot.val();
      });
      var email_id = user.email;
      // if (window.location.href != "http://localhost:5000/index.html" || window.location.href != "http://localhost:5000/index.html" ) {
      //     window.location.href = "index.html";
      // }
  }
  }else {
        console.log("login page");
        // No user is signed in.
        if (window.location.href != server+"/login/") {
          window.location.href = server+"/login/";
          console.log("will be logged out");
      }
    }
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      var user = firebase.auth().currentUser;
    //  var userId = user.uid;
      var cashierNumber;
      window.location.href = "../dashboard/";

      if(user != null){

        console.log("user identified");
        var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/user/' + userId+'/cashier_number').once('value').then(function(snapshot) {
        localStorage.cashiernumber = snapshot.val();
        });
        var email_id = user.email;
        // if (window.location.href != "http://localhost:5000/index.html" || window.location.href != "http://localhost:5000/index.html" ) {
        //     window.location.href = "index.html";
        // }
    }
    }else {
          console.log("login page");
          // No user is signed in.
          if (window.location.href != server+"/login/") {
            window.location.href = server+"/login/";
            console.log("will be logged out");
        }
      }
  });

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
    // ...
  });
}

function logout(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}
