define(['app/InvestorCardModel', 'app/InvestorCard'], function(InvestorCardModel, InvestorCard) {



	function search(folName){
	jQuery.ajax({
			type: "POST",
			url: "http://54.69.150.79:8080/embrace2/opportunity/investor/search",
		data:{"folName": folName},
			contentType: "application/json",
			dataType: "json",
			success: function (data, status, jqXHR) {
				$.each(data.aaData, function(arrayID,investor) {
					InvestorCardModel.add(new InvestorCard({
						id: data.aaData.investorId,
						name: data.aaData.investorName,
						email: data.aaData.investorEmail,
						photo: data.aaData.investorPhoto,
						phone: data.aaData.investorPhone					
					}));
				});
			},
	
			error: function (jqXHR, status) {
				// error handler
				alert("Invalid Search");
			}
	});}
	
});
