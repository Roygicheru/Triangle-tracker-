

 function triangle(){
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("c").value);
  var result = [];
  var sides = [a,b,c];

  if (sides[0] + sides[1] <= sides[2] || sides[0] + sides[2] <= sides[1] || sides[1] + sides[2] <= sides[0]){
     result = "A triangle can not be formed from these sides.";
  }
    else if (sides[0]===sides[1] && sides[1]===sides[2] && sides[0]===sides[2]){
      result = "Thid is an equilateral triangle";
    }
     else if (sides[0]===sides[1]||sides[0]===sides[2]||sides[1]===sides[2]) {
      // return "isosceles";
      result = "This is an isoceles triangle";
    }
    else if(sides[0]+sides[1]>sides[2]||sides[1]+sides[2]>sides[0]||sides[0]+sides[2]>sides[1]){
      // return "scalene";
      result = "This is a scalene triangle";
    } else {
    result = "invalid entry.";
  }
   document.getElementById("answer").innerHTML = result;

};
