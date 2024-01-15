function digitSum() {
   let num;
   num = document.getElementById("num").value;
   if ((num.charAt(0) == " ") || (num == "") || (isNaN(num))) {
      alert("Invalid Input!");
   } else {
      let rem = 0,
         sum = 0;
      n = parseInt(num);
      let digit = n;
      while (n > 0) {
         rem = n % 10;
         sum = sum + rem;
         n = parseInt(n / 10);
      }
      document.getElementById("answer").innerHTML = sum;
   }
}