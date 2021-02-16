(function() {

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBY5axbeTN9LMQeX7Qwrl_nPKvNKm2w-T8",
    authDomain: "me-v1-304822.firebaseapp.com",
    projectId: "me-v1-304822",
    storageBucket: "me-v1-304822.appspot.com",
    messagingSenderId: "509045891695",
    appId: "1:509045891695:web:713e0c07a095d94abaa39a"
    // measurementId: "G-TF5FQTEGWD"
  };
  firebase.initializeApp(firebaseConfig);

//   app_fireBase = firebase;

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');
  
  btnLogin.addEventListener('click', err => {
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();

      const promise = auth.signInWithEmailAndPassword(email, pass);

      //.todo. Show this to user.
      promise.catch(e => console.log(e.message));
  });

  btnSignUp.addEventListener('click', err => {
    const email = txtEmail.value; //.TODO. Need to validate email.
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);

    //.todo. Show this to user.
    promise.catch(e => console.log(e.message));
});

btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
});

// Realtime Auth listener.
firebase.auth().onAuthStateChanged(firebaseUser => {
    var user = null;
    if(firebaseUser){
        user = user;
        console.log("Now logged in. OK: ", firebaseUser);
        //btnLogout.classList.remove('hide');
        // btnSignUp.classList.remove('hide');
        // btnLogin.classList.add('hide');
    } else {
        user = null;
        console.log('Now logged out!');
        //btnLogout.classList.add('hide');
        // btnSignUp.classList.add('hide');
        // btnLogin.classList.remove('hide');
    }
});



  
}());