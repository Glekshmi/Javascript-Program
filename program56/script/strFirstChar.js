function firstChar() {
   let string;
   string = document.getElementById("string").value;
   string = string.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + string.match(check);
   if ((count != "1") || (string == "")) {
      alert("invalid input!!");
   } else {
      let result = string.charAt(0);
      document.getElementById("answer").innerHTML = "first character in the string : " + result;
   }
}