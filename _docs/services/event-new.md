---
layout: default
title: Event New
---
<!-- 
<head>
    <script type="text/javascript">

        // function fn1(){
        //   var alias = document.getElementById("alias").value;
        //   var first_name = document.getElementById("first_name").value;
        //   var email_main = document.getElementById("emailmain").value;
        //   newUserData(alias, first_name, email_main)
          
        // }
      
        // function eventsListAll(){
        //       let results = getEventsAll();
        //       console.log("Returned : ", results);
              
        // }
      
        function eventNew(){
          var eventTitle = document.getElementById("eventtitle").value;
          var eventDateStart = document.getElementById("eventdatestart").value;
          //var email_main = document.getElementById("emailmain").value;
          eventNewData(eventTitle, eventDateStart)
        }
      </script>
</head> -->

<div>
<h2>Create a new EVENT</h2>

<div>
    <form id="makeNewEvent">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Create a new event</h6>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="eventtitle">Create a title</label>
                    <input class="form-control" type="text" id="eventtitle" name="eventtitle" required
                    minlength="4" maxlength="8" size="10">
                </div>
                <div class="form-group">
                    <label for="eventdatestart">Starting Date / Time</label>
                    <input class="form-control" type="datetime-local" id="eventdatestart" name="eventdatestart" minlength="4" maxlength="50" size="40">
                </div>    
                <div class="form-group">
                    <label for="place">Place</label>
                    <select name="place" id="place" class="form-control"></select>
                </div>
                <div class="form-group">
                    <label for="team">Team</label>
                    <select name="team" id="team" class="form-control"></select>
                </div>

                <div class="form-group">
                    <label for="author">Author (You)</label>
                    <select name="author" id="author" class="form-control"></select>
                </div>

                <button class="btn btn-primary btn-block" type="submit" id="submitForm">Save</button>
            </div>
        </div>
    </form>
</div>

<script>
    $(document).ready(function() {
        const restHeader = {
            'Authorization':'Bearer keysXtWsXZz4g68dA',
            'Content-Type':'application/json'
        }
        //For Place drop down / select.
        let ddPlace = $('#place');
        ddPlace.empty();
        ddPlace.append('<option selected="true" disabled>Select a Place..</option>');
        ddPlace.prop('selectedIndex', 0);

        //For Team drop down / select.
        let ddTeam = $('#team');
        ddTeam.empty();
        ddTeam.append('<option selected="true" disabled>Select a Team to invite..</option>');
        ddTeam.prop('selectedIndex', 0);

        //For Author.
        let ddAuthor = $('#author');
        ddAuthor.empty();
        ddAuthor.append('<option selected="true" disabled>Select your alias..</option>');
        ddAuthor.prop('selectedIndex', 0);

        $('form').on('submit', function (event) {

            // Get form
            //var data = $('#make-new-event')[0];

            // Create an FormDa function eventNew(){
          var eventTitle = document.getElementById("eventtitle").value;
          var eventDateStart = document.getElementById("eventdatestart").value;
          var eventTeam = document.getElementById("team").value;
          var eventAuthor = document.getElementById("author").value;
          var eventPlace = document.getElementById("place").value;

            console.log("eventTeam ID: ", eventTeam);
            eventNewData(eventTitle, eventDateStart, eventTeam, eventAuthor, eventPlace)
            //var data = new FormData(form);

            // If you want to add an extra field for the FormData
            //data.append("CustomField", "This is some extra data, testing");
            //console.log("FORM DATA ", this)

            //var form = $('form').serialize();
            event.preventDefault();
        });

        getPlaces();
        //getTeams();

        function getPlaces(){
            $.ajax({
                url: 'https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Place',
                headers: restHeader
                })
                .then(function(fromAPI){ 
                    let data = fromAPI.records;
                    console.log("Places: ", data);
                    data.map(function(data2){
                        let id = data2.id;
                        let title = data2.fields.Title + "-" + data2.fields.Meeting_Place;
                        ddPlace.append($('<option></option>').attr('value', id).text(title));
                    
                 })
             getTeams();
            });
        }

        function getTeams(){
            $.ajax({
                url: 'https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Team',
                headers: restHeader,
                })
                .then(function(fromAPI){ 
                    let data = fromAPI.records;
                    console.log("Teams: ", data);
                    data.map(function(data2){
                        let id = data2.id;
                        let title = data2.fields.Title
                    ddTeam.append($('<option></option>').attr('value', id).text(title));
                })
            getAuthor();
            });
        }


        function getAuthor(){
            $.ajax({
                url: 'https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Who',
                headers: restHeader,
                })
                .then(function(fromAPI){ 
                    let data = fromAPI.records;
                    console.log("Alias: ", data);
                    data.map(function(data2){
                        let id = data2.id;
                        let author = data2.fields.Alias
                    ddAuthor.append($('<option></option>').attr('value', id).text(author));
                });              
            });
        }

        

    });
</script>