function call(a,callback)
{
 console.log("this is callback");
    return callback;
};

function add(a1, b1)
{
    return a1+b1;
};
function sub(a2, b2)
{
  return a2-b2;

};

let res = call("this is call back", add(1,3));
let ressub = call("this is call back", sub(1,3));

console.log(res);
console.log(ressub);
