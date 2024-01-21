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
		if( unit<=50)
		{
			
				amount=50*2.60;
		}
		else if((n>50)&&(n<=100))
		{	
			sum1=0;
			sum=50*2.60;
			for(i=51;i<=n;i++)
				sum1=((i-50)*3.25);
			sum=sum+sum1;
		}
		else if((n>100)&&(n<=200))
		{
			sum=0;
			sum=50*2.60;
			sum=sum+(50*3.25);
			for(i=101;i<=n;i++)
				sum1=((i-100)*5.65); 
			sum=sum+sum1;
		
		}
		else if((n>200)&&(n<=700))
		{
			sum=0;
			sum=50*2.60;
			sum=sum+(50*3.25);
			sum=sum+(100*5.65);
			for(i=201;i<=n;i++)
				sum1=((i-200)*7.25);
			sum=sum+sum1;
		}
		else
		{
			sum=0;
			sum=50*2.60;
			sum=sum+(50*3.25);
			sum=sum+(100*5.65);
			sum=sum+(500*7.25);
			for(var i=701;i<=n;i++)
				sum1=((i-700)*7.25);
			txt=sum1*(0.5/100)
			sum=sum+sum1+txt;
		}
		document.getElementById("answer1).innerHTML = "units consumption :"+n;
		document.getElementById("answer2").innerHTML = "Total charges : "+sum;
   }
}