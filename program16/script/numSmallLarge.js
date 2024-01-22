function numSmallLarge() {
   let num1, num2, num3;
   num1 = document.getElementById("num1").value;
   num2 = document.getElementById("num2").value;
   num3 = document.getElementById("num3").value;
   if ((num1.charAt(0) == " ") || (num1 == "") || (isNaN(num1)) || (num2.charAt(0) == " ") || (num2 == "") || (isNaN(num2)) || (num3.charAt(0) == " ") || (num3 == "") || (isNaN(num3))) {
      alert("Invalid Input!");
   } else {
      let large, small;
      n1 = parseInt(num1);
      n2 = parseInt(num2);
      n3 = parseInt(num3);
      if (n1 > n2) {
         if (n1 > n3)
            large = n1;
         else
            large = n3;
      } else {
         if (n2 > n3)
            large = n2;
         else
            large = n3;
      }

      if (n1 < n2) {
         if (n1 < n3)
            small = n1;
         else
            small = n3;
      } else {
         if (n2 < n3)
            small = n2;
         else
            small = n3;
      }
      document.getElementById("small").innerHTML = "Smallest No: " + small;
      document.getElementById("large").innerHTML = "Largest No: " + large;
   }

}