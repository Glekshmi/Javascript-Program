function noteCount() {
   let amount;
   amount = document.getElementById("num").value;
   val = amount.trim();
   if ((amount == "")) {
      alert("Input valid number!");
   } else if (isNaN(val)) {
      alert("Invalid input!");
   } else {
     amount=parseInt(amount);
	let totCount=0;
	let count=0;
		const amountValue = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
		var arrLength=amountValue.length;
	    	const noteCount=[];
    		for (let i=0;i<arrLength;i++) 
		{
       		 	count = parseInt(amount/amountValue[i]);
        		if (count>0)
			{
            			noteCount[i] = count;
            			amount=amount%amountValue[i];
				document.write("<br>"+amountValue[i]+" = "+noteCount[i]);
        		}
			else
				noteCount[i]=0;
	    	}
		for(let j=0;j<noteCount.length;j++) 
    			totCount=totCount+noteCount[j];
   		document.write("<br> No: of notes : "+totCount);
   }
}