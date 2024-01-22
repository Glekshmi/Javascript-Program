function replaceChar(strng) 
{
	return strng == strng.split('').reverse().join('');
}
function check() {
   let string;
   string = document.getElementById("string").value;
   string = string.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + string.match(check);
   if ((count != "1") || (string == "")) {
      alert("invalid input!!");
   } else {
      
		let tempString=string.split(' ');
		for (let i = 0; i < tempString.length; i++) 
		{
         		if (replaceChar(tempString[i])) 
			{
                 	 	if(tempString[i].length>1)
				{
					let tempLength=tempString[i].length;
					let replaceSymbol='*'.repeat(tempLength);
                   			 tempString[i]=replaceSymbol;
				}
				
       			 }
		}

     		document.getElementById("answer").innerHTML=tempString.join(' ');
   }
}