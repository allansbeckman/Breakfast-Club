define(['app/opportunityDetailsModel'], function(opportunityDetailsModel){


    
    function renderDetailsList(){
        console.log('render opp details');
        
        //var activityTable = document.createElement('table');
        activityTable.innerHTML = "";
        
        activityTable.setAttribute('border', '1px');
        activityTable.setAttribute('width', '100%');
        activityTable.style.borderCollapse = "collapse";
        var newDiv = document.createElement("div");
        var tableBody = document.createElement('tbody');
        
        opportunityDetailsModel.each(function(opportunity) {
            city = opportunity.get('city');
            state = opportunity.get('propertyState');
            opportunity_status = opportunity.get('opportunityStatus');
            timeStamp = opportunity.get('createdDate');
            var dt = new Date(timeStamp);

            createdDate = (dt.getMonth() + 1) + "/" + dt.getDate() + "/" +  dt.getFullYear();
            //createdDate = getdhm(timeStamp);
            propertyAddress = opportunity.get('propertyAddress');
            propertyZip = opportunity.get('propertyZip');
            Comments = opportunity.get('comments');
            image = opportunity.image;
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
        });
        activityTable.appendChild(tableBody);
        newDiv.appendChild(activityTable);
        while(oppDetailsInfo.firstChild){
            oppDetailsInfo.removeChild(oppDetailsInfo.firstChild);
        }
        oppDetailsInfo.appendChild(newDiv);
    }
    
    opportunityDetailsModel.on('add', renderDetailsList);
    opportunityDetailsModel.on('change', renderDetailsList);
    opportunityDetailsModel.on('remove', renderDetailsList); 
});