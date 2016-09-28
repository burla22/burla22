
( function($) {
	
	function masonryLayout(){

		var container = $('#container-gallery');

		if(container.length > 0){
			container.imagesLoaded( function(){

			    container.masonry({
			        itemSelector: '.box',
					columnWidth: '.grid-sizer',
					isResizable:true,
					percentPosition: true,
					transitionDuration: 0,
					isAnimated: false
			    });

			    container.imagesLoaded().progress( function() {
				  container.masonry('layout');
				});
			});

			var ias = $.ias({
			  container:  '.my-gallery',
			  item:       '.box',
			  pagination: '#pagination',
			  next:       '.next',
			  loader: 	  '<img src="images/loader.gif">',
			  thresholdMargin: -150,
			  history: false,

			  onLoadItems: function(items) {
			        var $newElems = jQuery(items);
			        $newElems.imagesLoaded(function() {
			            container.masonry('appended', $newElems, true);
			        });
			        return true;
			    },
			});
		}
	}

	function audioFunz(){
		var audio = document.getElementById("my_audio");
		audio.play();

		$('.audio--stop').click(function() {
			if (audio.paused == false) {
				audio.pause();
			}else{
				audio.play();
			}
		});
	}


	$(document).ready(function(){

		NProgress.configure({
			showSpinner: false
		});
		
		NProgress.start();

		masonryLayout();

	});


	$(window).load(function(){

		NProgress.done();

		setTimeout(function(){
			$('.loading').fadeOut('slow');
		}, 1000);

		audioFunz();

	});

	$(window).resize(function(){
	
	

	});

} ) ( jQuery );
