$(document).ready(() =>{
    console.log("Hello World!, This is Rohan."); 
    setTimeout(()=>{
        $('#my-name').fadeTo(1000,1);
        setTimeout(()=>{$('#lgi-1').fadeTo(600,1);},800);
        setTimeout(()=>{$('#lgi-2').fadeTo(600,1);},1600);
        setTimeout(()=>{$('#lgi-3').fadeTo(600,1);},2400);
        setTimeout(()=>{$('#landing-intro').fadeTo(500,1)},3000);
        setTimeout(()=>{
            $('#down-arrow').fadeTo(500,1);
        },3100);
    },0);
    // Implementing smooth scrolling.
    $('a[href^="#"]').on('click',function(event){
        event.preventDefault(); 
        var target = this.hash;
        var $target = $(target);  
        $('html, body').animate({
            'scrollTop': $target.offset().top
        },500,'swing',()=>{
            window.location.hash = target;
        });
    });
    // Ajax request for sending form data to the server.
    $('#send').on('click',(event)=>{
        var name =  $('#sender-name').val();
        var email = $('#sender-email').val();
        var message = $('#message').val();
        if(name!='' && email!='' && message!=''){
            var formData = {
                name: name,
                email: email,
                message: message
            };
            $.ajax({
                url: 'submit',
                type:'POST',
                dataType: 'json',
                data: formData,
                complete: function(res){
                    if(res.status===200){
                        alert('Mail sent sucessfully');
                        $('#sender-name').val('');
                        $('#sender-email').val('');
                        $('#message').val('');
                    }
                    else{
                        alert('Mail was not sent. There may be a problem. Please send an email to rohansaha60@gmail.com to report the issue.');
                    }
                }
            });
        }
        else{
            alert('Enter all the details!');
        }
    });
});