//Script to ensure Snowcone will work for legacy browsers, that don't support the " pseudo class

function addicons(){
	//Create object with list of icons
		var icons = {
			"sc-iconname":"\f000",
		    "sc-iconname":"\f001",
			"sc-iconname":"\f002",
			"sc-iconname":"\f003",
			"sc-iconname":"\f004",
			"sc-outline_down":"\f005",
			"sc-iconname":"\f006",
			"sc-iconname":"\f007",
			"sc-iconname":"\f008",
			"sc-iconname":"\f009",
			"sc-iconname":"\f00a",
			"sc-iconname":"\f00b",
			"sc-iconname":"\f00c",
			"sc-iconname":"\f00d",
			"sc-iconname":"\f00e",
			"sc-iconname":"\f010",
			"sc-iconname":"\f011",
			"sc-iconname":"\f012",
			"sc-iconname":"\f013",
			"sc-iconname":"\f014",
			"sc-iconname":"\f015",
			"sc-iconname":"\f016",
			"sc-iconname":"\f017",
			"sc-iconname":"\f018", 
			"sc-iconname":"\f019", 
			"sc-iconname":"\f01a", 
			"sc-iconname":"\f01b", 
			"sc-iconname":"\f01c", 
			"sc-iconname":"\f01d", 
			"sc-iconname":"\f01e",
			"sc-iconname":"\f021", 
			"sc-iconname":"\f022", 
			"sc-iconname":"\f023", 
			"sc-iconname":"\f024", 
			"sc-iconname":"\f025", 
			"sc-iconname":"\f026", 
			"sc-iconname":"\f027",  
			"sc-bookmark":"\f028", 
			"sc-iconname":"\f029", 
			"sc-iconname":"\f02a", 
			"sc-iconname":"\f02b", 
			"sc-iconname":"\f02c", 
			"sc-iconname":"\f02d", 
			"sc-iconname":"\f02e", 
			"sc-iconname":"\f02f", 
			"sc-iconname":"\f030", 
			"sc-iconname":"\f031", 
			"sc-iconname":"\f032", 
			"sc-iconname":"\f033", 
			"sc-iconname":"\f034", 
			"sc-iconname":"\f035", 
			"sc-iconname":"\f036", 
			"sc-iconname":"\f037", 
			"sc-iconname":"\f038", 
			"sc-iconname":"\f039", 
			"sc-iconname":"\f03a" 
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
	
	
	
	
