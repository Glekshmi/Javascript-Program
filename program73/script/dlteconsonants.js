function dlteconsonants() {
   let strng;
   strng = document.getElementById("strng").value;
   strng = strng.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + strng.match(check);
   if ((count != "1") || (strng == "")) {
      alert("invalid input!!");
   } else {
      
		
		
		let tempString=strng.split("");
		let nullString=""
		let arr=new Array("a","e","i","o","u","A","E","I","O","U");
		for(let i=0;i<strng.length;i++)
			for(let j=0;j<12;j++)
				if(arr[j]==tempString[i])
					nullString=nullString+tempString[i];
				else if(arr[j]==" ")
					nullString=nullString+"\t";
		if(nullString=="")
			document.getElementById("answer").innerHTML="No vowels founds";
		else
			document.getElementById("answer").innerHTML="String without consonants : "+nullString;
   }
}