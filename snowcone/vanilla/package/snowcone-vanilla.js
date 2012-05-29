// Script to ensure Snowcone will work for legacy browsers, that don't support the pseudo class

function addicons(){
  //Create object with list of icons
  var icons = {
    "sc-gplus_fill":          "\f021",
    "sc-profile_blacklist":   "\f022",
    "sc-tag":                 "\f023",
    "sc-tangentsnowball":     "\f024",
    "sc-refresh":             "\f025",
    "sc-upload":              "\f026",
    "sc-download":            "\f027",
    "sc-bookmark":            "\f028",
    "sc-flag":                "\f029",
    "sc-doc_default":         "\f02a",
    "sc-info":                "\f02b",
    "sc-calendar":            "\f02c",
    "sc-print":               "\f02d",
    "sc-home":                "\f02e",
    "sc-view":                "\f02f",
    "sc-sync":                "\f030",
    "sc-hcard":               "\f031",
    "sc-shop_bag":            "\f032",
    "sc-pants":               "\f033",
    "sc-pants_granny":        "\f034",
    "sc-pants_bikini":        "\f035",
    "sc-pants_speedo":        "\f036",
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
    "sc-deleteright":         "\f042",
    "sc-deleteleft":          "\f043",
    "sc-folder":              "\f044",
    "sc-slider":              "\f045",
    "sc-dot":                 "\f046",
    "sc-sort":                "\f047",
    "sc-arrowup":             "\f048",
    "sc-arrowdown":           "\f049",
    "sc-filter":              "\f04a",
    "sc-info_circle":         "\f04b",
    "sc-delivery":            "\f04c",
    "sc-payment":             "\f04d",
    "sc-help_circle":         "\f04e",
    "sc-flag_tilt":           "\f050",
    "sc-book":                "\f051",
    "sc-logout_mac":          "\f052",

    "sc-alert":               "\f053",
    "sc-cross":               "\f054",
    "sc-expand":              "\f055",
    "sc-tick":                "\f056",
    "sc-contract":            "\f057",
    "sc-outline_down":        "\f058",
    "sc-outline_up":          "\f059",
    "sc-outline_right":       "\f05a",
    "sc-outline_left":        "\f05b",
    "sc-fill_down":           "\f05c",
    "sc-fill_top":            "\f05d",
    "sc-fill_right":          "\f05e",
    "sc-fill_left":           "\f060",
    "sc-profile":             "\f061",
    "sc-search":              "\f062",
    "sc-comment":             "\f063",
    "sc-settings":            "\f064",
    "sc-edit":                "\f065",
    "sc-email_closed":        "\f066",
    "sc-email_open":          "\f067",
    "sc-logout":              "\f068",
    "sc-heart":               "\f069",
    "sc-phone":               "\f06a",
    "sc-rss":                 "\f06b",
    "sc-link":                "\f06c",
    "sc-stop":                "\f06d",
    "sc-mapmarker":           "\f06e",
    "sc-favourite":           "\f070",
    "sc-fb_fill":             "\f071",
    "sc-twitter_fill":        "\f072",
	"sc-cart":        		  "\f073",
	"sc-twitter_nofill":	  "\f074",
	"sc-zoomin":	 		  "\f075",
	"sc-zoomout":	 		  "\f076",
	"sc-listview":	 		  "\f077",
	"sc-gridview":	 		  "\f078",
	"sc-stopwatch":	 		  "\f079",
	"sc-clock":	 		      "\f07a",
	"sc-timer":	 		  	  "\f07b",
	"sc-shop":	 			  "\f07c"
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
