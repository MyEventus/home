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

    // async function getPlaceList(){
    //     let ddPlace = $('#place');
    //     ddPlace.empty();
    //     ddPlace.prop('selectedIndex', 0);

    //     const data = await placesList();
    //     data.map(function(data2){
    //         let id = data2.id;
    //         let title = data2.fields.Title
    //         let place = title + "-" + data2.fields.Meeting_Place
    //         ddPlace.append($('<option></option>').attr('value', id).text(place));
    //     });
    // }
    async function getPlacesList(){
        let ddPlace = $('#place');
        ddPlace.empty();
        ddPlace.prop('selectedIndex', 0)

        const events = await axios.get('https://myeventus.netlify.app/.netlify/functions/places-list')
        .then(res => {
            let data = res.data.data;
            console.log("EVENTS.MD FROM LAMBDA: ", res);
            data.map(function(data2){
                let id = data2.id;
                let title = data2.fields.Title
                let place = title + "-" + data2.fields.Meeting_Place
                ddPlace.append($('<option></option>').attr('value', id).text(place));
            });
            return data
        })
        .catch(err => {
            console.log("ERROR", err);
        });
    }

    // async function getTeamsList(){
    //     let ddTeam = $('#team');
    //     ddTeam.empty();
    //     ddTeam.prop('selectedIndex', 0);

    //     const data = await teamsList();
    //     data.map(function(data2){
    //         let id = data2.id;
    //         let title = data2.fields.Title
    //         ddTeam.append($('<option></option>').attr('value', id).text(title));
    //     });
    // }

    async function getTeamsList(){
        let ddTeam = $('#team');
        ddTeam.empty();
        ddTeam.prop('selectedIndex', 0);

        const events = await axios.get('https://myeventus.netlify.app/.netlify/functions/teams-list')
        .then(res => {
            let data = res.data.data;
            console.log("EVENTS.MD FROM LAMBDA: ", res);
            data.map(function(data2){
            let id = data2.id;
            let title = data2.fields.Title
            ddTeam.append($('<option></option>').attr('value', id).text(title));
        });
            return data
        })
        .catch(err => {
            console.log("ERROR", err);
        });
    }

    // async function getMemberList(){
    //     let ddAuthor = $('#author');
    //     ddAuthor.empty();
    //     ddAuthor.prop('selectedIndex', 0);

    //     const data = await membersList();
    //     data.map(function(data2){
    //         let id = data2.id;
    //         let title = data2.fields.Alias
    //         ddAuthor.append($('<option></option>').attr('value', id).text(title));
    //     });
    // }

    async function getUsersList(){
        let ddAuthor = $('#author');
        ddAuthor.empty();
        ddAuthor.prop('selectedIndex', 0);

        const events = await axios.get('https://myeventus.netlify.app/.netlify/functions/users-list')
        .then(res => {
            let data = res.data.data;
            console.log("EVENTS.MD FROM LAMBDA: ", res);
            data.map(function(data2){
                let id = data2.id;
                let title = data2.fields.Alias
                ddAuthor.append($('<option></option>').attr('value', id).text(title));
            });
            return data
        })
        .catch(err => {
            console.log("ERROR", err);
        });

    }

    async function eventNew(){
        var title = $('#title').val();
        var date = $('#date').val();
        var author = $('#author').val();
        var place = $('#place').val();
        var team = $('#team').val();

        let realdate = new Date(date)//Was auto adding +11 hours (Due to Sydney/Australia time zone) before this correction.
        
        //eventNewData(title, realdate, team, author, place);

        // const data = {
        //     fields: {
        //         Title: title, //From user form.
        //         Date_Start: realdate, //From user form.
        //         Team_Invited_Id_LI: [team], //From user form.
        //         Place: [place], //From user form.
        //         Author_LI: [author], //From user form.
        //         Confirmed: [author], //Auto assigned.
        //         Status: "ON (Going Ahead)"
        //     }
        // }

        const data = {
            "fields": {
                "Title": title, //From user form.
                "Date_Start": realdate, //From user form.
                "Team_Invited_Id_LI": [team], //From user form.
                "Place": [place], //From user form.
                "Author_LI": [author], //From user form.
                "Confirmed": [author], //Auto assigned.
                "Status": "ON (Going Ahead)"
            }
        }

        console.log("READ TO CREATE NEW EVENT: ", data);

        const items = await axios.post('https://myeventus.netlify.app/.netlify/functions/events-new', data)
        .then(res => {
                let data = res.data;
                console.log("NEW EVENT RESPONSE: ", res);
                $('.toast').toast('show');
                //Clear fields in form.
                $('#title').val("");
                $('#team').val("");
                $('#date').val("");
                $('#place').val("");
                $('#author').val("");
                return data
        })
        .catch(err => {
            console.log("ERROR", err);
        });
     }

    $(document).ready(function() {
        // Realtime Auth listener.
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser){
                const userName = firebaseUser.displayName;
                const alias = userName.split("|");
                const user = alias[0]);
                if(alias[2] < 3) {
                    alert("You are NOT authorised yet to CREATE any entries, Wait for Admin to manually allow you!");
                }
            }
        }

        getTeamsList();
        getPlacesList();
        getUsersList();
    });
</script>
