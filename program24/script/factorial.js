function factorial() {
   let num;
   num = document.getElementById("num").value;
   if ((num.charAt(0) == " ") || (num == "") || (isNaN(num))) {
      alert("Invalid Input!");
   } else {
      let n = parseInt(num);
      let fact = 1;
      for (let i = 1; i <= n; i++) {
         fact = fact * i;
      }
      document.write(fact + "<br>");
   }
}