function changeLetter() {
   let strng;
   strng = document.getElementById("strng").value;
   strng = strng.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + strng.match(check);
   if ((count != "1") || (strng == "")) {
      alert("invalid input!!");
   } else {
      
		let strngNew="";
       		for(var i = 0; i < strng.length; i++) 
		{
        		if (122 == strng.charCodeAt(i)) 
           			strngNew= "a";
        		else if (90 == strng.charCodeAt(i)) 
              			strngNew= "A";
        		else if((65 <= strng.charCodeAt(i) && strng.charCodeAt(i)<= 89)||(97 <= strng.charCodeAt(i) && strng.charCodeAt(i)<= 121))
           			strngNew =strngNew+String.fromCharCode(strng.charCodeAt(i)+ 1);
        		else 
            			strngNew =strngNew+strng.charAt(i);
        	}
   		document.getElementById("answer").innerHTML="Updated string : "+strngNew;
   }
}