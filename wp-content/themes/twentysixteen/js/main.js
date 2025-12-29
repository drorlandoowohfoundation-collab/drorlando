jQuery(document).ready(function(){
	jQuery(".header .navbar-toggle").click(function(){
		jQuery(".header .navigation").slideToggle().toggleClass("active");
	});
});
jQuery(window).load(function(){
	jQuery('.flexslider').flexslider({
		animation: "slide",
		controlNav: false,
		useCSS: false,
		start: function(slider){
			jQuery('body').removeClass('loading');
		}
	});
});