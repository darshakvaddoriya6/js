const marvelHeros = ["spiderman", "ironman", "thor"]
const dcHeros = ["batman", "flash", "superman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros[4]);

const allNewHeros = [...marvelHeros, ...dcHeros]

// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11, 12, [4, 5, 6]]]

const realAnotherArray= anotherArray.flat(Infinity)
// console.log(realAnotherArray);


// console.log(Array.isArray("darshak"));
// console.log(Array.from("darshak"));


const score1 = 100
const score2 = 200
const score3 = 300

// console.log(Array.of(score1,score2,score3));
