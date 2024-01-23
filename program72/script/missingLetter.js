function missingLetter() {
   let strng;
   strng = document.getElementById("strng").value;
   strng = strng.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + strng.match(check);
   if ((count != "1") || (strng == "")) {
      alert("invalid input!!");
   } else {
      
		
		let letters="abcdefghijklmnopqrstuvwxyz";
		let hold1=strng.charAt(0);
		var hold2=strng.at(-1);
		if(letters.match(strng))
			document.getElementById("answer").innerHTML="There is no missing letter!";
		else
		{
			let arr=[];
			let k=-1;
			let tempString=letters.split("");
			let loc=tempString.indexOf(hold1);
			let strIndex=tempString.indexOf(hold2);
			for(let i=loc;i<=strIndex;i++){
				if (!strng.includes(tempString[i]))
				arr[++k]=tempString[i];}
				document.getElementById("answer").innerHTML=arr+"<br>";
		}
   }
}