---
layout: default
title: Event New
---

<div>
<h2>Create a new EVENT</h2>

<div>
    <form>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Create a new event</h6>
            </div>
            <div class="card-body">
                <form id="make-new-event">
                    <div class="form-group">
                        <label for="eventtitle">Create a title</label>
                        <input class="form-control" type="text" id="eventtitle" name="eventtitle" required
                        minlength="4" maxlength="8" size="10">
                    </div>
                    <div class="form-group">
                        <label for="eventdatestart">Starting Date / Time</label>
                        <input class="form-control" type="datetime-local" id="eventdatestart" name="eventdatestart"
                minlength="4" maxlength="50" size="40">
                    </div>    
                <div class="form-group">
                    <label for="place">Place</label>
                     <select name="place" id="place" class="form-control"></select>
                </div>
                <div class="form-group">
                    <label for="team">Team</label>
                     <select name="team" id="team" class="form-control"></select>
                </div>
        <div>
        <div>
            <button class="btn btn-primary btn-block" type="button" id="btn2"  onclick='eventNewData($("#make-new-event"))'>Save</button>
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

        getPlaces();
        //getTeams();

        function getPlaces(){
            $.ajax({
                url: 'https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Place',
                headers: restHeader,
                })
                .then(function(fromAPI){ 
                    let data = fromAPI.records;
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
                    console.log(data);
                    data.map(function(data2){
                        let id = data2.id;
                        let title = data2.fields.Title
                    ddTeam.append($('<option></option>').attr('value', id).text(title));
                });              
            });
        }

    });
</script>