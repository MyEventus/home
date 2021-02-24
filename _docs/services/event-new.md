---
layout: default
title: Event New
---

<div class="toast" data-autohide="false"  aria-live="assertive" aria-atomic="true" data-delay="4000" style="position: absolute; top: 1rem; right: 1rem;">
  <div class="toast-header">
    <strong class="mr-auto text-primary">OK. Completed</strong>
    <!-- <small>OK</small> -->
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
  </div>
  <div class="toast-body">
    Updated database successfully. Now go to the "list view" or "calendar view" (slower) to see the updates.

  </div>
</div>


<div>
<h2>Create a new event</h2>

<div>
    <form id="makeNewEvent">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Create a new event</h6>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="title">Create a title</label>
                    <input class="form-control" type="text" id="title" name="title" required placeholder="Try and make unique so can search for later."
                    minlength="4" maxlength="8" size="10">
                </div>
                <div class="form-group">
                    <label for="date">Starting Date + Time. (Click on icon)</label>
                    <input class="form-control" type="datetime-local" id="date" name="date" minlength="4" maxlength="50" size="40">
                </div>    
                <div class="form-group">
                    <label for="place">Place</label>
                    <select name="place[]" id="place" class="form-control"></select>
                </div>
                <div class="form-group">
                    <label for="team">Team</label>
                    <select name="team[]" id="team" class="form-control"></select>
                </div>
                <div class="form-group">
                    <label for="author">Author (You)</label>
                    <select name="author[]" id="author" class="form-control"></select>
                </div>
                <button class="btn btn-primary btn-block" type="submit" id="submitForm">Save</button>
            </div>
        </div>
    </form>
</div>

<script>
     $('form').on('submit', function (event) {
        event.preventDefault()
        eventNew();
    });

    async function getPlaceList(){
        let ddPlace = $('#place');
        ddPlace.empty();
        ddPlace.prop('selectedIndex', 0);

        const data = await placesList();
        data.map(function(data2){
            let id = data2.id;
            let title = data2.fields.Title
            let place = title + "-" + data2.fields.Meeting_Place
            ddPlace.append($('<option></option>').attr('value', id).text(place));
        });
    }

    async function getTeamsList(){
        let ddTeam = $('#team');
        ddTeam.empty();
        ddTeam.prop('selectedIndex', 0);

        const data = await teamsList();
        data.map(function(data2){
            let id = data2.id;
            let title = data2.fields.Title
            ddTeam.append($('<option></option>').attr('value', id).text(title));
        });
    }

    async function getMemberList(){
        let ddAuthor = $('#author');
        ddAuthor.empty();
        ddAuthor.prop('selectedIndex', 0);

        const data = await membersList();
        data.map(function(data2){
            let id = data2.id;
            let title = data2.fields.Alias
            ddAuthor.append($('<option></option>').attr('value', id).text(title));
        });
    }

    async function eventNew(){
        var title = $('#title').val();
        var date = $('#date').val();
        var author = $('#author').val();
        var place = $('#place').val();
        var team = $('#team').val();

        let realdate = new Date(date)//Was auto adding +11 hours (Due to Sydney/Australia time zone) before this correction.
        
        eventNewData(title, realdate, team, author, place);

        $('.toast').toast('show');

        //Clear fields in form.
        $('#title').val("");
        $('#date').val("");
        $('#place').val("");
        $('#author').val("");
     }

    $(document).ready(function() {
        getTeamsList();
        getPlaceList();
        getMemberList();
    });
</script>
