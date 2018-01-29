const entry = [
    {words: "Node.js", time: 4},
    {words: "się", time: 1},
    {words: "Witam", time: 0},
    {words: "i korzystam", time: 6},
    {words: "w konsoli", time: 5},
    {words: "z funkcji czasu!", time: 7},
    {words: "z", time: 2},
    {words: "programem", time: 3},
];

entry.forEach(part => {
   setTimeout(() => console.log(part.words), part.time*1000)
});