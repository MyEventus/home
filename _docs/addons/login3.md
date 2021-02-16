---
layout: default
title: Login3
---

<head>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<!-- <script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js"></script> -->

 <!-- <script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.js"></script> -->
<link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.css" />

</head>

<body>
<!-- The surrounding HTML is left untouched by FirebaseUI.
     Your app may use that space for branding, controls and other customizations.-->
<h1>Welcome to My Awesome App</h1>
<!-- <div id="firebaseui-auth-container"></div>
<div id="loader">Loading...</div> -->


 <!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services -->

  <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
  <!-- <script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js"></script> -->

  <!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
  <!-- <script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-analytics.js"></script> -->

  <!-- Add Firebase products that you want to use -->
  <!-- <script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-auth.js"></script> -->
  <!-- <script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-firestore.js"></script> -->

<!-- <div id="firebaseui-auth-container"></div> -->

<!-- <div id="loader">Loading...</div> -->

<div class="container">
    <input id="txtEmail" type="email"><br>
    <input id="txtPassword" type="password"><br>
    <button id="btnLogin" class="btn btn-primary">Log in</button>
    <button id="btnSignUp" class="btn btn-secondary hide">Sign Up</button>
    <button id="btnLogout" class="btn btn-danger hide">Log out</button>

</div>
<!-- <script src="secret.js"></script> -->
<!-- <script src="login3.js"></script> -->

 <script src="{{ site.url }}{{ site.baseurl }}/assets/js/app.js"></script>

</body>
