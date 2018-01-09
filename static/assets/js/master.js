$(document).ready(() =>{
    console.log("Awesome, you found the source.\n Feel free to check it out.");
    
    var section1Top = parseInt($('#landing-intro').offset().top) - 50;
    var section2Top = parseInt($('#i-like-these').offset().top) - 75;
    var section3Top = parseInt($('#anchor3').offset().top) - 50;
    var section1Flag = 0;
    var section2Flag = 0;
    var section3Flag = 0;
    
    // Implementing animations when reaching a page.
    window.onscroll = function() {
        var bodyTop = $(document).scrollTop();
        //console.log(document.body.scrollTop);
        if(section1Flag==0 && (bodyTop > section1Top)){
            // Start animation
            $('#acad-heading').fadeTo(1000,1);
            section1Flag = 1;
            setTimeout(()=>{
                $('#wrapper-academics').fadeTo(800,1);
            },650);
        }
        else if(section2Flag==0 && bodyTop > section2Top){
            $('#skills .container-fluid').fadeTo(1000,1);
            section2Flag = 1;
        }
        else if(section3Flag==0 && bodyTop > section3Top){
            $('#extra .container-fluid .row').fadeTo(1000,1);
            section3Flag = 1;
        }
    };
    
    // Sliding in
    setTimeout(()=>{
        $('#my-name').animate({'margin-left':'0px'},1000);
    },400);
    
    setTimeout(()=>{
        setTimeout(()=>{$('#lgi-1').fadeTo(600,1);},800);
        setTimeout(()=>{$('#lgi-2').fadeTo(600,1);},1600);
        setTimeout(()=>{$('#lgi-3').fadeTo(600,1);},2400);
        setTimeout(()=>{$('#landing-intro').fadeTo(500,1)},3000);
        setTimeout(()=>{
            $('#down-arrow').fadeTo(500,1);
        },3100);
    },800);
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