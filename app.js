// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBuaOVnpDqp-hIeiB-zQyAtgHT_VxEkBcw",
  authDomain: "utbc-project2.firebaseapp.com",
  databaseURL: "https://utbc-project2.firebaseio.com",
  projectId: "utbc-project2",
  storageBucket: "",
  messagingSenderId: "180770311132",
  appId: "1:180770311132:web:41e0ce7bd6da98ca"
};

// Assign the reference to the database to a variable named 'database'
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var empName = "";
var empRole = "";
var empStart = "";
var empRate = 0;

$("#submit").on("click", function(event){
  event.preventDefault();
  //Get values of the name, role, start date, & rate
  empName = $("#EmployeeName").val().trim();
  empRole = $("#Role").val().trim();
  empStart = moment($("#StartDate").val()).format("LL");
  empRate = $("#MonthlyRate").val().trim();

  console.log(empName + " " + empRole + " " + empStart + " " + empRate);

  //Push these values to the database
  database.ref().push({
    name: empName, 
    role: empRole,
    start: empStart,
    rate: empRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

});


//When there's a child added to the database this fuction will run
// This function allows you to update your page in real-time when the firebase database changes.

database.ref().orderByChild("dateAdded").on("child_added", function (snapshot){
  console.log(snapshot.child());
    $("tbody").append("<tr><td>" + 
      snapshot.val().name + "</td>" + "<td>" + 
      snapshot.val().role + "</td>" + "<td>" + 
      snapshot.val().start + "</td>" + 
      "<td>Months Worked would go here</td>" + 
      "<td>" + snapshot.val().rate + "</td>" + 
      "<td>Total billed goes here</td>");
});
