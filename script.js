const firebaseConfig = {
    apiKey: "AIzaSyCzneUDuxGW36MViwUQf2gnT0w7XIyzi1c",
    authDomain: "login-8a1a8.firebaseapp.com",
    databaseURL: "https://login-8a1a8-default-rtdb.firebaseio.com",
    projectId: "login-8a1a8",
    storageBucket: "login-8a1a8.appspot.com",
    messagingSenderId: "414258770200",
    appId: "1:414258770200:web:4faf9a519d3cc54cf42e6d",
    measurementId: "G-H2GCMN40BS"
  };

  


  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
   

    
    // Get values
    var Fullname = getInputVal('fullname');
    var mobileNo = getInputVal('mobileNo');
    var email = getInputVal('email');
    var password = getInputVal('password');
    var confirmpassword = getInputVal('confirmpassword');

    var pw = document.getElementById("password");
    var cp = document.getElementById("confirmpassword");
  
    // Save message
    
    console.log(pw.value)
    console.log(cp.value)

    if((pw.value) == (cp.value)){
        saveMessage(Fullname, mobileNo, email, password ,confirmpassword); 
        // Show alert
        document.querySelector('.alert').style.display = 'block';
       // Hide alert after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').style.display = 'none';
        },3000);
    }
    else{
    
        alert('confirm password doesn`t match') 
    }
    
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase

  function saveMessage(Fullname, mobileNo, email, password ,confirmpassword){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      Fullname: Fullname,
      mobileNo:mobileNo,
      email:email,
      password:password,
      confirmpassword :confirmpassword
    
    });
  }