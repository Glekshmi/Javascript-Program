function count() {
   let strng;
   strng = document.getElementById("strng").value;
   strng = strng.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + strng.match(check);
   if ((count != "1") || (strng == "")) {
      alert("invalid input!!");
   } else {


      let vCount = 0,
         cCount = 0;
      for (let i = 0; i < strng.length; i++) {
         if (strng[i] == 'a' || strng[i] == 'e' || strng[i] == 'i' || strng[i] == 'o' || strng[i] == 'u')
            vCount++;
         else
            cCount++;
      }
      document.getElementById("answer1").innerHTML = "vowels count " + vCount;
      document.getElementById("answer2").innerHTML = "consonants count" + cCount;
   }
}