// for for array using length
var myArray = ["A", "B", "C"];
for (var i = 0; i < myArray.length; i++)
{
    console.log("The member of myArray in index " + i + " is " + myArray[i]);
}

//while loop
var i = 99;
while (i > 0)
{
    console.log(i + " bottles of beer on the wall");
    i -= 1;
}

//break and continue statements
//The break statement allows to stop the execution of a loop. 
//For example, we can create a loop that loops forever using while(true) 
//and use the break statement to break inside the loop 
//instead by checking that a certain condition was met.

var i = 99;
while (true)
{
    console.log(i + " bottles of beer on the wall");
    i -= 1;
    if (i == 0)
    {
        break;
    }
}
//The continue statement skips the rest of the loop and jumps back to the beginning of the loop. 
//For example, if we would want to print only odd numbers using a for statement, we can do the following:

for (var i = 0; i < 100; i++)
{
    // check that the number is even
    if (i % 2 == 0)
    {
         continue;
    }
    // if we got here, then i is odd.
    console.log(i + " is an odd number.");
}