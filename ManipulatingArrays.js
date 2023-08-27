//Arrays can also function as a stack. 
//The push and pop methods insert and remove variables from the end of an array.
var myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
myStack.push(7);
console.log(myStack);

//Queues using shifting and unshifting
//The unshift and shift methods are similar to push and pop, 
//only they work from the beginning of the array. 
//We can use the push and shift methods consecutively to utilize an array as a queue.

var myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
console.log(myQueue);

console.log(myQueue.shift());
//console.log(myQueue.shift());
console.log(myQueue.shift());

var myArray = [1,2,3];
myArray.unshift(7); // add number at the begining
console.log(myArray); 

/*Splicing
Splicing arrays in JavaScript removes a certain part from an array to create a new array, 
made up from the part we took out. For example, 
if we wanted to remove the five numbers from the following array beginning from the 3rd index */

var myArray = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray.splice(3,7); // 3 is starts from 7 is range how many are pick to remove from an array


console.log(splice);        // will print out 3,4,5,6,7
console.log(myArray); 