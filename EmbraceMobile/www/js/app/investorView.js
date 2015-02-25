define(['app/investorModel'], function(investorModel){
   
      function renderInvestors(){
        investorModel.each(renderInvestor);
    }
    function renderInvestor(investor){
         name = investor.get('name');
         email = investor.get('email');
         phone = investor.get('phone');
        goal = investor.get('goal');
        image = investor.image;
        investmentLocations = investor.get('locations');
        var newDiv = document.createElement("div");
       console.log(name);
        console.log(email);
        console.log(phone);
        console.log(goal);
        console.log(investmentLocations);
        console.log(image);
        var table = document.createElement("table");
       table.style.width = "300px";
        table.style.cellPadding = "5px";
        var tbody = document.createElement("tbody");
        
        var tr = document.createElement("tr");
        
        var td1 = document.createElement("td");
         td1.align ="center";
        td1.valign="center";
                var img = document.createElement("img");
        img.style.height="64px";
        img.style.width="64px";
        img.style.marginLeft="25px";
        img.style.border="1px";
        img.src = image;
        td1.appendChild(img);
        tr.appendChild(td1);
        var td2 = document.createElement("td");
          td1.align ="left";
        td1.valign = "left";
          var p1 = document.createElement("p");
        p1.style.marginLeft = "25px";
        p1.style.fontSize = "12px";
        p1.innerHTML = name;
          var p2 = document.createElement("p");
         p2.style.marginLeft = "25px";
        p2.style.fontSize = "12px";
        p2.innerHTML = phone;
          var p3 = document.createElement("p");
         p3.style.marginLeft = "25px";
        p3.style.fontSize = "12px";
        p3.innerHTML = email;
        td2.appendChild(p1);
        td2.appendChild(p2);
        td2.appendChild(p3);
        tr.appendChild(td2);
        tbody.appendChild(tr);
        table.appendChild(tbody);
        newDiv.appendChild(table);
        
        
        
//var div = document.createElement("div");
//div.style.width = "100px";
//div.style.height = "100px";
//div.style.background = "red";
//div.style.color = "white";
//div.innerHTML = "Hello";

        investorlist.appendChild(newDiv);
    }
    
    investorModel.on('add', renderInvestors);
    investorModel.on('change', renderInvestors);
    investorModel.on('remove', renderInvestors);
});