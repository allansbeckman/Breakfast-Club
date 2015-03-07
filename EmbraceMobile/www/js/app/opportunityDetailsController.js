 define(['app/opportunityDetailsModel', 'app/opportunityDetails'], function(opportunityDetailsModel, opportunityDetails){
 
     OpportunityDetailsP.addEventListener('click', function(){
        loadOpportunityDetails('45b5617d-c125-11e4-aaa2-28d2444bf619' ,'82f33e27-ce22-11e3-b4f7-000c29965b89');
         
     });
     
     detailsBody.addEventListener('click', function(){
        loadOpportunityDetails('45b5617d-c125-11e4-aaa2-28d2444bf619' ,'82f33e27-ce22-11e3-b4f7-000c29965b89');
         
     });
     
     
     function loadInvestorDetails(investorId) {
         jQuery.ajax({
         type: "GET",
         url: "http://54.69.150.79:8080/embrace2/opportunity/investor/details/" + investorId,
         contentType: "application/json",
         dataType: "json",
         success: function (data, status, jqXHR) {
            var opportunity = opportunityDetailsModel[0];
            opportunity.investorName = data.investorName;
            opportunity.investorPhoneNumber = data.investorPhone;
            opportunity.investorEmail = data.investorEmail;
            console.log('investor email' + opportunity.investorEmail);
         },

         error: function (jqXHR, status) {
             // error handler
             console.log('didn\'t work');
             console.log(status);
         }
});
         
     }
     
      function loadOpportunityDetails(locationId, investorId){
          opportunityDetailsModel.reset();
          jQuery.ajax({
         type: "POST",
         url:
"http://54.69.150.79:8080/embrace2/opportunity/activities/investor/" + investorId + "/location/" + locationId,
         contentType: "application/json",
         dataType: "json",
         success: function (data, status, jqXHR) {
             console.log('number of activities' + data.iTotalRecords);
            $.each(data.aaData, function(arrayIndex, activity){ 
                
                console.log('State' + activity.propertyState);
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
             
             loadInvestorDetails(investorId);
         },

         error: function (jqXHR, status) {
             // error handler
             console.log(status);
             alert(status);
         }});}
});