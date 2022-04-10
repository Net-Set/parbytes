const firebaseConfig = {
    //   copy your firebase config informations
    // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
  apiKey: "AIzaSyD77aq4fartwOcirmZxKN2JVGqeOAaP_R8",
  authDomain: "parbyteemail.firebaseapp.com",
  databaseURL: "https://parbyteemail-default-rtdb.firebaseio.com",
  projectId: "parbyteemail",
  storageBucket: "parbyteemail.appspot.com",
  messagingSenderId: "365498375529",
  appId: "1:365498375529:web:579ca4c5327ef253e171f8",
  measurementId: "G-EF450C73J6"
 

  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("parbyteemail");
  
  document.getElementById("parbyteemail").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    
    var emailid = getElementVal("email");
   

    saveMessages(emailid);
      //   reset the form
      document.getElementById("email").value = "";
    
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    
  }
 
  const saveMessages = (emailid) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      
      emailid: emailid,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  