function numCube() {
   let num;
   num = document.getElementById("num").value;
   if ((num.charAt(0) == " ") || (num == "") || (isNaN(num))) {
      alert("Invalid Input!");
   } else {
      let cube = 0;
      n = parseInt(num);
      cube = n * n * n;
      document.getElementById("answer").value = cube;
   }
}