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
      //alert("message sent");
        jQuery.ajax({
        type:"POST",
        url: "http://54.69.150.79:8080/embrace2/messages/createMessage/5871ce20-c11c-11e4-aaa2-28d2444bf619/Opportunity",
        data:                {"messageType":"Email","mailToRecipients":"abc@gmail.com","subject":"Test Email", "messageText":"This is an Testing Email.", "mailCcRecipients":"singlau@homeunion.com"},
        contentType:"application/json",
        dataType:"json",
        success: function (data, status, jqXHR) {
            console.log(data);
            var link = document.createElement('a');
            link.href = '#OppDetails';
            Email.appendChild(link);
            link.click(); 
        },
    error: function (jqXHR, status) {
             // error handler
            var link = document.createElement('a');
            link.href = '#OppDetails';
            Email.appendChild(link);
            link.click(); 
}
    })});
    
        /* button  Login */
    $(document).on("click", ".uib_w_4", function(evt)
    {
        login(username.value, pass.value);
    });
    
        /* button  Login */
    $(document).on("click", ".uib_w_4", function(evt)
    {
        /* your code goes here */ 
    });
     
            /* button  #searchButton */
    $(document).on("click", "#searchButton", function(evt)
    {
        searchInv();
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
