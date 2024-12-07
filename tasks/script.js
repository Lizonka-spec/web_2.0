// let map = new Map();
// map.set("Liza", "1");
// map.set("Dasha", "2");
// alert(map.get("Liza"));
// map.delete("Dasha");
// alert(map.has("Dasha"));
// for (let name of map ){
//     alert(name);
// }

let set = new Set();
set.add("Лиза");
set.add("Саша");
set.add("Даша");
set.delete("Лиза");
alert(set.has("Саша"));
console.log(set);
set.forEach((element, elementAgain, set) => {
   console.log(element);
});