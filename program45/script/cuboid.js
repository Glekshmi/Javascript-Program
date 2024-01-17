function cuboid() {
   let length, width, height, breadth;
   length = document.getElementById("len").value;
   width = document.getElementById("wid").value;
   height = document.getElementById("ht").value;
   breadth = document.getElementById("br").value;
   length = length.trim();
   width = width.trim();
   height = height.trim();
   breadth = breadth.trim();
   if ((length == "") || (width == "") || (height == "") || (breadth == "")) {
      alert("Input valid number!");
   } else if ((isNaN(length)) || (isNaN(width)) || (isNaN(height)) || (isNaN(breadth))) {
      alert("Invalid input!");
   } else {
      length = parseInt(length);
      width = parseInt(width);
      height = parseInt(height);
      breadth = parseInt(breadth);
      let lateralSurfaceArea, surfaceArea, volume;
      surfaceArea = 2 * ((length * width) + (length * height) + (width * height));
      volume = length * breadth * height;
      lateralSurfaceArea = 2 * height * (length + width);

      document.write("Lateral Surface area of cone = " + lateralSurfaceArea + "<br>");
      document.write("Surface Area of cone = " + surfaceArea + "<br>");
      document.write("Volume of cone = " + volume + "<br>");
   }
}