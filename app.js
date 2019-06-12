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


  //When there's a child added this fuction will run
  
