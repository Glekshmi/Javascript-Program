function cone() {
   let len, rad, ht;
   len = document.getElementById("len").value;
   rad = document.getElementById("rad").value;
   ht = document.getElementById("ht").value;
   length1 = len.trim();
   radius1 = rad.trim();
   height1 = ht.trim();
   if ((length1 == "") || (radius1 == "") || (height1 == "")) {
      alert("Input valid number!");
   } else if ((isNaN(length1)) || (isNaN(radius1)) || (isNaN(height1))) {
      alert("Invalid input!");
   } else {
      length = parseFloat(length1);
      radius = parseFloat(radius1);
      height = parseFloat(height1);
      const pi = 3.14;
      let lateralSurfaceArea, surfaceArea, volume;
      lateralSurfaceArea = pi * radius * length;
      surfaceArea = lateralSurfaceArea + pi * radius * radius;
      volume = 1 / 3 * (pi * radius * radius * height);

      document.write("Lateral Surface area of cone = " + Math.round(lateralSurfaceArea) + "<br>");
      document.write("Surface Area of cone = " + Math.round(surfaceArea) + "<br>");
      document.write("Volume of cone = " + Math.round(volume) + "<br>");
   }
}