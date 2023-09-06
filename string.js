let str="Hello welcome to JS";

size = str.length; //check string size starts from 1
console.log(size);

for(let i=0;i<str.length;i++)
{
    console.log(str[i]); // for print complete string using iteration
}

// split()--> it converts the string into array

let splt = str.split();

/*for(let i=0;i<=splt.length;i++)
{
    console.log(splt[i]);
}*/
console.log(splt);

//Join()  method returns an array as a string.does not change the original array.

let jn= splt.join('')
console.log(jn);

// slice(start, end(not included))

let sl =str.slice(3,7)

console.log(sl);

// substring(start, end)) in starting argument -ve numbe(r considered as 0

let sub= str.substring(-3,7)
console.log(sub);

// substr(start, length)

let sbt=str.substr(2,4);
console.log(sbt);

//Repalce - only change in first found match

let s="HTML,JS,CSS,JS";
let news=s.replace("JS","Javascript");
console.log(news);

let new1 =s.replaceAll("JS","Javascript"); // ReplaceAll() change all match element in string
console.log(new1);

// string searching

//1.indexof()--> postion

let str1= "Hello Java script";

let index = str1.indexOf("Java");
console.log(index);

//2.lastindexof()

let last= str1.lastIndexOf("script");
console.log(last);

//3. search()--> returns the position of the string

let str2="Hello Javascript and DP";

let pos = str2.search("s");
console.log(pos);

let mt=str2.match("and");// tells index, input from. groups
console.log(mt); 
console.log(mt[0]);
console.log(mt.index);
console.log(mt.input);
console.log(mt.groups);
console.log(mt.length);

//4. includes()--> it return true if it is present in the string otherwise false

let an=str2.includes("and");
console.log(typeof(an), an);

//5.Matchall()--> iterator

//6.startwith()--> check whether string is starting from a particular character or not return true or false


let sr="This is a string method";
let verify=sr.startsWith("is");
console.log(verify);

// 7. endswith()--> 

let sr1="This is a string method";
let verify1=sr1.endsWith("string");
console.log(verify1);