---
layout: default
title: Events
---



<h1>List Places</h1>

<div class="container">
    <div id="results"><div>
</div>

<script>
    //Main decision hub sync / await in order.
    async function main(){
       //const items = await placesList(); //From axios.js. Will return "resoved" section of Promise.
       //console.log("Promise has finished eventsListAll", items); //Once above line is completed this is then run.
       const events = await axios.get('https://myeventus.netlify.app/.netlify/functions/places-list')
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

    //    displayItems(items);
    }

     async function deleteItem(item){
        //const response = await removeItem(item, "Event");
        //console.log("DELETE ME ", typeof(item));
        //const datastring = item.toString();
        //console.log("DELETE ME 2 ", typeof(datastring));
        const data = {data:{id:item}};
        console.log("DELETE ME 3 ", data);
        const events = await axios.delete(`https://myeventus.netlify.app/.netlify/functions/place-delete`, data)
        .then(res => {
            //const data = res.data;
            console.log("RESP DELETE: ", res);
            //return data
        })
        .catch(err => {
            console.log("ERROR", err);
        })
    };


    function displayItems(items){
        let html = '';
        items.forEach(item => {
            if (item.fields.Notes == undefined){
                item.fields.Notes = '';
            }

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
                            <tr><td>Title</td><td>${item.fields.Title}</td></tr>
                            <tr><td>Meeting Place</td><td>${item.fields.Meeting_Place}</td></tr>
                            <tr><td>Notes</td><td>${item.fields.Notes}</td></tr>
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
        main(); 
  });