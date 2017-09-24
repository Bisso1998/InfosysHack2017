firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  	//Photo
  	var image = document.createElement("IMG");
  	    image.setAttribute("src", user.photoURL);
  	    image.setAttribute("width", "100");
  	    image.setAttribute("border-radius", "50%");
  	    image.setAttribute("height", "100");
  	    image.setAttribute("alt", "Rowhit Swami");
  	document.getElementById("user-image").appendChild(image);

    //Name
    var userName = user.displayName;
    var name = document.createElement("h5");
    var node = document.createTextNode('Welcome, '+ userName);
    name.appendChild(node);
    document.getElementById("user-image").appendChild(name);
    console.log(userName);

    //Email
    var userMail = document.createElement("p");
    var email = document.createTextNode(user.email);
    userMail.appendChild(email);
    document.getElementById('user-image').appendChild(userMail);
    console.log(email);

  } else {
    // No user is signed in
    console.log("no user signed in");
  }
});



//   Getting user info in firebase when user is signed in
//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
