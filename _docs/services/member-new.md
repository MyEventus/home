---
layout: default
title: member-new
---
<head>
<!-- Required for multi-select drop down -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">

<!-- <a href="/sb-admin-jekyll/docs/services/events/" role="button" class="btn btn-success btn-large">< Back to Events</a> -->
<script src="/functions/airtable-add-members.js"></script>
</head>

<div class="toast" data-autohide="false"  aria-live="assertive" aria-atomic="true" data-delay="4000" style="position: absolute; top: 1rem; right: 1rem;">
  <div class="toast-header">
    <strong class="mr-auto text-primary">OK. Completed</strong>
    <!-- <small>OK</small> -->
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
  </div>
  <div class="toast-body">
    Updated database successfully. Now go to the "list view" to see the updates.

  </div>
</div>


<!-- <div class="toast" data-autohide="false"  aria-live="assertive" aria-atomic="true" data-delay="4000" style="position: absolute; top: 1rem; right: 1rem;">
  <div class="toast-header">
    <strong class="mr-auto text-primary">ERROR. Failed</strong>
    <small>OK</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
  </div>
  <div class="toast-body">
    Try again or try later.
  </div>
</div> -->


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
                  <label for="team">Add user to one or more teams. <br>Select nothing to remove member from all teams.</label>            
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

    // async function memberNew(){
    //     // var firstName = $('#first_name').val(); //document.getElementById("first_name").value;
    //     // var email = $('#email').val();
    //     let userId = $('#author').val();
    //     let team  = $('#team').val();

    //     console.log("ALIAS /USER ID: ", userId);
    //     console.log("TEAM: ", team);

    //     //console.log("ID OF USER AND TEAM: ", alias_id);
    //     //const items = await memberNewData(alias, firstName, email, team);
        
    //     let data = {
    //         fields: 
    //         {
    //             // first_name: firstName, 
    //             // email: email,
    //             userId: userId,
    //             Team: team
    //         }
    //     }

    //     //let data = "Hi there";
    //     console.log("DATA OUT PRE: ", data);

    //     //FAILED. TO HARD AS FUNCTIONS DEBUG IS DOWN ON NETLIFY.
    //     // axios.post('https://myeventus.netlify.app/.netlify/functions/airtable-add-members', data)
    //     // .then(res => {
    //     //     let data = res.data;
    //     //     console.log("RESPONSE FROM LAMBDA: ", data);
    //     // })
    //     // .catch(err => {
    //     //     console.log("err", err);
    //     // })

    //     const axiosAirTableConfig = {
    //         headers: {
    //             'Authorization': 'Bearer keysXtWsXZz4g68dA', //Airtable
    //             'Content-Type': 'application/json'
    //         }
    //     };

    //     const iduser = data.fields.userId;
    //     delete data.fields.userId;
    //     console.log("DATA OUT POST: ", data);

    //     axios.patch(`https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Who/${iduser}`, data, axiosAirTableConfig)
    //     .then(res => {
    //         let data = res.data;
    //         console.log("RESPONSE FROM LAMBDA: ", data);
    //         $('.toast').toast('show');
    //     })
    //     .catch(err => {
    //         console.log("err", err);
    //     })


    //     //Clear fields in form.
    //     // $('#first_name').val("");
    //     // $('#email').val("");
    //     $('#alias').val("");
    //     $('#team').val("");
    //     //$(".selectpicker").selectpicker("refresh");
    //  }

    //VERSION 2 - TO BYPASS NETLIFY.
    async function memberNew(){
        const userId = $('#author').val();
        const team  = $('#team').val();

        let data = {
            fields: 
            {
                userId: userId,
                Team: team
            }
        }
        const resp = await memberRelateData(data);
        console.log("RESP MEMBER RELATE AXIOS: ", resp);

        // toastr.options = {
        //     "closeButton": true, // true/false
        //     "debug": false, // true/false
        //     "newestOnTop": false, // true/false
        //     "progressBar": false, // true/false
        //     "positionClass": "md-toast-top-right", // md-toast-top-right / md-toast-top-left / md-toast-bottom-right
        //     "preventDuplicates": false,
        //     "onclick": null,
        //     "showDuration": "300", // in milliseconds
        //     "hideDuration": "1000", // in milliseconds
        //     "timeOut": "5000", // in milliseconds
        //     "extendedTimeOut": "1000", // in milliseconds
        //     "showEasing": "swing",
        //     "hideEasing": "linear",
        //     "showMethod": "fadeIn",
        //     "hideMethod": "fadeOut"
        //     }
            $('.toast').toast('show');
        // Display a success toast, with a title
        //toastr.success('Have fun storming the castle!', 'Miracle Max Says')


        $('#author').val("");
        //$('#team').val("");
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

        ////async function getTeamsViaFunctions(){
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
        ////};

        //---------WITHOUT NETLIFY-------------
        // const restHeader = {
        //     //'Authorization':'Bearer keysXtWsXZz4g68dA',
        //     'Content-Type':'application/json'
        // }

        // $.ajax({
        //     url: 'https://myeventus.netlify.app/.netlify/functions/airtable-list-teams',
        //     headers: restHeader
        //     })
        //     .then(res => { 
        //         let data = res.data;
                
        //         data.map(function(data2){
        //             let id = data2.id;
        //             let title = data2.fields.Title;
        //             ddTeam.append($('<option></option>').attr('value', id).text(title));
        //             $(".selectpicker").selectpicker("refresh");
        //         })
        //     })
        //     .catch(err => {
        //         console.log("ERROR: ", err);
        //     })
        //----------------------------------------

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
