function Nat() {
   let limit;
   limit = document.getElementById("limit").value;
   val = limit.trim();
   if ((val == "")) {
      alert("Input valid number!");
   } else if (isNaN(val)) {
      alert("Invalid input!");
   } else {
      n = parseInt(val);
      let sum = 0,
         avg = 0;
      for (let i = 1; i <= n; i++) {
         sum += i;
         avg = sum / n;
      }
      document.write("sum = " + sum + "<br>" + "Average = " + avg);
   }
}