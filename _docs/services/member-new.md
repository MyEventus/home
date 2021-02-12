---
layout: default
title: member-new
---
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">

<a href="/sb-admin-jekyll/docs/services/events/" role="button" class="btn btn-success btn-large">< Back to Events</a>

</head>


<div>
    <form id="makeNewMember">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Create a new team / group.</h6>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="alias">Create a alias / username</label>
                    <input class="form-control" type="text" id="alias" name="alias" required
                    minlength="3" maxlength="50" size="40">
                </div>
                <div class="form-group">
                    <label for="first_name">Enter real first name only</label>
                    <input class="form-control" type="text" id="first_name" name="first_name" required
                    minlength="4" maxlength="50" size="40">
                </div>
                  <div class="form-group">
                    <label for="emailmain">Enter working email</label>
                    <input class="form-control" type="email" id="emailmain" name="emailmain" required
                    minlength="4" maxlength="120" size="40">
                </div>
                 <div class="form-group">               
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

    $('form').on('submit', function (event) {
        event.preventDefault()
        //console.log("EVENT FROM FORM 1: ", event);
        memberNew();
    });


     function memberNew(){
        var firstName = document.getElementById("first_name").value;
        var email = document.getElementById("emailmain").value;
        var alias = document.getElementById("alias").value;        
        let team  = $('#team').val();
        memberNewData(alias, firstName, email, team);
     }

 $(document).ready(function() {

     const restHeader = {
            'Authorization':'Bearer keysXtWsXZz4g68dA',
            'Content-Type':'application/json'
        }

    let ddTeam = $('#team');
        ddTeam.empty();
        ddTeam.prop('selectedIndex', 0);

     getTeam();

        function getTeam(){
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
                    $(".selectpicker").selectpicker("refresh");
                });
            });
        }

 });
 </script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>
