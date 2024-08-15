function dis(arg){
    document.getElementById("result").value+=arg;
}
function solve(){
    let input1 =document.getElementById("result").value;
    let input2=eval(input1);
    document.getElementById("result").value=input2;
}
function clr(){
    document.getElementById("result").value=" ";
}