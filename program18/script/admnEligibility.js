function admn() {
   let num;
   maths = document.getElementById("maths").value;
   phy = document.getElementById("phy").value;
   chem = document.getElementById("chem").value;
   if ((maths.charAt(0) == " ") || (maths == "") || (isNaN(maths)) || (phy.charAt(0) == " ") || (phy == "") || (isNaN(phy)) || (chem.charAt(0) == " ") || (chem == "") || (isNaN(chem))) {
      alert("Invalid Input!");
   } else {
      let m = parseInt(maths);
      let p = parseInt(phy);
      let c = parseInt(chem);
      let tot = 0,
         totmp = 0;
      tot = m + p + c;
      totmp = m + p;
      if (m >= 65)
         if (p >= 55)
            if (c >= 50)
               if ((tot >= 190) || (totmp >= 140))
                  document.getElementById("answer").innerHTML = "Candidate is eligible for admission";
               else
                  document.getElementById("answer").innerHTML = "Candidate is not eligible for admission";
      else
         document.getElementById("answer").innerHTML = "Candidate is not eligible for admission";
      else

         document.getElementById("answer").innerHTML = "Candidate is not eligible for admission";
      else
         document.getElementById("answer").innerHTML = "Candidate is not eligible for admission";

   }
}