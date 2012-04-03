//Script to ensure Snowcone will work for legacy browsers, that don't support the :before pseudo class

function addicons(){
	//Create object with list of icons
		var icons = {
			"sc-alert":"\f000",
			"sc-cross":"\f001",
			"sc-tick":"\f002",
			"sc-expand":"\f003",
			"sc-contract":"\f004",
			"sc-view":"\f005",
			"sc-sync":"\f006",
			"sc-home":"\f007",
			"sc-outline_down":"\f008",
			"sc-outline_up":"\f009",
			"sc-outline_right":"\f00a",
			"sc-outline_left":"\f00b",
			"sc-stop":"\f00c",
			"sc-mapmarker":"\f00d",
			"sc-favourite":"\f00e",
			"sc-profile":"\f010",
			"sc-magnify":"\f011",
			"sc-comment":"\f012",
			"sc-settings":"\f013",
			"sc-edit":"\f014",
			"sc-email":"\f015",
			"sc-shop_bag":"\f016",
			"sc-logout":"\f017",
			"sc-heart":"\f018", 
			"sc-mobile":"\f019", 
			"sc-rss":"\f01a", 
			"sc-link":"\f01b", 
			"sc-fill_down":"\f01c", 
			"sc-fill_up":"\f01d", 
			"sc-fill_right":"\f01e",
			"sc-fill_left":"\f021", 
			"sc-facebook":"\f022", 
			"sc-twitter":"\f023", 
			"sc-googleplus":"\f024", 
			"sc-blacklist":"\f025", 
			"sc-tag":"\f026", 
			"sc-speedo":"\f027",  
			"sc-tangentsnowball":"\f028" 
		};
	//Detect IE version
		var browserver = parseInt($.browser.version, 10);
	
	//Run icon insertion
		if ($.browser.msie && browserver == 6 || browserver == 7){
			$(".snowcone").each(function(){
				var $this = $(this);
				var icon = $this.attr("class").split(/\s/);
				for(key in icons){
					if([key]==icon[1]){
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
	
