// Script to ensure Snowcone will work for legacy browsers, that don't support the pseudo class

//--
//Snowcone by Tangent Snowball is licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License. Based on a work at github.com.
//http://creativecommons.org/licenses/by-sa/3.0/"	
//--


function addicons(){
  //Create object with list of icons
  var icons = {
    "sc-tangentsnowball":     "\f021",	
    "sc-profile-blacklist":   "\f022",
    "sc-tag":                 "\f023",
    "sc-star":          	  "\f024",
    "sc-refresh":             "\f025",
    "sc-upload":              "\f026",
    "sc-download":            "\f027",
    "sc-bookmark":            "\f028",
    "sc-flaga":               "\f029",
    "sc-doc-default":         "\f02a",
    "sc-info":                "\f02b",
    "sc-calendar":            "\f02c",
    "sc-print":               "\f02d",
    "sc-home":                "\f02e",
    "sc-view":                "\f02f",
    "sc-synca":               "\f030",
    "sc-hcard":               "\f031",
    "sc-shop-bag":            "\f032",
    "sc-pants":               "\f033",
    "sc-pants-granny":        "\f034",
    "sc-pants-bikini":        "\f035",
    "sc-pants-speedo":        "\f036",
    "sc-target":              "\f037",
    "sc-trash":               "\f038",
    "sc-notes":               "\f039",
    "sc-library":             "\f03a",
    "sc-paperclipa":          "\f03b",
    "sc-paperclipb":          "\f03c",
    "sc-syncb":               "\f03d",
    "sc-key":                 "\f03e",
    "sc-suitcase":            "\f040",
    "sc-smallx":              "\f041",
    "sc-delete-right":        "\f042",
    "sc-delete-left":         "\f043",
    "sc-folder":              "\f044",
    "sc-slider":              "\f045",
    "sc-dot":                 "\f046",
    "sc-sort":                "\f047",
    "sc-arrowup":             "\f048",
    "sc-arrowdown":           "\f049",
    "sc-filter":              "\f04a",
    "sc-info-circle":         "\f04b",
    "sc-delivery":            "\f04c",
    "sc-payment":             "\f04d",
    "sc-help-circle":         "\f04e",
    "sc-flagb":         	  "\f050",
    "sc-book":                "\f051",
    "sc-logout-mac":          "\f052",
    "sc-alert":               "\f053",
    "sc-cross":               "\f054",
    "sc-plus":	              "\f055",
    "sc-tick":                "\f056",
    "sc-minus": 	          "\f057",
    "sc-outline-down":        "\f058",
    "sc-outline-up":          "\f059",
    "sc-outline-right":       "\f05a",
    "sc-outline-left":        "\f05b",
    "sc-fill-down":           "\f05c",
    "sc-fill-top":            "\f05d",
    "sc-fill-right":          "\f05e",
    "sc-fill-left":           "\f060",
    "sc-profile":             "\f061",
    "sc-search":              "\f062",
    "sc-comment":             "\f063",
    "sc-settings":            "\f064",
    "sc-edit":                "\f065",
    "sc-email-closed":        "\f066",
    "sc-email-open":          "\f067",
    "sc-logout":              "\f068",
    "sc-heart":               "\f069",
    "sc-phone":               "\f06a",
    "sc-rss":                 "\f06b",
    "sc-link":                "\f06c",
    "sc-stop":                "\f06d",
    "sc-mapmarker":           "\f06e",
	"sc-gplus-fill":          "\f070",    
    "sc-fb-fill":             "\f071",
    "sc-twitter-fill":        "\f072",
	"sc-cart":        		  "\f073",
	"sc-twitter-nofill":	  "\f074",
	"sc-zoomin":	 		  "\f075",
	"sc-zoomout":	 		  "\f076",
	"sc-listviewa":	 		  "\f077",
	"sc-gridviewa":	 		  "\f078",
	"sc-stopwatch":	 		  "\f079",
	"sc-clock":	 		      "\f07a",
	"sc-timer":	 		  	  "\f07b",
	"sc-shop":	 			  "\f07c",
	"sc-outline-btmright":	  "\f07d",
	"sc-outline-btmleft":	  "\f07e",
	"sc-outline-topright":	  "\f080",
	"sc-outline-topleft":	  "\f081",
	"sc-fill-btmright":	  	  "\f082",
	"sc-fill-btmleft":	 	  "\f083",
	"sc-fill-topright":		  "\f084",
	"sc-fill-topleft":	  	  "\f085",
	"sc-outline-minimise":    "\f086",
	"sc-outline-maximise":    "\f087",
	"sc-fill-minimise":  	  "\f088",
	"sc-fill-maximise":  	  "\f089",
	"sc-minimise":  		  "\f08a",
	"sc-maximise":  		  "\f08b",
	"sc-listviewb":  		  "\f08c",
	"sc-gridviewb":  		  "\f08d",
	"sc-downarrowb":  		  "\f08e",
	"sc-rightarrow":	      "\f090",
	"sc-leftarrow":		      "\f091",
	"sc-uparrowb":  	      "\f092",
	"sc-addressbook":  	      "\f093",
	"sc-paperclipc":  		  "\f094",
	"sc-thumbup":	  		  "\f095",
	"sc-thumbdown":  		  "\f096",
	"sc-bell":  			  "\f097",
	"sc-flame":		  		  "\f098",
	"sc-keyline-up":		  "\f099",
	"sc-keyline-down":		  "\f09a",
	"sc-keyline-right":		  "\f09b",
	"sc-keyline-left":		  "\f09c",
	"sc-menutoggle":	  "\f09d",
	"sc-image":      		  "\f09e"
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
