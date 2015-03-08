
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
          
        var p1 = document.createElement("p");
        p1.setAttribute('class','investorDetailsPar');
        p1.innerHTML = investor.investorName;
        
        var p2 = document.createElement("p");
        p2.setAttribute('class','investorDetailsPar');
        p2.innerHTML = investor.investorPhone;
        
        var p3 = document.createElement("p");
        p3.setAttribute('class','investorDetailsPar');
       p3.innerHTML = investor.investorEmail;
    
    var hr = document.createElement("hr");
    hr.style.borderTop = "dotted 3px";
       
    td2.appendChild(p1);
        td2.appendChild(p2);
        td2.appendChild(p3);
        tr.appendChild(td2);
        tbody.appendChild(tr);
        table.appendChild(tbody);
        newDiv.appendChild(table);
        newDiv.appendChild(hr);
    
    investorList1.appendChild(newDiv);
    
};



function searchInv(){
    console.log("searching from investors");
 /*var test = $.getJSON("success.json", function(data){ 
    $.each(data.aaData, function(arrayID,investor){
                    renderInvestorInvLink(investor);
					
				});
 
 })*/
    console.log("search value: " + searchValue.value);
    folName = searchValue.value;
    investorList1.innerHTML="";
	jQuery.ajax({
			type: "POST",
			url: "http://54.69.150.79:8080/embrace2/opportunity/investor/search",
		data: JSON.stringify({"folName": searchValue.value}),
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
 var test = $.getJSON("success.json", function(data){ 
    $.each(data.aaData, function(arrayID,investor){
                    renderInvestorOppLink(investor);
					
				});
 
 })
    console.log("inner: " + searchValue.value);
    folName = searchValue.value;
    investorList1.innerHTML="";
	/*jQuery.ajax({
			type: "POST",
			url: "http://54.69.150.79:8080/embrace2/opportunity/investor/search",
		data:{"folName": "folName"},
			contentType: "text/plain",
			dataType: "json",
			success: function (data, status, jqXHR) {
				$.each(data.aaData, function(arrayID,investor){
                    renderInvestor(investor);
					
				});
			},
	
			error: function (jqXHR, status) {
				// error handler
				alert("Invalid Search");
			}
	});*/
};