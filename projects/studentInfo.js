function submitInfo()
{
    //accessing html elements
    var fnum=document.getElementById("fullNames");
    var sNo=document.getElementById("studentnumber");
    var sID=document.getElementById("idnumber");

    //getting the values from the elements

    var fullnum=fnum.ariaValueNow;
    var stuno=sNo.ariaValueNow;
    var stuID=sID.ariaValueNow;

    //display

    document.write("the full names of the student is:"+fullnum+"");
    document.write("The student number of the student is:"+stuno+"");
    document.write("The ID number of the student is:"+stuID+"");
}