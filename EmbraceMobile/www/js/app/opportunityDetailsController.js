 define(['app/opportunityDetailsModel', 'app/opportunityDetails'], function(opportunityDetailsModel, opportunityDetails){
     
     investorList2.addEventListener('click', function(){
        loadOpportunityDetails('45b5617d-c125-11e4-aaa2-28d2444bf619' ,'82f33e27-ce22-11e3-b4f7-000c29965b89');
         loadInvestorDetails('82f33e27-ce22-11e3-b4f7-000c29965b89');
     });
     
     detailsBody.addEventListener('click', function(){
        loadOpportunityDetails('45b5617d-c125-11e4-aaa2-28d2444bf619' ,'82f33e27-ce22-11e3-b4f7-000c29965b89');
        loadInvestorDetails('82f33e27-ce22-11e3-b4f7-000c29965b89'); 
     });
     
     
     function loadInvestorDetails(investorId) {
         console.log('load investor details called');
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
             console.log('didn\'t work');
             console.log(status);
         }
});
         console.log("out of get call");
         
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
             alert(status);
         }});}
});