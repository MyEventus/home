// const getBtn = document.getElementById('get-btn')
// const postBtn = document.getElementById('post-btn')

// function fn1(){
//     var str = document.getElementById("alias").value;
//     alert(str)
// }
let events =    [];


let axiosConfig = {
    headers: {
        'Authorization': 'Bearer keysXtWsXZz4g68dA', //Airtable
        'Content-Type': 'application/json'
    }
  };

// const getData = () => {
//     axios.get('https://reqres.in/api/users', axiosConfig)
//     .then(response => {
//         console.log("GET RESPONSE: ", response)
//     })
//     .catch(err => {
//         console.log("ERROR: ",err);
//     });
// }




// const postData = () => {
//     axios.post('https://reqres.in/api/register', {
//         email: 'eve.holt@reqres.in',
//         password: 'pistol'
//     })
//     .then(response => {
//         console.log("POST RESPONSE: ", response)
//     })
//     .catch(err => {
//         console.log("ERROR: ",err.response);
//     });
// }


//POST TO INTEGROMAT WEBHOOK
// const postData = () => {
//     axios.post('https://hook.integromat.com/kkakxq2vhm6fa8p1qs7dc59eejbsobq9', {
//         email: 'eve.holt@reqres.in',
//         password: 'pistol'
//     }, axiosConfig)
//     .then(response => {
//         console.log("POST RESPONSE: ", response)
//     })
//     .catch(err => {
//         console.log("ERROR: ",err.response);
//     });
// }

// data = {
//         "id": "recV1hC0rOIW77QnQ",
//         "fields": {
//           "Alias": "Devo",
//           "First_Name": "Daviddddd",
//           "Event": [
//             "recN0DLilG2ajUaGJ",
//             "rec5gazPsKZjOzLXY"
//           ],
//           "Team": [
//             "rec4LOtiNa6V6TfxP",
//             "rech7pERFECSHrXct",
//             "recQ8s8eWsq48JUg9"
//           ],
//           "Email-Main": "al601lan@hotmail.com",
//           "Chat": [
//             "recbpWPun8Du4tgkZ"
//           ],
//           "Event 3": [
//             "recYbSogkySXO82UJ"
//           ]
//     }
// }

//POST NEW. USER / WHO
data = {
    fields: {
        Alias: "Blah1"
    }
}

//POST TO AIRTABLE.
const postData = () => {
    axios.post('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Who', data, axiosConfig)
    .then(response => {
        console.log("POST RESPONSE: ", response)
    })
    .catch(err => {
        console.log("ERROR: ",err.response);
    });
    console.log("New User: ", alias, first_name);
}


//AIRTABLE - CREATE NEW USER (WHO)
//const newUserData = (alias1, first_name1, email_main1) => {
//     console.log("In newUserData");
//     nUserData = {
//         fields: {
//             Alias: alias1,
//             First_Name: first_name1,
//             Email_Main: email_main1
//         }
//     }
//     axios.post('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Who', nUserData, axiosConfig)
//     .then(response => {
//         console.log("POST RESPONSE: ", response)
//    })
//     .catch(err => {
//        console.log("ERROR: ",err.response);
//    });
//     console.log("New User: ", alias1, first_name1, email_main1);
// }


//Get list of all events.
function eventsList(){
    console.log("In newUserData");
    return new Promise((resolve, reject) => {
        let events = [];
        //let a = 1 + 1;
        if (1 == 1) {
            axios.get('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Event', axiosConfig)
            .then(response => {
                events = response.data.records;
                //console.log("IN PROMISE: ", events);
                resolve(events)
            })
            .catch(err => {
                console.log("err", err);
            })
        }
        else {
            reject("Failed")
        }
    });
}


//AIRTABLE - LIST ALL - EVENT - VERSION 2 - WORKING------
//function eventsListAll(){
// const eventsListAll = () => {
//     return new Promise((resolve, reject) => {
//         let events = [];
//         axios.get('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Event', axiosConfig)
//             .then(response => {
//                 events = response.data.records;
//                 resolve(events)
//             })
//             .catch(err => {
//                 console.log("err", err);
//             })
//         //let a = 1 + 1;
//         //if (a == 2) {
//             //resolve(events)
//         //}
//         //else {
//         //    reject("Failed")
//         //}
//     });
// }

// let p = new Promise((resolve, reject) => {
//     let events = [];
    
//     axios.get('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Event', axiosConfig)
//         .then(response => {
//             events = response.data.records;
//             resolve(events)
//         })
//         .catch(err => {
//             console.log("err", err);
//         })
//     //let a = 1 + 1;
//     //if (a == 2) {
//         //resolve(events)
//     //}
//     //else {
//     //    reject("Failed")
//     //}
// });
//===============================
//AIRTABLE - LIST ALL - EVENT - VERSION 1 - WORKING------
// const getEventsAll = () => {
//     let events = [];
//     let results = axios.get('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Event', axiosConfig)
//     .then(response => {
//         events = response.data.records;
//         console.log("POST RESPONSE: ", events);
//         let html = '';
//         let blah;
//         let temp;
//         //temp = events.fields.Team_Members_Invited_Text_FO;
//         //console.log("TEMP: ", temp)
//         //blah = temp.split(",")
//         //console.log("BLAH: " , blah);

//         let users = [];
//         //users = events.fields.Team_Members_Invited_LU;
//         //console.log("Users: ", users);
//         //user = users.split(",")
//         //console.log("Users: ", users);
//         // html =+ `
//         // <div class="card shadow mb-4">
//         // `
        
//         events.forEach(event => {
//             if(event.fields.Confirmed_Text_LU == undefined){
//                 event.fields.Confirmed_Text_LU = "";
//                 console.log("CONFIRMED: ", event.fields.Confirmed_Text_LU);
//             }

//             html +=
//             `<br>
//             <div class="card shadow mb-4">
//                 <div class="card-header py-3">
//                     <h6 class="m-0 font-weight-bold text-primary">${event.fields.Title}</h6>
//                 </div>
//                 <div class="card-body">
//                     <div class="table-responsive">
//                         <table class="table table-bordered" id="22" width="100%" cellspacing="0">
//                         <thead><th>Title</th><th>Details</th></thead>

//                         <tbody>
//                             <tr><td>Status<td>${event.fields.Status}</td></tr>
//                             <tr><td>Date / Time<td>${event.fields.Date_Start}</td></tr>
//                             <tr><td>Place</td><td>${event.fields.Title_From_Places_LU}</td></tr>
//                             <tr><td>Meet At</td><td>${event.fields.Meeting_From_Places_LU}</td></tr>
//                             <tr><td>Place (Info)</td><td>${event.fields.Notes_From_Places_LU}</td></tr>
//                             <tr><td>Team Invited</td><td>${event.fields.Team_Invited_Text_LU}</td></tr>
//                             <tr><td>Team members Invited</td><td>${event.fields.Team_Members_Invited_Text_FO}</td></tr>
//                             <form>
//                             <div class="form-group">
//                                 <label for="eventtitle">Confirmation</label>
//                                 <input class="form-control" type="text" id="confirm" name="confirm"
//                                 minlength="4" maxlength="8" size="10">
//                             </div>
//                             </form>
//                             </tbody>
                            

//                         </table>
//                     </div>            
//                 </div>
//             </div>
//             </br>
//             `                           
//             //     <tfoot>
//             //     <tr><td>Created By</td><td>${event.fields.Author_Text_LU}</td></tr>
//             //     <tr><td>Created On</td><td>${event.fields.Created_Time}</td></tr>
//             //     <tr><td>ID</td><td>${event.id}</td></tr>
//             //     </tfoot>
//             //     </table>
                
//             // `; 
//             //event.fields.Team_Members_Invited_LU = '';
//         });

    
        
//         //console.log("Users: ", users);
//         // users.forEach(user => {
//         // html += `<div>
//         // <select style="width: 280px" id="Mobility" name="Mobility">
//         //     <option selected="${user.userid}">Please Select</option>
//         //     <option>${user.username}</option>
//         // </select>
//         // </div>`;
//         //});

//         document.getElementById('results').innerHTML = html; 
//    })
//     .catch(err => {
//        console.log("ERROR: ",err.response);
//    });
//    return events
// }

//AIRTABLE -- CREATE NEW EVENT-------
//"https://api.airtable.com/v0/appnPiAF5nEI3Lu1a/all_poll_data?maxRecords=100&view=poll_data&api_key=keyU4jNgidjWREljE&sortField=_createdTime&sortDirection=desc";



const eventNewData = (title, date_start, teamId, authorId, placeId) => {
    //console.log("DATA IN: ", title, date_start, teamId);
    //var data = new FormData(formData);
    //newData = data.serialize();
    //let data2 = {fields: {newData}}
    
    //console.log("SERIALIZED FORMDATA COVERT: ", data2);
    data = {
        fields: {
            Title: title, //From user form.
            Date_Start: date_start, //From user form.
            Team_Invited_Id_LI: [teamId], //From user form.
            Place: [placeId], //From user form.
            Author_LI: [authorId], //From user form.
            Confirmed: [authorId], //Auto assigned.
            Status: "ON (Going Ahead)"
        }
    }

    console.log("ABOUT TO UPDATE DB: ", data);


    axios.post('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Event', data, axiosConfig)
    .then(response => {
        console.log("POST RESPONSE: ", response)
   })
    .catch(err => {
       console.log("ERROR: ",err.response);
   });
   console.log("POST: ",  data)
    
}


//Integramat to save new _data file in Jekyll on GitHub.
let axiosConfig2 = {
    headers: {
        // 'Authorization': 'Bearer keysXtWsXZz4g68dA', //Airtable
        'Content-Type': 'text/plain'
    }
  };

const updateEvents = () => {
    data = {data: 'pages: [{"name": "Home 6","url": "/","title": "Title 6"},{"name": "Home 7","url": "/","title": "Title 7"}]'}

    axios.post('https://hook.integromat.com/kkakxq2vhm6fa8p1qs7dc59eejbsobq9', data)
    .then(response => {
        events = response.data.records;
        console.log("POST RESPONSE: ", events);
   })
    .catch(err => {
       console.log("ERROR: ",err.response);
   });
}


const getPlacesAll = () => {
    let results = axios.get('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Place', axiosConfig)
    .then(response => {
        places = response.data.records;
        console.log("PLACES: POST RESPONSE: ", places);
    })
    .catch(err => {
        console.log("ERROR: ",err.response);
    });
    return results
}



const teamNewData = (title, authorId) => {
    //console.log("DATA IN: ", title, date_start, teamId);
    //var data = new FormData(formData);
    //newData = data.serialize();
    //let data2 = {fields: {newData}}
    
    //console.log("SERIALIZED FORMDATA COVERT: ", data2);
    data = {
        fields: {
            Title: title, //From user form.
            Who: authorId, //From user form.
        }
    }

    console.log("ABOUT TO UPDATE DB: ", data);

    axios.post('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Team', data, axiosConfig)
    .then(response => {
        console.log("POST RESPONSE: ", response)
   })
    .catch(err => {
       console.log("ERROR: ",err.response);
   });
   console.log("POST: ",  data)
    
}

//WEBHOOK in
//https://hook.integromat.com/kkakxq2vhm6fa8p1qs7dc59eejbsobq9




// getBtn.addEventListener('click', getData)
// postBtn.addEventListener('click', postData)


// $('select[data-source]').each(function() {
//     var $select = $(this);
    
//     $select.append('<option></option>');
    
//     $.ajax({
//       url: $select.attr('data-source'),
//     }).then(function(options) {
//       options.map(function(option) {
//         var $option = $('<option>');
        
//         $option
//           .val(option[$select.attr('data-valueKey')])
//           .text(option[$select.attr('data-displayKey')]);
        
//         $select.append($option);
//       });
//     });
//   });
  

