function compoundInterest() {
   let principal, rate, year;
   principal = document.getElementById("amount").value;
   rate = document.getElementById("interest").value;
   year = document.getElementById("year").value;
   if ((principal.charAt(0) == " ") || (principal == "") || (isNaN(principal)) || (rate.charAt(0) == " ") || (rate == "") || (isNaN(rate)) || (year.charAt(0) == " ") || (year == "") || (isNaN(year))) {
      alert("Invalid Input!");
   } else {
      let amount = 0,
         compoundInterest = 0;
      cPrincipal = parseInt(principal);
      cRate = parseInt(rate);
      cYear = parseInt(year);
      amount = principal * (Math.pow((1 + rate / 100), year));
      compoundInterest = amount - principal;
      document.getElementById("compoundInterest").value = compoundInterest;
   }
}