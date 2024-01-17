function mulTable() {
   let num;
   num = document.getElementById("num").value;
   if ((num.charAt(0) == " ") || (num == "") || (isNaN(num))) {
      alert("Invalid Input!");
   } else {
      let n = parseInt(num);
      let mul = 1;
      for (let i = 1; i <= 10; i++) {
         mul = n * i;
         document.write(n + "*" + i + "=" + mul + "<br>");
      }
   }
}