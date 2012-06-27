// Script to ensure Snowcone will work for legacy browsers, that don't support the pseudo class

//--
//Snowcone by Tangent Snowball is licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License. Based on a work at github.com.
//http://creativecommons.org/licenses/by-sa/3.0/"	
//--

function addicons(){
	//Create object with list of icons
		var icons = {
			"sc-tangentsnowball":	"\f021",
			};

  //Detect IE version
  var browserver = parseInt($.browser.version, 10);

  //Run icon insertion
  if ($.browser.msie && browserver == 6 || browserver == 7) {
    $(".snowcone").each(function() {
      var $this = $(this);
      var icon = $this.attr("class").split(/\s/);
      for (key in icons) {
        if ([key]==icon[1]) {
          $this.prepend("<span class='snowcone-legacy'>" + icons[key] + "</span>");
        }
      }
    });
  }
}

//Run function
$(document).ready(function(){
  addicons();
});