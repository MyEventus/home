---
layout: default
title: Login5
---

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <title>Simple Web Page</title>
    <style>
      h1 {
        margin: 2em 0;
      }
    </style>
    <!-- widget stuff here -->
    <script src="https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.16.0/js/okta-sign-in.min.js" type="text/javascript"></script>
    <link href="https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.16.0/css/okta-sign-in.min.css" type="text/css" rel="stylesheet"/>
<link href="https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.16.0/css/okta-theme.css" type="text/css" rel="stylesheet"/>
  </head>
  <body>
   <div class="container">
      <h1 class="text-center">Simple Web Page</h1>
      <div id="messageBox" class="jumbotron">
        You are not logged in!
      </div>
      <!-- where the sign-in form will be displayed -->
      <div id="okta-login-container"></div>
      <button id="logout" class="button" onclick="logout()" style="display: none">Logout</button>
    </div>


<script type="text/javascript">
  var oktaSignIn = new OktaSignIn({
    baseUrl: "https://dev-49983875.okta.com",
    clientId: "0oa5ym6myKNCpFR7D5d6",
    redirectUri: 'https://myeventus.netlify.app/services/members-welcome',
    authParams: {
      issuer: "default",
      responseType: ['token', 'id_token'],
      display: 'page'
    }
  });

  if (oktaSignIn.token.hasTokensInUrl()) {
    oktaSignIn.token.parseTokensFromUrl(
      // If we get here, the user just logged in.
      function success(res) {
        var accessToken = res[0];
        var idToken = res[1];

        oktaSignIn.tokenManager.add('accessToken', accessToken);
        oktaSignIn.tokenManager.add('idToken', idToken);

        window.location.hash='';
        document.getElementById("messageBox").innerHTML = "Hello, " + idToken.claims.email + "! You just logged in! :)";
         document.getElementById("logout").style.display = 'block';      
      },
      function error(err) {
        console.error(err);
      }
    );
  } else {
    oktaSignIn.session.get(function (res) {
      // If we get here, the user is already signed in.
      if (res.status === 'ACTIVE') {
        document.getElementById("messageBox").innerHTML = "Hello, " + res.login + "! You are still logged in! :)";
        document.getElementById("logout").style.display = 'block';
        return;
      }
      oktaSignIn.renderEl(
        { el: '#okta-login-container' },
        function success(res) {},
        function error(err) {
          console.error(err);
        }
      );
    });
  }

    function logout() {
        oktaSignIn.authClient.signOut();
        location.reload();
    }



//    oktaSignIn.authClient.token.getUserInfo().then(function(user) {
//         document.getElementById("messageBox").innerHTML = "Hello, " + user.email + "! You are *still* logged in! :)";
//         document.getElementById("logout").style.display = 'block';
//       }, function(error) {
//         oktaSignIn.showSignInToGetTokens({
//           el: '#okta-login-container'
//         }).then(function(tokens) {
//           oktaSignIn.authClient.tokenManager.setTokens(tokens);
//           oktaSignIn.remove();

//           const idToken = tokens.idToken;
//           document.getElementById("messageBox").innerHTML = "Hello, " + idToken.claims.email + "! You just logged in! :)";
//           document.getElementById("logout").style.display = 'block';

//         }).catch(function(err) {
//           console.error(err);
//         });
//       });

//       function logout() {
//         oktaSignIn.authClient.signOut();
//         location.reload();
//       }
</script>


  </body>
