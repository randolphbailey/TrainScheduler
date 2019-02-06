$(document).ready(function() {
    
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCjZRMd_Z-McCDCdQ5x2OexSV35U9goIQY",
        authDomain: "trainscheduler-1f3cc.firebaseapp.com",
        databaseURL: "https://trainscheduler-1f3cc.firebaseio.com",
        projectId: "trainscheduler-1f3cc",
        storageBucket: "trainscheduler-1f3cc.appspot.com",
        messagingSenderId: "557251931064"
        };
    firebase.initializeApp(config);
  
    var database = firebase.database();
  
    // Click events to record user input
    $("#add").on("click", function(event) {
      var name = $("#name").val().trim();
      var destination = $("#destination").val().trim();
      var time = $("#time").val().trim();
      var frequency = $("#frequency").val().trim();
  
      // Pushes the user input to the database
      database.ref().push({
        name,
        destination,
        time,
        frequency
      });
    });
  
    database.ref().on("child_added", function(event) {
      $("#train-list").append(
        "<tr><td>" +
          event.val().name +
          "</td><td>" +
          event.val().destination +
          "</td><td>" +
          event.val().frequency +
          "</td><td>" +
          event.val().nextArrival +
          "</td><td>" +
          event.val().minutesAway +
          "</td></tr>"
      );
    });
  });