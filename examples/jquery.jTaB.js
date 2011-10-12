/*!
 * jQuery jTaB: Dynamic Tab Index Management - v1.0pre - ??/??/2010
 * 
 * Copyright (c) 2010 Ken Wheeler / Jon Sykes
 * Dual licensed under the MIT and GPL licenses.
 * Free as in Bacon
 
************************************************************************************
*  
*  jTaB dynamic tab index generation plugin
*  
*  JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ     .             .               
*  JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ  ..       .         ..  .      ...
*  JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ.      ..  .  .   .  . . ..      ..
*  ....    .JJJJJJI  . .. .  .    ..               .JJJJJJJJJJJJJJJJJJJJ=.   .  . .
*  .      ..JJJJJJI . ..   .               ..       JJJJJJJJJJJJJJJJJJJJJJJ.       
*   .. . . .JJJJJJI   .JJJJJJJJJJJJJJJJJJJJJJ$ . .. JJJJJJJJJJJJJJJJJJJJJJJJ7.     
*      .  ..JJJJJJI    JJJJJJJJJJJJJJJJJJJJJJJJ     JJJJJJJJJJJJJJJJJJJJJJJJJ.     
*  ... .   .JJJJJJI .  JJJJJJJJJJJJJJJJJJJJJJJJJ    JJJJJJJ.  . .    :JJJJJJJJ     
*    .     .JJJJJJI ..            ..     JJJJJJJ    JJJJJJJ    ..... .JJJJJJJJ   ..
*  .      ..JJJJJJI         .            IJJJJJJ..  JJJJJJJ.       .  JJJJJJJ,     
*         ..JJJJJJI. .   . ............. IJJJJJJ. . JJJJJJJ.,,,,,,,,?JJJJJJJ+. ....
*         ..JJJJJJI    .NJJJJJJJJJJJJJJJ.IJJJJJJ    JJJJJJJ OJJJJJJJJJJJJJJ....   .
*     . .. .JJJJJJI.. $JJJJJJJJJJJJJJJJJ IJJJJJJ..  JJJJJJJ.OJJJJJJJJJJJJJJJ?  .  .
*  .   .   .JJJJJJI  .JJJJJJJJJJJJJJJJJJ.IJJJJJJ.   JJJJJJJ.OJJJJJJJJJJJJJJJJJ     
*  ..  . ...JJJJJJI  JJJJJJJJ.  . .  ....IJJJJJJ..  JJJJJJJ. ....    .$JJJJJJJJ.. .
*   .. .   .JJJJJJI .JJJJJJZ  ..  .     .IJJJJJJ.   JJJJJJJ.    ..   . .JJJJJJJD.. 
*      .   .JJJJJJI ,JJJJJJ.   .   .    .IJJJJJJ.   JJJJJJJ             JJJJJJJJ.  
*      .   .JJJJJJI .JJJJJJJ  .         .IJJJJJJ.   JJJJJJJ            .JJJJJJJ8.  
*   .     ..JJJJJJI .JJJJJJJJ..          IJJJJJJ.   JJJJJJJ           JJJJJJJJJ .. 
*    .. .  .JJJJJJI ..JJJJJJJJJJJJJJJJJJJJJJJJJJ.   JJJJJJJJJJJJJJJJJJJJJJJJJJJ.   
*     .    .JJJJJJI   IJJJJJJJJJJJJJJJJJJJJJJJJJ..  JJJJJJJJJJJJJJJJJJJJJJJJJJ.    
*  J . .   .JJJJJJI . ..ZJJJJJJJJJJJJJJJJJJJJJJJ.   JJJJJJJJJJJJJJJJJJJJJJJJ. .    
*  
*  
***********************************************************************************/

// Script: jQuery jTaB: Dynamic Tab Index Management
//
// *Version: 1.0pre, Last updated: ??/??/2010*
// 
// GitHub       - http://github.com/kdubbicles/jTab/
// Source       - http://github.com/kdubbicles/jTab/raw/master/jquery.ba-XXX.js
// (Minified)   - http://github.com/kdubbicles/jTab/raw/master/jquery.ba-XXX.min.js (X.Xkb)
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// jTaB - http://github.com/kdubbicles/jTab/examples/XXX/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.4.2, 1.3.2
// Browsers Tested - Internet Explorer 6-8, Firefox 3-3.6, Safari 3-4, Chrome 3-5, Opera 9.6-10.5.
// Unit Tests      - http://github.com/kdubbicles/jTab/unit
// 
// About: Release History
// 
// 1.0pre - (??/??/2010) Pre-Initial release

var jTab = (function($) {
  
      '$:nomunge'; // Used by YUI compressor.
  
      return {
        
        init: function(jsonData) {
          
          for(i=0;i<jsonData.tabElements.length;i++) {
            
            $(jsonData.tabElements[i].elementId).bind('keydown', { prevElement: jsonData.tabElements[i].prevElementId, nextElement:  jsonData.tabElements[i].nextElementId} ,function(e) {
              	                
              if(e.which==9 && e.shiftKey) {
                
                e.preventDefault();
                	                
                $(e.data.prevElement).focus();
                    
              } else if (e.which==9) {
                
                e.preventDefault();
                	                  
                $(e.data.nextElement).focus();
                
              }
              
            });
            
          }
          
        }
        
      }
      
})(jQuery);