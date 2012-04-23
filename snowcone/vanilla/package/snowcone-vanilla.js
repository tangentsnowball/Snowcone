//Script to ensure Snowcone will work for legacy browsers, that don't support the " pseudo class

function addicons(){
	//Create object with list of icons
		var icons = {
			"sc-alert":"\f000",
		    "sc-cross":"\f001",
			"sc-expand":"\f002",
			"sc-tick":"\f003",
			"sc-contract":"\f004",
			"sc-outline_down":"\f005",
			"sc-outline_up":"\f006",
			"sc-outline_right":"\f007",
			"sc-outline_left":"\f008",
			"sc-fill_down":"\f009",
			"sc-fill_top":"\f00a",
			"sc-fill_right":"\f00b",
			"sc-fill_left":"\f00c",
			"sc-profile":"\f00d",
			"sc-search":"\f00e",
			"sc-comment":"\f010",
			"sc-settings":"\f011",
			"sc-edit":"\f012",
			"sc-email_closed":"\f013",
			"sc-email_open":"\f014",
			"sc-logout":"\f015",
			"sc-heart":"\f016",
			"sc-phone":"\f017",
			"sc-rss":"\f018", 
			"sc-link":"\f019", 
			"sc-stop":"\f01a", 
			"sc-mapmarker":"\f01b", 
			"sc-favourite":"\f01c", 
			"sc-fb_fill":"\f01d", 
			"sc-twitter_fill":"\f01e",
			"sc-gplus_fill":"\f021", 
			"sc-profile_blacklist":"\f022", 
			"sc-tag":"\f023", 
			"sc-tangentsnowball":"\f024", 
			"sc-refresh":"\f025", 
			"sc-upload":"\f026", 
			"sc-download":"\f027",  
			"sc-bookmark":"\f028", 
			"sc-flag":"\f029", 
			"sc-doc_default":"\f02a", 
			"sc-info":"\f02b", 
			"sc-calendar":"\f02c", 
			"sc-print":"\f02d", 
			"sc-home":"\f02e", 
			"sc-view":"\f02f", 
			"sc-sync":"\f030", 
			"sc-hcard":"\f031", 
			"sc-shop_bag":"\f032", 
			"sc-pants":"\f033", 
			"sc-pants_granny":"\f034", 
			"sc-pants_bikini":"\f035", 
			"sc-pants_speedo":"\f036", 
			"sc-target":"\f037", 
			"sc-trash":"\f038", 
			"sc-notes":"\f039", 
			"sc-library":"\f03a",
			"sc-paperclipa":"\f03b",
			"sc-paperclipb":"\f03c",
			"sc-syncb":"\f03d",
			"sc-key":"\f03e",
			"sc-suitcase":"\f040",
			"sc-smallx":"\f041",
			"sc-deleteright":"\f042",
			"sc-deleteleft":"\f043",
			"sc-folder":"\f044",
			"sc-slider":"\f045"
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
	
	
	
	
