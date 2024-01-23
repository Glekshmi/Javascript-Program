function strAscii() {
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
      for (let i = 0; i < length; i++) {
         if (string[i] == " ")
            continue;
         else
            string1 = string.charCodeAt(i);
         document.getElementById("answer").innerHTML = "ASCII value of string characters : " + string1;
      }
   }
}