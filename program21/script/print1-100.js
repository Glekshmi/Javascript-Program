function printNum(val) {
   
   if(val<=100)
   {
	document.write(val + "<br>");

   }
	printNum(val+1);
}