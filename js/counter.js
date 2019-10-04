// on ready function
  $(document).ready(function() {
	  "use strict";

	
	//---------- Preloader -section ---------------//
 
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(350).fadeOut("slow");
	});
	
	
	//-------------- VENOBOX JS -------------//
            $('.venobox').venobox({
                numeratio: true,
                titleattr: 'data-title',
                titlePosition: 'top',
                spinner: 'wandering-cubes',
                spinColor: '#dbbb0a'
            });
	
	//--------------------up scroll js-----------------------------
			
					$(window).scroll(function() {
						if ($(this).scrollTop() >= 100) {       
							$('#return-to-top').fadeIn(200);   
						} else {
							$('#return-to-top').fadeOut(200);  
						}
					});
					$('#return-to-top').on('click',function() {     
						$('body,html').animate({
							scrollTop : 0                
						}, 500);
					});
												
			//--------------- Scroll to Top end ----------------//

			
			//------------slider js code----------------//			

				function BannerSlider () {
				  var banner = $("#theme-main-banner");
				  if (banner.length) {
					  banner.camera({ //here I declared some settings, the height and the presence of the thumbnails 
						height: '920px',
						navigation: true,
						pagination: true,
						thumbnails: false,
						playPause: false,
						autoplay:true,
						pauseOnClick: false,
						hover: false,
						overlayer: true,
						loader: 'none',
						time: 5000,
						minHeight: '600px',
					  });
				  };
				}


				// -------------slider js code end -------------//

				jQuery(document).on('ready', function(){
					(function($){
						BannerSlider ();
					})(jQuery);
				});
				
				
								
	
			
			
			
			
    //---------------- jQuery SlickNav / Onepage Mobile menu-----------//

    $('.mainmenu').slicknav({
        label: '',
        duration: 700,
        easingOpen: "easeOutBounce",
        prependTo: '#mobileMenu',
        closeOnClick: true
    });

  

	
	
				
		
					//------------parallex js code----------------//

			
	



    $('.counter_section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });
      
    $('.counter_section_1').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });
    
      
    $('.counter_section_2').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });
	
			
		
				//--------------isotope active--------------//
	

			$(window).load(function() {
				/** this is come when complete page is fully loaded, including all frames, objects and images **/
	
				var $grid = $('.grid').isotope({
				itemSelector: '.grid-item',
				stagger: 30
			  });

			  $('.filter-demo').on( 'click', '.button', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({ filter: filterValue });
			  });

			  // change is-checked class on buttons

			  $('.filter').each( function( i, buttonGroup ) {
				var $buttonGroup = $( buttonGroup );
				$buttonGroup.on( 'click', '.button', function() {
				  $buttonGroup.find('.is-checked').removeClass('is-checked');
				  $( this ).addClass('is-checked');
				});
			  });
			  
			});
				
		


	
    });