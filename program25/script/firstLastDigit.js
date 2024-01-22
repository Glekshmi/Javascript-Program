function firstLastDigit() {
   let number;
   number = document.getElementById("num").value;
   if ((number.charAt(0) == " ") || (number == "") || (isNaN(number))) {
      alert("Invalid Input!");
   } else {
      number = parseInt(number);
      let firstDigit = parseInt(number / 100);
      let lastDigit  = number % 10;
      document.write("FirstDigit ="+firstDigit+ "<br>"+"LastDigit ="+lastDigit);
   }
}