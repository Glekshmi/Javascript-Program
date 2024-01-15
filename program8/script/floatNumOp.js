function floatOp() {
   let n1, n2;
   n1 = document.getElementById("first").value;
   n2 = document.getElementById("second").value;
   if ((n1.charAt(0) == " ") || (n1 == "") || (n2.charAt(0) == " ") || (n2 == "") || (isNaN(n1)) || (isNaN(n2))) {
      alert("Invalid Input!");
   } else {
      let sum = 0,
         diff = 0,
         prod = 0,
         div = 0;
      num1 = parseFloat(n1);
      num2 = parseFloat(n2);
      sum = num1 + num2;
      document.getElementById("sum").value = sum;
      diff = num1 - num2;
      document.getElementById("diff").value = diff;
      prod = num1 * num2;
      document.getElementById("prod").value = prod;
      div = num1 / num2;
      document.getElementById("div").value = div;
   }
}