$(document).ready(function () {

    var firebase = require('firebase');
    var firebaseui = require('firebaseui');

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDathxgWcLUpFeWAOwcgKf4sA8wYNf9VFo",
        authDomain: "pvraab-trainscheduler.firebaseapp.com",
        databaseURL: "https://pvraab-trainscheduler.firebaseio.com",
        projectId: "pvraab-trainscheduler",
        storageBucket: "pvraab-trainscheduler.appspot.com",
        messagingSenderId: "1035348700427"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
    var auth = firebase.auth();

    ui.start('#firebaseui-auth-container', {
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Other config options...
        // This defaults to false
        requireDisplayName: false
    });


    $("#submit").on("click", function (event) {

        // Prevent default form action
        event.preventDefault();

        console.log("Clicked submit")
        // window.location.replace("./main.html");
    });
    $("#login-btn").on("click", function () {
        console.log("Clicked login")
        // window.location.replace("./main.html");
    });
});