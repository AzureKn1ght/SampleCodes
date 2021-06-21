var names = ["James", "Jack", "Flora", "Mikhil"]; //Given Array

//Line by line printer function
var print = (text) => {
  let node = document.createElement("P"); 
  let textnode = document.createTextNode(text); 
  node.appendChild(textnode); 
  document.getElementById("displayArea").appendChild(node); 
};


names.forEach((item) => {
  let name = item;
  let len = item.length;
  print(`${name} has ${len} characters.`);
});