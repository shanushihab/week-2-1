$(document).ready(function(){
    $("#form").validate({

        rules:{
            fname:{
                required:true,
                minlength:3
            },
            lname:{
                required:true,
                minlength:1
            },
             
            emailAddress:{
                required:true,
                email:true

            },phone:{
                
                Number:true,
                minlength:10,
                maxlength:10
            },
            issues:{
                required:true,
                minlength:5
            }

        },
        


        
    })

})

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
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});