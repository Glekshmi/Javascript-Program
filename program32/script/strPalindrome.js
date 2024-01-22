function strPalindrome() {
   let string;
   string = document.getElementById("string").value;
   string = string.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + string.match(check);
   if ((count != "1") || (string == "")) {
      alert("invalid input!!");
   } else {
      let tempString=string.split(""); 
		let strRev=tempString.reverse();
		let strLength=string.length;
		for(var i=0;i<strLength;i++)
			if(tempString[i]!=strRev[strLength-i-1])
			{
				count=1;
				break;
			}
			else
				count=0	
		if(count==0)
			document.getElementById("answer").innerHTML = "string is palindrome ";
		else
			document.getElementById("answer").innerHTML = "string is not a palindrome ";
   }
}