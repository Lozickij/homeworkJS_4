// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:

// for (let num = 0; num <= 11; num++) {
//     if (num == 0) {
//         console.log(`${num} – это ноль;`);
//     } else if (num == 1 || num%3 == 0) {
//         console.log(`${num} – нечетное число;`);
//     } else if (num%2 == 0) {
//         console.log(`${num} – четное число;`);
//     } 
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 2);
// console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, 
// и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const arr = [];
// let size = 5;
// let sum = 0;
// // let min = arr[0];
// let count = 0;
// for (let i = 0; i < size; i++) {
//     arr.push(Math.floor(Math.random()*10));
//     console.log(arr[i]); 
//     sum += arr[i];
//    // if (min > arr[i]) min = arr[i];      //Не смог понять, почему undefined? Объявлял везде ...
//     if (arr[i] == 3) count++; 
// }

// function getMinValue(arr){
//     let min = arr[0];
//     for (let i = 0; i < size; i++) {
//         if (min > arr[i]) min = arr[i];
//     }
//     return min;
// }

// let min = getMinValue(arr);

// // let min = Math.min.apply(null, arr);

// console.log(min);
// console.log(count);
// console.log(sum);

//**Необходимо вывести горку в консоль (используя цикл for), как показано 
//на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

let size = 20;
let element = '+';
console.log(element);
for (let i = 0; i < size; i++) {
    element = element + '+';
    console.log(element);
}