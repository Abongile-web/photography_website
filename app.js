//Back to top button
//Get the button
var mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Contact form 
$(document).ready(function () {
    $('.submit').click(function (event) {

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var status = $('.status')
        status.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            status.append('<div>Email is valid</div>')
        }
        else {
            event.preventDefault()
            status.append('<div>Email is not valid</div>')
        }

        if(subject.length >= 2) {
            status.append('<div>Subject is valid</div>')
        }
        else {
            event.preventDefault()
            status.append('<div>Subject is not valid</div>')
        }

        if(message.length >= 10) {
            status.append('<div>Message is valid</div>')
        }
        else {
            event.preventDefault()
            status.append('<div>Message is not valid</div>')
        }
    })
})

//menu button
function menu() {
  document.querySelector("nav ul").classList.toggle("show");
}