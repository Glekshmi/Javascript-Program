function arithmeticOp() {
   let num1, num2, choice;
   choice = document.getElementById("ch").value; {
      num1 = document.getElementById("num1").value;
      num2 = document.getElementById("num2").value;
      num1 = num1.trim();
      num2 = num2.trim();
      if ((num1 == "") || (num2 == "")) {
         alert("Input valid number!");
      } else if ((isNaN(num1)) || (isNaN(num2))) {
         alert("Invalid input!");
      } else {
         num1 = parseInt(num1);
         num2 = parseInt(num2);
         let result;
         choice = parseInt(choice);
         switch (choice) {
            case 1:
               result = num1 + num2;
               break;
            case 2:
               result = num1 - num2;
               break;
            case 3:
               result = num1 / num2;
               break;
            case 4:
               result = num1 * num2;
               break;
            case 5:
               break;
         }
      }
   }

}