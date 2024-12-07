let map = new Map();
map.set("Liza", "1");
map.set("Dasha", "2");
alert(map.get("Liza"));
map.delete("Dasha");
alert(map.has("Dasha"));
for (let name of map ){
    alert(name);
}