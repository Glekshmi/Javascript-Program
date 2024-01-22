function countStr() {
   let strng;
   strng = document.getElementById("strng").value;
   strng = strng.trim();
   if ((strng == "")) {
      alert("invalid input!!");
   } else {

      let symbol = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
      let arr = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
      let symbolCount = 0,
         digitCount = 0,
         alphaCount = 0;
      for (let i = 0; i < strng.length; i++)
         if (symbol.test(strng[i]))
            symbolCount++;
      for (let j = 0; j < strng.length; j++)
         for (let k = 0; k < strng.length; k++)
            if (strng[j] == arr[k])
               digitCount++;
      for (let l = 0; l < strng.length; l++)
         if (((strng.charCodeAt(l) >= 65) && (strng.charCodeAt(l) <= 90)) || ((strng.charCodeAt(l) >= 97) && (strng.charCodeAt(l) <= 122)))
            alphaCount++;


      document.getElementById("answer1").innerHTML = "special symbol count " + symbolCount;
      document.getElementById("answer2").innerHTML = "digits count " + digitCount;
      document.getElementById("answer3").innerHTML = "alphabets count " + alphaCount;
   }
}