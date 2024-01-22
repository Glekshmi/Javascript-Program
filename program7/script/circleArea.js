function circleArea() {
   let radius;
   radius = document.getElementById("radius").value;
   if ((radius.charAt(0) == " ") || (radius == "") || (isNaN(radius))) {
      alert("Invalid Input!");
   } else {
      let area = 0;
      const pi = 3.14;
      r = parseInt(radius);
      area = pi * r * r;
      document.getElementById("answer").value = area;
   }
}