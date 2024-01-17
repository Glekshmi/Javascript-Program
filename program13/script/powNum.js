function powNum() {
   let num;
   num = document.getElementById("num").value;
   if ((num.charAt(0) == " ") || (num == "") || (isNaN(num))) {
      alert("Invalid Input!");
   } else {
      let numP = 0;
      n = parseInt(num);
      numP = Math.pow(n, 2);
      document.getElementById("answer").innerHTML = numP;
   }
}