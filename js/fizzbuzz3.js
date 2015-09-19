$(document).ready(function(){
	var i;
	for(i=1; i <=100; i++){
		$("body").append("<p>" + (i%3!=0&&i%5!=0 ? i:"") + " " + (i%3==0 ? "Fizz":"") + (i%5==0 ? "Buzz":"") + "</p>");
	}
});