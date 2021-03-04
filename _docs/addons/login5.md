---
layout: default
title: Login5
---

<div class="container">
    <h1 class="text-center">Message</h1>
    <div id="messageBox" class="jumbotron">
    You are not logged in. Log in first to access all features.
    </div>
</div>

<div id="okta-login-container"></div>

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

  if (oktaSignIn.token.hasTokensInUrl()) {
    oktaSignIn.token.parseTokensFromUrl(
      // If we get here, the user just logged in.
      function success(res) {
        var accessToken = res[0];
        var idToken = res[1];

        oktaSignIn.tokenManager.add('accessToken', accessToken);
        oktaSignIn.tokenManager.add('idToken', idToken);

        window.location.hash='';
        document.getElementById("messageBox").innerHTML = "Hello, " + idToken.claims.email + ". OK: You just logged in! :)";
      },
      function error(err) {
        console.error(err);
      }
    );
  } else {
    oktaSignIn.session.get(function (res) {
      // If we get here, the user is already signed in.
      if (res.status === 'ACTIVE') {
        document.getElementById("messageBox").innerHTML = "Hello, " + res.login + ". OK: You are *still* logged in! :)";
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
</script>

