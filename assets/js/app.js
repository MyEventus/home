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
    const btnLogin = document.getElementById('btnLogin'); //Login4.md
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    const signupForm = document.getElementById('signmeup'); //Register4.md
    
    // btnLogin.addEventListener('click', err => {
    //     const email = txtEmail.value;
    //     const pass = txtPassword.value;
    //     const auth = firebase.auth();

    //     const promise = auth.signInWithEmailAndPassword(email, pass);

    //     //.todo. Show this to user.
    //     promise.catch(e => console.log(e.message));
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
    firebase.auth().onAuthStateChanged(firebaseUser => {
        var user = null;
        if(firebaseUser){
            user = firebaseUser;
            console.log("Now logged in. OK: ", firebaseUser);
            $("#btnLogout").show();
            $("#btnSignUp").hide();
            $("#btnLogin").hide();
            //btnLogout.classList.remove('hide');
            // btnSignUp.classList.remove('hide');
            // btnLogin.classList.add('hide');
        } else {
            user = null;
            console.log('Now logged out!');
            $("#btnLogout").hide();
            $("#btnSignUp").show();
            $("#btnLogin").show();
            //btnLogout.classList.add('hide');
            // btnSignUp.classList.add('hide');
            // btnLogin.classList.remove('hide');
        }
    });

    //Sign Up.
    //https://www.youtube.com/watch?v=wkdCpktUfGg
    //const signupForm = document.querySelector("#signup-form"); //In register4.md

    //signupForm.addEventListener('submit', e => {
    // signupForm.addEventListener('click', e => {
    //     e.preventDefault();
    //     console.log("SIGN UP FORM: ")
    //     const email = signupForm['first_name'].value;
    //     const displayName = signupForm['username'].value;
    //     const password = signupForm['password1'].value; //.todo. Min 6 char.
    //     //const email = signupForm[''];

    //     firebase.auth().createUserWithEmailAndPassword(email, password) //async promise.
    //     .then(cred => {
    //         console.log("CREDENTIAL TOKEN: ", cred.user)
    //         sugnupForm.reset();
    //     });

    // });

    // signupForm.addEventListener('click', e => {
    //     e.preventDefault();
    //     console.log("SIGN UP FORM: ")
    // });

    //Logout
    //const logout = document.querySelector("#btnLogout");
    // btnLogout.addEventListener('submit', (e) => {
    //     console.log("User is now logged OUT!")
    //     e.preventDefault();
    //     firebase.auth().signOut()
    //     .then(() => {
    //         console.log("User is now logged OUT!")
    //     });
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