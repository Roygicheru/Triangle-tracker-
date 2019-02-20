

 function triangle(){
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("c").value);

  var sides = [a,b,c];        

  if (sides[0] + sides[1] <= sides[2] || sides[0] + sides[2] <= sides[1] || sides[1] + sides[2] <= sides[0]){

     document.getElementById("answer").innerHTML = "A triangle can not be formed from these sides.";
  }
    else if (sides[0]===sides[1] && sides[1]===sides[2] && sides[0]===sides[2]){

      document.getElementById("answer").innerHTML = "This is an equilateral triangle. ";
    }
     else if (sides[0]===sides[1]||sides[0]===sides[2]||sides[1]===sides[2]) {
      // return "isosceles";
      document.getElementById("answer").innerHTML = "This is an isoceles triangle. ";
    }
    else if(sides[0]+sides[1]>sides[2]||sides[1]+sides[2]>sides[0]||sides[0]+sides[2]>sides[1]){
      // return "scalene";
       document.getElementById("answer").innerHTML = "This is a scalene triangle. ";
    } else {

      document.getElementById("answer").innerHTML = "invalid entry.";
  }

};










































//
//
//  function triangle(){
//   var a = parseInt(document.getElementById("a").value);
//   var b = parseInt(document.getElementById("b").value);
//   var c = parseInt(document.getElementById("c").value);
//
//   var sides=[a,b,c];
//
//   if (sides[0] + sides[1] <= sides[2] || sides[0] + sides[2] <= sides[1] || sides[1] + sides[2] <= sides[0]){
//     alert("A triangle can not be formed from these sides.");
//   }
//     else if (sides[0]===sides[1] && sides[1]===sides[2] && sides[0]===sides[2]){
//       alert("Thid is an equilateral triangle");
//     }
//      else if (sides[0]===sides[1]||sides[0]===sides[2]||sides[1]===sides[2]) {
//       // return "isosceles";
//       alert("This is an isoceles triangle");
//     }
//     else if(sides[0]+sides[1]>sides[2]||sides[1]+sides[2]>sides[0]||sides[0]+sides[2]>sides[1]){
//       // return "scalene";
//       alert("This is a scalene triangle");
//     } else {
//     alert("invalid entry.");
//   }
// }
