---
layout: default
title: Logout
---
<div class="row justify-content-center">
---
layout: default
title: Logout5
---

<div class="col-xl-10 col-lg-12 col-md-9">

<div class="card o-hidden border-0 shadow-lg my-5">
  <div class="card-body p-0">
    <!-- Nested Row within Card Body -->
    <div class="row">
      <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
      <div class="col-lg-6">
        <div class="p-5">
        <div class="text-center">
            <h1 class="h4 text-gray-900 mb-4">Are you sure you want to log out?</h1>
            <br>
            <form>
                <button id="btnLogout" class="btn btn-danger btn-user btn-block">Log Out</button>
            </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

<!-- <script>
    const logout = document.querySelector("#btnLogout");
    btnLogout.addEventListener('submit', (e) => {
        console.log("User is now logged OUT!")
        e.preventDefault();
        firebase.auth().signOut()
        .then(() => {
            console.log("User is now logged OUT!")
        });
    });
</script> -->

<!-- <script src="{{ site.url }}{{ site.baseurl }}/assets/js/app.js"></script> -->

