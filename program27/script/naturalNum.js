function natural() {
   let limit;
   limit=document.getElementById("limit").value;
   limit=limit.trim();
   if((limit==""))
   {
     alert("Input valid number!");
   }
   else if(isNaN(limit))
   {
     alert("Invalid input!");
   }
   else
   {
     num=parseInt(limit);
     for (let i = 1; i <= num; i++) {
      document.write(i + "<br>");
   }
   }
}


   