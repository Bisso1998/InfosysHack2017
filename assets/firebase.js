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



// auth2 is initialized with gapi.auth2.init() and a user is signed in.

if (auth2.isSignedIn.get()) {
  var profile = auth2.currentUser.get().getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}

//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
