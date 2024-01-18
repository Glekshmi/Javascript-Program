function divisible() {
   let num;
   limit=document.getElementById("limit").value;
   val=limit.trim();
   if((val==""))
   {
     alert("Input valid number!");
   }
   else if(isNaN(val))
   {
     alert("Invalid input!");
   }
   else
   {
     n=parseInt(val);
     for(let i=1; i<=n; i++)
     {
       if((i%5==0) && (i%11==0))
       document.write(i + "<br>");
     }
   }
}