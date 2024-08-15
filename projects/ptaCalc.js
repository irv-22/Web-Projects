//for displaying values
function dis(arg){
    document.getElementById("displayScreen").value+=arg;
}


//the solving/calculating step

function solve(){
    let input1=document.getElementById("displayScreen").value;
    let input2=eval(input1);
    document.getElementById("displayScreen").value=input2;

}
function clr(){
    document.getElementById("displayScreen").value="";
}