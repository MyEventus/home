
//------------ VERSION 2 -POST NETLIFY --------------
//Axios .bug. Need to hide this later.
// let axiosConfig = {
//     headers: {
//         'Authorization': 'Bearer keysXtWsXZz4g68dA', //Airtable
//         'Content-Type': 'application/json'
//     }
//   };

//   async function getAPIKeys(){ 
//     await axios.get('https://myeventus.netlify.app/.netlify/functions/my-func-get-api')
//         .then(res => {
//             let data = res.data;
//             console.log("API KEYS FROM LAMBDA: ", data.data);
//             return data
//         })
//         .catch(err => {
//             console.log("ERROR", err);
//         })
//   }

/////////////////// MEMBERS - NEW //////////////////////
//Only used when Google firestore accepts new user OK. Duplicates in Airtable. May move all data to firestore later date .todo.
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

//Link single existing user/member to one or more Teams.
async function memberRelateData(data){
    const iduser = data.fields.userId;
    delete data.fields.userId;
    console.log("axios.js memberRelateData: ", data);

    let resp = await axios.patch(`https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Who/${iduser}`, data, axiosConfig)
    .then(res => {
        const resp1 = res.data;
        console.log("RESPONSE FROM LAMBDA: ", data);
        return resp1
    })
    .catch(err => {
        console.log("err", err);
    })
    return resp
}


//MOVED TO NETLIFY FUNCTIONS. MOVED BACK AGAIN.
//Get list of all members.
function membersList(){
    const api = getAPIKeys();
    console.log("API KEY RESPONSE : ", api);
    return new Promise((resolve, reject) => {
        let events = [];
        //let a = 1 + 1;
        if (1 == 1) {
            axios.get('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Who', axiosConfig)
            .then(response => {
                data = response.data.records;
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


function removeItem(id, table){
    return new Promise((resolve, reject) => {
        if (1 == 1) {
            axios.delete(`https://api.airtable.com/v0/appNBMp3C4tRCcJFy/${table}/${id}`,axiosConfig)
                .then(resp => {
                 alert(resp.statusText +". Completed successfully. DELETED.");
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
                    //alert(resp.statusText +". Completed successfully. New Place: " + resp.data.fields.Title + ". " + resp.data.fields.Meeting_Place)
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
        let data = [];
        //let a = 1 + 1;
        if (1 == 1) {
            axios.get('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Place', axiosConfig)
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
                    //alert(resp.statusText +". Completed successfully. New Team: " + resp.data.fields.Title)
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
function eventNewData(title, date_start, teamId, authorId, placeId){
    let data = {
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

    console.log("NEW EVENT: ", data);

    return new Promise((resolve, reject) => {
        //let a = 1 + 1;
        if (1 == 1) {
            axios.post('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Event', data, axiosConfig)
                .then(resp => {
                    //alert(resp.statusText +". Completed successfully. New Event: " + resp.data.fields.Title)
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