---
layout: default
title: member-new
---
<a href="/sb-admin-jekyll/docs/services/events/" role="button" class="btn btn-success btn-large">< Back to Events</a>

<div>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Create a new team member</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="22" width="100%" cellspacing="0">
                        <thead><th>Title</th><th>Details</th></thead>                       
                            <tbody>
                                <tr><td>Create an username</td>
                                <td><input type="text" id="alias" name="alias" required minlength="4" maxlength="8" size="10"></td></tr>
                                <tr><td>Your first name</td>
                                <td><input type="text" id="first_name" name="first_name" required
                            minlength="4" maxlength="8" size="10"></td></tr>
                                <tr><td>Your email</td><td><input type="text" id="emailmain" name="emailmain" required
                            minlength="4" maxlength="120" size="40"></td></tr>
                                <tr><td>Team</td><td>TBA</td></tr>
                            </tbody>         
                    </table>
                </div>
            </div>
        <div>
</div>
<div>
    <button class="btn btn-primary btn-block" type="button" id="btn1"  onclick='fn1()'>Save</button>
</div>