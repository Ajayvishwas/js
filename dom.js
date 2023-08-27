// id to id elements copy

let a =document.getElementById("front");

console.log(a);

let b = a.getElementsByTagName("h1");
console.log(b);

// tag name to id

let x = document.getElementById("heading").innerHTML =b[2].innerHTML;

console.log(x);