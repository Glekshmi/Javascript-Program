function fibinocci() {
   let limit;
   limit = document.getElementById("limit").value;
   limit = limit.trim();
   if (limit == "") {
      alert("Input valid number!");
   } else if ((isNaN(limit))) {
      alert("Invalid input!");
   } else {
      limit = parseInt(limit);
      let term1 = 0,
         term2 = 1,
         term3;
      document.write("fibinocci series : " + term1 + "<br>" + term2 + "<br>");
      for (let i = 2; i <= limit; i++) {
         term3 = term1 + term2;
         term1 = term2;
         term2 = term3;
         document.write(term3 + "<br>");
      }

   }
}