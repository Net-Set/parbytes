const firebaseConfig = {
    //   copy your firebase config informations
    // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
    apiKey: "AIzaSyA74ZFDwtxzpY8BHqc8FGAfe0olBphPZGY",
    authDomain: "parbyte-bf356.firebaseapp.com",
    databaseURL: "https://parbyte-bf356-default-rtdb.firebaseio.com",
    projectId: "parbyte-bf356",
    storageBucket: "parbyte-bf356.appspot.com",
    messagingSenderId: "677622172647",
    appId: "1:677622172647:web:f3c4356e07dd00063f8b42",
    measurementId: "G-G3FYF72KHT"
 

  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactform");
  
  document.getElementById("contactform").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("email");
    var subject = getElementVal("subject");
    var message = getElementVal("message");

    saveMessages(name, emailid, subject, message);
      //   reset the form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    
  }
 
  const saveMessages = (name, emailid, subject, message) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      subject: subject,
      message: message,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  