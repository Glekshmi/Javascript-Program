function strOccur() {
   let string;
   string = document.getElementById("string").value;
   key = document.getElementById("key").value;
   string = string.trim();
   key = key.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + string.match(check) + key.match(check);
   if ((count != "1") || (string == "") || (key == "")) {
      alert("invalid input!!");
   } else {
      let str = [];
      let total = 0;
      str = string;
      for (let i = 0; i < str.length; i++) {
         if (str[i] == key) {
            total++;
         } else {
            document.getElementById("answer").innerHTML = "character not found";
         }
      }
      document.getElementById("answer").innerHTML = "count of " + key + " : " + total;
   }
}