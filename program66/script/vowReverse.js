function vowReverse() {
   let strng;
   strng = document.getElementById("strng").value;
   strng = strng.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + strng.match(check);
   if ((count != "1") || (strng == "")) {
      alert("invalid input!!");
   } else {

      let arr = new Array('a', 'e', 'i', 'o', 'u');
      let arrNew = [];
      for (let i = 0; i < strng.length; i++) {
         for (let j = 0; j < strng.length; j++) {
            if (strng[i] == arr[j]) {
               arrNew[i] = strng[i];
            }
         }
      }
      let result = arrNew.toReversed();
      if (result == '')
         document.getElementById("answer").innerHTML = "No vowels found";
      else
         document.getElementById("answer").innerHTML = "Reversed string is  " + result.join("");
   }
}