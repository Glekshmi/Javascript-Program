function strChar() {
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
      let str = [];
      for (let i = 0; i < length; i++) {
         str[i] = string.charAt(i)
      }
      document.getElementById("answer").innerHTML = "string characters are : " + str;
   }
}