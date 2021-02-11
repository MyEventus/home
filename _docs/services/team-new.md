---
layout: default
title: Events
---
<head>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
</head>

<a href="/sb-admin-jekyll/docs/services/events/" role="button" class="btn btn-success btn-large">< Back to Events</a>

<h1>New Team</h1>


<div>
    <form id="makeNewTeam">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Create a new team / group.</h6>
                <p>Make sure the "Members" / "Users" exist before trying to assign them to a new team.</p>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="teamtitle">Create a title</label>
                    <input class="form-control" type="text" id="teamtitle" name="teamtitle" required
                    minlength="4" maxlength="8" size="10">
                </div>
                <div class="form-group">
                    <label for="author">Member</label>
                    <select name="author" id="author" class="form-control" multiple></select>
                    <!-- <select name="author" id="author" class="selectpicker" multiple></select> -->
                </div>
            </div>
            <div>
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
        let ddAuthor = $('#author');
        //let ddAuthor = $('#author').selectpicker();
        ddAuthor.empty();
        ddAuthor.append('<option selected="true" disabled>Select a member..</option>');
        ddAuthor.prop('selectedIndex', 0);

        // Refresh the selectpicker
        // $("#author").selectpicker("refresh");

        getAuthor();

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
        //$("#author").selectpicker("refresh");
        }





    });

    $('form').on('submit', function (event) {
        event.preventDefault()
        teamNew();
    });


     function teamNew(){
          let eventAuthor = [];
          var eventTitle = document.getElementById("teamtitle").value;
          eventAuthor = document.getElementById("author").value;
         
            console.log("NEW TEAM: ", eventAuthor);
            teamNewData(eventTitle, eventAuthor);
        }

</script>

<!-- Latest compiled and minified JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>

<!-- (Optional) Latest compiled and minified JavaScript translation files -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/i18n/defaults-*.min.js"></script>
