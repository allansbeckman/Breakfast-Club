(function()
{
     $.ui.useOSThemes=false;
    
$(window).bind('setup', function() {
   console.log("in");
    $.ui.useOSThemes=false;
});
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
     /* button  Button1 */
    $(document).on("click", ".uib_w_10", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_16"));  
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_18", function(evt)
    {
         activate_subpage("#page_70_42"); 
    });
    
        /* button  Send */
    $(document).on("click", ".uib_w_27", function(evt)
    {
      alert("message sent");
    });
    
        /* button  Login */
    $(document).on("click", ".uib_w_4", function(evt)
    {
        login(username.value, pass.value);
       // window.location="#landingPage";
        //  $.ui.loadContent("#landingPage", false, false, "fade");
        
    });
    
        /* button  Login */
    $(document).on("click", ".uib_w_4", function(evt)
    {
        /* your code goes here */ 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
