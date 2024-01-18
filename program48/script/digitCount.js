function digitCount() {
   let digit;
   digit = document.getElementById("digit").value;
   digit = digit.trim();
   if (digit == "") {
      alert("Input valid number!");
   } else if ((isNaN(digit))) {
      alert("Invalid input!");
   } else {
      digit = parseInt(digit);
      let count = 0;
      while (digit > 0) {
         digit = parseInt(digit / 10);
         count++;
      }
      document.write("digits count = " + count);

   }
}