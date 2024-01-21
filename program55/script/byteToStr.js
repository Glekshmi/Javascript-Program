function byteToStr() {
   let byteValue;
   byteValue = document.getElementById("value1").value;
  value1 = byteValue.trim();
   if (value1 == "") {
      alert("Input valid number!");
   } else if ((isNaN(value1))) {
      alert("Invalid input!");
   } else {
     let byteStr=byteValue.split(' ');
		if((byteStr>=97&&byteStr<=122)||((byteStr>=67&&byteStr<=90)))
		{
			
			let answer= "";
			for (let i=0;i<byteStr.length;i++) 
			{
    				answer=answer+String.fromCharCode(byteStr[i]);
			}
			document.getElementById("answer").innerHTML=answer;
		}
		else	
			alert("Enter valid string byte");
   }
}