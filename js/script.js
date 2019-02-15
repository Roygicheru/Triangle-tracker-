

 function triangle(){
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);
  var sides=[a,b,c];
  if (a <= (b + c) && b <= (c + a) && c <= (a + b) ){
    if (a === b && b === c) {
      alert("equilateral");

     else if (a=== b || a === c || c === b) {
      // return "isosceles";
      alert("isoceles");
    }
    else( a + b > c && a + b > c && b + c > a){
      // return "scalene";
      alert("scalene");
    }
  } else {
    alert("A triangle can not be formed from these sides.");
  }
};
