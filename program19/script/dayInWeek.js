function day() {
   let day;
   day = document.getElementById("day").value;
   if ((day.charAt(0) == " ") || (day == "") || (isNaN(day))) {
      alert("Invalid Input!");
   } else {
      let d = parseInt(day);
      let days;
      switch (d) {
         case 1:
            days = "Sunday";
            break;
         case 2:
            days = "Monday";
            break;
         case 3:
            days = "Tuesday";
            break;
         case 4:
            days = "Wednesday";
            break;
         case 5:
            days = "Thursday";
            break;
         case 6:
            days = "Friday";
            break;
         case 7:
            days = "Saturday";
            break;
         default:
            days = "Invalid Choice";
      }
      document.getElementById("answer").innerHTML = days;
   }
}