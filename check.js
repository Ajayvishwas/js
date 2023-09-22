let p =new Promise((resolve, reject) => {
    let emp={
        name:"ajay",
        company:"hightech",
        address: "delhi",
        ctc: 20000
    };
    setTimeout(() => {
        if (emp.ctc>=50000) {
            resolve("Tax payable"+ emp.ctc);
        } else {
            reject("Tax not payable",emp.ctc);
        }
    }, 2000);
});
p.then((message)=>{
    console.log("resolved");
})
.catch((message)=>{
    console.log("rejected:"+message)
})