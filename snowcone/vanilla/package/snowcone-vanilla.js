// Script to ensure Snowcone will work for legacy browsers, that don't support the pseudo class

//--
//Snowcone by Tangent Snowball is licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License. Based on a work at github.com.
//http://creativecommons.org/licenses/by-sa/3.0/"	
//--


function addicons(){
  //Create object with list of icons
  var icons = {
    "sc-tangentsnowball":     "&#xf021;",	
    "sc-profile-blacklist":   "&#xf022;",
    "sc-tag":                 "&#xf023;",
    "sc-star":          	  "&#xf024;",
    "sc-refresh":             "&#xf025;",
    "sc-upload":              "&#xf026;",
    "sc-download":            "&#xf027;",
    "sc-bookmark":            "&#xf028;",
    "sc-flaga":               "&#xf029;",
    "sc-doc-default":         "&#xf02a;",
    "sc-info":                "&#xf02b;",
    "sc-calendar":            "&#xf02c;",
    "sc-print":               "&#xf02d;",
    "sc-home":                "&#xf02e;",
    "sc-view":                "&#xf02f;",
    "sc-synca":               "&#xf030;",
    "sc-hcard":               "&#xf031;",
    "sc-shop-bag":            "&#xf032;",
    "sc-pants":               "&#xf033;",
    "sc-pants-granny":        "&#xf034;",
    "sc-pants-bikini":        "&#xf035;",
    "sc-pants-speedo":        "&#xf036;",
    "sc-target":              "&#xf037;",
    "sc-trash":               "&#xf038;",
    "sc-notes":               "&#xf039;",
    "sc-library":             "&#xf03a;",
    "sc-paperclipa":          "&#xf03b;",
    "sc-paperclipb":          "&#xf03c;",
    "sc-syncb":               "&#xf03d;",
    "sc-key":                 "&#xf03e;",
    "sc-suitcase":            "&#xf040;",
    "sc-smallx":              "&#xf041;",
    "sc-delete-right":        "&#xf042;",
    "sc-delete-left":         "&#xf043;",
    "sc-folder":              "&#xf044;",
    "sc-slider":              "&#xf045;",
    "sc-dot":                 "&#xf046;",
    "sc-sort":                "&#xf047;",
    "sc-arrowup":             "&#xf048;",
    "sc-arrowdown":           "&#xf049;",
    "sc-filter":              "&#xf04a;",
    "sc-info-circle":         "&#xf04b;",
    "sc-delivery":            "&#xf04c;",
    "sc-payment":             "&#xf04d;",
    "sc-help-circle":         "&#xf04e;",
    "sc-flagb":         	  "&#xf050;",
    "sc-book":                "&#xf051;",
    "sc-logout-mac":          "&#xf052;",
    "sc-alert":               "&#xf053;",
    "sc-cross":               "&#xf054;",
    "sc-plus":	              "&#xf055;",
    "sc-tick":                "&#xf056;",
    "sc-minus": 	          "&#xf057;",
    "sc-outline-down":        "&#xf058;",
    "sc-outline-up":          "&#xf059;",
    "sc-outline-right":       "&#xf05a;",
    "sc-outline-left":        "&#xf05b;",
    "sc-fill-down":           "&#xf05c;",
    "sc-fill-top":            "&#xf05d;",
    "sc-fill-right":          "&#xf05e;",
    "sc-fill-left":           "&#xf060;",
    "sc-profile":             "&#xf061;",
    "sc-search":              "&#xf062;",
    "sc-comment":             "&#xf063;",
    "sc-settings":            "&#xf064;",
    "sc-edit":                "&#xf065;",
    "sc-email-closed":        "&#xf066;",
    "sc-email-open":          "&#xf067;",
    "sc-logout":              "&#xf068;",
    "sc-heart":               "&#xf069;",
    "sc-phone":               "&#xf06a;",
    "sc-rss":                 "&#xf06b;",
    "sc-link":                "&#xf06c;",
    "sc-stop":                "&#xf06d;",
    "sc-mapmarker":           "&#xf06e;",
	"sc-gplus-fill":          "&#xf070;",    
    "sc-fb-fill":             "&#xf071;",
    "sc-twitter-fill":        "&#xf072;",
	"sc-cart":        		  "&#xf073;",
	"sc-twitter-nofill":	  "&#xf074;",
	"sc-zoomin":	 		  "&#xf075;",
	"sc-zoomout":	 		  "&#xf076;",
	"sc-listviewa":	 		  "&#xf077;",
	"sc-gridviewa":	 		  "&#xf078;",
	"sc-stopwatch":	 		  "&#xf079;",
	"sc-clock":	 		      "&#xf07a;",
	"sc-timer":	 		  	  "&#xf07b;",
	"sc-shop":	 			  "&#xf07c;",
	"sc-outline-btmright":	  "&#xf07d;",
	"sc-outline-btmleft":	  "&#xf07e;",
	"sc-outline-topright":	  "&#xf080;",
	"sc-outline-topleft":	  "&#xf081;",
	"sc-fill-btmright":	  	  "&#xf082;",
	"sc-fill-btmleft":	 	  "&#xf083;",
	"sc-fill-topright":		  "&#xf084;",
	"sc-fill-topleft":	  	  "&#xf085;",
	"sc-outline-minimise":    "&#xf086;",
	"sc-outline-maximise":    "&#xf087;",
	"sc-fill-minimise":  	  "&#xf088;",
	"sc-fill-maximise":  	  "&#xf089;",
	"sc-minimise":  		  "&#xf08a;",
	"sc-maximise":  		  "&#xf08b;",
	"sc-listviewb":  		  "&#xf08c;",
	"sc-gridviewb":  		  "&#xf08d;",
	"sc-downarrowb":  		  "&#xf08e;",
	"sc-rightarrow":	      "&#xf090;",
	"sc-leftarrow":		      "&#xf091;",
	"sc-uparrowb":  	      "&#xf092;",
	"sc-addressbook":  	      "&#xf093;",
	"sc-paperclipc":  		  "&#xf094;",
	"sc-thumbup":	  		  "&#xf095;",
	"sc-thumbdown":  		  "&#xf096;",
	"sc-bell":  			  "&#xf097;",
	"sc-flame":		  		  "&#xf098;",
	"sc-keyline-up":		  "&#xf099;",
	"sc-keyline-down":		  "&#xf09a;",
	"sc-keyline-right":		  "&#xf09b;",
	"sc-keyline-left":		  "&#xf09c;",
	"sc-menutoggle":	      "&#xf09d;",
	"sc-image":      		  "&#xf09e;",
	"sc-hairline-up":		  "&#xf0a0;",
	"sc-hairline-down":		  "&#xf0a1;",
	"sc-hairline-right":	  "&#xf0a2;",
	"sc-hairline-left":		  "&#xf0a3;",
	"sc-invarrow-up":	  	  "&#xf0a4;",
	"sc-invarrow-down":		  "&#xf0a5;",
	"sc-invarrow-right":	  "&#xf0a6;",
	"sc-invarrow-left":		  "&#xf0a7;",
	"sc-fb-nofill":			  "&#xf0a8;",
	"sc-4sq-fill":		  	  "&#xf0a9;",
	"sc-yt-fill":			  "&#xf0aa;",
	"sc-4sq-ifill":	 		  "&#xf0ab;",
	"sc-linkedin-fill":		  "&#xf0ac;",
	"sc-linkedin-nofill":	  "&#xf0ad;",
	"sc-padlock-open":		  "&#xf0ae;",
	"sc-padlock-closed":	  "&#xf100;",
	"sc-email-fill":		  "&#xf111;"
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
