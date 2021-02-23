---
layout: default
title: member-new
---
<head>
<!-- Required for multi-select drop down -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">

<!-- <a href="/sb-admin-jekyll/docs/services/events/" role="button" class="btn btn-success btn-large">< Back to Events</a> -->

</head>

<h1>New Member</h1>

<div>
    <form id="makeNewMember">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Create a new member or user.</h6>
            </div>
            <div class="card-body">
                <!-- <div class="form-group">
                    <label for="alias">Select an alias / username</label>
                    <input class="form-control" type="text" id="alias" name="alias" required
                    minlength="3" maxlength="50" size="40">
                </div> -->
            <!--
                <div class="form-group">
                    <label for="first_name">Enter real first name only</label>
                    <input class="form-control" type="text" id="first_name" name="first_name" required
                    minlength="4" maxlength="50" size="40">
                </div>
                  <div class="form-group">
                    <label for="email">Enter working email</label>
                    <input class="form-control" type="email" id="email" name="email" required
                    minlength="4" maxlength="120" size="40">
                </div> -->
                <div class="form-group">   
                    <label for="author">Select a member</label>            
                    <select name="author[]" id="author" class="selectpicker w-100">
                    </select>
                 </div>
                 <div class="form-group">   
                    <label for="team">Add user to at least one team</label>            
                    <select name="team[]" id="team" class="selectpicker w-100" multiple>
                    </select>
                 </div>
            </div>
            <div>
                <button class="btn btn-primary btn-block" type="submit" id="submitForm">Save</button>
            </div>
        </div>
    </form>
</div>

<script>
    //As now using Google firstore for auth, this simply links Airtable user to a team in airtable.

    $('form').on('submit', function (event) {
        event.preventDefault()
        memberNew();
    });

    async function memberNew(){
        // var firstName = $('#first_name').val(); //document.getElementById("first_name").value;
        // var email = $('#email').val();
        let user_id = $('#author').val();
        let team  = $('#team').val();

        console.log("ALIAS /USER ID: ", user_id);
        console.log("TEAM: ", team);

        //console.log("ID OF USER AND TEAM: ", alias_id);
        //const items = await memberNewData(alias, firstName, email, team);
        
        let data = {
            // first_name: firstName, 
            // email: email,
            user_id: user_id,
            team: team
        }

        //let data = "Hi there";
        console.log("DATA OUT: ", data);

        axios.post('https://myeventus.netlify.app/.netlify/functions/airtable-add-members', data)
        .then(res => {
            let data = res.data;
            console.log("RESPONSE FROM LAMBDA: ", data);
        })
        .catch(err => {
            console.log("err", err);
        })


        //Clear fields in form.
        // $('#first_name').val("");
        // $('#email').val("");
        $('#alias').val("");
        $('#team').val("");
        //$(".selectpicker").selectpicker("refresh");
     }

    async function getMembersList(){
        let ddAuthor = $('#author');
        ddAuthor.empty();
        ddAuthor.prop('selectedIndex', 0);

        //const data = await membersList();
        //async function getMembersViaFunctions(){
            axios.get('https://myeventus.netlify.app/.netlify/functions/airtable-list-members')
            .then(res => {
                let data = res.data;
                console.log("MEMBERS: ", data);
                data.map(function(data2){
                    let id = data2.id;
                    let title = data2.fields.Alias
                    ddAuthor.append($('<option></option>').attr('value', id).text(title));
                    $(".selectpicker").selectpicker("refresh");
                });
            })
            .catch(err => {
                console.log("err", err);
            })
        //};

        // data.map(function(data2){
        //     let id = data2.id;
        //     let title = data2.fields.Alias
        //     ddAuthor.append($('<option></option>').attr('value', id).text(title));
        //     $(".selectpicker").selectpicker("refresh");
        // });
    }


    async function getTeamsList(){
        let ddTeam = $('#team');
        ddTeam.empty();
        ddTeam.prop('selectedIndex', 0);

        //const data = await teamsList();

        //async function getTeamsViaFunctions(){
            axios.get('https://myeventus.netlify.app/.netlify/functions/airtable-list-teams')
            .then(res => {
                let data = res.data;
                console.log("TEAMS: ", data);
                data.map(function(data2){
                    let id = data2.id;
                    let title = data2.fields.Title
                    ddTeam.append($('<option></option>').attr('value', id).text(title));
                    $(".selectpicker").selectpicker("refresh");
                });
            })
            .catch(err => {
                console.log("err", err);
            })
        //};

        // data.map(function(data2){
        //     let id = data2.id;
        //     let title = data2.fields.Title
        //     ddTeam.append($('<option></option>').attr('value', id).text(title));
        //     $(".selectpicker").selectpicker("refresh");
        // });
    }


$(document).ready(function() {
    getMembersList();
    getTeamsList();

        // function getTeam(){
        //     $.ajax({
        //         url: 'https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Team',
        //         headers: restHeader,
        //         })
        //         .then(function(fromAPI){ 
        //             let data = fromAPI.records;
        //             console.log("Teams: ", data);
        //             data.map(function(data2){
        //                 let id = data2.id;
        //                 let title = data2.fields.Title
        //             ddTeam.append($('<option></option>').attr('value', id).text(title));
        //             $(".selectpicker").selectpicker("refresh");
        //         }); // let data = {
        //     // first_name: firstName, 
        //     // email: email,
        //     alias: alias,
        //     team: team
        // }
});
</script>

<!-- Required for multi-select drop down -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>
