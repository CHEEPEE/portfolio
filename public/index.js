
//alert("test This");
var database = firebase.database();
//basic swrite operation

function writeUserData(UserId,name,email){
  firebase.database().ref('users/'+UserId).set({
    username:name,
    email: email
  });
}
writeUserData("14-522-3","Kenneth Jie Padasas","Kennethjiepadasas@gmail.com");
