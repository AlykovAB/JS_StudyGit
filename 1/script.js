let options = {
    width: 1024,
    height: 1024,
    name:"test"
};

console.log(options.name);
options.flag = true;
options.color = {
    border: "black",
    bg: "red"
};

delete options.flag;

console.log(options.color);
console.log(options);

for (let key in options) {
    console.log("Свойство: "+key + ", Значение:"+ options[key]);
}
console.log(Object.keys(options).length);

