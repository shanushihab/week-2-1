

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'name is required';
        return false;
    }
    if(!name.match(/^[a-zA-Z\s]+$/)){
        nameError.innerHTML = 'Write your name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    
}



function validatePhone(){

    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'phone number is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'phone number should be 10 Digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'phone number is required';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){

    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){

    var message = document.getElementById('contact-message').value;
    var required = 10;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + ' More characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateForm(){

    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix error to submit';
        setTimeout(function(){ submitError.style.display = 'none';}, 3000);
        return false;
    }
    
}



const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_nrfkwls';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Your Details Successfully Submitted!');

        // Clear form inputs after successful submission
        document.getElementById('form').reset();
      
        // Optionally, you can also clear the error messages
        nameError.innerHTML = '';
        phoneError.innerHTML = '';
        emailError.innerHTML = '';
        messageError.innerHTML = '';
      
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


