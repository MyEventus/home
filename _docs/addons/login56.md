---
layout: default
title: Login5.6
---

<div class="container">
      <h1 class="text-center">Simple Web Page</h1>
      <div id="messageBox" class="jumbotron">
        You are not logged in.
      </div>
      <div id="okta-login-container"></div>
        <button id="logout" class="button" onclick="logout()" style="display: none">Logout</button>
</div>
     <script type="text/javascript">
       var oktaSignIn = new OktaSignIn({
            baseUrl: "https://dev-49983875.okta.com",
            clientId: "0oa5ym6myKNCpFR7D5d6",
            authParams: {
            issuer: "default",
            responseType: ['token', 'id_token'],
            display: 'page'
            }
        });
      oktaSignIn.authClient.token.getUserInfo().then(function(user) {
        document.getElementById("messageBox").innerHTML = "Hello, " + user.email + "! You are still logged in! :)";
        document.getElementById("logout").style.display = 'block';
      }, function(error) {
        oktaSignIn.showSignInToGetTokens({
          el: '#okta-login-container'
        }).then(function(tokens) {
          oktaSignIn.authClient.tokenManager.setTokens(tokens);
          oktaSignIn.remove();
          const idToken = tokens.idToken;
          document.getElementById("messageBox").innerHTML = "Hello, " + idToken.claims.email + "! You just logged in! :)";
          document.getElementById("logout").style.display = 'block';
        }).catch(function(err) {
          console.error(err);
        });
      });
      function logout() {
        oktaSignIn.authClient.signOut();
        location.reload();
      }
    </script>
