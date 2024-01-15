function add() {
   let n1, n2;
   n1 = document.getElementById("first").value;
   n2 = document.getElementById("second").value;
   if ((n1.charAt(0) == " ") || (n1 == "") || (n2.charAt(0) == " ") || (n2 == "") || (isNaN(n1)) || (isNaN(n2))) {
      alert("Invalid Input!");
   } else {
      let sum = 0;
      num1 = parseInt(n1);
      num2 = parseInt(n2);
      sum = num1 + num2;
      document.getElementById("answer").value = sum;
   }
}