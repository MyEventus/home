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
    <!-- <h1> NEW LIST</h1>-->
    {% for event in message %}
        {{ event }}
    {% endfor %}
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


<script>
    $(document).ready(function() {

        //For Place drop down / select.
        let ddConfirm = $('#place');
        ddConfirm.empty();
        ddConfirm.append('<option selected="true" disabled>Confirmed..</option>');
        ddConfirm.prop('selectedIndex', 0);

      
        //let $message = [];
        // let results = getEventsAll();
        let html = '';
        p.then((events) => {
            console.log("FROM PROMISE: ", events);
            events.forEach(event => {
                if(event.fields.Confirmed_Text_LU == undefined){
                    event.fields.Confirmed_Text_LU = "";
                    console.log("CONFIRMED: ", event.fields.Confirmed_Text_LU);
                }

                html +=
                `<br>
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">${event.fields.Title}</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="22" width="100%" cellspacing="0">
                            <thead><th>Title</th><th>Details</th></thead>

                            <tbody>
                                <tr><td>Status<td>${event.fields.Status}</td></tr>
                                <tr><td>Date / Time<td>${event.fields.Date_Start}</td></tr>
                                <tr><td>Place</td><td>${event.fields.Title_From_Places_LU}</td></tr>
                                <tr><td>Meet At</td><td>${event.fields.Meeting_From_Places_LU}</td></tr>
                                <tr><td>Place (Info)</td><td>${event.fields.Notes_From_Places_LU}</td></tr>
                                <tr><td>Team Invited</td><td>${event.fields.Team_Invited_Text_LU}</td></tr>
                                <tr><td>Team members Invited</td><td>${event.fields.Team_Members_Invited_Text_FO}</td></tr>
                                <tr><td>Confrimed Attending</td><td>${event.fields.Author_Text_LU}</td></tr>
                                <form>
                                <div class="form-group">
                                    <label for="eventtitle">Confirmation</label>
                                    <input class="form-control" type="text" id="confirm" name="confirm"
                                    minlength="4" maxlength="8" size="10">
                                </div>
                                </form>
                                </tbody>
                                

                            </table>
                        </div>            
                    </div>
                </div>
                </br>
                ` 
            }); //End of forEach;

            document.getElementById('results').innerHTML = html; 
        })
        .catch((message) => {
            console.log("FROM PROMISE: ", message);
        })
        // console.log("RESULTSS: ", results);



        // function getConfirmed(eventId){
        //     $.ajax({
        //         url: 'https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Place',
        //         headers: restHeader
        //         })
        //         .then(function(fromAPI){ 
        //             let data = fromAPI.records;
        //             data.map(function(data2){
        //                 let id = data2.id;
        //                 let title = data2.fields.Title + "-" + data2.fields.Meeting_Place;
        //                 ddPlace.append($('<option></option>').attr('value', id).text(title));
                    
        //          })
        //      getTeams();
        //     });
        // }
    });
</script>