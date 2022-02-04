// if (4 === 3) {
//     console.log('OK!');
// } else {
//     console.log('Error!');
// }

// const num = 50;

// if (num < 40) {
//     console.log('Error');
// } else if (num > 30) {
//     console.log('oK!');
// }

// (num === 50) ? console.log('oK!'): console.log('Error');


// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно!');
//         break;
//     case 100:
//         console.log('Неверно!');
//         break;
//     case 501:
//         console.log('OK!');
//         break;
//     default:
//         console.log('НЕ сегодня!');
//         break;
// }


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 0; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);

// }
// let i = 0;
// while (i < 2) {
//     i++;
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         i--;
//     }
// };


// let i = 0;

// do {
//     i++;
//     const a = prompt('Один из последних просмотренных фильмов?'),
//         b = prompt('На сколько оцените его?');

//     if (a != null && b != null && a != '' && b != '' & a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         i--;
//     }
// }
// while (i < 2);

// function showFirstMassage(a = "hello ",
//     b = "world") {
//     console.log(a + b);
//     let num = 20;
//     console.log(num);
// }

// showFirstMassage();

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 10));
// console.log(calc(1, 2));
// console.log(calc(2, 213));
// console.log(calc(1, 123));
// console.log(calc(7, 53));

// function ret(){
//     let num = 50;


//     return num;
// }

// const anotherNum = ret(); 
// console.log (anotherNum);

// const logger = function(){
//   console.log('Hello');  
// };
// logger();  // нельзя обращаться до обьвления к Logger

// const calc = (a, b) => a + b;

// const str = "test";
// const arr = [1, 2, 4];
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let fruit = 'Someq fruiqt sa';

// console.log(fruit.indexOf('q', 'q'));


// const logg = 'Hello World';
// console.log(logg.slice(6, 10));
// console.log(logg.substring(-6, 10));
// console.log(logg.substr(1, 2));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// let name = "John";

// function seyHi() {
//     alert("Hi, " + name);
// }
// name = "Pate";

// seyHi();
// let name = 'PAte';

// function makeWorker() {

//     return function() {
//         alert(name);
//     };
// }
// name = 'John';
// let work = makeWorker();

// work();


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Вы посмотрели очень мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы класический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Error - Сколько фильмов');
    }
}
// detectPersonalLevel();

console.log(personalMovieDB);

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genres
    }
}

writeYourGenres();