
var uid;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      uid = user.uid;
      console.log(uid)
    } else {
      // User is signed out
      console.log("no user")
      // ...
    }
  
  });



let signup = ()=>
{
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  
  var userdetail = {
    username,
    email,
    password,
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert("user signup successfully")
    
    firebase.database().ref(`users/${uid}`).set(
      userdetail  
    ).then(
     ()=>{
       window.location = "login.html"
     }
    )
  
  

  
  
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
  
}


let login = ()=>
{
let email=document.getElementById('email').value;
let password=document.getElementById('password').value;

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert("user sign in successfully")

    window.location= "user.html"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });

}


















let addmember = ()=>{
  
  let name = prompt("Enter member name")
  let email = prompt("Enter user email")
  let myteam = document.getElementById("ownteamlist");

  myteam.innerHTML +=`<li> ${name} </li>`


}

// console.log(firebase)




