function perfNum() {
   let num;
   num = document.getElementById("num").value;
   val = num.trim();
   if ((val == "")) {
      alert("Input valid number!");
   } else if (isNaN(val)) {
      alert("Invalid input!");
   } else {
      n = parseInt(val);
      let per = 0;
      for (let i = 0; i < n; i++) {
         if (n % i == 0) {
            per = per + i;
         }
      }
      if (per == n)
         document.getElementById("answer").innerHTML = "Perfect number";
      else
         document.getElementById("answer").innerHTML = "Not a perfect number";
   }
}