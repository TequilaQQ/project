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

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

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

if (personalMovieDB.count < 10) {
    console.log('Вы посмотрели очень мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы класический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Error - Сколько фильмов');
}


console.log(personalMovieDB);


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