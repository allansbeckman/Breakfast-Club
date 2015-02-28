 define(['app/opportunityDetailsModel', 'app/opportunityDetails'], function(opportunityDetailsModel, opportunityDetails){
 
     OpportunityDetailsP.addEventListener('click', function(){
         console.log("clicked");
        loadOpportunityDetails("02017a93-1063-11e4-9bfb-0255bff79e57");
     });
     
      function loadOpportunityDetails(locationName){ jQuery.ajax({
         type: "GET",
         url: "http://54.69.150.79:8080/embrace2/opportunity/investor/activities/bp",
         contentType: "application/json",
         dataType: "json",
         success: function (data, status, jqXHR) {
             var activity1 = data.opportunityInvestorActivities;
            $.each(data.opportunityInvestorActivities, function(arrayIndex, activity){ 
                console.log("model " + arrayIndex);
             opportunityDetailsModel.add(new opportunityDetails({
                 
                 opportunityStatus: activity.opportunityStatus,
                 createdDate: activity.createdDate,
                 propertyAddress: activity.propertyAddress,
                 propertyState: activity.propertyState,
                 propertyZip: activity.propertyZip,
                 city: activity.propertyCity,
                 comments: activity.comments
             }));
       });
         },

         error: function (jqXHR, status) {
             // error handler
             console.log(status);
             alert(status);
         }
});}
    
    
    
});