
( function($) {

	function instagram_load_photo(){
		var loadButton = $('.load-more');

		var userFeed = new Instafeed({
	        get: 'user',
	        target: 'container-insta-image',
	        userId: 208560590,
	        accessToken: '208560590.467ede5.8634d26cf3484a4c92c28b682fa236cd',
	        template: '<li class="item-insta-image"><a href="{{link}}" target="_blank"><div class="insta-like"><span>{{likes}}</span></div><img src="{{image}}" /></a></li>',
	        limit: 30,
	        resolution: 'low_resolution',
	        after: function() {
			    if (!this.hasNext()) {
			    	loadButton.setAttribute('disabled', 'disabled');
			    }

			    $("#container-insta-image").find('img').load(function() {
					$(this).addClass('animated fadeIn');
				});
			}
	    });

	    loadButton.click(function() {
			userFeed.next();
		});

	    userFeed.run();
	}
	
	function $j(argument){
		var result = jQuery(argument);
		if (result.length == 0) return null;
		else return result;
	}


	$j(document).ready(function(){ 	

		instagram_load_photo();

	});


	$j(window).load(function(){



	});

	$j(window).resize(function(){
	
	

	});

} ) ( jQuery );
