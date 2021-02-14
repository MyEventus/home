---
layout: default
title: Events
---
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
</head>

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
                    <label for="title">Create a title</label>
                    <input class="form-control" type="text" id="title" name="title" required
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

    $('form').on('submit', function (event) {
        event.preventDefault()
        //console.log("EVENT FROM FORM 1: ", event);
        teamNew(event);
    });

    async function teamNew(){
        var title = $('#title').val();
        let author  = $('#author').val();       
        teamNewData(title, author);

        //Clear fields in form.
        $('#title').val("");
        //$('#author').val("");
    }

    async function getAuthorList(){
        let ddAuthor = $('#author');
        ddAuthor.empty();
        ddAuthor.prop('selectedIndex', 0);

        const data = await membersList();
            data.map(function(data2){
                let id = data2.id;
                let author = data2.fields.Alias
            ddAuthor.append($('<option></option>').attr('value', id).text(author));
            $(".selectpicker").selectpicker("refresh");
        });
    }

    // $('#author').change(function () { 
    //     var values = $(this).val();
    //     console.log(values);
    // });


    $(document).ready(function() {
        getAuthorList();
    });

    //  function teamNew(){
    //     //console.log("EVENT FROM FORM 2: ", event);
    //     //var eventAuthor = [];
    //     var eventTitle = document.getElementById("teamtitle").value;
    //     //eventAuthor = document.getElementById("author").value;
          
    //     let eventAuthor  = $('#author').val();
    //     //console.log("NEW TEAM 2: ", blah);
         
    //     // eventAuthor.forEach(each => {
    //     //     console.log("each" , each)
    //     // });
    //     //rec9dsMhxydsEjFJ0 = Grant?
    //     //recNdaeR1aM3adcPd = Hazy
    //     //////eventAuthor = ["rec9dsMhxydsEjFJ0", "recNdaeR1aM3adcPd"]; //Working
    //     //console.log("NEW TEAM: ", eventAuthor);
    //     teamNewData(eventTitle, eventAuthor);
    // }

</script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>
