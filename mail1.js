const firebaseConfig = {
    //   copy your firebase config informations
    // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
  apiKey: "AIzaSyAT8C9ebCF4ayb67vgaU-PLwwFVViy-G_M",
  authDomain: "parbyteemail-b252f.firebaseapp.com",
  databaseURL: "https://parbyteemail-b252f-default-rtdb.firebaseio.com",
  projectId: "parbyteemail-b252f",
  storageBucket: "parbyteemail-b252f.appspot.com",
  messagingSenderId: "973948075918",
  appId: "1:973948075918:web:5f9bb70efadf28d703aedf",
  measurementId: "G-TYMXSMJ6H5"
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
    
   
  
    //   remove the alert
    // setTimeout(() => {
    //   document.querySelector(".alert").style.display = "none";
    // }, 3000);
  
    
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
  