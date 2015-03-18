/*
  Controller for Investor Profile
*/
 define(['app/investorModel', 'app/Investor'], function(investorModel, Investor){
 
     investorsP.addEventListener('click', function(){
        loadInvestor(window.clickedInvestor);
        searchValue.value = '';
        //investorList1.innerHTML = "";
     });
     
      function loadInvestor(id){ 
          url = "http://54.69.150.79:8080/embrace2/opportunity/investor/details/" + id;
          jQuery.ajax({
         type: "GET",
         url: url,
         contentType: "application/json",
         dataType: "json",
         success: function (data, status, jqXHR) {
                 console.log(data);
            investorModel.add(new Investor({
            id: id,
           name: data.investorName,
           email: data.investorEmail,
           phone: data.investorPhone,
           goal: data.investmentGoal,
           locations: data.investmentLocations,
            locationId: data.locationId,
           investmentAmount: "$" + data.investmentAmountTo,
            priceRange: "$" + data.priceRangeFrom + "-$" + data.priceRangeTo,
                buyingTimeFrame: data.buyingTimeframe,
                preApproved: data.preQualified,
                capRateRange: data.capRateFrom + "-" + data.capRateTo + "%",
                comments: data.saleComments,
                location: data.interestedLocations,
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