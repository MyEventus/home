---
layout: default
title: New Place
---

<h1>New Place</h1>

<div>
    <form id="makeNewMember">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Create a new place or location title.</h6>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="title">Create a new place / location</label>
                    <input class="form-control" type="text" id="title" name="title" required placeholder ="Create a unique name (add number at end if need be)"
                    minlength="3" maxlength="50" size="40">
                </div>
                <div class="form-group">
                    <label for="meeting_place">Where exactly to meet up?</label>
                    <input class="form-control" type="text" id="meeting_place" name="meeting_place" required
                    minlength="4" maxlength="50" size="40">
                </div>
                  <div class="form-group">
                    <label for="notes">More notes (optional)</label>
                    <textarea class="form-control" type="text" id="notes" name="notes" placeholder="Notes are only relevent to location i.e directions NOT times or people etc."
                    minlength="4" maxlength="255" size="40"></textarea>
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
        placeNew();
    });

    async function placeNew(){
        var title = $('#title').val(); //document.getElementById("first_name").value;
        var meeting_place = $('#meeting_place').val();
        var notes = $('#notes').val();
        const items = await placeNewData(title, meeting_place, notes);

        //Clear fields in form.
        $('#title').val("");
        $('#meeting_place').val("");
        $('#notes').val("");
     }

</script>