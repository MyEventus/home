---
layout: default
title: Register4
---

<div class="card o-hidden border-0 shadow-lg my-5">
<div class="card-body p-0">
<!-- Nested Row within Card Body -->
<div class="row">
  <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
  <div class="col-lg-7">
    <div class="p-5">
      <div class="text-center">
<h1 class="h4 text-gray-900 mb-4">Sign Up and create an Account!</h1>
<p>This site as a whole is currenlty free (no charge), though only a select group (friends of friends will be authroised).</p>
     </div>
        <form id="signup-form" class="user">
            <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <input type="text" class="form-control form-control-user" id="first_name" placeholder="Enter your first name">
                <small>Hidden from public and members</small>
            </div>
            <div class="col-sm-6">
                <input type="text" class="form-control form-control-user" id="username" placeholder="Create an alias / user name">
                <small>Will only be visible to other members.</small>
            </div>
            </div>
            <div class="form-group">
            <input type="email" class="form-control form-control-user" id="email" placeholder="Email Address">
            <small>Always hidden from public and members</small><br>
            <small>This is currently how we will only inform of new events</small>
            </div>
            <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <input type="password" class="form-control form-control-user" id="password1" placeholder="Password">
            </div>
            <div class="col-sm-6">
                <input type="password" class="form-control form-control-user" id="password2" placeholder="Repeat Password">
            </div>
            </div>
            <button id="signmeup" class="btn btn-secondary btn-user btn-block hide">Sign Up (Free)</button>
            <!-- <a href="{{ site.url }}{{ site.baseurl }}/docs/addons/login/" class="btn btn-primary btn-user btn-block">
            Register Account
            </a> -->
                <!-- <hr>
                <a href="#" class="btn btn-google btn-user btn-block">
                <i class="fab fa-google fa-fw"></i> Register with Google
                </a>
                <a href="#" class="btn btn-facebook btn-user btn-block">
                <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                </a> -->
        </form>
      <hr>
      <div class="text-center">
<a class="small" href="{{ site.url }}{{ site.baseurl }}/docs/addons/forgot-password/">Forgot Password?</a>
      </div>
      <div class="text-center">
<a class="small" href="{{ site.url }}{{ site.baseurl }}/docs/addons/login/">Already have an account? Login!</a>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/app.js"></script>