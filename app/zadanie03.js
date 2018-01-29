const arguments = process.argv.slice(2);

let sum = arguments.reduce((a,b) => Number(a) + Number(b), 0);
console.log(sum);