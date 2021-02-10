---
layout: default
title: Events
---

<a href="/sb-admin-jekyll/docs/services/events/" role="button" class="btn btn-success btn-large">< Back to Events</a>
<div>
<h2>Create a new EVENT</h2>

<div>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Create a new event</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="22" width="100%" cellspacing="0">
                        <thead><th>Title</th><th>Details</th></thead>                       
                            <tbody>
                                <tr><td>Create a title.</td>
                                <td><input type="text" id="eventtitle" name="eventtitle" required
                                    minlength="4" maxlength="8" size="10"></td></tr>
                                <tr><td>Meeting Date / Time</td>
                                <td><input type="datetime-local" id="eventdatestart" name="eventdatestart"
                                    minlength="4" maxlength="50" size="40"></td></tr>
                                     <tr><td>Meet At Place</td>
                                <td><input type="text" id="eventplace" name="eventplace" required
                                    minlength="4" maxlength="8" size="10"></td></tr>
                                <tr><td>Invite what team?</td><td>TBA</td></tr>
                            </tbody>         
                    </table>
                </div>
            </div>
        <div>
</div>
<div>
    <button class="btn btn-primary btn-block" type="button" id="btn2"  onclick='eventNew()'>Save</button>
</div>


<form>
        <div class="form-group">
          <label for="userId">User</label>
          <select name="userId" id="userId" class="form-control" data-source="https://jsonplaceholder.typicode.com/users" data-valueKey="id" data-displayKey="name"></select>
        </div>     
        <button class="btn btn-primary" type="submit">Go</button>
      </form>

<!-- /////////////// WORKING - DON'T TOUCH ////////////// -->
<!-- <form>
        <div class="form-group">
          <label for="userId">User</label>
          <select name="userId" id="userId" class="form-control" data-source="https://jsonplaceholder.typicode.com/users" data-valueKey="id" data-displayKey="name"></select>
        </div>     
        <button class="btn btn-primary" type="submit">Go</button>
      </form>

<!-- <script>
    $('select[data-source]').each(function() {
  var $select = $(this);
  
  $select.append('<option></option>');
  
  $.ajax({
    url: $select.attr('data-source'),
  }).then(function(options) {
    options.map(function(option) {
      var $option = $('<option>');
      
      $option
        .val(option[$select.attr('data-valueKey')])
        .text(option[$select.attr('data-displayKey')]);
      
      $select.append($option);
    });
  });
}); 
</script> -->

<!-- //////////////// ENDO OF WORKING //////////////// -->

<script>
$(document).ready(function() {
    $('select[data-source]').each(function() {
        var $select = $(this);
    
        $select.append('<option></option>');

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            headers: {
                'Authorization':'Bearer keysXtWsXZz4g68dA',
                'Content-Type':'application/json'
            },
            }).then(function(options) {
                options.map(function(option) {
                    var $option = $('<option>');
                    
                    $option
                        .val(option[$select.attr('data-valueKey')])
                        .text(option[$select.attr('data-displayKey')]);
                    
                    $select.append($option);
                });
            });
        });
    });


// $(document).ready(function() {

//     $('select[data-source]').each(function() {
//         var $select = $(this);
        
//         $select.append('<option></option>');
        
//         $.ajax({
//             url: 'https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Place',
//             headers: {
//                 'Authorization':'Bearer keysXtWsXZz4g68dA',
//                 'Content-Type':'application/json'
//             },
//         }).then(function(options) {
//             options.map(function(option) {
//             var $option = $('<option>');
            
//             $option
//                 .val(option[$select.attr('data-valueKey')])
//                 .text(option[$select.attr('data-displayKey')]);
            
//             $select.append($option);
//             });
//         });
//     });
// });


    // let axiosConfig = {
    //     headers: {
    //         'Authorization': 'Bearer keysXtWsXZz4g68dA', //Airtable
    //         'Content-Type': 'application/json'
    //     }
    // };


    // $.ajax({
    //     url: 
    //         let results = getPlacesAll(),
    //     })
    //     .then(function(){
    //         console.log("PLACES FROM API: ", results);
    //     })
        
    // });
    //let authorizationToken = 'Bearer keysXtWsXZz4g68dA'

    //working with real api
    // $.ajax({
    //     url: 'https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Place',
    //     headers: {
    //         'Authorization':'Bearer keysXtWsXZz4g68dA',
    //         'Content-Type':'application/json'
    //     },
    //     method: 'GET',
    //     dataType: 'json',
    //     //data: data, //Sending to API
    //     success: function(data){
    //     console.log('succes: ',data.records);
    //     }
    // });

//     $('select[data-source]').each(function() {
//         var $select = $(this);

//         $select.append('<option></option>');
        
//         $.ajax({
//             url: 'https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Place',
//             headers: {
//                 'Authorization':'Bearer keysXtWsXZz4g68dA',
//                 'Content-Type':'application/json'
//             },
//             method: 'GET',
//             dataType: 'json'
//             //data: data, //Sending to API
//             }).then(function(options) {
//                 options.map(function(option) {
//                     var $option = $('<option>');
                    
//                     $option
//                     .val(option[$select.attr('data-valueKey')])
//                     .text(option[$select.attr('data-displayKey')]);
                    
//                     $select.append($option);
//                 });
//         });
//     });
// });




    // $('select[data-source]').each(function() {
    //     var $select = $(this);
        
    //     $select.append('<option></option>');

    //     $.ajax({
    //         type: "GET",
    //         beforeSend: function(request) {
    //             request.setRequestHeader("Authority", authorizationToken);
    //         },
    //         url: $select.attr('data-source'),
    //         //data: "json=" + escape(JSON.stringify(createRequestObject)),
    //         //processData: false,
    //         // success: function(msg) {
    //         //     $("#results").append("The result =" + StringifyPretty(msg));
    //         // }
    //         }).then(function(options) {
    //         options.map(function(option) {
    //             var $option = $('<option>');
                
    //             $option
    //             .val(option[$select.attr('data-valueKey')])
    //             .text(option[$select.attr('data-displayKey')]);
                
    //             $select.append($option);
    //         });
    //     });
    // });
        
//});

    // ORIGINAL WORKING
//     $('select[data-source]').each(function() {
//         var $select = $(this);
        
//         $select.append('<option></option>');
        
//         $.ajax({
//         url: $select.attr('data-source'),
//         }).then(function(options) {
//         options.map(function(option) {
//             var $option = $('<option>');
            
//             $option
//             .val(option[$select.attr('data-valueKey')])
//             .text(option[$select.attr('data-displayKey')]);
            
//             $select.append($option);
//         });
//         });
//     });
    
 //});





// <script>
// $(document).ready(function() {
//   var url = "https://api.github.com/search/repositories?q={{ site.github_user }}/{{ site.github_repo }}";
//     fetch(url, { 
//         headers: {"Accept":"application/vnd.github.preview"}
//     }).then(function(e) {
//         return e.json()
//     }).then(function(r) {
//         console.log(r.items[0])
//         stars = r.items[0]['stargazers_count']
//         forks = r.items[0]['forks_count']
//         $('#stars').text(stars + " Stars")
//         $('#forks').text(forks + " Forks")
//     });
// });


</script>