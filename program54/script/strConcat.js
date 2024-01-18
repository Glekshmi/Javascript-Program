function strConcat() {
   let string1, string2;
   string1 = document.getElementById("string1").value;
   string2 = document.getElementById("string2").value;
   string1 = string1.trim();
   string2 = string2.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + string1.match(check) + string2.match(check);
   if ((count != "1") || (string1 == "") || (string2 == "")) {
      alert("invalid input!!");
   } else {
      let result = string1.concat(string2);
      document.getElementById("answer").innerHTML = "concatinated string : " + result;
   }
}