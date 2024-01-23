function stringPrefix() {
   let string, subStrng;
   string = document.getElementById("string").value;
   subStrng = document.getElementById("key").value;
   string = string.trim();
   subStrng = subStrng.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + string.match(check) + subStrng.match(check);
   if ((count != "1") || (string == "") || (subStrng == "")) {
      alert("invalid input!!");
   } else {
      let result = string.indexOf(subStrng);
      if (result!=0)
         document.getElementById("answer").innerHTML = "prefix";
      else
         document.getElementById("answer").innerHTML = "not a prefix";
   }
}