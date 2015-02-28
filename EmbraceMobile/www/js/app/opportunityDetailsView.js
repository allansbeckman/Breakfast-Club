define(['app/opportunityDetailsModel'], function(opportunityDetailsModel){
        
    
    function renderDetailsList(){
        oppDetailsInfo.innerHTML = "";
        console.log("rendering");
        console.log(opportunityDetailsModel);
        opportunityDetails = opportunityDetailsModel.where({city: "Spring"})[0];
        
        city = opportunityDetails.get('city');
        state = opportunityDetails.get('propertyState');
        opportunity_status = opportunityDetails.get('opportunityStatus');
        createdDate = opportunityDetails.get('createdDate');
        propertyAddress = opportunityDetails.get('propertyAddress');
        propertyZip = opportunityDetails.get('propertyZip');
        comments = opportunityDetails.get('comments');
        
        image = opportunityDetails.image;
      
        var newDiv = document.createElement("div");
        
        var activityTable = document.createElement('table');
        var tableBody = document.createElement('tbody');
        
        opportunityDetailsModel.each(function(opportunity) {
            
            var activityRow = document.createElement('tr');
            var data1 = document.createElement('td');
            var p1 = document.createElement('p');
            p1.innerHTML = opportunity_status;
            var p2 = document.createElement('p');
            p2.innerHTML = createdDate;
            var data2 = document.createElement('td');
            var p3 = document.createElement('p');
            p3.innerHTML = propertyAddress;
            var p4 = document.createElement('p');
            p4.innerHTML = city;
            
            data1.appendChild(p1);
            data1.appendChild(p2);
            data2.appendChild(p3);
            data2.appendChild(p4);
            activityRow.appendChild(data1);
            activityRow.appendChild(data2);
            tableBody.appendChild(activityRow);
        });
        activityTable.appendChild(tableBody);
        newDiv.appendChild(activityTable);
        oppDetailsInfo.appendChild(newDiv);
    }
    
    opportunityDetailsModel.on('add', renderDetailsList);
    opportunityDetailsModel.on('change', renderDetailsList);
    opportunityDetailsModel.on('remove', renderDetailsList);
});