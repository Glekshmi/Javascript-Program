function replaceChar(strng) 
{
	return strng == strng.split('').reverse().join('');
}

function maxOccur() {
   let strng;
   strng = document.getElementById("strng").value;
   strng = strng.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + strng.match(check);
   if ((count != "1") || (strng == "")) {
      alert("invalid input!!");
   } else {
      
		let count = {};
		let tempString=[];
		let maxOccur=1;
		let k=0;
		let charOccur;
            	for (let i = 0; i < strng.length; i++) 
		{
			if(strng[i]==" ")
				continue;
			else
				 charOccur=strng[i];
			if (count[charOccur] === undefined)
					count[charOccur] = 1;
			else 
			{
                   		count[charOccur]++;
				if(maxOccur<=count[charOccur])
				{
					if(tempString.includes(charOccur))
						continue;
					else
						tempString[++k]=charOccur;
					maxOccur=count[charOccur];
				}
			}
               
            	}
            for (let charOccur in count) 
                document.write("<br>"+charOccur +" =  "+count[charOccur]+"\t");
	        document.write("<br> maximum occurred character is "+tempString);
   }
}