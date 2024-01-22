function electricityBill() {
   let unit;
   unit = document.getElementById("limit").value;
   val =  unit.trim();
   if ((val == "")) {
      alert("Input valid number!");
   } else if (isNaN( unit)) {
      alert("Invalid input!");
   } else {
      unit=parseInt( unit);
      let totCharge=0;
		if( unit<=50)
		{	
		 totCharge=50*2.60;
		}
		else if(unit<=100)
		{	
		 totCharge=50*2.60+(unit-50)*3.25;	
		}
		else if(unit<=200)
		{
	         totCharge=50*2.60+50*3.25+(unit-100)*5.65;		
		}
		else if(unit>200)
		{
		 totCharge=50*2.60+50*3.25+100*5.65+(unit-100)*7.25;	
		}
		else
		{
		 totCharge=50*2.60+50*3.25+100*5.65+100*7.25+(unit-700)*7.25*0.05;	
		}
		document.getElementById("answer").innerHTML = "Total charges : "+totCharge;
   }
}