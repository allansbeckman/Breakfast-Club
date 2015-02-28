define(['app/AddActivityModel'], function(AddActivityModel) {
    
    function renderAddActivity(){
        renderAddActivityInvestor('Burton Peirce');
    }
    
    function renderAddActivityInvestor(investorName){
        investor = investorModel.where({name:investorName})[0];
        name = investor.get('name');
        email = investor.get('email');
        phone = investor.get('phone');
        image = investor.image;
        
        var newDive = document.createElement("div");
        var table = document.createElement("table");
            table.setAttribute('class', 'investorActivityTable');
        var tbody = document.createElement("tbody");
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
            td1.setAttribute('class', 'investorActivityTDCenter');
        var img = document.createElement("img");
            img.src = image;
            img.setAttribute('class','investorActivityImg');
        
        td1.appendChild(img);
        tr.appendChild(td1);
        
        var td2 = document.createElement("td");
            td2.setAttribute('class', 'investorActivityTDLeft');
        var p1 = document.createElement("p");
            p1.setAttribute('class','investorActivityPar');
            p1.innerHTML= name;
        var p2 = document.createElement("p");
            p2.setAttribute('class','investorActivityPar');
            p2.innerHTML= phone;
        var p3 = document.createElement("p");
            p3.setAttribute('class','investorActivityPar');
            p3.innerHTML= email;
        
        td2.appendChild(p1);
        td2.appendChild(p2);
        td2.appendChild(p3);
        tr.appendChild(td2);
        tbody.appendChild(tr);
        table.appendChild(tbody);
        newDive.appendChild(table);
        
        var hr = document.createElement("hr");
            hr.setAttribute('class','activityLine');
        
        
        var property = document.createElement("p");
            property.setAttribute('class','activityProperty');
            property.innerHTML="Property:";
        var propertySearch = document.createElement("input");
            propertySearch.setAttribute('type','text');
            propertySearch.setAttribute('name', 'q');
            propertySearch.setAttribute('class','activityPropertySearch');
        var propertySearchButton = documetn.createElement("button");
            propertySearchButton.setAttribute('type','submit');
            propertySearchButton.setAttribute('value','Search');
            propertySearchButton.setAttribute('class','activityPropertyButton');
            propertySearchButton.innerHTML="Search";
        
        var action = document.createElement("p");
            action.setAttribute('class','activityProperty');
            action.innerHTML="Action:";
        var actionDiv = document.createElement("div");
        var actionList = document.createElement("SELECT");
            actionList.setAttribute('class','activityActionList');
        var c1 = document.createElement("option");
            c1.text = "Select an Action";
            actionList.options.add(c1, 1);
        var c2 = document.createElement("option");
            c2.text = "Property Reviewed";
            actionList.options.add(c2, 2);
        var c3 = document.createElement("option");
            c3.text = "Property Reviewed";
            actionList.options.add(c3, 3);
        var c4 = document.createElement("option");
            c4.text = "Offer Rejected";
            actionList.options.add(c4, 4);
        var c5 = document.createElement("option");
            c5.text = "Counter Offer Received";
            actionList.options.add(c5, 5);
        var c6 = document.createElement("option");
            c6.text = "Offer Accepted";
            actionList.options.add(c6, 6);
        var c7 = document.createElement("option");
            c7.text = "Pending Purchase Agreement";
            actionList.options.add(c7, 7);
        var c8 = document.createElement("option");
            c8.text = "Purchase Agreement Signed";
            actionList.options.add(c8, 8);
        var c9 = document.createElement("option");
            c9.text = "Pending EMD";
            actionList.options.add(c9, 9);
        var c10 = document.createElement("option");
            c10.text = "EMD Received";
            actionList.options.add(c10, 10);
        actionDiv.appendChild(actionList);
            
        newDive.appendChild(hr);
        newDive.appendChild(property);
        newDive.appendChild(propertySearch);
        //may need <br> here
        newDive.appendChild(propertySearchButton);
        //may need <br> here
        newDive.appendChild(action);
        newDive.appendChild(actionList);
    }
};