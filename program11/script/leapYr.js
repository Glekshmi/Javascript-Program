function leapYr() {
   let year;
   year = document.getElementById("year").value;
   if ((year.charAt(0) == " ") || (year == "") || (isNaN(year))) {
      alert("Invalid Input!");
   } else {
      let yr = parseInt(year);
      if ((yr % 4 == 0) && (yr % 100 != 0) || (yr % 400 == 0)) {
         document.getElementById("answer").innerHTML = "Leap year";
      } else {
         document.getElementById("answer").innerHTML = "Not a leap year";
      }
   }
}