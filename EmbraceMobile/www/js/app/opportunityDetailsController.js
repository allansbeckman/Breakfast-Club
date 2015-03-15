 define(['app/opportunityDetailsModel', 'app/opportunityDetails'], function(opportunityDetailsModel, opportunityDetails){
     
     investorList2.addEventListener('click', function(){
        loadOpportunityDetails(window.clickedInvestor ,window.locationId);
         loadInvestorDetails(window.clickedInvestor);
     });
     
     detailsBody.addEventListener('click', function(){
        loadOpportunityDetails(window.clickedInvestor ,window.locationId);
        loadInvestorDetails(window.clickedInvestor); 
     });
     
     
     function loadInvestorDetails(investorId) {
         jQuery.ajax({
         type: "GET",
         url: "http://54.69.150.79:8080/embrace2/opportunity/investor/details/" + investorId,
         contentType: "application/json",
         dataType: "json",
         success: function (data, status, jqXHR) {
             
            oppDetailsName.innerHTML = data.investorName;
            oppDetailsNumber.innerHTML = data.investorPhone;
            investOppEmail.innerHTML = data.investorEmail;
         },
         error: function (jqXHR, status){
         }
});
         
     }
     
      function loadOpportunityDetails(investorId, locationId){
          opportunityDetailsModel.reset();
          jQuery.ajax({
         type: "POST",
         url:
"http://54.69.150.79:8080/embrace2/opportunity/activities/investor/" + investorId + "/location/" + locationId,
         contentType: "application/json",
         dataType: "json",
         success: function (data, status, jqXHR) {
             
            $.each(data.aaData, function(arrayIndex, activity){ 
             opportunityDetailsModel.add(new opportunityDetails({
                 opportunityStatus: activity.activityType,
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
         }});}
});