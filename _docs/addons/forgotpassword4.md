---
layout: default
title: ForgotPassword4
---
<div class="container">

<!-- Outer Row -->
<div class="row justify-content-center">

<div class="col-xl-10 col-lg-12 col-md-9">

<div class="card o-hidden border-0 shadow-lg my-5">
  <div class="card-body p-0">
    <!-- Nested Row within Card Body -->
    <div class="row">
      <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
      <div class="col-lg-6">
<div class="p-5">
  <div class="text-center">
    <h1 class="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
    <p class="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
  </div>
  <form class="user" id="resetpass-form">
    <div class="form-group">
      <input type="email" class="form-control form-control-user" id="txtEmail" aria-describedby="emailHelp" placeholder="Enter Email Address...">
    </div>
    <a href="#" class="btn btn-primary btn-user btn-block" id="btnResetPass">
      Reset Password
    </a>
  </form>
  <hr>
  <div class="text-center">
    <a class="small" id="btnSignup" href="{{ site.url }}{{ site.baseurl }}/docs/addons/register4/">Create an Account!</a>
  </div>
  <div class="text-center">
    <a class="small" id="btnLogin2" href="{{ site.url }}{{ site.baseurl }}/docs/addons/login4/">Already have an account? Login!</a>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
<script>
    //Reset Password
    const loginForm = document.getElementById('resetpass-form');
    const resetPass = document.querySelector("#btnResetPass");  
    btnResetPass.addEventListener('click', (e) => {
        e.preventDefault();
        const email = txtEmail.value;
        const auth = firebase.auth();
        auth.sendPasswordResetEmail(email) //async promise.
            .then( () => {
            console.log("Check your email, password reset sent successfully.")
            resetPass.reset();
            window.location.href="/";
        })
        .catch(e => {
            console.error("Error: ", e);
        });

    });
</script>
<!-- <script src="{{ site.url }}{{ site.baseurl }}/assets/js/app.js"></script> -->