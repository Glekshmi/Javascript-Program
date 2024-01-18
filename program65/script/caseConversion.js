function strConversion() {
   let string;
   string = document.getElementById("string").value;
   string = string.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + string.match(check);
   if ((count != "1") || (string == "") ) {
      alert("invalid input!!");
   } else {
      let str=[];
      for(let i=0;i<string.length;i++)
      {
	if((str[i])==(str[i].toUpperCase()))
	continue;
	else
	str[i]=str[i].toUpperCase();
      document.getElementById("answer").innerHTML = "Converted string : " +str;
   }
}