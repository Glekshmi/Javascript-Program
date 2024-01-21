function check() {
   let strng;
   strng = document.getElementById("strng").value;
   strng = strng.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + strng.match(check);
   if ((count != "1") || (strng == "")) {
      alert("invalid input!!");
   } else {
      let n=strng.length;
		let subStr= strng.split(" ");
		let max=subStr[0].length;
		let min=subStr[0].length;
		let small=subStr[0];
		let large=subStr[0];
		for(let i=1;i<subStr.length;i++)
		{
			let n=subStr[i].length;
			if(min>=n)
			{
				if(min>n)
				{
					small="";
					small=subStr[i];
				}
				else
					small=small+"\t"+subStr[i];
				min=n;
			}
			if(max<=n)
			{
				if(max<n)
				{
					large="";
					large=subStr[i];
				}
				else
					large=large+"\t"+subStr[i];
				max=n;
			}
		}
		document.getElementById("answer1").innerHTML="Smallest word in the string "+small;
		document.getElementById("answer2").innerHTML="Largest word in the string "+large;
   }
}