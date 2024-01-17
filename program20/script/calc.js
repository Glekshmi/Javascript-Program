function sum() {
   let num1, num2;
   num1 = document.getElementById("num1").value;
   num2 = document.getElementById("num2").value;
   if ((num1.charAt(0) == " ") || (num1 == "") || (isNaN(num1)) || (num2.charAt(0) == " ") || (num2 == "") || (isNaN(num2))) {
      alert("Invalid Input!");
   } else {
      n1 = parseInt(num1);
      n2 = parseInt(num2);
      let result;
      result = n1 + n2;
      document.getElementById("answer").innerHTML = "Result = " + result;
   }
}

function diff() {
   let num1, num2;
   num1 = document.getElementById("num1").value;
   num2 = document.getElementById("num2").value;
   if ((num1.charAt(0) == " ") || (num1 == "") || (isNaN(num1)) || (num2.charAt(0) == " ") || (num2 == "") || (isNaN(num2))) {
      alert("Invalid Input!");
   } else {
      n1 = parseInt(num1);
      n2 = parseInt(num2);
      let result;
      result = n1 - n2;
      document.getElementById("answer").innerHTML = "Result = " + result;
   }
}

function div() {
   let num1, num2;
   num1 = document.getElementById("num1").value;
   num2 = document.getElementById("num2").value;
   if ((num1.charAt(0) == " ") || (num1 == "") || (isNaN(num1)) || (num2.charAt(0) == " ") || (num2 == "") || (isNaN(num2))) {
      alert("Invalid Input!");
   } else {
      n1 = parseInt(num1);
      n2 = parseInt(num2);
      let result;
      result = n1 / n2;
      document.getElementById("answer").innerHTML = "Result = " + result;
   }
}

function prod() {
   let num1, num2;
   num1 = document.getElementById("num1").value;
   num2 = document.getElementById("num2").value;
   if ((num1.charAt(0) == " ") || (num1 == "") || (isNaN(num1)) || (num2.charAt(0) == " ") || (num2 == "") || (isNaN(num2))) {
      alert("Invalid Input!");
   } else {
      n1 = parseInt(num1);
      n2 = parseInt(num2);
      let result;
      result = n1 * n2;
      document.getElementById("answer").innerHTML = "Result = " + result;
   }
}

function clear() {
   document.getElementById("formRest").reset();
}