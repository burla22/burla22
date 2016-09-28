
( function($) {
   

	$(document).ready(function(){

		NProgress.configure({
			showSpinner: false
		});
		
		NProgress.start();

		//$('.panorama').panorama_viewer({});

	});


	$(window).load(function(){

		NProgress.done();

		setTimeout(function(){
			$('.loading').fadeOut('slow');
		}, 1000);



	});

	$(window).resize(function(){
	
	

	});

} ) ( jQuery );
