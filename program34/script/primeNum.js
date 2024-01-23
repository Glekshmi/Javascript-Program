function primeNum() {
   let num;
   num = document.getElementById("num").value;
   if ((num.charAt(0) == " ") || (num == "") || (isNaN(num))) {
      alert("Invalid Input!");
   } else {
      let n1 = parseInt(num);
      let i;
      let flag = true;
      for (i = 0; i < n1 / 2; i++) {
         if (n1 % i == 0) {
            flag = false;
            break;
         }
      }
      if (flag == true)
         document.getElementById("answer").innerHTML = "Number is prime";
      else
         document.getElementById("answer").innerHTML = "Number is not prime";
   }
}