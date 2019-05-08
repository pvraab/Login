$(document).ready(function () {

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

    $("#submit").on("click", function (event) {

        // Prevent default form action
        event.preventDefault();

        console.log("Clicked submit")
        // window.location.replace("./main.html");

        var actionCodeSettings = {
            // URL you want to redirect back to. The domain (www.example.com) for this
            // URL must be whitelisted in the Firebase Console.
            url: 'https://pvraab.github.io/Login/',
            // This must be true.
            handleCodeInApp: true,
            // iOS: {
            //     bundleId: 'com.example.ios'
            // },
            // android: {
            //     packageName: 'com.example.android',
            //     installApp: true,
            //     minimumVersion: '12'
            // },
            // dynamicLinkDomain: 'example.page.link'
        };

        var email = "pvraab@hotmail.com"
        firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
            .then(function () {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', email);
            })
            .catch(function (error) {
                console.log("Error");
                console.log(error);
                // Some error occurred, you can inspect the code: error.code
            });
    });
    $("#login-btn").on("click", function () {
        console.log("Clicked login")
        // window.location.replace("./main.html");
    });
});