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
const newUserData = (alias1, first_name1, email_main1) => {
    nUserData = {
        fields: {
            Alias: alias1,
            First_Name: first_name1,
            Email_Main: email_main1
        }
    }
    axios.post('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Who', nUserData, axiosConfig)
    .then(response => {
        console.log("POST RESPONSE: ", response)
   })
    .catch(err => {
       console.log("ERROR: ",err.response);
   });
    console.log("New User: ", alias1, first_name1, email_main1);
}


//AIRTABLE - LIST ALL - EVENT
const getEventsAll = () => {
    let results = axios.get('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Event', axiosConfig)
    .then(response => {
        events = response.data.records;
        console.log("POST RESPONSE: ", events);
   })
    .catch(err => {
       console.log("ERROR: ",err.response);
   });
   return results
}

//AIRTABLE -- CREATE NEW EVENT-------
const eventNewData = (title, date_start) => {
    data = {
        fields: {
            Title: title,
            Date_Start: date_start
        }
    }
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




// getBtn.addEventListener('click', getData)
// postBtn.addEventListener('click', postData)

