---
layout: default
title: Event New
---

<div>
<h2>Create a new EVENT</h2>

<div>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Create a new event</h6>
            </div>
            <div class="card-body">
                <form>
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
                <!-- <div class="form-group">
                    <label for="userId">Place</label>
                    <select name="userId" id="userId" class="form-control" data-source="https://jsonplaceholder.typicode.com/users" data-valueKey="id" data-displayKey="title"></select>
                </div>        -->
                <div class="form-group">
                    <label for="place">Place</label>
                     <select name="place" id="place" class="form-control"></select>
                </div>
            </form>
        <div>
</div>

<div>
    <button class="btn btn-primary btn-block" type="button" id="btn2"  onclick='eventNew()'>Save</button>
</div>



<script>
    $(document).ready(function() {
        let dropdown = $('#place');
        dropdown.empty();
        dropdown.append('<option selected="true" disabled>Team</option>');
        dropdown.prop('selectedIndex', 0);

        $.ajax({
            url: 'https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Place',
            headers: {
                'Authorization':'Bearer keysXtWsXZz4g68dA',
                'Content-Type':'application/json'
            },
            }).then(function(fromAPI){ 
                let data = fromAPI.records;
                data.map(function(data2){
                    let id = data2.id;
                    let title = data2.fields.Title
                    dropdown.append($('<option></option>').attr('value', id).text(title));
                });

            });
                
        });

</script>