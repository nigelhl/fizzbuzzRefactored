$(document).ready(function(){

	// Create the counter function
	function fizzBuzzer(max)
	{
		var i;
		for(i=1; i <=max; i++){
		
		// Fizz Buzz
		if (i % 3 == 0 && i % 5 == 0)
		{
			$(".container").append("<p>Fizz Buzz</p>");
		}

		// Fizz
		else if(i % 3 == 0)
		{
			$(".container").append("<p>Fizz</p>");
		}

		// Buzz
		else if (i % 5 == 0)
		{
			$(".container").append("<p>Buzz</p>");
		} 	

		// Numbers
		else 
		{
			$(".container").append("<p>" + i + "</p>");
		}
		}
	}

	// Click the button
	$('.Fizzbutton').on('click', function(){
		var getValue = $('.inputText').val();

		if(getValue % 1 == 0 && getValue <= 300)
		{
			$('.container').empty();
			fizzBuzzer(getValue);
			$('.inputText').val("");
		} else
		{
      		alert('Type only numbers between 1 and 300.');
      		$('.inputText').val("");
    	}
	});
});