
var config = {
  apiKey: "AIzaSyBZ4Ub5S-Ij58o7MgvjlQhgA2AISuoTh4Q",
  authDomain: "cyberscribes-eee7c.firebaseapp.com",
  databaseURL: "https://cyberscribes-eee7c.firebaseio.com",
  projectId: "cyberscribes-eee7c",
  storageBucket: "cyberscribes-eee7c.appspot.com",
  messagingSenderId: "724110744755"
};
firebase.initializeApp(config);

var db = firebase.firestore();




 $("#contact-send").click(function(){
   event.preventDefault();
   console.log("contact clicked");
   db.collection("messages").add({
      name: $('#contact-name').val().trim(),
      email: $('#contact-email').val().trim(),
      subject: $('#contact-subject').val().trim(),
      message: $('#contact-message').val().trim()
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
     
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

});
