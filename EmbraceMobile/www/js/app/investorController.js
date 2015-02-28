 define(['app/investorModel', 'app/Investor'], function(investorModel, Investor){
 
     investorsP.addEventListener('click', function(){
         investorlist.innerHTML="";
        loadInvestors();
     });
     
      function loadInvestors(){ jQuery.ajax({
         type: "GET",
         url: "http://54.69.150.79:8080/embrace2/opportunity/investor/details/bp",
         contentType: "application/json",
         dataType: "json",
         success: function (data, status, jqXHR) {
            investorModel.add(new Investor({
           name: data.investorName,
           email: data.investorEmail,
           phone: data.investorPhone,
           goal: data.investmentGoal,
<<<<<<< HEAD
           locations: data.investmentLocations,
            locationId: data.locationId
=======
           locations: data.investmentLocations
>>>>>>> parent of f8bc423... Updated Investor Screen
       }));
         },

         error: function (jqXHR, status) {
             // error handler
            alert("failure");
             alert(status);
         }
});}
    
    
    
});