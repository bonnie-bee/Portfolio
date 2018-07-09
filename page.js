
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD44UsYQIDfL_LWagMK6Rg7fpsFLbE72Mw",
    authDomain: "site-messages.firebaseapp.com",
    databaseURL: "https://site-messages.firebaseio.com",
    projectId: "site-messages",
    storageBucket: "",
    messagingSenderId: "985516686707"
  };
  firebase.initializeApp(config);




const pic1 = $('#zoAndMe')
const pic2 = $('#halloweenZo')
const pic3 = $('#parkZo')
const pic4 = $('#sleeping')
const pic5 = $('#birthdayZo')
const pic6 = $('#napZo')


setInterval(hidePic1, 5000)
setInterval(hidePic2, 8000)
setInterval(hidePic3, 3000)
setInterval(hidePic4, 11000)
setInterval(hidePic5, 10000)
setInterval(hidePic6, 5000)



setInterval(showPic1, 9000);
setInterval(showPic2, 12000);
setInterval(showPic3, 10000);
setInterval(showPic4, 7000);
setInterval(showPic5, 16000);
setInterval(showPic6, 10000);



//look into prototype functions
function showPic1(){
 pic1.show()
}
function showPic2(){
    pic2.show()
   }
   function showPic3(){
    pic3.show()
   }
   function showPic4(){
    pic4.show()
   }
   function showPic5(){
    pic5.show()
   }
   function showPic6(){
    pic6.show()
   }


   function hidePic1(){
       pic1.hide();
   }
   function hidePic2(){
    pic2.hide();
}
function hidePic3(){
    pic3.hide();
}
function hidePic4(){
    pic4.hide();
}
function hidePic5(){
    pic5.hide();
}
function hidePic6(){
    pic6.hide();
}






$('#subBtn').on('click', function(){
    const database = firebase.database().ref();
const userName = $('#nameEntry');
const userEmail = $('#emailEntry');
const userMessage = $('#textEntry');
    console.log(userName, userEmail, userMessage)
    event.preventDefault();
    database.push({
        Name: userName.val(),
        Email: userEmail.val(),
        Message: userMessage.val()
    });
    userName.empty();
    userEmail.empty();
    userMessage.empty();

    let successMes = (`<p id="youDidIt">Thank you ${userName.val().trim()}! Your message was sent.</p>`)

    $('#contactForm').append(successMes);

})















  