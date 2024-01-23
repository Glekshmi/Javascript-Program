function digitProd() {
   let num;
   num = document.getElementById("num").value;
   val = num.trim();
   if ((val == "")) {
      alert("Input valid number!");
   } else if (isNaN(val)) {
      alert("Invalid input!");
   } else {
      n = parseInt(val);
      let prod = 1,
         rem;
      while (n > 0) {
         rem = n % 10;
         prod = prod * rem;
         n = parseInt(n / 10);
      }
      document.getElementById("answer").value = prod;
   }
}