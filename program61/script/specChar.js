function specChar() {
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
      let length1 = string.length;
      let str = [];
      let pos;
      str = string;
      for (let i = 0; i < length1; i++) {
         if (str[i] == key){
	  document.getElementById("answer").innerHTML = "index of " + key + " : " + i; 
	  break;   
	}
         else{
            document.getElementById("answer").innerHTML = "character not found";
	  }
	}  
   }
}