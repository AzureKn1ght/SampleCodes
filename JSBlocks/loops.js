var banks = ["DBS", "HSBC", "OCBC", "UOB"]; //Array
/* //OLD WAY
for (i=0; i<banks.length; i++) {
    console.log(banks[i]);
  }
*/

//new way using for each and CallBackFunction
let myFunction = function (
  item,
  index //index is actually optional, only index necessary
) {
  //iterate through the listof items
  console.log(`${item} is at index ${index}`);
};
banks.forEach(myFunction); //forEach takes a CallBackFunction
//forEach will pass the item and index to the function

//Or just combine all into one!
banks.forEach(function (item, index) {
  // LOOP the function
  console.log(`${item} is at index ${index}`);
});

//Or just use arrow function style!
banks.forEach((item, index) => {
  // arrow function
  console.log(`${item} is at index ${index}`);
});

//using the last parameter
banks.forEach(function (item, index, arr) {
  console.log("Using Array Index");
  console.log(arr[index]);
  //arr[index] = "AAA";
});
