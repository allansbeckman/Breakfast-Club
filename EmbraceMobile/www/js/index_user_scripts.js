(function()
{
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
    
    
        /* button  Edit */
    $(document).on("click", ".uib_w_39", function(evt)
    {
         activate_subpage("#page_68_98"); 
    });
    
        /* listitem  Home 1 */
    $(document).on("click", ".uib_w_41", function(evt)
    {
         activate_subpage("#ilm_opportunity_pop_up"); 
    });
    
        /* listitem  Home 2 */
    $(document).on("click", ".uib_w_42", function(evt)
    {
         activate_subpage("#ilm_opportunity_pop_up"); 
    });
    
        /* listitem  Home 3 */
    $(document).on("click", ".uib_w_43", function(evt)
    {
         activate_subpage("#ilm_opportunity_pop_up"); 
    });
    
        /* button  ILM */
    $(document).on("click", ".uib_w_58", function(evt)
    {
         activate_subpage("#page_68_98"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
