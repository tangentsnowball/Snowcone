Snowcone v2  
========

A scalable, semantic @fontface loving icon set, made by Tangent Snowball. 

**NEW:** Snowcone now uses PUA (Private Use Area) glyphs so no accessibility or text-transform worries (these come from using regular letters).

----------

Adding a new icon to the set
======

**Please note: These instructions have initially been made for our team but give it a go repo cloners and feel free to give feedback on their clarity!**

You'll need 
***********

- A copy of *Glyphs/Glyphs lite* (or Fontforge if you're hardcore, but we'll assume you've got Glyphs).
- *Adobe Illustrator* or a similar vector-based application (instructions assume you have Illustrator).
- Font-squirrel's online *webfont generator* - http://www.fontsquirrel.com/fontface/generator

Step 1: Create your icon as a vector path
*******************************

1. Download the whole Snowcone repo using the *ZIP download* button.
2. Open *src/snowcone.ai* in Illustrator.
3. Create your new glyph in the same way as the existing ones have been made (keeping within the guides).
4. Ensure glyph is a compound path.
5. Copy the glyph to your Clipboard.

Step 2: Add your new glyph to the .glyphs file
***********************

1. Open *snowcone.glyphs* in glyphs app.
2. Double-click an empty character to edit it.
3. From the little toolbar at the bottom of the screen, change the glyph's width to *800* (as our icons are square).
4. Paste in the glyph you created in Illustrator.   
5. If Glyphs asks you to *Correct Bounds* do so. It means it will paste it within the glyph area and not way out there on the pasteboard.

Step 3: Export your glyphs file as a font, then generate a webfont from it
***********************                     

1. **Optional:** If you want to state the webfont has a new version number, you can edit this in *File > Font Info.*
2. From Glyph's top menu, select *File > Export*.
3. Export it to the */src/* folder (to override Snowcone-Regular.otf).
4. Visit http://www.fontsquirrel.com/fontface/generator 
5. Click * Add Fonts * upload the config file (*/src/generator_config.txt*) to fontsquirrel to get the right settings. 
6. Click * Add Fonts * and upload the source font file (*/src/Snowcone-Regular.otf*)
7. Once it has uploaded, click *Download your kit*
8. Unzip these downloaded files and move them to the */package/* directory (these will override the existing ones).  

Step 4: Add your new glyph(s) to Snowcone's CSS/JS files
***********************                                 

1. Open *package/snowcone.css*.
2. Add a new line to the set of rules titled **[=2:Set classes to trigger icons]**.
3. For this line, give your glyph a style name and add the character it is attached to, to the *content* declaration.     
4. Update *snowcone.js* to account for this change.   

Adding Snowcone to a project
======

1. Add the the neccesary dependancies to your page, as shown in the barebones demo *(demo/index.html or http://tangentsnowball.github.com/Snowcone/demo/index.html )* 
 
	It's worth noting that you don't have to include the css file separately, or have the font files in a specific place. You can roll the css styles into your main stylesheet, and you can store the font files where you choose: just change the paths in the @font-face rule. 
	
2. Add the snowcone class stack to an element like so:

::
	<a class="snowcone sc-twitter">Join me on Twitter</a>
	
The first class sets the font-family as snowcone, and the second class sets the icon. For a full list of icons you can use, check *package/snowcone.css*

----------

Wishlist
=====

Icons to do
***********

- external link
- document types (music, movie etc...)
- calendar
- add profile icon
- printer
- zoom in
- map
- lighnening bolt
- info tooltip
- download
- upload 

Icons to improve
***********

- Link icon 