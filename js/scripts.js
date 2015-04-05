$(document).ready(function(){
	for (i=1; i<=100; i++) {
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




}); //document ready end