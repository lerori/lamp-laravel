window.jQuery = window.$ = jQuery;

/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
    $.cookie = function(key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);

jQuery(document).ready(function(){

	//Start Control Panel Script
	jQuery('body').append('<div id="settings"><div class="settings-btn"><i class="fe icon_cogs" aria-hidden="true"></i></div><div class="swtch-header"><h4>Settings</h4></div><div class="styleswtch"></div>');
	
	demo_panel = jQuery('body').find('.styleswtch');
	
	
	//Home Page
	demo_panel.append('<ul class="page-version clearfix"><p>Version</p><select class="styled" onChange="window.document.location.href=this.options[this.selectedIndex].value;" value="GO"><option selected="selected">select version</option><option value="../Onepage/index.html">One Page</option><option value="../Onepage/index2.html">Business Version</option><option value="../Onepage/index3.html">Video Background</option><option value="../Onepage/index4.html">Full Screen Parallax Slider</option><option value="index.html">Multipage Version</option><option value="../coming-soon/index.html">Coming Soon</option></select></ul>');
	
	
	//Colors Panel
	demo_panel.append('<ul class="ul-colors clearfix"><p>Colors</p><li id="color1"></li><li id="color2"></li><li id="color3"></li><li id="color4"></li><li id="color5"></li><li id="color6"></li><li id="color7"></li><li id="color8"></li><li id="color9"></li><li id="color10"></li></ul>');
	
	if($.cookie("css")) {
		$('link[id="colors"]').attr("href",$.cookie("css"));
	}
	
	//Colors Style	
	$('.ul-colors li').click(function(){
		color=($(this).attr('id'));
		if(color=='color1')	{	
			$('link[id="colors"]').attr('href','css/colors/color1.css');
			$.cookie('css', 'css/colors/color1.css', { expires: 1 });
		} else if(color=='color2') {
			$('link[id="colors"]').attr('href','css/colors/color2.css');
			$.cookie('css', 'css/colors/color2.css', { expires: 1 });
		} else if(color=='color3') {
			$('link[id="colors"]').attr('href','css/colors/color3.css');
			$.cookie('css', 'css/colors/color3.css', { expires: 1 });
		} else if(color=='color4') {
			$('link[id="colors"]').attr('href','css/colors/color4.css');
			$.cookie('css', 'css/colors/color4.css', { expires: 1 });
		} else if(color=='color5') {
			$('link[id="colors"]').attr('href','css/colors/color5.css');
			$.cookie('css', 'css/colors/color5.css', { expires: 1 });
		} else if(color=='color6') {
			$('link[id="colors"]').attr('href','css/colors/color6.css');
			$.cookie('css', 'css/colors/color6.css', { expires: 1 });
		} else if(color=='color7') {
			$('link[id="colors"]').attr('href','css/colors/color7.css');
			$.cookie('css', 'css/colors/color7.css', { expires: 1 });
		} else if(color=='color8') {
			$('link[id="colors"]').attr('href','css/colors/color8.css');
			$.cookie('css', 'css/colors/color8.css', { expires: 1 });
		} else if(color=='color9') {
			$('link[id="colors"]').attr('href','css/colors/color9.css');
			$.cookie('css', 'css/colors/color9.css', { expires: 1 });
		} else if(color=='color10') {
			$('link[id="colors"]').attr('href','css/colors/color10.css');
			$.cookie('css', 'css/colors/color10.css', { expires: 1 });
		}
	});
	
	
	
	//Reset Button
	demo_panel.append('<a class="stylereset" href="javascript:void(0);">Reset Styles</a>');
	
	//Reset Styles
	$('.stylereset').click(function(e){
		$.cookie('layout', null);
		$('body').removeClass();
		$.cookie('css', null);
		$.cookie('pattern', null);
		$('link[id="colors"]').attr('href','css/colors/');
		$('#page').removeClass();
	});
	
	
	
	//Note Info
	demo_panel.append('<div class="note-info">This Panel is only for demo purposes!</div>');
	
	
	//Style Switcher Left/Right
	jQuery('#settings').css({left: '-223px'});
	
	jQuery('.settings-btn').click(function(){
		jQuery('#settings').toggleClass('panel_open');
	});	
	
	jQuery('.settings-btn').click(function(){
		var sidebar = jQuery('#settings');
		if (sidebar.css('left') === '-223px') {
			jQuery('#settings').animate({left: '0px'});
		} else {
			jQuery('#settings').animate({left: '-223px'});
		}	
	});
	

});