(function() {

    // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // const firebaseConfig = {
    //     apiKey: "AIzaSyBY5axbeTN9LMQeX7Qwrl_nPKvNKm2w-T8",
    //     authDomain: "me-v1-304822.firebaseapp.com",
    //     projectId: "me-v1-304822",
    //     storageBucket: "me-v1-304822.appspot.com",
    //     messagingSenderId: "509045891695",
    //     appId: "1:509045891695:web:713e0c07a095d94abaa39a"
    //     // measurementId: "G-TF5FQTEGWD"
    // };
    // firebase.initializeApp(firebaseConfig);

    // //app_fireBase = firebase;

    const txtEmail = document.getElementById('txtEmail'); //Login4.md
    const txtPassword = document.getElementById('txtPassword'); //Login4.md

    const loginForm = document.getElementById('login-form');
    //const signupForm = document.getElementById('signup-form'); //Register4.md

    const loggedInDiv = document.getElementById('ifLoggedIn'); //Not used.
    const loggedOutDiv = document.getElementById('ifLoggedOut'); //Not used.
    
    const btnLogin = document.getElementById('btnLogin'); //Login4.md
    const btnResetPass = document.getElementById('btnResetPass'); //Login4.md
    //const btnSignUp = document.getElementById('btnSignUp');
    //const btnLogout = document.getElementById('btnLogout');

    //const signupForm = document.getElementById('signmeup'); //Register4.md
    
    // btnLogin.addEventListener('click', err => {
    //     const email = txtEmail.value;
    //     const pass = txtPassword.value;
    //     const auth = firebase.auth();

    //     const promise = auth.signInWithEmailAndPassword(email, pass);

    //     //.todo. Show this to user.
    //     promise.catch(e => console.log(e.message));
    // });


    // //Log in
    // const login = document.querySelector("#btnLogin");
    // login.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     const email = txtEmail.value;
    //     const pass = txtPassword.value;
    //     const auth = firebase.auth();
    //     auth.signInWithEmailAndPassword(email, pass) //async promise.
    //         .then(cred => {
    //         console.log("User is now logged IN!")
    //         console.log("CREDENTIAL TOKEN: ", cred.user)
    //         loginForm.reset();
    //         window.location.href="/";
    //     });

    // });

    // //Reset Password
    // const resetPass = document.querySelector("#btnResetPass");
    // btnResetPass.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     const email = txtEmail.value;
    //     const auth = firebase.auth();
    //     auth.sendPasswordResetEmail(email) //async promise.
    //         .then( () => {
    //         console.log("Check your email, password reset sent successfully.")
    //         loginForm.reset();
    //         window.location.href="/";
    //     })
    //     .catch(e => {
    //         console.error("Error: ", e);
    //     });

    // });


    //   btnSignUp.addEventListener('click', err => {
    //     const email = txtEmail.value; //.TODO. Need to validate email.
    //     const pass = txtPassword.value;
    //     const auth = firebase.auth();

    //     const promise = auth.createUserWithEmailAndPassword(email, pass);

    //     //.todo. Show this to user.
    //     promise.catch(e => console.log(e.message));
    // });


    // Realtime Auth listener.
    // firebase.auth().onAuthStateChanged(firebaseUser => {
    //     var user = null;
    //     if(firebaseUser){
    //         user = firebaseUser;
    //         console.log("Now logged in. OK: ", firebaseUser);
    //         $("#btnLogout").show();
    //         $("#btnSignUp").hide();
    //         $("#btnLogin2").hide();
    //         loggedInDiv.hide();
    //         loggedOutDiv.show();
    //         //btnLogout.classList.remove('hide');
    //         // btnSignUp.classList.remove('hide');
    //         // btnLogin.classList.add('hide');
    //     } else {
    //         user = null;
    //         console.log('Now logged out!');
    //         $("#btnLogout").hide();
    //         $("#btnSignUp").show();
    //         $("#btnLogin2").show();
    //         loggedInDiv.show();
    //         loggedOutDiv.hide();
    //         //btnLogout.classList.add('hide');
    //         // btnSignUp.classList.add('hide');
    //         // btnLogin.classList.remove('hide');
    //     }
    // });

    //Sign Up.
    //https://www.youtube.com/watch?v=wkdCpktUfGg
    //const signupForm = document.querySelector("#signup-form"); //In register4.md

    // signupForm.addEventListener('submit', e => {
    // //signupForm.addEventListener('click', e => {
    //     e.preventDefault();
    //     console.log("SIGN UP FORM: ")
    //     const first_name = signupForm['first_name'].value;
    //     const displayName = signupForm['username'].value;
    //     const email = signupForm['email'].value;
    //     const password = signupForm['password1'].value; //.todo. Min 6 char.
    //     //const email = signupForm[''];
    //     console.log("SIGN UP FORM: ", email, displayName, first_name, password) // .todo. password to match

    //     firebase.auth().createUserWithEmailAndPassword(email, password, displayName, first_name) //async promise.
    //     .then(cred => {
    //         console.log("CREDENTIAL TOKEN: ", cred.user)
    //         signupForm.reset();
    //     });

    // });

    // signupForm.addEventListener('click', e => {
    //     e.preventDefault();
    //     console.log("SIGN UP FORM: ")
    // });

    // //Logout
    // const logout = document.querySelector("#btnLogout");
    // logout.addEventListener('click', (e) => {
    //     console.log("User is now logged OUT! 1")
    //     e.preventDefault();
    //     // firebase.auth().signOut()
    //     // .then(() => {
    //     //     console.log("User is now logged OUT! 2")
    //     // });
    // });
        



    //   // Realtime Auth listener.
    //   firebase.auth().onAuthStateChanged(firebaseUser => {
    //     if(firebaseUser){
    //         var user = firebaseUser.displayName;
    //         $('#userProfile').show();
    //         document.getElementById("user").innerHTML = user;
    //         //btnLogout.classList.remove('hide');
    //         // btnSignUp.classList.remove('hide');
    //         // btnLogin.classList.add('hide');
    //     } else {          
    //         $('#userProfile').hide();
    //         //$('#user').innerHtml("Log in");
    //         document.getElementById("user").innerHTML = '<a href="{{ page.login3 }}">Log In</a>';
    //         //btnLogout.classList.add('hide');
    //         // btnSignUp.classList.add('hide');
    //         // btnLogin.classList.remove('hide');
    //     }
    // });

}());