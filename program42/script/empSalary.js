function empSalary() {
   let basicPay;
   basicPay = document.getElementById("limit").value;
   val = basicPay.trim();
   if ((val == "")) {
      alert("Input valid number!");
   } else if (isNaN(val)) {
      alert("Invalid input!");
   } else {
     basicPay=parseInt(basicPay);
	let grossSalary=0;
		if(basicPay<=10000)
		{
			hra=basicPay*0.08;
			da=basicPay*0.1;
			grossSalary=basicPay+hra+da;
		}		
		else if((basicPay>10000)&&(basicPay<=20000))
		{
			hra=basicPay*0.16;
			da=basicPay*0.2;
			grossSalary=basicPay+hra+da;
		}
		else
		{
			hra=basicPay*0.24;
			da=basicPay*0.3;
			grossSalary=basicPay+hra+da;
		}
		document.getElementById("answer").innerHTML = "Gross Salary : "+grossSalary;
   }
}