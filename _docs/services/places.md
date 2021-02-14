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
       const items = await teamsList(); //From axios.js. Will return "resoved" section of Promise.
       console.log("Promise has finished eventsListAll", items); //Once above line is completed this is then run.
       displayItems(items);
    }

    async function deleteItem(item){
        const response = await removeItem(item, "Place");
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