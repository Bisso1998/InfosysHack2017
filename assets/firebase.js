firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.




  	//Photo
  	var image = document.createElement("IMG");
  	    image.setAttribute("src", user.photoURL);
  	    image.setAttribute("width", "100");
  	    image.setAttribute("height", "100");
  	    image.setAttribute("alt", "Rowhit Swami");
  	document.getElementById("user-image").appendChild(image);

    //Name
    var name = document.createElement("h5");
    var node = document.createTextNode('Welcome, '+ user.displayName)
    name.appendChild(node);
    document.getElementById("user-image").appendChild(name);


  	// Email
  	// var email = document.createElement("P");
  	// var content = createTextNode(user.email);
  	// email.appendChild(content);
  	// document.getElementById('welcome').appendChild(email);
  } else {
    // No user is signed in.
    console.log("no user signed in");
  }
});

//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
