(function(window,undefined ) {
	var homepage = {
		ui:{
			toggleIconView: function(){
				$(".toggle-view li").click(function(){
					//Set variables
					var $this = $(this);
					var toggleClass = $this.attr("class");
				   //Perform toggle
				   $("body")
						.removeAttr("class")
						.addClass(toggleClass);
				});
			}
		}
	}
window.homepage = homepage;
})(window);


$(document).ready(function() {
	//homepage.ui.toggleIconView()
	homepage.ui.tooltip()
});