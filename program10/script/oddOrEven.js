function oddOrEven() {
   let num;
   num = document.getElementById("num").value;
   if ((num.charAt(0) == " ") || (num == "") || (isNaN(num))) {
      alert("Invalid Input!");
   } else {
      n = parseInt(num);
      if (n % 2 == 0) {
         document.getElementById("answer").innerHTML = "Number is even";
      } else {
         document.getElementById("answer").innerHTML = "Number is odd";
      }
   }
}