//bai 1 
{
let myColor = ["Red", "Green", "White", "Black"];
let result = myColor.join(" ");
console.log(result);
}
//bai 2 
{
let str = "025468" ;
let result = [str[0]];

for (let i = 1; i < str.length; i++) {

    if (
        Number(str[i - 1]) % 2 === 0 &&
        Number(str[i]) % 2 === 0
    ) {
        result.push("-");
    }

    result.push(str[i]);
}

console.log(result.join(""));
}
//bai 3
{
let str = "The Quick Brown Fox";
let result = [];
for (let char of str) {
    if (char === char.toUpperCase()) {
        result.push(char.toLowerCase());
    } else {
        result.push(char.toUpperCase());
    }
}
console.log(result.join(""));
}