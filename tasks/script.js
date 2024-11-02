let obj = {
    width: "200",
    height: "300",
    title: "my object",
};
 function multiplyNumeric(obj){
    for (let key in obj){
            obj[key] *= 2;
    }
 }
 multiplyNumeric(obj);
 console.log(obj);
 