function generateSubmitRating(){
    //accessing elements
    var rate=document.getElementById("Rating");
    var comm=document.getElementById("comments");

    //GETTING VALUES FROM ELEMENTS

    var rateMe=rate.value;
    var comment=comm.value;

    document.write("rate:"+rateMe+"<br/>comments:"+comment);
}