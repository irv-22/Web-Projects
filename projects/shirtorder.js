
function generateSubmit()
{

	//accessing html elements
	var rbt;
	var userName=document.getElementById("username");
	var passWord=document.getElementById("password");
	var hMan=document.getElementById("human");
	
	
	//getting values from elements
	
	var uName=userName.value;
	var pWord=passWord.value;
	var robot=hMan.value;
	

	
	
	//diplay the values from the inputs
	
	document.write("your userName is: "+uName+"<br/>your Password is: "+pWord+"<br/>yes the user is a human:"+robot);
}

