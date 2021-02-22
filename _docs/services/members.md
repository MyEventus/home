---
layout: default
title: Events
---
<div class="container">
    <div id="results"><div>
</div>


<script>
    //Main decision hub sync / await in order.
    async function main(){
       //const items = await membersList(); //From axios.js. Will return "resoved" section of Promise.
       //console.log("Promise has finished eventsListAll", items); //Once above line is completed this is then run.
       //displayItems(items);

       const items = await getMembersViaFunctions();
       console.log("Promise has finished eventsListAll 1", items)
       //displayItems(items);
    }

    async function getMembersViaFunctions(){
        console.log("Inside getMembersViaFunctions 1");

        axios.get('https://myeventus.netlify.app/.netlify/functions/airtable-list-members')
            .then(res => {
                let data = res;
                console.log("Inside getMembersViaFunctions 2", data);
                //resolve(data)
                return data
            })
            .then(displayItems(items))
            .catch(err => {
                console.log("err", err);
            })

        // const fetchMembers = async () => {
        //     await (await fetch('https://myeventus.netlify.app/.netlify/functions/airtable-list-members')).json();
        //     //await (await fetch('http://localhost:9000/functions/airtable-list-members.js')).json();

        //     //displayItems(items)

        //     fetchMembers()
        //     .then(data => {
        //         console.log("FROM NETLIFY FUNCTION: ", data);
        //     })
        // }
        console.log("Inside getMembersViaFunctions 3");
    };

    async function deleteItem(event){
        console.log("DELETE : ", event);
        const response = await removeItem(event, "Who");
        console.log("RESPONSE DELETE : ", response);
    };


    function displayItems(items){
        let html = '';
        console.log("ITEMS: ", items);
        items.forEach(item => {
            // 
            html +=
            `<br>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">${item.fields.Alias}</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="22" width="100%" cellspacing="0">
                        <thead><th>Title</th><th>Details</th></thead>
                        <tbody>
                            <tr><td>Alias</td><td>${item.fields.Alias}</td></tr>
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


  $(document).ready(function() {
        let html = '';

        //Trigger the main decision tree hub.
        // getMembersViaFunctions();
        main(); 
  });