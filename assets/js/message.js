

function sendMessage()
{
	 //var message = form.inputbox.value;

	 var message = document.getElementById("message").value;
 
var data = {
    service_id: 'service_qgtevq3',
    template_id: 'template_cugtf88',
    user_id: 'user_5P5qPe1MLssEJvPPBZjnQ',
    template_params: {
        'message': message
    }
};
$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    async: false,
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
	//console.log("mail is sent");
    alert('Your message is sent successfully, You will not get a reply');
}).fail(function(error) {
    //console.log('Oops... ' + JSON.stringify(error));
    //alert('Oops... ' + JSON.stringify(error));

});

}