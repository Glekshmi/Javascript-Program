function posNeg() {
   let num;
   num = document.getElementById("num").value;
   val = num.trim();
   if ((val == "")) {
      alert("Input valid number!");
   } else if (isNaN(val)) {
      alert("Invalid input!");
   } else {
      n = parseInt(val);
      if (n >= 0) {
         document.getElementById("answer").innerHTML = "Positive number";
      } else {
         document.getElementById("answer").innerHTML = "Negative number";
      }
   }
}