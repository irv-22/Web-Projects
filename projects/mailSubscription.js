function generateSubscribe(){
    var email=document.getElementById("mail");
    var mail=email.value;
   alert("Thank you for subscribing "+mail);
}
document.getElementById("mail").value="tumimokoana97@gmail.com"
function generateSubmit(){
    //getting values from elements id
    var fullname=document.getElementById("fullNames");
    var id=document.getElementById("ID number");
    var stdNumber=document.getElementById("studentNumber");
    var res=document.getElementById("resName");
    var opt=document.getElementById("resName2");//for option list
    var rad=document.getElementsByName("Gender");


    /*getting values from variables */
    var fname=fullname.value;
    var identity=id.value;
    var studentNumber=stdNumber.value;
    var numRes=res.value;
    var index=opt.selectedIndex;
    var output=opt.options[index].value;
    for(var i=0;i<rad.length;i++){
        if(rad[i].checked){
            var gend=rad[i].value;
        }
        
    }
    document.write("fullnames:"+fname+"<br/>ID no:"+identity+"<br> Gender:"+gend+"<br>Student number: "+studentNumber+"<br> selected Res name: "+output);
}
document.getElementById("resName").value="Powerpoint 40";
document.getElementById("resName").style.color="black";
document.getElementsByTagName("body").style.backgroundColor="yellow";
document.getElementById("paragraph").innerHTML="Student Info";
paragraph.style.backgroundColor="red";