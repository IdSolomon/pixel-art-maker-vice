function makeGrid() {
	var canvas, cell, gridHeight, gridWidth, rows;
	
	canvas = $('#pixel_canvas');
	gridHeight = $('#input_height').val();
	gridWidth = $('#input_width').val();
	
	canvas.children().remove();
	
	for (x = 0; x < gridHeight; x++) {
	canvas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (y = 0; y < gridWidth; y++) {
	rows.append('<td></td>');
	} 
	
	cell = canvas.find('td');
	
	cell.click(function() {
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});

function searchRGB() {
  x = colorPicked;
  rgbValues = x.split("(")[1].split(")")[0].split(", ");
  return rgbValues;
}

function componentToHex(c) {
  var hex = Number(c).toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

colorPicked = $('#colorPicker').val();
$('#colorPicker').on('change', function() {
  colorPicked = $('#colorPicker').val();
});
$('.miami-vice').on('click', function(evt) {
  colorPicked = $(evt.target).css("background-color");
  $('#colorPicker').val(rgbToHex(searchRGB()[0], searchRGB()[1], searchRGB()[2]));
});
