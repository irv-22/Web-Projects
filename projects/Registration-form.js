//access elements
var fName=document.getElementById('fullname');
var User=document.getElementById('userName');
var mail=document.getElementById('email');
var call=document.getElementById('phoneNumber');
var security=document.getElementById('password');
var confirmSecurity=document.getElementById('confirmPassword');
var gender=document.getElementsByName('gender');
var Identity;

//getting values from the elements
function register(){


    var fullNames=fName.value;
    var userName=User.value;
    var email=mail.value;
    var phone=call.value;
    var password=security.value;
    var confirmSec=confirmSecurity.value;
    var Identity=gender.value;
    for(var i=0;i<gender;i++){
        if(gender[i].checked){
            Identity=gender[i].value;
        }
    }

    document.write("name:"+fullNames+"<br>Username:"+userName+"<br>E-mail:"+email+"<br>Phone Number:"+phone+"<br>Password:"+password+"<br>Confirm Password:"+confirmSec+"<br>Gender:"+Identity);
}    