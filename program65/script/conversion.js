function strConversion() {
   let strng;
   strng = document.getElementById("strng").value;
   strng = strng.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + strng.match(check);
   if ((count != "1") || (strng == "")) {
      alert("invalid input!!");
   } else {
      let result = '';
      for (let i = 0; i < strng.length; i++) {
         let char = strng.charAt(i);
         if (char == (char.toUpperCase())) {
            result += char.toLowerCase();
         } else {
            result += char.toUpperCase();
         }
      }
      document.getElementById("answer").innerHTML = result;
   }
}