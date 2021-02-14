---
layout: default
title: Events
---
<!-- <div>
     <button class="btn btn-primary" type="button" id="btn1" onclick='getEventsAll()'>List view</button>

  <a href="{% link _docs/services/team-new.md %}" role="button" class="btn btn-primary btn-large">Calendar View</a>

  <a href="{% link _docs/services/event-new.md %}" role="button" class="btn btn-primary btn-large">New Event</a>
   
   <a href="{% link _docs/services/team-new.md %}" role="button" class="btn btn-secondary btn-large">New Team</a>
     <a href="{% link _docs/services/member-new.md %}" role="button" class="btn btn-secondary btn-large">New User</a>
       <a href="{% link _docs/services/places.md %}" role="button" class="btn btn-success btn-large">List Place</a>
      <a href="{% link _docs/services/place-new.md %}" role="button" class="btn btn-success btn-large">New Place</a>
</div> -->


<div class="container">
    <div id="results"><div>
    <!-- <h1> NEW LIST</h1>-->
    <!-- {% for event in message %}
        {{ event }}
    {% endfor %} -->
</div>
<br>
<p>To start select one of the above.<p>
<p>The "List View" and "Calendar View" show the same information in a different format</p>
<!-- 
<div>
    <button onclick='updateEvents()' id="btn3">Update Events on GitHub</button>
</div> -->

<!-- <div>
    <a href="https://airtable.com/shrEHeEsIbilPyjwI">Click to confirm your attendence.</a>
</div> -->

<!-- <section id="control-center">
    <button id="get-btn">GET Data</button>
    <button id="post-btn">POST Data</button>
</section> -->


<script>
    //Main decision hub sync / await in order.
    async function main(){
       const events = await eventsList(); //From axios.js. Will return "resoved" section of Promise.
       console.log("Promise has finished eventsListAll", events); //Once above line is completed this is then run.
       displayEvents(events);
       //const getAliass = await getAliasList(); //Above
       //console.log("Promise has finished aliasListAll")
    }


    // function goToEdit(event){
    //     // $('form').on('submit', function (event) {
    //     console.log("IEDDDDD: ", event);
    //     // event.preventDefault();    
    // } 

    //Service_From_Team
    //Team_invited (Team)
    //Team_Invited_Text_LU
    //Team_Members_Invited_LU
    //Team_Members_Invited_Text_FO


    function displayEvents(events){
        let html = '';
        events.forEach(item => {
            if(item.fields.Confirmed_Text_LU == undefined){
                item.fields.Confirmed_Text_LU = "";
                console.log("CONFIRMED: ", item.fields.Confirmed_Text_LU);
            }        // p.then((events) => {
        //     console.log("FROM PROMISE: ", events);
        //     events.forEach(event => {
        //         if(event.fields.Confirmed_Text_LU == undefined){
        //             event.fields.Confirmed_Text_LU = "";
        //             console.log("CONFIRMED: ", event.fields.Confirmed_Text_LU);
        //         }

               
    
        //         html +=
        //         `<br>
        //         <div class="card shadow mb-4">
        //             <div class="card-header py-3">
        //                 <h6 class="m-0 font-weight-bold text-primary">${event.fields.Title}</h6>
        //             </div>
        //             <div class="card-body">
        //                 <div class="table-responsive">
        //                     <table class="table table-bordered" id="22" width="100%" cellspacing="0">
        //                     <thead><th>Title</th><th>Details</th></thead>
        //                     <tbody>
        //                         <tr><td>Status<td>${event.fields.Status}</td></tr>
        //                         <tr><td>Date / Time<td>${event.fields.Date_Start}</td></tr>
        //                         <tr><td>Place</td><td>${event.fields.Title_From_Places_LU}</td></tr>
        //                         <tr><td>Meet At</td><td>${event.fields.Meeting_From_Places_LU}</td></tr>
        //                         <tr><td>Place (Info)</td><td>${event.fields.Notes_From_Places_LU}</td></tr>
        //                         <tr><td>Team Invited</td><td>${event.fields.Team_Invited_Text_LU}</td></tr>
        //                         <tr><td>Team members Invited</td><td>${event.fields.Team_Members_Invited_Text_FO}</td></tr>
        //                         <tr><td>Confrimed Attending</td><td>${event.fields.Author_Text_LU}</td></tr>
        //                     </tbody>
        //                     </table>
        //         ` 

        //         // html +=
        //         //  `<button class="btn btn-primary btn-block btn-large" onclick="goToEdit(${event.id})">Edit</button></div></div></div>`

        //         html += 
        //         `<form><input type="hidden" id="eventId" name="eventId" value="${event.id}">
        //                  <button class="btn btn-primary btn-block" type="submit" id="form1">Confirm / Edit / Delete</button></form></div></div></div>`


        //     }); //End of forEach;

        //     document.getElementById('results').innerHTML = html; 
        //     //getAliasList();
        // })
        // .catch((message) => {
        //     console.log("FROM PROMISE: ", message);
        // });
        // // console.log("RESULTSS: ", results);

        //------------------------

        //  <input type="hidden" id="eventId" name="eventId" value="${event.id}">
        //                         <button class="btn btn-primary btn-block" type="submit" id="submitForm">Confirm / Edit / //Delete</button>

        
        
            html +=
            `<br>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">${item.fields.Title}</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="22" width="100%" cellspacing="0">
                        <thead><th>Title</th><th>Details</th></thead>
                        <tbody>
                            <tr><td>Status<td>${item.fields.Title}</td></tr>
                            <tr><td>Status<td><strong>${item.fields.Status}</strong></td></tr>
                            <tr><td>Date / Time<td>${item.fields.Date_Start}</td></tr>
                            <tr><td>Place</td><td>${item.fields.Title_From_Places_LU}</td></tr>
                            <tr><td>Meet At</td><td>${item.fields.Meeting_From_Places_LU}</td></tr>
                            <tr><td>Place (Info)</td><td>${item.fields.Notes_From_Places_LU}</td></tr>
                            <tr><td>Team Invited</td><td>${item.fields.Team_Invited_Title_Text_LU}</td></tr>
                            <tr><td>Team members Invited</td><td>${item.fields.Team_Members_Invited_Text_FO}</td></tr>
                            <tr><td>Confirmed Attending</td><td>${item.fields.Confirmed_Text_LU}</td></tr>
                        </tbody>
                        </table>
                        <button class="btn btn-danger" type="button" id="delete" onclick="deleteItem('${item.id}')">Delete</button>
                    </div>
                </div>
            </div>
            ` 
        });
        document.getElementById('results').innerHTML = html; 
    }


    $('form').on('submit', function (item) {
         item.preventDefault();
       
    });

    async function deleteItem(item){
        const response = await removeItem(item, "Event");
    };

    function getAliasList(){
        const restHeader = {
            'Authorization':'Bearer keysXtWsXZz4g68dA',
            'Content-Type':'application/json'
        }
        $.ajax({
            url: 'https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Who',
            headers: restHeader
            })
            .then(function(fromAPI){ 
                let data = fromAPI.records;
                console.log("Confirm Alias List: ", data);
                data.map(function(data2){
                    let id = data2.id;
                    let title = data2.fields.Alias;
                    ddConfirm.append($('<option></option>').attr('value', id).text(title));
                
                })
        });
    }
    
    $(document).ready(function() {
     
        //For Place drop down / select.
        let ddConfirm = $('#confirm');
        ddConfirm.empty();
        ddConfirm.append('<option selected="true" disabled>Select your alias to confirm..</option>');
        ddConfirm.prop('selectedIndex', 0);

        let html = '';

        //Trigger the main decision tree hub.
        main();
       

    });
</script>