function autoRefresh() {
	window.location = window.location.href;
}

function getValues(ourrow, data) {
    var columns = ourrow.split(",");

    data.addRows([
      [columns[0], columns[1]]
    ])
}

$.get('data.csv', function(data) {
	var html = '<table class="table table-bordened">';
	var rows = data.split("\n");
	rows.forEach( function getValues(ourrow) {
		html += "<tr>";
	    var columns = ourrow.split(",");
	    html += "<td>" + columns[0] + "</td>";
	    html += "<td>" + columns[1] + "</td>";
	})
	html += "</table>";
	$('#container').append(html);
});