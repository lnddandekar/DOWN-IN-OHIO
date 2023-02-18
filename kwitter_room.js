const firebaseConfig = {
      apiKey: "AIzaSyDGt3MU7LLbOcsZlg3aaOpVBhAOd5Kmls4",
      authDomain: "kwitterrrrrrrrrrrrrrr.firebaseapp.com",
      databaseURL: "https://kwitterrrrrrrrrrrrrrr-default-rtdb.firebaseio.com",
      projectId: "kwitterrrrrrrrrrrrrrr",
      storageBucket: "kwitterrrrrrrrrrrrrrr.appspot.com",
      messagingSenderId: "777565277220",
      appId: "1:777565277220:web:98598e0ce2127b460d9cb1",
      measurementId: "G-LG899C7H8F"
    };
    
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
