/* =====================================
All JavaScript fuctions Start
======================================*/
(function ($) {
	
		'use strict';
	/*--------------------------------------------------------------------------------------------
		document.ready ALL FUNCTION START
	---------------------------------------------------------------------------------------------*/	

	// Categories carousel function by = owl.carousel.js________//	
	function av_categories_carousel(){
		jQuery('.twm-categories-carousel').owlCarousel({
			loop:true,
			autoplay:true,
			margin:30,
			autoplayTimeout:3000,
			nav:true,
			dots: false,
			navText: ['<i class="feather feather-chevron-left"></i>', '<i class="feather feather-chevron-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2,
				},
				1200:{
					items:3
				}
			}
		});
	}

	// Categories2 carousel function by = owl.carousel.js________//	
	function av_categories2_carousel(){
		jQuery('.twm-categories2-carousel').owlCarousel({
			loop:true,
			autoplay:true,
			margin:30,
			autoplayTimeout:3000,
			nav:true,
			dots: false,
			navText: ['<i class="feather feather-chevron-left"></i>', '<i class="feather feather-chevron-right"></i>'],
			responsive:{
				0:{
					items:1,
				},
				640:{
					items:2,
				},
				767:{
					items:3,
				},
				1024:{
					items:4,
				},
				1200:{
					items:6
				}
			}
		});
	}

	// popular vehicles slider carousel function by = owl.carousel.js________//	
	function twm_popular_vehicles_slider(){
		jQuery('.twm-popular-vehicles-slider').owlCarousel({
			loop:true,
			autoplay:true,
			margin:30,
			autoplayTimeout:3000,
			nav:true,
			dots: false,
			navText: ['<i class="feather feather-chevron-left"></i>', '<i class="feather feather-chevron-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2,
				},
				1200:{
					items:4
				}
			}
		});
	}

	// blog carousel function by = owl.carousel.js________//	
	function av_blog_carousel(){
		jQuery('.twm-blog-carousel').owlCarousel({
			loop:true,
			autoplay:true,
			margin:30,
			autoplayTimeout:3000,
			nav:true,
			dots: false,
			navText: ['<i class="feather feather-chevron-left"></i>', '<i class="feather feather-chevron-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2,
				},
				1200:{
					items:3
				}
			}
		});
	}

	// Team carousel function by = owl.carousel.js________//	
	function av_team_carousel(){
		jQuery('.twm-team-carousel').owlCarousel({
			loop:true,
			autoplay:true,
			margin:30,
			autoplayTimeout:3000,
			nav:true,
			dots: false,
			navText: ['<i class="feather feather-chevron-left"></i>', '<i class="feather feather-chevron-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2,
				},
				1200:{
					items:4
				}
			}
		});
	}

	// Our Vehicle carousel function by = owl.carousel.js________//	
	function twm_vehicle_fleet_carousel(){
		jQuery('.twm-vehicle-fleet-carousel').owlCarousel({
			loop:true,
			autoplay:true,
			margin:30,
			autoplayTimeout:3000,
			nav:true,
			dots: false,
			navText: ['<i class="feather feather-chevron-left"></i>', '<i class="feather feather-chevron-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2,
				},
				1200:{
					items:3
				}
			}
		});
	}

	// Our Vehicle carousel 2 function by = owl.carousel.js________//	
	function twm_vehicle_fleet2_carousel(){
		jQuery('.twm-vehicle-fleet2-carousel').owlCarousel({
			loop:true,
			autoplay:false,
			margin:30,
			autoplayTimeout:3000,
			nav:true,
			dots: false,
			navText: ['<i class="feather feather-chevron-left"></i>', '<i class="feather feather-chevron-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:1,
				},
				1200:{
					items:1
				}
			}
		});
	}

	//  Counter Section function by = counterup.min.js________//
	function counter_section(){
		jQuery('.counter').counterUp({
			delay: 10,
			time: 3000
		});	
	}	

	// Filter Button Left Cargrid 3 page________//
	jQuery('.switch-btn').on('click', function () { 
		jQuery('.styleswitcher').toggleClass('active');
	});

	//  Custom Scrollbar = jquery.mCustomScrollbar.concat.min.js________//
	(function(jQuery){
		jQuery(window).on("load",function(){
			jQuery(".content").mCustomScrollbar();
		});
	})(jQuery);


	// Thumbnail carousel function by = swiper-bundle.min.js________//
	jQuery(function () {
		var galleryThumbs = new Swiper(".twm-gallery-thumbs", {
			centeredSlides: false,
			centeredSlidesBounds: true, 
			loop: true,
			spaceBetween: 30,
			slidesPerView: 4,
			freeMode: false,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			watchOverflow: true,
			breakpoints: {
				// when window width is >= 320px
				0: {
					slidesPerView: 2,
				},
				// when window width is >= 575px
				480: {
					slidesPerView: 3,
					},
				// when window width is >= 768px
				768: {
				slidesPerView: 4,
				},
				// when window width is >= 1024px
				1024: {
				slidesPerView: 4,
				},
				// when window width is >= 1365px
				1365: {
				slidesPerView: 4,
				}
			},
			
		});
		var galleryTop = new Swiper(".twm-gallery-top", {
			direction: "horizontal",
			spaceBetween: 0,
			loop: true,
			navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
			},
			thumbs: {
			swiper: galleryThumbs
			}
		});
		galleryTop.on("slideChangeTransitionStart", function () {
			galleryThumbs.slideTo(galleryTop.activeIndex);
		});
		galleryThumbs.on("transitionStart", function () {
			galleryTop.slideTo(galleryThumbs.activeIndex);
		});
	});

	//  date time function = bootstrap-datetimepicker.min.js________//
	function date_time_input(){
		if (/Mobi/.test(navigator.userAgent)) {
		// if mobile device, use native pickers
		$(".date input").attr("type", "date");
		$(".time input").attr("type", "time");
		} else {
		// if desktop device, use DateTimePicker
		$(".datepicker").datetimepicker({
			useCurrent: false,
			format: "DD-MMM-YYYY",
			showTodayButton: true,
			icons: {
			next: "fa fa-chevron-right",
			previous: "fa fa-chevron-left",
			today: "fa fa-clock",
			}
		});
		$(".timepicker").datetimepicker({
			format: "LT",
			icons: {
			up: "fa fa-chevron-up",
			down: "fa fa-chevron-down"
			}
		});
		}
	}

	// > Video responsive function by = custom.js ========================= //	
	function video_responsive(){	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	}  

	// > magnificPopup for video function	by = magnific-popup.js ===================== //	
	function magnific_video(){	
		jQuery('.mfp-video').magnificPopup({
			type: 'iframe',
		});
	}

	// Vertically center Bootstrap modal popup function by = custom.js ==============//
	function popup_vertical_center(){	
		jQuery(function() {
			function reposition() {
				var modal = jQuery(this),
				dialog = modal.find('.modal-dialog');
				modal.css('display', 'block');
				
				// Dividing by two centers the modal exactly, but dividing by three 
				// or four works better for larger screens.
				dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
			}
			// Reposition when a modal is shown
			jQuery('.modal').on('show.bs.modal', reposition);
			// Reposition when the window is resized
			jQuery(window).on('resize', function() {
				jQuery('.modal:visible').each(reposition);
			});
		});
	}

	// > Main menu sticky on top  when scroll down function by = custom.js ========== //		
	function sticky_header(){
		if(jQuery('.sticky-header').length){
			var sticky = new Waypoint.Sticky({
				element: jQuery('.sticky-header')
			});
		}
	}

	// > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
	function sticky_sidebar(){		
		$('.sticky-sidebar')
		.theiaStickySidebar({
			additionalMarginTop: 100
		});		
	}

	// > page scroll top on button click function by = custom.js ===================== //	
	function scroll_top(){
		jQuery("button.scroltop").on('click', function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		jQuery(window).on("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
	}

	// > input Placeholder in IE9 function by = custom.js ======================== //	
	function placeholderSupport(){
	/* input placeholder for ie9 & ie8 & ie7 */
		jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
		/* input placeholder for ie9 & ie8 & ie7 end*/
		/*fix for IE7 and IE8  */
		if (!jQuery.support.placeholder) {
			jQuery("[placeholder]").on('focus', function () {
				if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
			}).blur(function () {
				if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
			}).blur();

			jQuery("[placeholder]").parents("form").on('submit', function () {
				jQuery(this).find('[placeholder]').each(function() {
					if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
							jQuery(this).val("");
					}
				});
			});
		}
		/*fix for IE7 and IE8 end */
	}	

	// > Nav submenu show hide on mobile by = custom.js
	function mobile_nav(){
		jQuery(".sub-menu, .mega-menu").parent('li').addClass('has-child');
		jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");

		jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {

			jQuery(this).parent().siblings(".has-child ").children(".sub-menu, .mega-menu").slideUp(500, function(){
				jQuery(this).parent().removeClass('nav-active');
			});

			jQuery(this).next(jQuery('.sub-menu, .mega-menu')).slideToggle(500, function(){
				jQuery(this).parent().toggleClass('nav-active');
			});

			ev.stopPropagation();
		});

	}
		
	// Mobile side drawer function by = custom.js
	function mobile_side_drawer(){
		jQuery('#mobile-side-drawer').on('click', function () { 
			jQuery('.mobile-sider-drawer-menu').toggleClass('active');
		});
	}	

	//  > Top Search bar Show Hide function by = custom.js =================== //	
	function site_search(){
		jQuery('a[href="#search"]').on('click', function(event) {                    
		jQuery('#search').addClass('open');
		jQuery('#search > form > input[type="search"]').focus();
	});
				
	jQuery('#search, #search button.close').on('click keyup', function(event) {
		if (event.target === this || event.target.className === 'close') {
			jQuery(this).removeClass('open');
		}
	});  
	}	

	//  Client logo Carousel function by = owl.carousel.js ========================== //
	function home_client_carousel(){
	jQuery('.home-client-carousel').owlCarousel({
		loop:true,
		nav:false,
		dots: true,				
		margin:5,
		autoplay:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:2,
			},
			480:{
				items:3,
			},			
			767:{
				items:4,
			},
			1000:{
				items:4
			}
		}
	});
	}

	//  Client logo Carousel function by = owl.carousel.js ========================== //
	function home_client_carousel_3(){
		jQuery('.home-client-carousel3').owlCarousel({
			loop:true,
			nav:false,
			dots: false,				
			margin:30,
			autoplay:true,
			autoplayTimeout: 1500,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:2,
				},
				480:{
					items:3,
				},			
				767:{
					items:4,
				},
				1000:{
					items:6
				}
			}
		});
	}

	//  Blog List Carousel function by = owl.carousel.js ========================== //
	function blog_list_carousel(){
		jQuery('.blog-list-carousel').owlCarousel({
			loop:true,
			nav:true,
			dots: false,				
			margin:30,
			autoplay:true,
			autoplayTimeout: 2500,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1,
				}
			}
		});
	}

	//________ Portfolio Large slider function by = swiper-bundle.min.js ________//
	function swiper_dealer_list(){
		var swiper = new Swiper('.swiper-dealer-list', {
			freeMode: false,
			slidesPerView: 6,
			centeredSlides: true,
			paginationClickable: true,
			loop: true,
			spaceBetween: 30,
			slideToClickedSlide: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			breakpoints: {
				// when window width is >= 320px
				0: {
					slidesPerView: 1,
				},
				// when window width is >= 575px
				480: {
					slidesPerView: 2,
					},
				// when window width is >= 768px
				768: {
				slidesPerView: 3,
				},
				// when window width is >= 1024px
				1024: {
				slidesPerView: 4,
				},
				// when window width is >= 1365px
				1365: {
				slidesPerView: 6,
				}
			},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		});
	}
	//________ Portfolio Large slider function by = swiper-bundle.min.js ________//
	function swiper_dealer_list2(){
		var swiper = new Swiper('.swiper-dealer-list2', {
			freeMode: false,
			slidesPerView: 6,
			centeredSlides: false,
			paginationClickable: true,
			loop: true,
			spaceBetween: 30,
			slideToClickedSlide: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			breakpoints: {
				// when window width is >= 320px
				0: {
					slidesPerView: 1,
				},
				// when window width is >= 575px
				480: {
					slidesPerView: 2,
				},
				// when window width is >= 768px
				768: {
				slidesPerView: 3,
				},
				// when window width is >= 1024px
				1024: {
				slidesPerView: 4,
				},
				// when window width is >= 1365px
				1365: {
				slidesPerView: 6,
				}
			},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		});
	}

	//Wow Animation
	function wow_animation(){
		new WOW().init();

		var wow = new WOW(
			{
			animateClass: 'animated',
			offset:       100,
			callback:     function(box) {
				// console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
			}
			}
		);
		wow.init();

	}

	// > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
	function lightbox_popup(){
		lc_lightbox('.elem', {
			wrap_class: 'lcl_fade_oc',
			gallery : true,	
			thumb_attr: 'data-lcl-thumb', 
			
			skin: 'minimal',
			radius: 0,
			padding	: 0,
			border_w: 0,
		});
	}	

	// > skills bar function function by  = custom.js ========================= //

	/* 2.1 skills bar tooltips*/
	function progress_bar_tooltips() {
		jQuery(function () { 
			jQuery('[data-toggle="tooltips"]').tooltip({trigger: 'manual'}).tooltip('show');
		});  
	}

	/* 2.2 skills bar widths*/

	function progress_bar_width() {	
		jQuery( window ).on('scroll', function() {   
			jQuery(".progress-bar").each(function(){
			progress_bar_width = jQuery(this).attr('aria-valuenow');
			jQuery(this).width(progress_bar_width + '%');
			});
		}); 
	}

	// > Tooltip function by = isotope.pkgd.min.js ========================= //
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})
	/*--------------------------------------------------------------------------------------------
		Window on load ALL FUNCTION START
	---------------------------------------------------------------------------------------------*/
		// > masonry function function by = isotope.pkgd.min.js ========================= //	
		function masonryBox() {
			if ( jQuery().isotope ) {      
				var $container = jQuery('.masonry-outer');
					$container.isotope({
						itemSelector: '.masonry-item',
						transitionDuration: '1s',
						originLeft: true,
						stamp: '.stamp',
					});

				$container.imagesLoaded().progress( function() {
					$container.isotope('layout');
				});

				jQuery('.masonry-filter li').on('click',function() {                           
					var selector = jQuery(this).find("a").attr('data-filter');
					jQuery('.masonry-filter li').removeClass('active');
					jQuery(this).addClass('active');
					$container.isotope({ filter: selector });
					return false;
				});
			};
		}

	// > page loader function by = custom.js ========================= //		
		function page_loader() {
			$('.loading-area').fadeOut(1000);
		}

	/*--------------------------------------------------------------------------------------------
		Window on scroll ALL FUNCTION START
	---------------------------------------------------------------------------------------------*/
		function color_fill_header() {
			var scroll = $(window).scrollTop();
			if(scroll >= 100) {
				$(".main-bar").addClass("color-fill");
			} else {
				(scroll = 100); $(".main-bar").removeClass("color-fill");
			}
		}

	/*--------------------------------------------------------------------------------------------
		document.ready ALL FUNCTION START
	---------------------------------------------------------------------------------------------*/
		jQuery(document).ready(function() {
			// Categories carousel function by = owl.carousel.js________//	
			av_categories_carousel(),
			// Categories2 carousel function by = owl.carousel.js________//	
			av_categories2_carousel(),
			// popular vehicles slider carousel function by = owl.carousel.js________//	
			twm_popular_vehicles_slider(),
			// blog carousel function by = owl.carousel.js________//	
			av_blog_carousel(),
			// Team carousel function by = owl.carousel.js________//	
			av_team_carousel(),
			// Our Vehicle carousel function by = owl.carousel.js________//	
			twm_vehicle_fleet_carousel(),
			// Our Vehicle carousel 2 function by = owl.carousel.js________//	
			twm_vehicle_fleet2_carousel(),
			//  Counter Section function by = counterup.min.js ========================== //
			counter_section(),
			//  date time function = bootstrap-datetimepicker.min.js________//
			date_time_input(),
			// > Top Search bar Show Hide function by = custom.js  		
			site_search(),	
			// > Video responsive function by = custom.js 
			video_responsive(),
			// > magnificPopup for video function	by = magnific-popup.js
			magnific_video(),
			// > Vertically center Bootstrap modal popup function by = custom.js
			popup_vertical_center();
			// > Main menu sticky on top  when scroll down function by = custom.js		
			sticky_header(),
			// > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
			sticky_sidebar(),
			// > page scroll top on button click function by = custom.js	
			scroll_top(),
			// > input Placeholder in IE9 function by = custom.js		
			placeholderSupport(),
			// > Nav submenu on off function by = custome.js ===================//
			mobile_nav(),
			// Mobile side drawer function by = custom.js
			mobile_side_drawer(),
			//  Client logo Carousel function by = owl.carousel.js ========================== //
			home_client_carousel(),
			//Wow Animation ========================== //
			wow_animation(),
			// > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
			lightbox_popup(),
			//  Client logo Carousel function by = owl.carousel.js ========================== //
			home_client_carousel_3(),
			//  Blog List Carousel function by = owl.carousel.js ========================== //
			blog_list_carousel(),
			//________ Portfolio Large slider function by = swiper-bundle.min.js ________//
			swiper_dealer_list(),
			//________ Portfolio Large slider function by = swiper-bundle.min.js ________//
			swiper_dealer_list2()

			
		}); 	

	/*--------------------------------------------------------------------------------------------
		Window Load START
	---------------------------------------------------------------------------------------------*/
		jQuery(window).on('load', function () {
			// > masonry function function by = isotope.pkgd.min.js		
			masonryBox(),
			color_fill_header(),
			// > skills bar function function by  = custom.js ========================= //
			/* 2.1 skills bar tooltips*/
			progress_bar_tooltips(),
			/* 2.2 skills bar widths*/
			progress_bar_width(),
			// > page loader function by = custom.js		
			page_loader();
		});

	/*===========================
		Window Scroll ALL FUNCTION START
	===========================*/

		jQuery(window).on('scroll', function () {
		// > Window on scroll header color fill 
			color_fill_header();
		});
		
		/*TICKERNEWS FUNCTiON*/
		jQuery(function(){
			var timer = !1;
			var _Ticker = jQuery("#T1").newsTicker();
			_Ticker.on("mouseenter",function(){
				var __self = this;
				timer = setTimeout(function(){
					__self.pauseTicker();
				},10);
			});
			_Ticker.on("mouseleave",function(){
				clearTimeout(timer);
				if(!timer) return !1;
				this.startTicker();
			});
		});

	/*===========================
		Document on  Submit FUNCTION START
	===========================*/

		// > Contact form function by = custom.js	
		jQuery(document).on('submit', 'form.cons-contact-form', function(e){
			e.preventDefault();
			var form = jQuery(this);
			/* sending message */
			jQuery.ajax({
				url: 'https://thewebmax.org/carntel/phpmailer/mail.php',
				
				data: form.serialize() + "&action=contactform",
				type: 'POST',
				dataType: 'JSON',
				beforeSend: function() {
					jQuery('.loading-area').show();
				},

				success:function(data){
					jQuery('.loading-area').hide();
					if(data['success']){
					jQuery("<div class='alert alert-success'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');
					}else{
					jQuery("<div class='alert alert-danger'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');	
					}
				}
			});
			jQuery('.cons-contact-form').trigger("reset");
			return false;
		});

	/*===========================
		Document on  Submit FUNCTION END
	===========================*/	


	/*Text TypeWriter Function Start*/

	// ES6 Class
	// constructor is a method that runs when the object is instantiated from the class
		class TypeWriter {
			constructor(txtElement, words, wait = 3000) {
				this.txtElement = txtElement;
				this.words = words;
				this.txt = '';
				this.wordIndex = 0;
				this.wait = parseInt(wait, 10);
				this.type();
				this.isDeleting = false;  
			}
			// instead of creating a prototpe method, we would just create a method within the class - a method called type
			// everything within the type method is going to be exactly the same thing
			type() {
			// Current index of word
			// We use the modulus operator to get the total length of the words
			const current = this.wordIndex % this.words.length;
			// console.log(current);
			// Get full text of current word
			const fullTxt = this.words[current];
			// console.log(fullTxt);
			// Check to see if it's in the deleting state
			if(this.isDeleting) {
			// Remove a character
				this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
			// Add a character
				this.txt = fullTxt.substring(0, this.txt.length + 1);
			}
			// Every half a second output what is in the .txt
			// Insert txt into element
			this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
			
			// Initial Type Speed
			let typeSpeed = 100;
			if(this.isDeleting) {
			typeSpeed /= 2;
			}
			// Check to see if the word is complete
			if(!this.isDeleting && this.txt === fullTxt) {
				// Make pause at end
			typeSpeed = this.wait;
				// Set isDeleting to true
				this.isDeleting = true;
			} else if(this.isDeleting && this.txt === '') {
				// Set isDeleting back to false
				this.isDeleting = false;
				// Move to the next word
				this.wordIndex++;
				// Pause before start typing again
				typeSpeed = 500;
			}
			// Run it at a certain pace
			setTimeout(() => this.type(), typeSpeed);
			
			}
		}

		// Initialize on DOM Load
		document.addEventListener('DOMContentLoaded', init);

		// Initialize the app in the init function
		function init() {
			const txtElement = document.querySelector('.txt-type');
			if(txtElement!=null && txtElement!=undefined){
				const words = JSON.parse(txtElement.getAttribute('data-words'));
				const wait = txtElement.getAttribute('data-wait')
				// Initialize the TypeWriter
				new TypeWriter(txtElement, words, wait);
			}
		
		}
	/*Text TypeWriter Function End*/
	
})(window.jQuery);