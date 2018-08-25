window.jQuery = window.$ = jQuery;


/*-----------------------------------------------------------------------------------*/
/*	SETTINGS
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	/* MUESTRA LA CAJA DE HERRAMIENTAS A LA IZQ DE LA PANTALLA
	jQuery('<script src="js/settings.js" type="text/javascript"></script>').appendTo('head');
	jQuery('<link href="css/settings.css" rel="stylesheet" type="text/css" >').appendTo('head');
	*/
	jQuery('<link href="css/colors/" rel="stylesheet" type="text/css" id="colors" />').appendTo('head');
});



/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function () {
	//Preloader
	setTimeout("jQuery('#preloader').animate({'opacity' : '0'},300,function(){jQuery('#preloader').hide()})",800);
	setTimeout("jQuery('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)",800);

});





/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function() {
	//MobileMenu
	if ($(window).width() < 768){
		jQuery('.top_menu_wrapper').prepend('<a href="javascript:void(0)" class="menu_toggler"><em></em><em></em><em></em></a>');
		jQuery('header .navmenu').hide();
		jQuery('.menu_toggler, .navmenu ul li a').click(function(){
			jQuery('header .navmenu').slideToggle(300);
		});
	}
	
	if ($(window).width() < 768){
	} else {
		setInterval(scrolled_menu, 100);
	}
	
	lastitemmenu();
	
});

jQuery(window).resize(function(){
	lastitemmenu();
	
});


// Sticky
function scrolled_menu() {
	if (jQuery(window).scrollTop() > 30) {
		jQuery('header').addClass('fixed_show');
	} else {
		jQuery('header').removeClass('fixed_show');
	}
}


function lastitemmenu() {
	var lastitemmenu_cl = (jQuery(window).width() - jQuery(".container").width() - 12)/2;
	if (lastitemmenu_cl < 180) {
		jQuery(".navmenu ul li li:last-child").removeClass("menuposit");
		jQuery(".navmenu ul li li:last-child").addClass("menurespond");
	}
	else {
		jQuery(".navmenu ul li:last-child").removeClass("menurespond");
	}	
}








/*-----------------------------------------------------------------------------------*/
/*	FLEXSLIDER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function(){
	//Top Slider
	$('.flexslider.top_slider').flexslider({
		animation: "fade",
		pauseOnAction: false,
		pauseOnHover: true,
		controlNav: true,
		directionNav: false,
		prevText: "",
		nextText: ""
	});
	
	
	//Top Slider
	$('.flexslider.top_slider2').flexslider({
		animation: "fade",
		controlNav: true,
		directionNav: false,
		prevText: "",
		nextText: ""
	});
	
	
	//Top Slider
	$('.flexslider.top_slider3').flexslider({
		animation: "fade",
		controlNav: true,
		directionNav: false,
		prevText: "",
		nextText: ""
	});
	
	
	//About Slider
	$('.flexslider.about_slider').flexslider({
		animation: "fade",
		controlNav: true,
		directionNav: false,
		animationLoop: false,
		slideshow: true,
	});
	
	
	//Blog Post Slider
	$('.flexslider.blog_post_slider').flexslider({
		animation: "fade",
		controlNav: true,
		directionNav: false,
		animationLoop: false,
		slideshow: true,
	});
	
	
	//Blog Post Slider
	$('.flexslider.portfolio_single_item_slider').flexslider({
		animation: "fade",
		controlNav: true,
		directionNav: false,
		animationLoop: false,
		slideshow: true,
	});
	
	
	//Service Slider
	$('.flexslider.service_slider').flexslider({
		animation: "slide",
		controlNav: true,
		directionNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 270,
		itemMargin: 30
	});
});







/*-----------------------------------------------------------------------------------*/
/*	VIDEO SECTION
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	$("#video_section").find('#play2').hide();
	
	$(".about_team_video").hover(
		function () {
			$(this).addClass("active");
			$("#video_section").find('.about_team_video_item').addClass('active_video');
			$("#video_section").find('#play1').show();
		}
	);
	$(".about_team_video").hover(
		function () {
			$('.presentation_video').removeClass("active");
			$(this).addClass("active");
			$("#video_section").find('.presentation_video_item').removeClass('active_video');
			$("#video_section").find('#play2').hide();
		}
	);
	
	$(".presentation_video").hover(
		function () {
			$(this).addClass("active");
			$("#video_section").find('.presentation_video_item').addClass('active_video');
			$("#video_section").find('#play2').show();
		}
	);
	$(".presentation_video").hover(
		function () {
			$('.about_team_video').removeClass("active");
			$(this).addClass("active");
			$("#video_section").find('.about_team_video_item').removeClass('active_video');
			$("#video_section").find('#play1').hide();
		}
	);

	
});





/*-----------------------------------------------------------------------------------*/
/*	PORTFOLIO ITEM SIZE
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
	portfoliSize();
	
});

jQuery(window).resize(function(){
	portfoliSize();
	
});

function portfoliSize(){
	
	var wh = $(window).width();
	
	if ($(window).width() <= 768){
		$('#portfolio_masonry .element').css('width', (wh - 2) / 3);
	}
	
	if ($(window).width() >= 768){
		$('#portfolio_masonry .element').css('width', (wh - 2) / 5);
	}
	
	if ($(window).width() <= 480){
		$('#portfolio_masonry .element').css('width', (wh - 2) / 2);
	}
	
}






/*-----------------------------------------------------------------------------------*/
/*	BLACKANDWHITE
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function(){
	jQuery('.client_img').BlackAndWhite({
		hoverEffect : true, // default true
		// set the path to BnWWorker.js for a superfast implementation
		webworkerPath : false,
		// for the images with a fluid width and height 
		responsive:true,
		// to invert the hover effect
		invertHoverEffect: false,
		// this option works only on the modern browsers ( on IE lower than 9 it remains always 1)
		intensity:1,
		speed: { //this property could also be just speed: value for both fadeIn and fadeOut
			fadeIn: 300, // 200ms for fadeIn animations
			fadeOut: 300 // 800ms for fadeOut animations
		},
		onImageReady:function(img) {
			// this callback gets executed anytime an image is converted
		}
	});
});







/*-----------------------------------------------------------------------------------*/
/*	IFRAME TRANSPARENT
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	$("iframe").each(function(){
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') != -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
		$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else $(this).attr('src',ifr_source+'?'+wmode);
	});
});






/*-----------------------------------------------------------------------------------*/
/*	MAGNIFICPOPUP
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function(){
	jQuery(document).ready(function() {
		$('.portfolio_item').magnificPopup({
			delegate: 'a.zoom',
			type: 'image',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});
	});
});







/*-----------------------------------------------------------------------------------*/
/*	CONTACT FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	$("#ajax-contact-form").submit(function() {
		var str = $(this).serialize();		
		$.ajax({
			type: "POST",
			url: "contact_form/contact_process.php",
			data: str,
			success: function(msg) {
				// Message Sent - Show the 'Thank You' message and hide the form
				if(msg == 'OK') {
					result = '<div class="notification_ok">Su Mensage ha sido enviado. Gracias!</div>';
					$("#fields").hide();
				} else {
					result = msg;
				}
				$('#note').html(result);
			}
		});
		return false;
	});
});


//Contact Height
jQuery(document).ready(function(){
	contactHeight();
	
});

jQuery(window).resize(function(){
	contactHeight();
	
});

function contactHeight(){
	var wh = $(window).height();
	$('#contacts').css('min-height', wh - 180);
	
	var contacts_container_h = $('#contacts .container').height();
	var contacts_padtop = Math.abs((wh - contacts_container_h)/2);
	$('#contacts .container').css('padding-top', contacts_padtop -150);
	$('#contacts .container').css('padding-bottom', contacts_padtop -150);
	
}






/*-----------------------------------------------------------------------------------*/
/*	404 PAGE
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
	page404Height();
	
});

jQuery(window).resize(function(){
	page404Height();
	
});

function page404Height(){
	var wh = $(window).height();
	$('#page404').css('min-height', wh - 110);
	
	var page404_container_h = $('#page404 .container').height();
	var page404_padtop = Math.abs((wh - page404_container_h)/2);
	$('#page404 .container').css('padding-top', page404_padtop -110);
	$('#page404 .container').css('padding-bottom', page404_padtop -110);
	
}







/*-----------------------------------------------------------------------------------*/
/*	SCROLL TOP
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	$("a.back_top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
});




/*-----------------------------------------------------------------------------------*/
/*	TOP SEARCH
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {	

	var searchIcon = $('#top_search');

	searchIcon.click(function(e){
		e.preventDefault();

		if(searchIcon.is('.active') && $(e.target).is(searchIcon)){
			searchIcon.removeClass('active');
		}
		else{
			searchIcon.addClass('active');
			searchIcon.find('input').focus();
		}

	});

	$('body').click(function(e){

		if(	searchIcon.is('.active') &&
			!$(e.target).is('#top_search, #top_search form, #top_search input')){

			searchIcon.removeClass('active');
		}

	});
});




/*-----------------------------------------------------------------------------------*/
/*	CUSTOM SELECT
/*-----------------------------------------------------------------------------------*/
(function(a){a.fn.extend({customSelect:function(c){if(typeof document.body.style.maxHeight==="undefined"){return this}var e={customClass:"customSelect",mapClass:true,mapStyle:true},c=a.extend(e,c),d=c.customClass,f=function(h,k){var g=h.find(":selected"),j=k.children(":first"),i=g.html()||"&nbsp;";j.html(i);if(g.attr("disabled")){k.addClass(b("DisabledOption"))}else{k.removeClass(b("DisabledOption"))}setTimeout(function(){k.removeClass(b("Open"));a(document).off("mouseup.customSelect")},60)},b=function(g){return d+g};return this.each(function(){var g=a(this),i=a("<span />").addClass(b("Inner")),h=a("<span />");g.after(h.append(i));h.addClass(d);if(c.mapClass){h.addClass(g.attr("class"))}if(c.mapStyle){h.attr("style",g.attr("style"))}g.addClass("hasCustomSelect").on("render.customSelect",function(){f(g,h);g.css("width","");var k=parseInt(g.outerWidth(),10)-(parseInt(h.outerWidth(),10)-parseInt(h.width(),10));h.css({display:"inline-block"});var j=h.outerHeight();if(g.attr("disabled")){h.addClass(b("Disabled"))}else{h.removeClass(b("Disabled"))}i.css({width:k,display:"inline-block"});g.css({"-webkit-appearance":"menulist-button",width:h.outerWidth(),position:"absolute",opacity:0,height:j,fontSize:h.css("font-size")})}).on("change.customSelect",function(){h.addClass(b("Changed"));f(g,h)}).on("keyup.customSelect",function(j){if(!h.hasClass(b("Open"))){g.trigger("blur.customSelect");g.trigger("focus.customSelect")}else{if(j.which==13||j.which==27){f(g,h)}}}).on("mousedown.customSelect",function(){h.removeClass(b("Changed"))}).on("mouseup.customSelect",function(j){if(!h.hasClass(b("Open"))){if(a("."+b("Open")).not(h).length>0&&typeof InstallTrigger!=="undefined"){g.trigger("focus.customSelect")}else{h.addClass(b("Open"));j.stopPropagation();a(document).one("mouseup.customSelect",function(k){if(k.target!=g.get(0)&&a.inArray(k.target,g.find("*").get())<0){g.trigger("blur.customSelect")}else{f(g,h)}})}}}).on("focus.customSelect",function(){h.removeClass(b("Changed")).addClass(b("Focus"))}).on("blur.customSelect",function(){h.removeClass(b("Focus")+" "+b("Open"))}).on("mouseenter.customSelect",function(){h.addClass(b("Hover"))}).on("mouseleave.customSelect",function(){h.removeClass(b("Hover"))}).trigger("render.customSelect")})}})})(jQuery);

jQuery(document).ready(function() {	
	setTimeout(function() {
		jQuery('select.styled').customSelect();
		
		jQuery("<i class='fe arrow_carrot-down'></i>").appendTo($(".customSelect.styled"));
		
	}, 1000);
});





