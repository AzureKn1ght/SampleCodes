//Date flipper (using string functions)
//Convert dd-mm-yy to yy-mm-dd
function flipper(input)
{ 
  let dd = input.slice(0, 2);
  let mm = input.slice(3, 5);
  let yy = input.slice(6);

  return yy + "-" + mm + "-" + dd;
}


test = flipper("09-02-89");
console.log(test);