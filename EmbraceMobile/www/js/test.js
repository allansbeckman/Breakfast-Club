
function login(name, pw){
jQuery.ajax({
         type: "POST",
         url: "http://54.69.150.79:8080/embrace2/login",
    data:{"username": name, "password": pw},
         contentType: "application/x-www-form-urlencoded",
         dataType: "json",
         success: function (data, status, jqXHR) {
             var a = document.createElement('a');
a.href = "#landingPage";
document.body.appendChild(a);
             a.click();
       
         },

         error: function (jqXHR, status) {
             // error handler
             alert("Invalid Login");
         }
});};

<<<<<<< Updated upstream
=======
function propertySearch(address){
jQuery.ajax({
         type: "POST",
         url: "http://54.69.150.79:8080/embrace2/property/search/",
    data:{"propertyAddress": "471", "isMobile": "Y"},
         contentType: "application/json",
         dataType: "json",
         success: function (data, status, jqXHR) {
             alert("success");
         },

         error: function (jqXHR, status) {
             alert("Invalid Login");
         }
});};

function loadActivityInfo(name, email, phone) {
    activityInvName.innerHTML = name;
    activityInvEmail.innerHTML = email;
    activityInvPhone.innerHTML = phone;
}

function renderInvestorInvLink(investor) {
    
     var newDiv = document.createElement("div");
        
        var table = document.createElement("table");
        table.setAttribute('class','investorDetailsTable');
     
        var tbody = document.createElement("tbody");
        
        var tr = document.createElement("tr");
        
        var td1 = document.createElement("td");
        td1.setAttribute('class','investorDetailsTDCenter');
        
        var img = document.createElement("img");
        img.src = "images/Investors.png";
        img.setAttribute('class','investorDetailsImg48');
     
       
        td1.appendChild(img);
        tr.appendChild(td1);
        var td2 = document.createElement("td");
        td2.setAttribute('class','investorDetailsTDLeft');
          
     var link = document.createElement('a');
    link.setAttribute('href', '#InvestorProfile');
        var p1 = document.createElement("p");
        p1.setAttribute('class','investorDetailsPar');
    p1.setAttribute('id',investor.investorId);
        p1.setAttribute('onclick', 'setInvestor(this)');
        p1.innerHTML = investor.investorName;
    
    //get investor with get call and get their first location id
        
        var p2 = document.createElement("p");
        p2.setAttribute('class','investorDetailsPar');
        p2.innerHTML = investor.investorPhone;
        
        var p3 = document.createElement("p");
        p3.setAttribute('class','investorDetailsPar');
       p3.innerHTML = investor.investorEmail;
    
    var hr = document.createElement("hr");
    hr.style.borderTop = "dotted 3px";
    
       link.appendChild(p1);
    td2.appendChild(link);
        td2.appendChild(p2);
        td2.appendChild(p3);
        tr.appendChild(td2);
        tbody.appendChild(tr);
        table.appendChild(tbody);
        newDiv.appendChild(table);
        newDiv.appendChild(hr);
    
    investorList1.appendChild(newDiv);
    
};

function renderInvestorOppLink(investor) {
    console.log("render inv opp link");
    window.locationId = investor.locationId;
    
      var newDiv = document.createElement("div");
        
        var table = document.createElement("table");
        table.setAttribute('class','investorDetailsTable');
     
        var tbody = document.createElement("tbody");
        
        var tr = document.createElement("tr");
        
        var td1 = document.createElement("td");
        td1.setAttribute('class','investorDetailsTDCenter');
        
        var img = document.createElement("img");
        img.src = "images/Investors.png";
        img.setAttribute('class','investorDetailsImg48');
     
       
        td1.appendChild(img);
        tr.appendChild(td1);
        var td2 = document.createElement("td");
        td2.setAttribute('class','investorDetailsTDLeft');
          
     var link = document.createElement('a');
    link.setAttribute('href', '#OppDetails');
        var p1 = document.createElement("p");
        p1.setAttribute('class','investorDetailsPar');
    p1.setAttribute('id',investor.investorId);
        p1.setAttribute('onclick', 'setInvestor(this)');
        p1.innerHTML = investor.investorName;
    
    //get investor with get call and get their first location id
        
        var p2 = document.createElement("p");
        p2.setAttribute('class','investorDetailsPar');
        p2.innerHTML = investor.investorPhone;
        
        var p3 = document.createElement("p");
        p3.setAttribute('class','investorDetailsPar');
       p3.innerHTML = investor.investorEmail;
    
    var hr = document.createElement("hr");
    hr.style.borderTop = "dotted 3px";
    
       link.appendChild(p1);
    td2.appendChild(link);
        td2.appendChild(p2);
        td2.appendChild(p3);
        tr.appendChild(td2);
        tbody.appendChild(tr);
        table.appendChild(tbody);
        newDiv.appendChild(table);
        newDiv.appendChild(hr);
    
    investorList2.appendChild(newDiv);
    
    
};



function searchInv(){
    console.log("searching from investors");
    console.log("search value: " + searchValue.value);
    folName = searchValue.value;
    investorList1.innerHTML="";
	jQuery.ajax({
			type: "POST",
			url: "http://54.69.150.79:8080/embrace2/opportunity/investor/search",
		data: JSON.stringify({"folName": searchValue.value, "ilmId": "106de0af-5ef9-11e4-9512-02d9f1cc69ce"}),
			contentType: "application/json",
			dataType: "json",
			success: function (data, status, jqXHR) {
				$.each(data.aaData, function(arrayID,investor){
                    renderInvestorInvLink(investor);
					
				});
			},
	
			error: function (jqXHR, status) {
				alert("Invalid Search");
			}
	});
};


function searchOpp(){
    console.log("searching from opportunities");
    console.log("search value: " + searchOppInvValue.value);
    folName = searchOppInvValue.value;
    investorList2.innerHTML="";
	jQuery.ajax({
			type: "POST",
			url: "http://54.69.150.79:8080/embrace2/opportunity/investor/search",
		data: JSON.stringify({ "folName": searchOppInvValue.value, "ilmId": "106de0af-5ef9-11e4-9512-02d9f1cc69ce"}),
			contentType: "application/json",
			dataType: "json",
			success: function (data, status, jqXHR) {
                console.log("success");
				$.each(data.aaData, function(arrayID,investor){
                    renderInvestorOppLink(investor);
				});
			},
	
			error: function (jqXHR, status) {
				alert("Invalid Search");
			}
	});
};
>>>>>>> Stashed changes
