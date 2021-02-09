---
layout: default
title: Events
---
<a href="/sb-admin-jekyll/docs/services/events/" role="button" class="btn btn-success btn-large">< Back to Events</a>

<div>
<h2>Create a new EVENT</h2>
<div class="btn btn-primary">Button</div>

    <div>
        <label for="eventtitle">Title (4 to 8 characters):</label>

        <input type="text" id="eventtitle" name="eventtitle" required
            minlength="4" maxlength="8" size="10">
    <div>



    <div>
        <label for="eventdatestart">Date Start:</label>

        <input type="datetime-local" id="eventdatestart" name="eventdatestart"
            minlength="4" maxlength="50" size="40">
    </div>

    <!-- <div>
        <label for="emailmain">Email:</label>

        <input type="text" id="emailmain" name="emailmain" required
            minlength="4" maxlength="120" size="40">
    </div> -->


    <div>
        <button onclick='eventNew()' id="btn4">Create New EVENT</button>
    </div>
</div>