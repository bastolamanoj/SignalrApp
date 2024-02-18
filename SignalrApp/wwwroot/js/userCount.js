"use strict";

//Create Connection
//var ConnectionUserCount = new signalR.HubConnectionBuilder.WithUrl("/hubs/userCount").Build();
var ConnectionUserCount = new signalR.HubConnectionBuilder()
    .withUrl("/hubs/userCount")
    .build();

// connect to method that hub invokes aka receive notification from hub
ConnectionUserCount.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewCounter");
    newCountSpan.innerText = value.toString();

})

// invoke hub method aka send notification to hub
function newWindowLoadedOnClient() {
    ConnectionUserCount.send("NewWindowLoaded");
}

//start connection

function fullfilled() {
    //do something on start
    newWindowLoadedOnClient();
    console.log("Connection to user Hub successful.");
}
function rejected() {
    //rejected logs
    console.log("Rejected");
}
ConnectionUserCount.start().then(fullfilled, rejected);
   