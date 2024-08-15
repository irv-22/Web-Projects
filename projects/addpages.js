	function addRows(tableID) {
			var table = document.getElementById(tableID);
            var rowCount = table.rows.length;
			var row = table.insertRow(rowCount);

			var cell1 = row.insertCell(0);
			//var element1 = document.getElementById('col0');
			cell1.innerHTML = "Co-Author name:";
			//cell1.appendChild(element1);

			var cell2 = row.insertCell(1);
			var element2 = document.createElement("input");
			element2.type = "text";
			element2.name = "author[]";
			cell2.appendChild(element2);
		}