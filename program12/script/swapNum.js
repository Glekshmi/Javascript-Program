function swapNum() {
   let n1, n2;
   n1 = document.getElementById("first").value;
   n2 = document.getElementById("second").value;
   if ((n1.charAt(0) == " ") || (n1 == "") || (n2.charAt(0) == " ") || (n2 == "") || (isNaN(n1)) || (isNaN(n2))) {
      alert("Invalid Input!");
   } else {
      let temp;
      num1 = parseInt(n1);
      num2 = parseInt(n2);
      temp = num1;
      num1 = num2;
      num2 = temp;
      document.getElementById("num1").innerHTML = "1st No: " + num1;
      document.getElementById("num2").innerHTML = "2nd No: " + num2;
   }
}