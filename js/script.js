$(document).ready(function (){
	//set options
	var speed = 500;        	 //transition speed
	var autoswitch = true; 		 //auto slider option
	var autoswitch_speed = 4000; //auto slider speed

	//add initial active class
	$('.slide').first().addClass('active');
	//hide all slides
	$('.slide').hide();
	//show first slide
	$('.active').show();
	//handlers
	$('#next').on('click', nextSlide);
	$('#prev').on('click', prevSlide);

	if(autoswitch == true){
		setInterval(nextSlide, autoswitch_speed);	
	}
	//switch to next slide
	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-Child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);	
		}
	//switch to previous
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-Child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);	
		}	

});