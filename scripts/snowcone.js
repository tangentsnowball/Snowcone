//Script to ensure Snowcone will work for legacy browsers, that don't support the :before pseudo class
$(document).ready(function(){
	if($.browser.msie){
		$(".app-ico").prepend("<span class='ico-legacy'>C</span>");
	}
});