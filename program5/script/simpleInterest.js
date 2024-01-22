function simpleInterest() {
   let amount, interest, year;
   amount = document.getElementById("amount").value;
   interest = document.getElementById("interest").value;
   year = document.getElementById("year").value;
   if ((amount.charAt(0) == " ") || (amount == "") || (isNaN(amount)) || (interest.charAt(0) == " ") || (interest == "") || (isNaN(interest)) || (year.charAt(0) == " ") || (year == "") || (isNaN(year))) {
      alert("Invalid Input!");
   } else {
      let simpleIntr = 0;
      sAmount = parseInt(amount);
      sInterest = parseInt(interest);
      sYear = parseInt(year);
      simpleIntr = (sAmount * sInterest * sYear) / 100;
      document.getElementById("simpleIntr").value = simpleIntr;
   }
}