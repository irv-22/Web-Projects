var coulor=document.getElementById("color");
var  rNum=document.getElementById("resName");

function generateSurveyReport()
{
	var index1=coulor.selectedIndex;
	var infoDisplay1=coulor.options[index1].value;

	document.write("color: "+infoDisplay1);
}