
function login(name, pw){
jQuery.ajax({
         type: "POST",
         url: "http://54.69.150.79:8080/embrace2/login",
    data:{"username": name, "password": pw},
         contentType: "application/x-www-form-urlencoded",
         dataType: "json",
         success: function (data, status, jqXHR) {
             var a = document.createElement('a');
a.href = "#landingPage";
document.body.appendChild(a);
             a.click();
       
         },

         error: function (jqXHR, status) {
             // error handler
             alert("Invalid Login");
         }
});};
function postActivity(){
jQuery.ajax({
        type: "POST",
        url: "",
    data:{"":,"":,"":},
        contentType: "application/x-www-form-urlencoded",
        dataType: "json",
        success: function(data,status, jqXHR){
            
        },
        error: function(jqXHR, status){
            alert("Activity Failed to Post");
        }
});};
function searchProperty(){
jQuery.ajax({
        type: "",
        url:"http://54.69.150.79:8080/embrace/propertysearch",
    data:{"":""},
        contentType: "application/x-www-form-urlencoded",
        dataType:"json",
        success:function(data,status,jqXhr){
        },
});};