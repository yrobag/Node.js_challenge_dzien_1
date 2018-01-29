const arguments = process.argv.slice(2);


arguments.forEach(argument => {
    setTimeout(() => console.log(argument), argument*1000)
});