
function login(name, pw){
jQuery.ajax({
         type: "POST",
         url: "http://54.69.150.79:8080/embrace2/login",
    data:{"username": name, "password": pw},
         contentType: "application/x-www-form-urlencoded",
         dataType: "json",
         success: function (data, status, jqXHR) {
             var a = document.createElement('a');
             window.ilmId = data.userId;
a.href = "#landingPage";
document.body.appendChild(a);
             a.click();
       
         },

         error: function (jqXHR, status) {
             // error handler
             alert("Invalid Login");
         }
});};

function propertySearch(){
jQuery.ajax({
         type: "POST",
         url: "http://54.69.150.79:8080/embrace2/property/search/",
    data: JSON.stringify({"propertyAddress": addActivityAddress.value, "isMobile": "Y"}),
         contentType: "application/json",
         dataType: "json",
         success: function (data, status, jqXHR) {
             propertySearchResult.length=0;
             var totalProperties = data.iTotalRecords;
             for(i = 0; i <totalProperties; i++){
                var opt = document.createElement("option");
                 opt.setAttribute('state', data.aaData[i].state);
                 opt.setAttribute('city', data.aaData[i].city);
                 opt.setAttribute('zip', data.aaData[i].zip);
                 opt.setAttribute('address', data.aaData[i].address);
                 opt.text = data.aaData[i].address + " "+ data.aaData[i].city +", "+data.aaData[i].state +" "+data.aaData[i].zip;
                 opt.value = data.aaData[i].propertyid;
                 $('#propertySearchResult').append(opt);
             }
             $('#propertySearchResultPopup').show();
         }

        
});};
function addActivity(addressID,action,comment){
    var hilId;
    var select = propertySearchResult;
    var selectedProp = select
    console.log(propertySearchResult.selectedIndex);
    console.log(propertySearchResult[propertySearchResult.selectedIndex]);
    jQuery.ajax({
            type:"POST",
            url:"http://54.69.150.79:8080/embrace2/hilOpportunityProperty/create",
            data: {"propertyId":addressID,"locationId":window.locationId},
            contentTYpe:"application/application/x-www-form-urlencoded",
            dataType:"json",
        success: function (data, status, jqXHR){
            console.log("sucess creat ilm");
            hilId = data.hop.hilOpportunityId;
            console.log("hil " + data.hop.hilOpportunityId);
        },
        error: function(status, jqXHR){
            alert("Error in creating activity");
        }
    });
    var today = new Date();
    var date = today.toISOString().substring(0, 10);
    jQuery.ajax({
        type:"POST",
        url:"http://54.69.150.79:8080/embrace2/event/create/",
        data: JSON.stringify({"eventDate":date, 
                              "objectId":hilId,
                              "object":"291",
                              "targetUserID":"sysur4",
                              "eventType":"Activity",
                              "orignatingUserId":"sysur3"}),
        dataType:"json",
        success: function(data,status,jqXHR){
            alert("Activity Created");
        },
        error: function(status,jqXHR){
            alert("Failed to create Activity");
        }
    });
    
};
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

function appendActivity() {
     var newDiv = document.createElement("div");
    console.log('appending activity');
        var tableBody = document.createElement('tbody');
            
            var info = propertySearchResult[propertySearchResult.selectedIndex];
            city = info.getAttribute('city');
            state = info.getAttribute("state");
            opportunity_status = activityAction[activityAction.selectedIndex].text;
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();

            if(dd<10) {
                dd='0'+dd
            } 

            if(mm<10) {
                mm='0'+mm
            } 

            today = mm+'/'+dd+'/'+yyyy;

            createdDate = today;
            propertyAddress = info.getAttribute('address');
            propertyZip = info.getAttribute('zip');;
            Comments = comment.value;
            var activityRow = document.createElement('tr');
            var data1 = document.createElement('td');
            data1.setAttribute('align', 'left');
            data1.style.border = 'none';
            var statusP = document.createElement('p');
            statusP.innerHTML = opportunity_status;
            var dateP = document.createElement('p');
            dateP.innerHTML = createdDate;
            var data2 = document.createElement('td');
            data2.setAttribute('align', 'right');
            data2.style.border = 'none';
            var addressP = document.createElement('p');
            addressP.innerHTML = propertyAddress;
            
            var cityStateZipP = document.createElement('p');
            cityStateZipP.innerHTML = city + ', ' + state + ' ' + propertyZip;
            data1.appendChild(statusP);
            data1.appendChild(dateP);
            data2.appendChild(addressP);
            data2.appendChild(cityStateZipP);
            activityRow.appendChild(data1);
            activityRow.appendChild(data2);
            
            commentsRow = document.createElement('tr');
            commentColumn = document.createElement('td');
            commentColumn.style.borderTop = 'none';
            commentColumn.setAttribute('colspan', '2');
            commentColumn.setAttribute('align', 'center');
            
            commentHeader = document.createElement('p');
            commentHeader.innerHTML = 'Comments: ';
            commentHeader.style.fontWeight = 'bold';
            
            comments = document.createElement('p');
            comments.innerHTML = Comments;
            
            commentColumn.appendChild(commentHeader);
            commentColumn.appendChild(comments);
            commentsRow.appendChild(commentColumn);
            
            tableBody.appendChild(activityRow);
            tableBody.appendChild(commentsRow);
            activityTable.appendChild(tableBody);
    
}


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