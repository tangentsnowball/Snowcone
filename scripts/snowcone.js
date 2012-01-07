//Script to ensure Snowcone will work for legacy browsers, that don't support the :before pseudo class

var icons = {
    ico_alert: "A",
    ico_cross: "B"
};
var browserver = parseInt($.browser.version, 10)

$(document).ready(function(){
	if ($.browser.msie && browserver == 7){
		$(".app-ico").each(function(){
			var icon = $(this).attr("class").split(/\s/);
			for(key in icons){
				if([key]==icon[1]){
					$(this).prepend("<span class='app-legacy_ico'>" + icons[key] + "</span>");
				};
			}
		});
	}
});