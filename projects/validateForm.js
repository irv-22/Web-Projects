function validateForm(){
    let value=document.forms["myForm"]["fullNames"]["IDnumber"]["studentNumber"]["resname"].value;
    if(value=""){
        alert("The document fields must be filled out");
        return false
    }
}