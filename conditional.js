if (confirm("Are you John Smith?")) // confirm function works as prompt
{
    console.log("Hello John, how are you?");
} else {
    console.log("Then what is your name?");
}

var rank = "Commander";
switch(rank)
{
    case "Private":
    case "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}

