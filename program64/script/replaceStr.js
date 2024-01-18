function replaceStr() {
   let orgStr, str1, str2;
   orgStr = document.getElementById("orgStr").value;
   str1 = document.getElementById("str1").value;
   str2 = document.getElementById("str2").value;
   orgStr = orgStr.trim();
   str1 = str1.trim();
   str2 = str2.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + orgStr.match(check) + str1.match(check) + str2.match(check);
   if ((count != "1") || (orgStr == "") || (str1 == "") || (str2 == "")) {
      alert("invalid input!!");
   } else {
      let result = orgStr.replace(str1, str2);
      document.getElementById("answer").innerHTML = "Replaced string : " + result;
   }
}