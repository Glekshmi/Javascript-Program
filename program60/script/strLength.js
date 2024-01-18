function strLength() {
   let string;
   string = document.getElementById("string").value;
   string = string.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + string.match(check);
   if ((count != "1") || (string == "")) {
      alert("invalid input!!");
   } else {
      let length1 = string.length;
      let item, pos;
      item = string.at(-1);
      pos = string.lastIndexOf(item);
      document.getElementById("answer1").innerHTML = "string length using method : " + length1;
      document.getElementById("answer2").innerHTML = "string length without using method : " + (pos + 1);
   }
}