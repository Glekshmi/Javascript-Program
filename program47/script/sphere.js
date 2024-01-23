function sphere() {
   let radius;
   radius = document.getElementById("rad").value;
   radius = radius.trim();
   if (radius == "") {
      alert("Input valid number!");
   } else if ((isNaN(radius))) {
      alert("Invalid input!");
   } else {
      radius = parseInt(radius);
      const pi = 3.14;
      let surfaceArea, volume;

      surfaceArea = 4 * pi * radius * radius;
      volume = 4 * pi * radius * radius * radius;
      document.write("Surface Area of sphere = " + surfaceArea + "<br>");
      document.write("Volume of sphere = " + volume + "<br>");
   }
}