//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calculateRectangleArea(a, b) {
    return a * b;
}
let area = calculateRectangleArea(5, 10);
console.log(`Площа прямокутника: ${area}`);


//- створити функцію яка обчислює та повертає площу кола з радіусом r
function calculateCircleArea(r) {
    return Math.PI * Math.pow(r, 2); // Формула: π * r^2
}
let area = calculateCircleArea(5);
console.log(`Площа кола: ${area}`);

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calculateCylinderArea(r, h) {
    return 2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * h;
}
let area = calculateCylinderArea(5, 10);
console.log(`Площа циліндра: ${area}`);

//- створити функцію яка приймає масив та виводить кожен його елемент
function printArrayElements(array) {
    for (let element of array) {
        console.log(element);
    }
}
let exampleArray = [1, 'hello', true, {name: 'John'}, [10, 20]];
printArrayElements(exampleArray);

//- створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}
createParagraph("Це текст у параграфі.");


//- створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function createList(text) {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
createList("текст для всіх елементів li");


//- створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function createListWithItems(text, count) {
    document.write('<ul>');
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>');
}
createListWithItems("текст для елементів li", 5);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
function createListFromArray(array) {
    document.write('<ul>');
    for (let element of array) {
        document.write(`<li>${element}</li>`);
    }
    document.write('</ul>');
}
let exampleArray1 = [1, 'hello', true, 42, 'world', false];
createListFromArray(exampleArray1);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function displayObjects(array) {
    for (let obj of array) {
        document.write(`
            <div>
                <p><strong>ID:</strong> ${obj.id}</p>
                <p><strong>Name:</strong> ${obj.name}</p>
                <p><strong>Age:</strong> ${obj.age}</p>
            </div>
            <hr>
        `);
    }
}
let users = [
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Jane', age: 30},
    {id: 3, name: 'Smith', age: 22}
];
displayObjects(users);

//- створити функцію яка повертає найменьше число з масиву
function findMinNumber(array) {
    if (array.length === 0) {
        return null;
    }
    let min = array[0];
    for (let num of array) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
let numbers = [10, 3, -5, 7, 0, 2];
let minNumber = findMinNumber(numbers);
console.log(`Найменше число в масиві: ${minNumber}`);

//- створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}
let result = sum([1, 2, 10]);
console.log(`Сума чисел у масиві: ${result}`); // Виведе: Сума чисел у масиві: 13

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
let array = [1, 2, 3, 4, 5]
console.log("swap:", array);

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchangeRate = currencyValues[exchangeCurrency]
    return sumUAH / exchangeRate;
}
let currencyValues = {
    USD: 38.5,
    EUR: 40.2,
    GBP: 45.0
};
let sumUAH = 3850;
let exchangeCurrency = "USD";
let exchangedAmount = exchange(sumUAH, currencyValues, exchangeCurrency);
    console.log(`Сума у ${exchangeCurrency}: ${exchangedAmount}`);
