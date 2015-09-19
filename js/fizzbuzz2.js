$(document).ready(function(){
	var i;
	for(i=1; i <=100; i++){
		
		// Fizz Buzz
		if (i % 3 == 0 && i % 5 == 0){
			$("body").append("<p>Fizz Buzz</p>");
		}

		// Fizz
		else if(i % 3 == 0){
			$("body").append("<p>Fizz</p>");
		}

		// Buzz
		else if (i % 5 == 0){
			$("body").append("<p>Buzz</p>");
		} 	

		// Numbers
		else {
			$("body").append("<p>" + i + "</p>");
		}
	}
});