define(['app/investorModel'], function(investorModel){

    
    function renderInvestorList(){
     //TODO: for investor search 
        renderInvestorDetials('Burton Peirce');
    }
    
    function renderInvestorDetials(investorName){
        console.log("called");
        investor = investorModel.where({name: investorName})[0];
         name = investor.get('name');
         email = investor.get('email');
         phone = investor.get('phone');
        goal = investor.get('goal');
        investmentLocations = investor.get('locations');
        image = investor.image;
         amount = investor.get('investmentAmount');
        pRange = investor.get('priceRange');
        approved = investor.get('preApproved');
        locationlist = investor.get('location');
        cap = investor.get('capRateRange');
        frame = investor.get('buyingTimeFrame');
        comments = investor.get('comments');
        solutionSpecialist = investor.get('specialist');
        locationId = investor.get('locationId');
        /*
        console.log(amount);
        console.log(pRange);
        console.log(approved);
        console.log(locationlist);
        console.log(cap);
        console.log(frame);
        console.log(comments);
        
        */
       investmentAmount.innerHTML = amount;
        priceRange.innerHTML = pRange;
        buyingTimeFrame.innerHTML = frame;
        breadboxLocation.innerHTML = locationlist;
        preApproved.innerHTML = approved;
        capRateRange.innerHTML= cap;
        breadboxComments.innerHTML = comments;
        
      
        var newDiv = document.createElement("div");
        
        var table = document.createElement("table");
        table.setAttribute('class','investorDetailsTable');
     
        var tbody = document.createElement("tbody");
        
        var tr = document.createElement("tr");
        
        var td1 = document.createElement("td");
        td1.setAttribute('class','investorDetailsTDCenter');
        
        var img = document.createElement("img");
        img.src = image;
        img.setAttribute('class','investorDetailsImg');
     
       
        td1.appendChild(img);
        tr.appendChild(td1);
        var td2 = document.createElement("td");
        td2.setAttribute('class','investorDetailsTDLeft');
          
        var p1 = document.createElement("p");
        p1.setAttribute('class','investorDetailsPar');
        p1.innerHTML = name;
        
        var p2 = document.createElement("p");
        p2.setAttribute('class','investorDetailsPar');
        p2.innerHTML = phone;
        
        var p3 = document.createElement("p");
        p3.setAttribute('class','investorDetailsPar');
      
         
        p3.innerHTML = email;
        td2.appendChild(p1);
        td2.appendChild(p2);
        td2.appendChild(p3);
        tr.appendChild(td2);
        tbody.appendChild(tr);
        table.appendChild(tbody);
        newDiv.appendChild(table);
        
        
        //Todo: bind with actual info
        var p33 = document.createElement("p");
        p33.setAttribute('class','bold');
        p33.innerHTML = "Solution Specialists:";
        var p34 = document.createElement("p");
        p34.innerHTML = solutionSpecialist;
        p34.setAttribute('class','margin15');
        investorSolutionSpecialist.appendChild(p33);
        investorSolutionSpecialist.appendChild(p34);
        
        console.log("construction lower table");
        //lower table investment locations
        var ILMp = document.createElement('p');
        var ILMb = document.createElement('b');
        var ILMu = document.createElement('u');
        ILMu.innerHTML = "ILM:";
        ILMb.appendChild(ILMu);
        ILMp.appendChild(ILMb);
        
        var tdLeft = document.createElement('td');
        tdLeft.setAttribute('class','detailsBodyTDLeft');
        tdLeft.style.border="none";
        var tdRight = document.createElement('td');
        tdRight.setAttribute('class','detailsBodyTDRight');
        tdRight.style.border="none";
        
        
        $.each(investmentLocations, function(arrayID,group) {
            var tempTdLeft = tdLeft.cloneNode(true);
            var tempPar = document.createElement('a');
            tempPar.setAttribute('class', 'boldUnderline');
            tempPar.setAttribute('id', group.locationId);
            tempPar.style.marginLeft= "5px";
            tempPar.innerHTML = group.city;
            tempPar.setAttribute('href', '#OppDetails');
            tempPar.setAttribute("onClick", 'locationClick(this)');
            
            tempTdLeft.appendChild(tempPar);
            
             var tempTdRight = tdRight.cloneNode(true);
           
            var ILMcopy = ILMp.cloneNode(true);
            ILMcopy.setAttribute('class', 'inlineP');
            tempTdRight.appendChild(ILMcopy);

             var tempPar2 = document.createElement('p');
            tempPar2.setAttribute('class','inlineP');
            tempPar2.innerHTML = group.ilmName;
            tempTdRight.appendChild(tempPar2);

            var tempTr = document.createElement('tr');
            tempTr.style.border = "none";
            tempTr.appendChild(tempTdLeft);
            tempTr.appendChild(tempTdRight);
            detailsBody.appendChild(tempTr);
            
            console.log("city " + arrayID +" "+ group.city);
        });
     

        
        
        /*var table2 = document.createElement("table");
        table2.setAttribute('class', 'investorDetailsOpTable');
        var tbody2 = document.createElement("tbody");
        
        var tr3 = document.createElement("tr");
        var td3 =  document.createElement("td");
        td3.setAttribute('class','investorDetailsOpTdLeft');
        var p3 = document.createElement("p");
        p3.setAttribute('class', 'boldUnderline');
        p3.innerHTML = investmentLocations[0].city;
        
        var td4 =  document.createElement("td");
        td4.setAttribute('class','investorDetailsOpTdRight');
        var p4 = document.createElement("p");
        p4.setAttribute('class', 'boldUnderline');
        p4.innerHTML = "ILM:"
         var p5 = document.createElement("p");
        p5.setAttribute('class', 'boldUnderline');
        p5.innerHTML = investmentLocations[0].ilmName;
        tr3.appendChild(td3);
        tr3.appendChild(td4);
        tbody2.appendChild(tr3);
        
        
         var tr4 = document.createElement("tr");
        var td6 =  document.createElement("td");
        td6.setAttribute('class','investorDetailsOpTdLeft');
        var p6 = document.createElement("p");
        p6.setAttribute('class', 'boldUnderline');
        p6.innerHTML = investmentLocations[1].city;
        
        var td7 =  document.createElement("td");
        td7.setAttribute('class','investorDetailsOpTdRight');
        var p7 = document.createElement("p");
        p7.setAttribute('class', 'boldUnderline');
        p7.innerHTML = "ILM:"
         var p8 = document.createElement("p");
        p8.setAttribute('class', 'boldUnderline');
        p8.innerHTML = investmentLocations[1].ilmName;
        tr4.appendChild(td6);
        tr4.appendChild(td7);
        tbody2.appendChild(tr4);
        table2.appendChild(tbody2);
        
        
        detailInvestmentLocations.appendChild(table2);*/
        console.log("append investor profile card");
        investorCard.appendChild(newDiv);
    }
    
    investorModel.on('add', renderInvestorList);
    investorModel.on('change', renderInvestorList);
    investorModel.on('remove', renderInvestorList);
});