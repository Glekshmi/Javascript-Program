function check() {
   let strng;
   strng = document.getElementById("strng").value;
   strng = strng.trim();
   let check = /[0-9]/g;
   count = 1;
   count = count + strng.match(check);
   if ((count != "1") || (strng == "")) {
      alert("invalid input!!");
   } else {
      const stack = [];
      const open = '({[';
      const close = ')}]';
      for (let char of strng) {
         if (open.includes(char)) {
            stack.push(char);
         } else if (close.includes(char)) {
            const lastOpen = stack.pop();
            if ((char === ')' && lastOpen !== '(') || (char === '}' && lastOpen !== '{') || (char === ']' && lastOpen !== '[')) {
               document.getElementById("answer").innerHTML = "is not valid";
            }
         }
      }
      if (stack.length === 0)
         document.getElementById("answer").innerHTML = " is  valid";
      else
         document.getElementById("answer").innerHTML = " is invalid";
   }
}