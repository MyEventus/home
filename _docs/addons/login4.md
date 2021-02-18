---
layout: default
title: Login4
---
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
    <h1 class="h4 text-gray-900 mb-4">Log In Here!</h1>
  </div>
  <form class="user">
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
    <a href="#" id="btnLogin" class="btn btn-primary btn-user btn-block">
      Login
    </a>
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
    <a class="small" href="forgot-password.html">Forgot Password?</a>
  </div>
  <br>
  <div class="text-center">
    <button id="btnSignUp" class="btn btn-secondary btn-user btn-block hide">Sign Up (Free)</button>
    <!-- <a class="small" href="register.html">Create an Account!</a> -->
  </div>
   <div class="text-center">
    <button id="btnLogout" class="btn btn-danger btn-user btn-block hide">Log Out</button>
    <!-- <a class="small" href="register.html">Create an Account!</a> -->
  </div>
</div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>

<script src="{{ site.url }}{{ site.baseurl }}/assets/js/app.js"></script>

