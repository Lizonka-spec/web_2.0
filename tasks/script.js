//1
// let user = {
//     name: "John",
//     surname: "Smith",
// };
// user.name = ("Pete");
// delete user.name;

//2
function isEmpty(obj){
    for ( let key in obj){
        return false
    }
 return true
}
    
// 3
// let salaries = { john: 100, Ann: 160, Pete: 130 };
// let sum = (salaries.john + salaries.Pete + salaries.Ann);
// alert(sum);