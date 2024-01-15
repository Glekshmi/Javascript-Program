function avg() {
   let n1, n2, n3;
   n1 = document.getElementById("first").value;
   n2 = document.getElementById("second").value;
   n3 = document.getElementById("third").value;
   if ((n1.charAt(0) == " ") || (n1 == "") || (n2.charAt(0) == " ") || (n2 == "") || (isNaN(n1)) || (isNaN(n2)) || (n3.charAt(0) == " ") || (n3 == "") || (isNaN(n3))) {
      alert("Invalid Input!");
   } else {
      let sum = 0,
         avg = 0;
      num1 = parseInt(n1);
      num2 = parseInt(n2);
      num3 = parseInt(n3);
      sum = num1 + num2 + num3;
      avg = Math.round(sum / 3.0);
      document.getElementById("sum").value = sum;
      document.getElementById("avg").value = avg;
   }
}