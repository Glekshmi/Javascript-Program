function midChar() {
   let string;
   string = document.getElementById("string").value;
   string = string.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + string.match(check);
   if ((count != "1") || (string == "")) {
      alert("invalid input!!");
   } else {
      let length = string.length;
      if (length % 2 == 0) {
         alert("string have no perfect middle");
      } else {
         let mid = parseInt(length / 2);
         let result = string.charAt(mid);
         document.getElementById("answer").innerHTML = "middle character in the string : " + result;
      }
   }
}