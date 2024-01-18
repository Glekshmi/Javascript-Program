function Sum() {
   let limit;
   limit = document.getElementById("limit").value;
   val = limit.trim();
   if ((val == "")) {
      alert("Input valid number!");
   } else if (isNaN(val)) {
      alert("Invalid input!");
   } else {
      n = parseInt(val);
      let esum = 0,
         osum = 0;
      for (let i = 1; i <= n; i++) {
         if (i % 2 == 0) {
            esum += i;
         } else {
            osum += i;
         }
      }
      document.write("Sum of even numbers = " + esum + "<br>");
      document.write("Sum of odd numbers = " + osum + "<br>");
   }
}