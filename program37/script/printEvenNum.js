function EvenNum() {
   let limit;
   limit = document.getElementById("limit").value;
   val = limit.trim();
   if ((val == "")) {
      alert("Input valid number!");
   } else if (isNaN(val)) {
      alert("Invalid input!");
   } else {
      n = parseInt(val);
      for (let i = 2; i <= n; i += 2) {
         document.write(i + "<br>");
      }
   }
}