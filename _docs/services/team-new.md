---
layout: default
title: Events
---
<head>
<!-- Latest compiled and minified CSS -->
<!-- <link rel="stylesheet" type="text/css" href="/bootstrap-select/dist/css/style.css"> -->
<!-- <link rel="stylesheet" type="text/css" href="style.css"> -->
<!-- <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.
css"> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
</head>

<a href="/sb-admin-jekyll/docs/services/events/" role="button" class="btn btn-success btn-large">< Back to Events</a>

<h1>New Team</h1>

<!-- <div class="multi-select_box">
    <select class="multi_select w-100" multiple>
    <option>Monday</option>
    <option>Tue</option>
    </select>
</div> -->

<!-- <select class="selectpicker w-100" multiple>
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Barbecue</option>
</select> -->



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
                    minlength="3" maxlength="50" size="40">
                </div>
                <div>
                    <select name="author[]" id="author" class="selectpicker w-100" multiple>
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

    // $('#author').change(function () { 
    //     var values = $(this).val();
    //     console.log(values);
    // });

    $(document).ready(function() {
        // $('.multi_select_box').selectpicker();

        const restHeader = {
            'Authorization':'Bearer keysXtWsXZz4g68dA',
            'Content-Type':'application/json'
        }
        //For Place drop down / select.
        //let ddAuthor = [];
        let ddAuthor = $('#author');
        //let ddAuthor = $('#author').selectpicker();
        ddAuthor.empty();
        //ddAutho.append('<select name="author" id="author" class="selectpicker w-100" multiple></select>')
        //ddAuthor.append('<option selected="true" disabled>Select a member..</option>');
        ddAuthor.prop('selectedIndex', 0);

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
                    $(".selectpicker").selectpicker("refresh");
                });              
            });
        }





    });

    $('form').on('submit', function (event) {
        event.preventDefault()
        //console.log("EVENT FROM FORM 1: ", event);
        teamNew(event);
    });


     function teamNew(){
        //console.log("EVENT FROM FORM 2: ", event);
        //var eventAuthor = [];
        var eventTitle = document.getElementById("teamtitle").value;
        //eventAuthor = document.getElementById("author").value;
          
        let eventAuthor  = $('#author').val();
        //console.log("NEW TEAM 2: ", blah);
         
        // eventAuthor.forEach(each => {
        //     console.log("each" , each)
        // });
        //rec9dsMhxydsEjFJ0 = Grant?
        //recNdaeR1aM3adcPd = Hazy
        //////eventAuthor = ["rec9dsMhxydsEjFJ0", "recNdaeR1aM3adcPd"]; //Working
        //console.log("NEW TEAM: ", eventAuthor);
        teamNewData(eventTitle, eventAuthor);
    }

</script>
<!-- <script src="/bootstrap-select/js/scripts.js"></script> -->

<!-- Latest compiled and minified JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>

<!-- (Optional) Latest compiled and minified JavaScript translation files -->
<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/i18n/defaults-*.min.js"></script> -->
