 define(['app/opportunityDetailsModel', 'app/opportunityDetails'], function(opportunityDetailsModel, opportunityDetails){
 
     OpportunityDetailsP.addEventListener('click', function(){
        loadOpportunityDetails(window.locationId);
        console.log('rendering with location id' + window.locationId);
     });
     
     detailsBody.addEventListener('click', function(){
        loadOpportunityDetails(window.locationId);
        console.log('rendering with location id' + window.locationId);
     });
     
      function loadOpportunityDetails(locationName){
          opportunityDetailsModel.reset();
          jQuery.ajax({
         type: "GET",
         url: "http://54.69.150.79:8080/embrace2/opportunity/investor/activities/" + window.locationId,
         contentType: "application/json",
         dataType: "json",
         success: function (data, status, jqXHR) {
             var activity1 = data.opportunityInvestorActivities;
            $.each(data.opportunityInvestorActivities, function(arrayIndex, activity){ 
                
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