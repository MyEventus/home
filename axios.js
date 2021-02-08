const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')

const userBtn = document.getElementById('newuserbtn')
const alias = document.getElementById('alias').value;
const first_name = document.getElementById('first_name').value;


let axiosConfig = {
    headers: {
        'Authorization': 'Bearer keysXtWsXZz4g68dA',
        'Content-Type': 'application/json'
    }
  };

const getData = () => {
    axios.get('https://reqres.in/api/users', axiosConfig)
    .then(response => {
        console.log("GET RESPONSE: ", response)
    })
    .catch(err => {
        console.log("ERROR: ",err);
    });
}




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

nUserData = {
    alias: alias,
    first_name: first_name
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


const newUserData = () => {
    // axios.post('https://api.airtable.com/v0/appNBMp3C4tRCcJFy/Who', nUserData, axiosConfig)
    // .then(response => {
    //     console.log("POST RESPONSE: ", response)
   // })
    //.catch(err => {
    //    console.log("ERROR: ",err.response);
   // });
    console.log("New User: ", alias, first_name);
}



getBtn.addEventListener('click', getData)
postBtn.addEventListener('click', postData)
userBtn.addEventListener('click', newUserData)
