define([],function(){
        activityPropertySearchButton.addEventListener('click',function(){
            searchProperty(propertyActivity.value);
        });
       /*activitySaveButton.addEventListener('click',function(){
            addActivity(propertyActivity, activityAction, activityComment );
        });*/


    function searchProperty(propertyWords){
        url = "htpp://54.69.150.79:8080/embrace2/property/search";
        jQuery.ajax({
            type:"POST",
            url: url,
            contentType:"application/json",
            dataType: "json",
            data:{"propertyAddress":propertyWords,"isMobile":"Y"},
            success: function(json){
                $.each(json,function(i,value){
                    $("@propertySearchResult").append($('<option>').text(value).attr('value',value));});
                $("#propertySearchResultPopup").show();
            },
            error: function(jqXHR, status){
                alert("invalid property address");}    
        });
    }
    
    }
});