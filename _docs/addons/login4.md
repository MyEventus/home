---
layout: default
title: Login4
---
<div id="ifLoggedOut">
    <div class="row justify-content-center">
    <div class="col-xl-10 col-lg-12 col-md-9">
    <div class="card o-hidden border-0 shadow-lg my-5">
    <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
        <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
        <div class="col-lg-6">
    <div class="p-5">
    <div class="text-center">
        <h1 class="h4 text-gray-900 mb-4">Log In!</h1>
    </div>
    <!-- <form class="user"> -->
    <form class="user" id="login-form">
        <div class="form-group">
        <input type="email" class="form-control form-control-user" id="txtEmail" aria-describedby="emailHelp" placeholder="Enter Email Address...">
        </div>
        <div class="form-group">
        <input type="password" class="form-control form-control-user" id="txtPassword" placeholder="Password">
        </div>
        <!-- <div class="form-group">
        <div class="custom-control custom-checkbox small">
    <input type="checkbox" class="custom-control-input" id="customCheck">
    <label class="custom-control-label" for="customCheck">Remember Me</label>
        </div>
        </div> -->
        <div>
        <a href="#" id="btnLogin" class="btn btn-primary btn-user btn-block">
        Login
        </a>
        </div>
        <!-- <hr>
        <a href="#" class="btn btn-google btn-user btn-block">
        <i class="fab fa-google fa-fw"></i> Login with Google
        </a>
        <a href="#" class="btn btn-facebook btn-user btn-block">
        <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
        </a> -->
    </form>
    <hr>
    <div class="text-center">
        <!-- <a class="small" href="forgot-password.html">Forgot Password?</a> -->
        <a class="small" href="{{ site.url }}{{ site.baseurl }}/docs/addons/forgotpassword4/">Forgot Password?</a>
    </div>
    <br>
    <!-- <div class="text-center"> -->
        <!-- <button id="btnSignUp" class="btn btn-secondary btn-user btn-block hide">Sign Up (Free)</button> -->
        <!-- <a class="small" href="register.html">Create an Account!</a> -->
    <!-- </div> -->
    <!-- <div class="text-center"> -->
        <!-- <button id="btnLogout" class="btn btn-danger btn-user btn-block hide">Log Out</button> -->
        <!-- <a class="small" href="register.html">Create an Account!</a> -->
    <!-- </div> -->
    </div>
        </div>
        </div>
    </div>
    </div>
        </div>
        </div>
</div>

<!-- <div id="ifLoggedIn">
<div class="row justify-content-center">
    <div class="col-xl-10 col-lg-12 col-md-9">
    <div class="card o-hidden border-0 shadow-lg my-5">
    <div class="card-body p-0">
        <div class="row">
        <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
        <div class="col-lg-6">
    <div class="p-5">
    <div class="text-center">
        <h1 class="h4 text-gray-900 mb-4">You are already logged in!</h1>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
</div> -->
<!-- <script src="{{ site.url }}{{ site.baseurl }}/assets/js/app.js"></script> -->
<script>
    //Log in
    const login = document.querySelector("#btnLogin");
    login.addEventListener('click', (e) => {
        e.preventDefault();
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, pass) //async promise.
            .then(cred => {
            console.log("User is now logged IN!")
            console.log("CREDENTIAL TOKEN: ", cred.user);

            // Realtime Auth listener.
            firebase.auth().onAuthStateChanged(firebaseUser => {
                if(firebaseUser){
                    const userName = firebaseUser.displayName;
                    const alias = userName.split("|");
                    const user = alias[0]);
                    if(alias[2] < 3) {
                        alert("You are NOT authorised yet to CREATE any entries, Wait for Admin to manually allow you!");
                    }
                }
            });

            loginForm.reset();
            window.location.href="/";
        });

    });

    async function membersList(){
        let ddAuthor = $('#team');
        ddTeam.empty();
        ddTeam.prop('selectedIndex', 0);

        const data = await teamsList();
        data.map(function(data2){
            let id = data2.id;
            let title = data2.fields.Title
            ddTeam.append($('<option></option>').attr('value', id).text(title));
            $(".selectpicker").selectpicker("refresh");
        });
    }
    </script>

