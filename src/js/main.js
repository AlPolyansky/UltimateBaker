$(document).ready(function(){
  

	var slider = new Flickity(".slider", {
		wrapAround: true,
		autoPlay: 3000,
	});


	// TEST
	$("a").on("click",function(e){
		e.preventDefault();
	})

});