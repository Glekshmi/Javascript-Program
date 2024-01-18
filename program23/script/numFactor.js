function numFact() {
   let num;
   num = document.getElementById("num").value;
   if ((num.charAt(0) == " ") || (num == "") || (isNaN(num))) {
      alert("Invalid Input!");
   } else {
      let n = parseInt(num);
      for (let i = 1; i <= n; i++) {
         if (n % i == 0)
            document.write(i + ' ');
      }
   }
}