//Script to ensure Snowcone will work for legacy browsers, that don't support the :before pseudo class

function addicons(){
	//Create object with list of icons
		var icons = {
			"sc-alert":"A",
			"sc-cross":"B",
			"sc-tick":"C",
			"sc-expand":"D",
			"sc-contract":"E",
			"sc-view":"F",
			"sc-sync":"G",
			"sc-home":"H",
			"sc-outline_down":"I",
			"sc-outline_up":"J",
			"sc-outline_right":"K",
			"sc-outline_left":"L",
			"sc-stop":"M",
			"sc-mapmarker":"N",
			"sc-favourite":"O",
			"sc-profile":"P",
			"sc-magnify":"Q",
			"sc-comment":"R",
			"sc-settings":"S",
			"sc-edit":"T",
			"sc-email":"U",
			"sc-shop_bag":"V",
			"sc-logout":"W",
			"sc-heart":"X",
			"sc-mobile":"Y",
			"sc-rss":"Z",
			"sc-link":"a",
			"sc-fill_down":"b",
			"sc-fill_up":"c",
			"sc-fill_right":"d",
			"sc-fill_left":"e",
			"sc-facebook":"f",
			"sc-twitter":"g",
			"sc-googleplus":"h",
			"sc-blacklist":"i",
			"sc-tag":"t",
			"sc-speedo":"y",
			"sc-tangentsnowball":"z"
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
	
