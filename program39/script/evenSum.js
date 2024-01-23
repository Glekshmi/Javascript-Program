function evenSum() {
   let limit;
   limit = document.getElementById("limit").value;
   val = limit.trim();
   if ((val == "")) {
      alert("Input valid number!");
   } else if (isNaN(val)) {
      alert("Invalid input!");
   } else {
      n = parseInt(val);
      let sum = 0;
      for (let i = 2; i <= n; i += 2) {
         sum += i;
      }
      document.write("Sum of even numbers = " + sum + "<br>");
   }
}