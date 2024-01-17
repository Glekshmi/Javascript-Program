function palindrome() {
   let value1;
   value1 = document.getElementById("value1").value;
   value1 = value1.trim();
   if (value1 == "") {
      alert("Input valid number!");
   } else if ((isNaN(value1))) {
      alert("Invalid input!");
   } else {
      value1 = parseInt(value1);
      let temp = value1;
      let rem = 0,
         rev = 0;
      while (value1 > 0) {
         rem = value1 % 10;
         rev = rev * 10 + rem;
         value1 = parseInt(value1 / 10);
      }
      if (temp == rev)
         document.write("Number is palindrome");
      else
         document.write("Number is not a palindrome");
   }
}