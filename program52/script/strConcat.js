function strConcat() {
   let string1,string2;
   string1 = document.getElementById("string1").value;
   string2 = document.getElementById("string2").value;
   string1 = string1.trim();
   string2 = string2.trim();
   if ((string1 == "") || (string2 == "")) {
      alert("Input valid number!");
   } 
      else {
      let result=string1.concat(string2);
      document.write(result);
   }
}