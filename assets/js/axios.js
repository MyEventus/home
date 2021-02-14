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

/////////////////// MEMBERS - NEW //////////////////////
function memberNewData(alias, firstname, email, team){
    data = {
        fields: {
            Alias: alias, //From user form.
            First_Name: firstname,
            Email_Main: email,
            Team: team //From user form.
        }
    }

    return new Promise((resolve, reject) => {
        //let items = [];
        //let a = 1 + 1;
        if (1 == 1) {
            //resolve(console.log("Hi"))
            axios.post('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Who', data, axiosConfig)
                .then(resp => {
                 //let results = resp.data.records;
                 console.log("IN PROMISE: ", resp.data);
                 alert(resp.statusText +". Completed successfully. New User: " + resp.data.fields.Alias + " " + resp.data.fields.Email_Main)
                 resolve()
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



//Get list of all members.
function membersList(){
    //console.log("In newUserData");
    return new Promise((resolve, reject) => {
        let events = [];
        //let a = 1 + 1;
        if (1 == 1) {
            axios.get('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Who', axiosConfig)
            .then(response => {
                data = response.data.records;
                console.log("IN PROMISE: ", events);
                resolve(data)
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

//////////////////// PLACES ////////////////////////
function placeNewData(title, meeting_place, notes){

    let data = {
        fields: {
            Title: title, //From user form.
            Meeting_Place: meeting_place, //From user form.
            Notes: notes, //From user form.
        }
    }

    return new Promise((resolve, reject) => {
        //let a = 1 + 1;
        if (1 == 1) {
            axios.post('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Place', data, axiosConfig)
                .then(resp => {
                    alert(resp.statusText +". Completed successfully. New Place: " + resp.data.fields.Title + ". " + resp.data.fields.Meeting_Place)
                    resolve()
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

function placesList(){
    //console.log("In newUserData");
    return new Promise((resolve, reject) => {
        let events = [];
        //let a = 1 + 1;
        if (1 == 1) {
            axios.get('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Place', axiosConfig)
            .then(response => {
                events = response.data.records;
                console.log("IN PROMISE: ", events);
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

//////////////////// TEAMS ////////////////////////
function teamNewData(title, authorId){
    //var data = new FormData(formData);
    //newData = data.serialize();
    //let data2 = {fields: {newData}}

    //let data..bug.
    data = {
        fields: {
            Title: title, //From user form.
            Who: authorId, //From user form.
        }
    }

    return new Promise((resolve, reject) => {
        //let a = 1 + 1;
        if (1 == 1) {
            axios.post('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Team', data, axiosConfig)
                .then(resp => {
                    alert(resp.statusText +". Completed successfully. New Team: " + resp.data.fields.Title)
                    resolve()
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


function teamsList(){
    //console.log("In newUserData");
    return new Promise((resolve, reject) => {
        let data = [];
        //let a = 1 + 1;
        if (1 == 1) {
            axios.get('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Team', axiosConfig)
            .then(resp => {
                data = resp.data.records;
                resolve(data)
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

///////////////////// EVENTS ///////////////////////////
//Get list of all events.
function eventsList(){
    console.log("In newUserData");
    return new Promise((resolve, reject) => {
        let data = [];
        //let a = 1 + 1;
        if (1 == 1) {
            axios.get('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Event', axiosConfig)
            .then(resp => {
                let data = resp.data.records;
                resolve(data)
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

// ------------------------- ABOVE IS RE FACTORED V 2 ------------------
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


//POST TO AIRTABLE.
// const postData = () => {
//     axios.post('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Who', data, axiosConfig)
//     .then(response => {
//         console.log("POST RESPONSE: ", response)
//     })
//     .catch(err => {
//         console.log("ERROR: ",err.response);
//     });
//     console.log("New User: ", alias, first_name);
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


//WEBHOOK in
//https://hook.integromat.com/kkakxq2vhm6fa8p1qs7dc59eejbsobq9




