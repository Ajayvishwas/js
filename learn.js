let x = prompt("Enter the number");
let rev= 0; let original = x;
while(x!=0)
{
    let r= x%10;
    rev=rev*10+r;
    x=Math.floor(x/10);
}
if(rev==original)
{
   document.getElementById("pal").innerHTML ="palindrome" + rev;
}
else{

    document.getElementById("pal").innerHTML ="Not a palindrome" + rev;
}