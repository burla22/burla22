
( function($) {

	function sounplayer() {
		var script = document.createElement('script');
 
		script.type = 'text/javascript';
		script.async = true;
		script.src = 'http://sd.toneden.io/production/toneden.loader.js';

		var entry = document.getElementsByTagName('script')[0];
		entry.parentNode.insertBefore(script, entry);

		ToneDenReady = window.ToneDenReady || [];
		ToneDenReady.push(function() {
			ToneDen.player.create({
				dom: '#player',
				urls: [
					'https://soundcloud.com/burla2222'
				],
				keyboardEvents: 'true'
			});
		});
	};
 
   

	$(document).ready(function(){

		NProgress.configure({
			showSpinner: false
		});
		
		NProgress.start();

		sounplayer();

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
