$(document).ready(function () {
	var limit = +prompt("Enter a number");
	console.log(limit);
	while ( isNaN(limit) || limit%1 != 0 ) {
		alert("Please enter a valid number.");
		var limit = +prompt("Enter a number");
	};
	generateFizzBuzz (limit);
}); //document ready end

function generateFizzBuzz (number) {
	for (i=1; i<=number; i++) {
		if (i%3 == 0 && i%5 == 0) {
			$('#bodyarea').append('fizz buzz' + '<br>');
		}
		else if (i%5 == 0) {
			$('#bodyarea').append('buzz' + '<br>');
		}
		else if (i%3 == 0) {
			$('#bodyarea').append('fizz' + '<br>');
		}
		else {
			$('#bodyarea').append(i + '<br>');
		}
	}; //end if statement

};