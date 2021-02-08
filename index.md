---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>myEvent v0.01</title>
  <script type="text/javascript">

  function fn1(){
    var alias = document.getElementById("alias").value;
    var first_name = document.getElementById("first_name").value;
    var email_main = document.getElementById("emailmain").value;
    newUserData(alias, first_name, email_main)
    
  }
</script>

  <link rel="stylesheet" href="app.css">
  <!-- <script src="xhr.js" defer></script> -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> 
    <script src="axios.js" defer></script>
</head>

Hello

<!-- <div>
    <iframe class="airtable-embed" 
    src="https://airtable.com/embed/shrBSmLOgJHQrQrD0?backgroundColor=cyan&viewControls=on" 
    frameborder="0" 
    onmousewheel="" 
    width="100%" 
    height="533" 
    style="background: transparent; border: 1px solid #ccc;">
    </iframe>
</div> -->

<!-- <div>
    <div>
    <h2>Create a new EVENT</h2>
        <iframe class="airtable-embed" 
        src="https://airtable.com/embed/shrfnIYiwoJaom0g9?backgroundColor=cyan" 
        frameborder="0" 
        onmousewheel="" 
        width="100%" height="800" 
        style="background: transparent; border: 1px solid #ccc;">
        </iframe>
    </div>

  
</div> -->

<hr>

<div>
<h2>Create a new user</h2>

    <div>
        <label for="name">Alias/Nickname (4 to 8 characters):</label>

        <input type="text" id="alias" name="alias" required
            minlength="4" maxlength="8" size="10">
    <div>



    <div>
        <label for="name">First Name (4 to 8 characters):</label>

        <input type="text" id="first_name" name="first_name" required
            minlength="4" maxlength="8" size="10">
    </div>

    <div>
        <label for="emailmain">Email:</label>

        <input type="text" id="emailmain" name="emailmain" required
            minlength="4" maxlength="120" size="40">
    </div>


    <div>
        <button onclick='fn1()' id="btn1">Create New User Now</button>
    </div>
</div>

<hr>


<div>
    <a href="https://airtable.com/shrEHeEsIbilPyjwI">Click to confirm your attendence.</a>
</div>

<section id="control-center">
    <button id="get-btn">GET Data</button>
    <button id="post-btn">POST Data</button>
  </section>
