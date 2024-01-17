function cylinder() {
   let height, radius;
   height = document.getElementById("ht").value;
   radius = document.getElementById("rad").value;
   height = height.trim();
   radius = radius.trim();
   if ((height == "") || (radius == "")) {
      alert("Input valid number!");
   } else if ((isNaN(height)) || (isNaN(radius))) {
      alert("Invalid input!");
   } else {
      height = parseInt(height);
      radius = parseInt(radius);
      const pi = 3.14;
      let surfaceAreaTop, lateralSurfaceArea, surfaceArea, volume;

      surfaceAreaTop = pi * radius * radius;
      volume = surfaceAreaTop * height;
      lateralSurfaceArea = 2 * pi * radius * height;
      surfaceArea = 2 * surfaceAreaTop + lateralSurfaceArea;
      document.write("Top or Bottom Surface area of cylinder = " + surfaceAreaTop + "<br>");
      document.write("Lateral Surface area of cylinder = " + lateralSurfaceArea + "<br>");
      document.write("Surface Area of cylinder = " + surfaceArea + "<br>");
      document.write("Volume of cylinder = " + volume + "<br>");

   }
}