function lastChar() {
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
      let result = string.charAt(length - 1);
      document.getElementById("answer").innerHTML = "last character in the string : " + result;
   }
}