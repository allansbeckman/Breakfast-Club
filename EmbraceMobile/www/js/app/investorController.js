 define(['app/investorModel', 'app/Investor'], function(investorModel, Investor){
 
     investorsP.addEventListener('click', function(){
         investorCard.innerHTML="";
         investorSolutionSpecialist.innerHTML="";
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
           locations: data.investmentLocations,
           investmentAmount: "$50,000",
            priceRange: "$100,000-$200,000",
                buyingTimeFrame: "Soon, but not urgent",
                preApproved: "Yes",
                capRateRange: "10-15%",
                comments: "Investor is interested in 3BR properties with low rehav cost. Houston is preferred location.",
                location: "Cleveland, Houston",
                specialist: "Jim Moore"
       }));
         },

         error: function (jqXHR, status) {
             // error handler
            alert("failure");
             alert(status);
         }
});}
    
    
    
});