function cube() {
   let len, rad, ht;
   len = document.getElementById("len").value;
   length1 = len.trim();
   if (length1 == "") {
      alert("Input valid number!");
   } else if (isNaN(length1)) {
      alert("Invalid input!");
   } else {
      length = parseInt(length1);
      let lateralSurfaceArea, surfaceArea, volume;
      surfaceArea = 6 * length * length;
      volume = length * length * length;
      lateralSurfaceArea = 4 * length * length;

      document.write("Lateral Surface area of cone = " + lateralSurfaceArea + "<br>");
      document.write("Surface Area of cone = " + surfaceArea + "<br>");
      document.write("Volume of cone = " + volume + "<br>");
   }
}