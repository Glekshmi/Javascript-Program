function numSmallLarge() {
   let num1, num2, num3;
   num1 = document.getElementById("first").value;
   num2 = document.getElementById("second").value;
   num3 = document.getElementById("third").value;
   if ((num.charAt(0) == " ") || (num == "") || (isNaN(num))) {
      alert("Invalid Input!");
   } else {
      let large, small;
      n1 = parseInt(num1);
      n2 = parseInt(num2);
      n3 = parseInt(num3);
      if ((n1 > n2)) {
         if (n1 > n3)
            large = n1;
         document.getElementById("large").innerHTML = "largest no:" + n1;
         else
            large = n3;
         document.getElementById("large").innerHTML = "largest no:" + n3;
      } else {
         if (n2 > n3)
            large = n2;
         document.getElementById("large").innerHTML = "largest no:" + n2;
         else
            large = n3;
      }
   }