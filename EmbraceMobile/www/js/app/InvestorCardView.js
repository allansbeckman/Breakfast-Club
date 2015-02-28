define(['app/InvestorCardModel', 'app/InvestorCardController'], function(InvestorCardModel, InvestorCardController){
    
    function renderInvestorCardList(){
        InvestorCardModel.each(function(investor) {
			id = investor.get('id');
			name = investor.get('name');
			email = investor.get('email');
			photo = investor.get ('photo');
			phone = investor.get ('phone');
		
			var div0 = document.createElement("div");
				div0.setAttribute ('class', 'widget uib_w_61');
				div0.setAttribute ('data-uib', 'media/text');
				div0.setAttribute ('data-ver', '0');
				
			var div1 = document.createElement ("div");
				div1.setAttribute ('class', 'widget-container left-receptacle');
				
			var div2 = document.createElement ("div");
				div2.setAttribute ('class', 'widget uib_w_77');
				div2.setAttribute ('data-uib', 'media/img');
				
			var figure0 = document.createElement ("figure");
				figure0.setAttribute ('class', 'figure-align');
				
			var img = document.createElement ("img");
				img.setAttribute ('class', 'myInvestorUserImage');
				
			var figcaption = document.createElement("figcaption");
				figcaption.setAttribute ('data-position', 'bottom');
				
			div0.appendChild(div1);
			div1.appendChild(div2);
			div2.appendChild(figure0);
			figure0.appendChild(img);
			figure0.appendChild(figcaption);
				
			var div3 = document.createElement ("div");
				div3.setAttribute ('class', 'widget-container right-receptacle');
				
			div0.appendChild(div3);
				
			var div4 = document.createElement ("div");
			
			div0.appendChild(div4);
			
			var p = document.createElement("p");
				p.innerHTML = name;
			var br = document.createElement("br");
				p.innerHTML = phone;
			var br0 = document.createElement("br");
				p.innerHTML = email;
				
			div4.appendChild(p);
			p.appendChild(br);
			p.appendChild(br0);
				
			var hr = document.createElement("hr");
				hr.setAttribute ('style', 'border-top: dotted 3px');
			
		});
		
    }
    
    InvestorCardModel.on('add', renderInvestorCardList);
    InvestorCardModel.on('change', renderInvestorCardList);
    InvestorCardModel.on('remove', renderInvestorCardList);
});