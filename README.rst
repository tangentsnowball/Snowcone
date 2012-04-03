Snowcone  
========

A scalable, semantic @fontface loving icon set, made by Tangent Snowball.  

----------

Adding a new icon
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
5. Within the generator's options, choose *Optimal* (this should be the default), and check the *Agreement* checkbox.
6. Click * Add Fonts * and browse to the font you just exported.
7. Once it has uploaded, click *Download your kit*
8. Move these downloaded files to the */package/* directory (these will override the existing ones). 

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

Outstanding queries
***********

We need to change all glyphs to use PUA (private use area) characters:

http://www.quora.com/How-do-I-map-to-Unicode-characters-within-the-PUA-private-use-area-of-a-font-set-using-the-glyphs-app      