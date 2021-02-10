---
layout: default
title: Events
---
<div>
     <button class="btn btn-primary" type="button" id="btn1" onclick='getEventsAll()'>List view</button>

  <a href="{% link _docs/services/team-new.md %}" role="button" class="btn btn-primary btn-large">Calendar View</a>

  <a href="{% link _docs/services/event-new.md %}" role="button" class="btn btn-primary btn-large">New Event</a>
   
   <a href="{% link _docs/services/team-new.md %}" role="button" class="btn btn-secondary btn-large">New Team</a>
     <a href="{% link _docs/services/member-new.md %}" role="button" class="btn btn-secondary btn-large">New User</a>
       <a href="{% link _docs/services/places.md %}" role="button" class="btn btn-success btn-large">List Place</a>
      <a href="{% link _docs/services/place-new.md %}" role="button" class="btn btn-success btn-large">New Place</a>
</div>


<div class="container">
    <div id="results"><div>
    <!-- <h1> NEW LIST</h1>
    {% for event in results %}
        {{ event }}
    {% endfor %} -->
</div>
<br>
<p>To start select one of the above.<p>
<p>The "List View" and "Calendar View" show the same information in a different format</p>
<!-- 
<div>
    <button onclick='updateEvents()' id="btn3">Update Events on GitHub</button>
</div> -->

<!-- <div>
    <a href="https://airtable.com/shrEHeEsIbilPyjwI">Click to confirm your attendence.</a>
</div> -->

<!-- <section id="control-center">
    <button id="get-btn">GET Data</button>
    <button id="post-btn">POST Data</button>
</section> -->