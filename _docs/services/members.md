---
layout: default
title: Events
---
<div class="container">
    <div id="results"><div>
</div>


<script>
    let myItems = [];

    //Main decision hub sync / await in order.
    async function main(){
       //const items = await getMembersViaFunctions();
       //Space here for possible future use.
       const items = await axios.get('https://myeventus.netlify.app/.netlify/functions/users-list')
        .then(res => {
            let data = res.data.data;
            console.log("EVENTS.MD FROM LAMBDA: ", res);
            return data
        })
        .then(e => {
            displayItems(e);
        })
        .catch(err => {
            console.log("ERROR", err);
        })
    }

    // async function getMembersViaFunctions(){
    //     axios.get('https://myeventus.netlify.app/.netlify/functions/airtable-list-members')
    //     .then(res => {
    //         let data = res.data;
    //         displayItems(data)
    //     })
    //     .catch(err => {
    //         console.log("err", err);
    //     })
    // };
    // async function getMembersViaFunctions(){
    //     axios.get('https://myeventus.netlify.app/.netlify/functions/airtable-list-members')
    //     .then(res => {
    //         let data = res.data;
    //         displayItems(data)
    //     })
    //     .catch(err => {
    //         console.log("err", err);
    //     })
    // };

    async function deleteItem(event){
        console.log("DELETE : ", event);
        const response = await removeItem(event, "Who");
        console.log("RESPONSE DELETE : ", response);
    };


    function displayItems(items){
        let html = '';
        let myItems = [];
        console.log("ITEMS: ", items);
        items.forEach(item => {
            //myItems.push(`<h1>${item.fields.Alias}</h1>`);
            myItems.push(
            //html +=
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
                        <button class="btn btn-danger" type="button" id="delete" onclick="deleteItem('${item}')">Delete</button>
                    </div>
                </div>
            </div>
            ` )
        });
        //document.getElementById('results').innerHTML = html; 
        document.getElementById('results').innerHTML = myItems;
    }

    async function deleteItem(item){
        let idx = myItems.findIndex(i => i.id===item.id)
        console.log("RESP DELETE: ", idx);


        const data = {data:{id:item.id}};
        console.log("DELETE ME 3 ", data);
        const events = await axios.delete(`https://myeventus.netlify.app/.netlify/functions/user-delete`, data)
        .then(res => {
            //const data = res.data;
            console.log("RESP DELETE: ", res);
            //return data
        })
        .catch(err => {
            console.log("ERROR", err);
        })
    }



 $(document).ready(function() {
        // let myItems = [];
        let html = '';
        //Trigger the main decision tree hub.
        main(); 
  });
</script>

