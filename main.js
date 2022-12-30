


// let number = +prompt(' Введите число')
// let day = +prompt('Возведите в степень')
// let answer = 1;
// let a = 0;
// let b = 10;

// let x;

// while (b < a) {
//     console.log('Есть');
//     a++;
// }

//Первое задание//
// for (let i = 0; i < day; i++) {

//     answer = answer * number
// }
// console.log(answer);

//Второе задание//




do {
    var n = +prompt('Введите максимальное количество ступенек')
} while (isNaN(n) || n == 0);

do {
    var symvol = prompt('Введите символы отступов')
} while (symvol == '');

do {
    var finS = prompt('Введите конечный символ')
} while (finS == '');



for (let i = 0; i < n; i++) {
    finS = i == 0 ? finS : finS + symvol
    console.log(finS);
}













