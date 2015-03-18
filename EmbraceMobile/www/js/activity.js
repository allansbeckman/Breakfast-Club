/*
    Appends saved activity to my opportunity details.
*/
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
    
};

/*
    Clears activity information when loading page.
*/
function clearActivity(){
    addActivityAddress.value = "";
    propertySearchResult.length = 0;
    comment.value = "";
    activityAction.selectedIndex = 0;
};

/*
    Loads investor info for add activity page.
*/
function loadActivityInfo(name, email, phone) {
    activityInvName.innerHTML = name;
    activityInvEmail.innerHTML = email;
    activityInvPhone.innerHTML = phone;
};

/*
    Property Search Function
    Uses Street Address To grab matching properties.
    Returns as a list of properties.
*/
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