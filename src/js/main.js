$(document).ready(function(){
  var 
		$simularTitle = $(".simular__content__title"),
		$simularText = $(".simular__content__text");


	$('.slider').flickity({
  		wrapAround: true,
		autoPlay: 3000,
		setGallerySize: true,
		adaptiveHeight: true,
	});


	function addDots(element, number, separator){
		element.each(function(){
			var 
			sep = separator || '...',
			$this = $(this),
			size = number,
			text = $this.text();
			if(text.length > size){
				$this.text(text.slice(0, size) + sep);
			}
		})
		

	}

	addDots($simularTitle, 20);
	addDots($simularText, 60);
	
	


	// TEST
	$("a").on("click",function(e){
		//e.preventDefault();
	})

});