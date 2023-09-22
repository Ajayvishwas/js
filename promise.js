let p= new Promise( (resolve, reject)=>{
    let age=19;
    if(age>=18)
    {
        resolve("Eligible for voting"+ age);
    }
    else
    
        reject("Failed:"+(age));
});
p.then((message)=>{
    console.log(".then executed,message");
})
.catch((message)=>{
    console.log("rejceted:"+message)
})
