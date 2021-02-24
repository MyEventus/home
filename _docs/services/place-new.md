---
layout: default
title: New Place
---
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

         $('.toast').toast('show');
         
        //Clear fields in form.
        $('#title').val("");
        $('#meeting_place').val("");
        $('#notes').val("");
     }

</script>