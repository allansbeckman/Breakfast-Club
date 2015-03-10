
define([], funciton(){
       activitySaveButton.addEventListener('click',function(){
        addActivity(propertyActivity,activityAction,activityComment);
    });

    function addActivity(property, action, comments){
        url = "js/app/activitylist.json";
        jQuery.ajax({
            type:"POST",
            url: url,
            contentType: "application/json",
            dataType: "json",
            data:{"property": property.value, "action": action.value,comments.value},
            success:function(data, status, jqXHR){
                    console.log(data);
                },
            error: function (jqXhr, status){
                console.log('didn\'t work');
                console.log(status);
            }
        });
    };
});